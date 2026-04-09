import type { Metadata } from "next";
import AboutUsPage from "@/components/about-us-page";
import NavbarHeader from "@/components/navabar-header";
import React from "react";

export const metadata: Metadata = {
  title: "About Us | Somo Transporters Ltd",
  description:
    "Learn about Somo Transporters Ltd — founded in 2006, East Africa's most trusted petroleum and dry cargo transporter. 50+ trucks, 96% operational efficiency, serving Kenya, Uganda, Tanzania, Rwanda & South Sudan.",
  alternates: {
    canonical: "https://www.somotransporter.co.ke/about",
  },
  openGraph: {
    title: "About Somo Transporters Ltd | East Africa Petroleum Transport",
    description:
      "Founded in 2006, Somo Transporters has grown into a regional logistics powerhouse with 50+ trucks and operations across East Africa.",
    url: "https://www.somotransporter.co.ke/about",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Somo Transporters Ltd",
  url: "https://www.somotransporter.co.ke/about",
  description:
    "Somo Transporters Ltd was founded in 2006 as a local Kenyan operator and has evolved into a regional logistics powerhouse covering Kenya, Uganda, South Sudan, Tanzania, Rwanda and DRC Congo.",
  mainEntity: {
    "@type": "Organization",
    name: "Somo Transporters Ltd",
    foundingDate: "2006",
    numberOfEmployees: { "@type": "QuantitativeValue", value: 50 },
    areaServed: ["Kenya", "Uganda", "Tanzania", "Rwanda", "South Sudan", "DRC Congo"],
  },
};

const Aboutpage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <div className="flex flex-col min-h-screen w-full bg-background">
        <NavbarHeader />
        <main>
          <AboutUsPage />
        </main>
      </div>
    </>
  );
};

export default Aboutpage;
