import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
const COOLDOWN_MS = 60_000;

export type DriverContactFormData = {
  fullName: string;
  email: string;
  phoneNumber: string;
  licenseNumber?: string;
  experienceYears?: string;
  vehicleType?: string;
  availability?: string;
  position?: string;
  message: string;
  _honeypot?: string;
};

export const useContactForm = () => {
  const [statusMessage, setStatusMessage] = useState<{ text: string; isError: boolean }>({
    text: "",
    isError: false,
  });
  const [loading, setLoading] = useState(false);
  const lastSubmitTime = useRef<number>(0);

  const formatContactMessage = (data: DriverContactFormData) => `
DRIVER APPLICATION:

CONTACT:
- Name: ${data.fullName}
- Email: ${data.email}
- Phone: ${data.phoneNumber}
- Position: ${data.position || "Driver Applicant"}

DRIVER DETAILS:
- License: ${data.licenseNumber || "Not provided"}
- Experience: ${data.experienceYears || "Not provided"} years
- Vehicle Type: ${data.vehicleType || "Not provided"}
- Availability: ${data.availability || "Not provided"}

MESSAGE:
${data.message}
`;

  const handleSubmit = async (formData: DriverContactFormData) => {
    // Honeypot check
    if (formData._honeypot) return false;

    // Rate limiting
    const now = Date.now();
    const elapsed = now - lastSubmitTime.current;
    if (lastSubmitTime.current && elapsed < COOLDOWN_MS) {
      const remaining = Math.ceil((COOLDOWN_MS - elapsed) / 1000);
      setStatusMessage({
        text: `Please wait ${remaining} seconds before submitting again.`,
        isError: true,
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatusMessage({ text: "Please enter a valid email address.", isError: true });
      return false;
    }

    const phoneRegex = /^[+\d\s()-]{7,20}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      setStatusMessage({ text: "Please enter a valid phone number.", isError: true });
      return false;
    }

    setLoading(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          to_name: "Somo Transporters",
          from_name: formData.fullName,
          message: formatContactMessage(formData),
          reply_to: formData.email,
          phone: formData.phoneNumber,
          position: formData.position || "Driver Applicant",
          license: formData.licenseNumber || "Not provided",
          experience: formData.experienceYears || "Not provided",
          vehicle_type: formData.vehicleType || "Not provided",
          availability: formData.availability || "Not provided",
        },
        PUBLIC_KEY
      );

      lastSubmitTime.current = Date.now();
      setStatusMessage({
        text: "Application submitted! We'll review and contact you within 24–48 hours.",
        isError: false,
      });
      return true;
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatusMessage({
        text: "Failed to submit. Please try again or contact us directly.",
        isError: true,
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  const resetStatus = () => setStatusMessage({ text: "", isError: false });

  return { handleSubmit, statusMessage, loading, resetStatus };
};
