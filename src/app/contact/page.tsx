import type { Metadata } from "next";
import ContactUsMainComponent from "@/components/contact-us-page";
import Footer from "@/components/footer";
import NavbarHeader from "@/components/navabar-header";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us | Somo Transporters Ltd | Nakuru, Kenya",
  description:
    "Contact Somo Transporters Ltd for petroleum transport, LPG haulage and dry cargo logistics. Located on Nakuru-Nairobi Road. Call +254 725 718 871 or +254 721 327 440. Available Mon-Sat.",
  alternates: {
    canonical: "https://www.somotransporter.co.ke/contact",
  },
  openGraph: {
    title: "Contact Somo Transporters Ltd | Nakuru, Kenya",
    description:
      "Get in touch with East Africa's leading petroleum transporter. Call +254 725 718 871. Located on Nakuru-Nairobi Road, Pipeline next to Flamingo Lodge.",
    url: "https://www.somotransporter.co.ke/contact",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Somo Transporters Ltd",
  url: "https://www.somotransporter.co.ke/contact",
  mainEntity: {
    "@type": "Organization",
    name: "Somo Transporters Ltd",
    telephone: ["+254725718871", "+254721327440"],
    email: "somotransportersltd@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nakuru - Nairobi Road, Pipeline Next to Flamingo Lodge",
      addressLocality: "Nakuru",
      addressCountry: "KE",
    },
  },
};

const Contactpage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <div className="flex flex-col min-h-screen w-full bg-background">
        <NavbarHeader />
        <main>
          <ContactUsMainComponent />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contactpage;
