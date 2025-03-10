// useContactForm.ts
import { useState } from "react";
import emailjs from "@emailjs/browser";

export type ContactFormData = {
  fullName: string;
  email: string;
  position: string;
  phoneNumber: string;
  message: string;
};

export const useContactForm = () => {
  const [statusMessage, setStatusMessage] = useState<{
    text: string;
    isError: boolean;
  }>({ text: "", isError: false });
  const [loading, setLoading] = useState(false);

  const formatContactMessage = (data: ContactFormData) => {
    return `
CONTACT FORM SUBMISSION DETAILS:

CONTACT INFORMATION:
- Name: ${data.fullName}
- Email: ${data.email}
- Position: ${data.position}
- Phone: ${data.phoneNumber}

MESSAGE:
${data.message}
`;
  };

  const handleSubmit = async (formData: ContactFormData) => {
    // Validate all fields
    const missingFields = Object.entries(formData)
      .filter(([_, value]) => !value)
      .map(([key]) => key);

    if (missingFields.length > 0) {
      setStatusMessage({
        text: `Please fill in all required fields: ${missingFields.join(", ")}`,
        isError: true,
      });
      return;
    }

    setLoading(true);

    try {
      const templateParams = {
        to_name: "Somo Transporters",
        from_name: formData.fullName,
        message: formatContactMessage(formData),
        reply_to: formData.email,
        phone: formData.phoneNumber,
        position: formData.position,
      };

      await emailjs.send(
        "service_b80f8da",
        "template_j36rv33",
        templateParams,
        "Xpygen7v6OZ70A8VH"
      );

      setStatusMessage({
        text: "Message sent successfully! We'll respond within 24 hours.",
        isError: false,
      });

      return true; // Indicate success for form reset
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
