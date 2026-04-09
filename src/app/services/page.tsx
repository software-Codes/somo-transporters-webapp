import type { Metadata } from "next";
import AllServices from "@/components/all-services";
import NavbarHeader from "@/components/navabar-header";
import React from "react";

export const metadata: Metadata = {
  title: "Our Services | Petroleum, LPG & Dry Cargo Transport | Somo Transporters",
  description:
    "Somo Transporters offers bulk petroleum transport, LPG transport, dry cargo solutions, HSSE compliance, logistics management and last-mile delivery across East Africa. 50+ specialized trucks, 96% operational efficiency.",
  alternates: {
    canonical: "https://www.somotransporter.co.ke/services",
  },
  openGraph: {
    title: "Petroleum, LPG & Cargo Transport Services | Somo Transporters Ltd",
    description:
      "Comprehensive logistics services: bulk petroleum, LPG, dry cargo, cross-border transport across East Africa. HSSE compliant with GPS tracking.",
    url: "https://www.somotransporter.co.ke/services",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Petroleum & Logistics Transport",
  provider: {
    "@type": "Organization",
    name: "Somo Transporters Ltd",
    url: "https://www.somotransporter.co.ke",
  },
  areaServed: ["Kenya", "Uganda", "Tanzania", "Rwanda", "South Sudan"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Transport Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bulk Petroleum Transport",
          description: "Cross-border haulage of bulk petroleum products with HSSE-compliant tankers and real-time GPS tracking",
          url: "https://www.somotransporter.co.ke/services/petroleum-transport",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "LPG Transport",
          description: "Safe handling of flammable gases with pressure-controlled tankers and certified drivers",
          url: "https://www.somotransporter.co.ke/services/lpg-transport",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dry Cargo Transport",
          description: "Bulk material transport with 30-ton payload capacity and weatherproof securing systems",
          url: "https://www.somotransporter.co.ke/services/dry-cargo",
        },
      },
    ],
  },
};

const ServicesPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <div className="bg-background">
        <NavbarHeader />
        <main>
          <AllServices />
        </main>
      </div>
    </>
  );
};

export default ServicesPage;
