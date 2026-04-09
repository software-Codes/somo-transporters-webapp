import type { Metadata } from "next";
import React from "react";
import NavbarHeader from "@/components/navabar-header";
import HeroProfile from "@/components/hero-profile";
import AboutHomeComponent from "@/components/about-us-home";
import WhyChooseUs from "@/components/why-choose-us";
import ClientsSlider from "@/components/client-slider";
import OurServices from "@/components/our-services";
import Impressed from "@/components/impressed";
import VehicleCrew from "@/components/register-vehicle";
import ContactCTA from "@/components/contact-cta";
import Footer from "@/components/footer";
import FeaturedGallery from "@/components/gallery-featured";
import AnimatedStats from "@/components/animated-stats";

export const metadata: Metadata = {
  title: "Somo Transporters Ltd | Petroleum & Logistics Transport East Africa",
  description:
    "Somo Transporters Ltd — East Africa's leading petroleum products transporter since 2006. Bulk petroleum, LPG & dry cargo transport across Kenya, Uganda, Tanzania, Rwanda & South Sudan. HSSE compliant with 50+ trucks.",
  alternates: {
    canonical: "https://www.somotransporter.co.ke",
  },
  openGraph: {
    title: "Somo Transporters Ltd | Petroleum & Logistics Transport East Africa",
    description:
      "East Africa's trusted petroleum products transporter since 2006. 50+ trucks, HSSE compliant, GPS tracked. Serving Kenya, Uganda, Tanzania, Rwanda & South Sudan.",
    url: "https://www.somotransporter.co.ke",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Somo Transporters Ltd",
  url: "https://www.somotransporter.co.ke",
  logo: "https://www.somotransporter.co.ke/favicon.ico",
  description:
    "East Africa's leading petroleum products transporter since 2006. Specializing in bulk petroleum, LPG, and dry cargo transport.",
  foundingDate: "2006",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nakuru - Nairobi Road, Pipeline Next to Flamingo Lodge",
    addressLocality: "Nakuru",
    addressCountry: "KE",
    postalCode: "43998",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+254-725-718-871",
      contactType: "customer service",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      telephone: "+254-721-327-440",
      contactType: "customer service",
      availableLanguage: "English",
    },
  ],
  email: "somotransportersltd@gmail.com",
  sameAs: [
    "https://www.facebook.com/share/18QsQoidbb/?mibextid=qi2Omg",
  ],
  areaServed: ["Kenya", "Uganda", "Tanzania", "Rwanda", "South Sudan", "DRC Congo"],
  serviceType: [
    "Petroleum Transport",
    "LPG Transport",
    "Dry Cargo Transport",
    "Cross-Border Logistics",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.somotransporter.co.ke/#business",
  name: "Somo Transporters Ltd",
  image: "https://www.somotransporter.co.ke/og-image.jpg",
  url: "https://www.somotransporter.co.ke",
  telephone: "+254725718871",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nakuru - Nairobi Road, Pipeline Next to Flamingo Lodge",
    addressLocality: "Nakuru",
    addressRegion: "Rift Valley",
    addressCountry: "KE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -0.4759505,
    longitude: 36.2888858,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  priceRange: "$$",
};

const Page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <div className="flex flex-col min-h-screen w-full bg-background">
        <NavbarHeader />
        <main>
          <HeroProfile />
          <AboutHomeComponent />
          <AnimatedStats />
          <WhyChooseUs />
          <ClientsSlider />
          <OurServices />
          <FeaturedGallery />
          <Impressed />
          <VehicleCrew />
          <ContactCTA />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Page;
