// useForm.ts
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const useForm = () => {
  const [statusMessage, setStatusMessage] = useState<{
    text: string;
    isError: boolean;
  }>({ text: "", isError: false });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent, formData: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Format the data to match the EmailJS template
      const templateParams = {
        to_name: "Somo Transporters", // Recipient name (your company)
        from_name: formData.name, // Sender's name from the form
        message: formatMessageFromFormData(formData), // Format all form data into a structured message
        reply_to: formData.email, // Reply to the sender's email
        // Additional fields that might be useful
        phone: formData.phone,
        company: formData.company || "Not specified",
        service_type: formData.serviceType,
        cargo_type: formData.cargoType,
        route: `${formData.origin} to ${formData.destination}`,
      };

      await emailjs.send(
        "service_ak5633e",
        "template_kjlgm0t",
        templateParams,
        "CIntmA5Pmdt-ViNny"
      );

      setStatusMessage({
        text: "Quote request submitted successfully! We'll get back to you shortly.",
        isError: false,
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatusMessage({
        text: "Failed to submit request. Please try again or contact us directly.",
        isError: true,
      });
    } finally {
      setLoading(false);
    }
  };

  // Format the form data into a structured message
  const formatMessageFromFormData = (data: any) => {
    return `
QUOTATION REQUEST DETAILS:

SERVICE INFORMATION:
- Service Type: ${data.serviceType}
- Cargo Type: ${data.cargoType}
${data.weight ? `- Weight: ${data.weight}` : ""}
${data.volume ? `- Volume: ${data.volume}` : ""}

ROUTE INFORMATION:
- Origin: ${data.origin}
- Destination: ${data.destination}
${data.preferredDate ? `- Preferred Date: ${data.preferredDate}` : ""}
${
  data.safetyRequirements
    ? `- Safety Requirements: ${data.safetyRequirements}`
    : ""
}

${
  data.requirements
    ? `ADDITIONAL REQUIREMENTS:
${data.requirements}`
    : ""
}

CONTACT INFORMATION:
- Name: ${data.name}
- Email: ${data.email}
- Phone: ${data.phone}
${data.company ? `- Company: ${data.company}` : ""}
`;
  };

  return { handleSubmit, statusMessage, loading };
};
