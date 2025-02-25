import { useState } from "react";
import emailjs from "@emailjs/browser";

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
};

export const useContactForm = () => {
  const [statusMessage, setStatusMessage] = useState<{
    text: string;
    isError: boolean;
  }>({ text: "", isError: false });
  const [loading, setLoading] = useState(false);
  const formatContactMessage = (data: DriverContactFormData) => {
    return `DRIVER APPLICATION SUBMISSION DETAILS:
  
  CONTACT INFORMATION:
  - Name: ${data.fullName}
  - Email: ${data.email}
  - Phone: ${data.phoneNumber}
  - Position: ${data.position || "Driver Applicant"}
  
  DRIVER DETAILS:
  - License Number: ${data.licenseNumber || "Not provided"}
  - Experience: ${data.experienceYears || "Not provided"} years
  - Vehicle Type: ${data.vehicleType || "Not provided"}
  - Availability: ${data.availability || "Not provided"}
  
  MESSAGE:
  ${data.message}`;
  };

  const handleSubmit = async (formData: DriverContactFormData) => {
    // Required fields validation
    const requiredFields = ["fullName", "email", "phoneNumber"];
    const missingFields = requiredFields
      .filter((field) => !formData[field as keyof DriverContactFormData])
      .map((field) => field);

    // Driver-specific field validation (optional but recommended)
    const driverFields = [
      "licenseNumber",
      "experienceYears",
      "vehicleType",
      "availability",
    ];
    const recommendedFields = driverFields
      .filter((field) => !formData[field as keyof DriverContactFormData])
      .map((field) => field);

    if (missingFields.length > 0) {
      setStatusMessage({
        text: `Please fill in all required fields: ${missingFields.join(", ")}`,
        isError: true,
      });
      return false;
    }

    if (recommendedFields.length > 0) {
      // Warning but not blocking submission
      console.warn(
        `Some recommended fields are missing: ${recommendedFields.join(", ")}`
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatusMessage({
        text: "Please enter a valid email address",
        isError: true,
      });
      return false;
    }

    // Phone number validation (basic)
    const phoneRegex = /^[+\d\s()-]{7,20}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      setStatusMessage({
        text: "Please enter a valid phone number",
        isError: true,
      });
      return false;
    }

    setLoading(true);

    try {
      const templateParams = {
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
      };

      await emailjs.send(
        "service_9visxtk",
        "template_kblcfqh",
        templateParams,
        "_7Hah3gS_dWhNdudF"
      );

      setStatusMessage({
        text: "Application submitted successfully! We'll review your information and contact you within 24-48 hours.",
        isError: false,
      });

      return true; // Indicate success for form reset
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatusMessage({
        text: "Failed to submit application. Please try again or contact us directly at careers@somotransporters.com",
        isError: true,
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  const resetStatus = () => {
    setStatusMessage({ text: "", isError: false });
  };

  return { handleSubmit, statusMessage, loading, resetStatus };
};
