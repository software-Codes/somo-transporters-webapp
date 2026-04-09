import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
const COOLDOWN_MS = 60_000;

export type ContactFormData = {
  fullName: string;
  email: string;
  position: string;
  phoneNumber: string;
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

  const formatContactMessage = (data: ContactFormData) => `
CONTACT FORM SUBMISSION:

- Name: ${data.fullName}
- Email: ${data.email}
- Position: ${data.position}
- Phone: ${data.phoneNumber}

MESSAGE:
${data.message}
`;

  const handleSubmit = async (formData: ContactFormData) => {
    // Honeypot check
    if (formData._honeypot) return;

    // Rate limiting
    const now = Date.now();
    const elapsed = now - lastSubmitTime.current;
    if (lastSubmitTime.current && elapsed < COOLDOWN_MS) {
      const remaining = Math.ceil((COOLDOWN_MS - elapsed) / 1000);
      setStatusMessage({
        text: `Please wait ${remaining} seconds before submitting again.`,
        isError: true,
      });
      return;
    }

    const missingFields = Object.entries(formData)
      .filter(([key, value]) => key !== "_honeypot" && !value)
      .map(([key]) => key);

    if (missingFields.length > 0) {
      setStatusMessage({
        text: `Please fill in all required fields.`,
        isError: true,
      });
      return;
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
          position: formData.position,
        },
        PUBLIC_KEY
      );

      lastSubmitTime.current = Date.now();
      setStatusMessage({
        text: "Message sent successfully! We'll respond within 24 hours.",
        isError: false,
      });
      return true;
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatusMessage({
        text: "Failed to send message. Please try again or contact us directly.",
        isError: true,
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { handleSubmit, statusMessage, loading };
};
