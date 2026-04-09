import type { Metadata } from "next";
import Footer from "@/components/footer";
import GetQuotation from "@/components/get-quote";
import NavbarHeader from "@/components/navabar-header";
import React from "react";

export const metadata: Metadata = {
  title: "Get a Free Quote | Petroleum & Cargo Transport | Somo Transporters",
  description:
    "Request a free personalized quotation for petroleum transport, LPG haulage or dry cargo logistics across East Africa. Fast response within 24 hours. Somo Transporters Ltd.",
  alternates: {
    canonical: "https://www.somotransporter.co.ke/get-quote",
  },
  openGraph: {
    title: "Get a Free Transport Quote | Somo Transporters Ltd",
    description:
      "Request a free quote for petroleum, LPG or dry cargo transport across East Africa. 50+ trucks, HSSE compliant, GPS tracked.",
    url: "https://www.somotransporter.co.ke/get-quote",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const quoteSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Request a Transport Quotation",
  url: "https://www.somotransporter.co.ke/get-quote",
  description: "Request a free personalized quotation for petroleum, LPG or dry cargo transport across East Africa.",
  potentialAction: {
    "@type": "RequestQuoteAction",
    target: "https://www.somotransporter.co.ke/get-quote",
  },
};

const GetQuotationPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(quoteSchema) }}
      />
      <div className="flex flex-col min-h-screen w-full bg-background">
        <NavbarHeader />
        <main>
          <GetQuotation />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default GetQuotationPage;
