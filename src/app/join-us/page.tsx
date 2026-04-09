import type { Metadata } from "next";
import Footer from "@/components/footer";
import JoinUsComponent from "@/components/join-us-page";
import NavbarHeader from "@/components/navabar-header";
import React from "react";

export const metadata: Metadata = {
  title: "Join Our Team | Driver & Fleet Opportunities | Somo Transporters",
  description:
    "Join Somo Transporters Ltd — East Africa's leading petroleum transporter. Driver positions, fleet owner partnerships, competitive pay, HSSE training and 24/7 support. Apply now.",
  alternates: {
    canonical: "https://www.somotransporter.co.ke/join-us",
  },
  openGraph: {
    title: "Join Somo Transporters | Driver & Fleet Opportunities",
    description:
      "Join East Africa's premier logistics network. Competitive earnings, fleet expansion support, HSSE training and 24/7 operational assistance.",
    url: "https://www.somotransporter.co.ke/join-us",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Professional Driver",
  description:
    "Join Somo Transporters as a professional driver. Transport petroleum products and dry cargo across East Africa with competitive pay and full support.",
  hiringOrganization: {
    "@type": "Organization",
    name: "Somo Transporters Ltd",
    sameAs: "https://www.somotransporter.co.ke",
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nakuru",
      addressCountry: "KE",
    },
  },
  employmentType: "FULL_TIME",
  industry: "Transportation & Logistics",
};

const JoinUs = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
      <div className="flex flex-col min-h-screen w-full bg-background">
        <NavbarHeader />
        <main>
          <JoinUsComponent />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default JoinUs;
