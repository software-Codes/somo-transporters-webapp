import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
const COOLDOWN_MS = 60_000; // 60 seconds between submissions

export const useForm = () => {
  const [statusMessage, setStatusMessage] = useState<{ text: string; isError: boolean }>({
    text: "",
    isError: false,
  });
  const [loading, setLoading] = useState(false);
  const lastSubmitTime = useRef<number>(0);

  const formatMessageFromFormData = (data: Record<string, string>) => {
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
${data.safetyRequirements ? `- Safety Requirements: ${data.safetyRequirements}` : ""}
${data.requirements ? `\nADDITIONAL REQUIREMENTS:\n${data.requirements}` : ""}

CONTACT INFORMATION:
- Name: ${data.name}
- Email: ${data.email}
- Phone: ${data.phone}
${data.company ? `- Company: ${data.company}` : ""}
`;
  };

  const handleSubmit = async (e: React.FormEvent, formData: Record<string, string>) => {
    e.preventDefault();

    // Honeypot check — if filled, silently reject (bot)
    if (formData._honeypot) return;

    // Rate limiting — 60 second cooldown
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

    setLoading(true);

    try {
      const templateParams = {
        to_name: "Somo Transporters",
        from_name: formData.name,
        message: formatMessageFromFormData(formData),
        reply_to: formData.email,
        phone: formData.phone,
        company: formData.company || "Not specified",
        service_type: formData.serviceType,
        cargo_type: formData.cargoType,
        route: `${formData.origin} to ${formData.destination}`,
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      lastSubmitTime.current = Date.now();
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

  return { handleSubmit, statusMessage, loading };
};
