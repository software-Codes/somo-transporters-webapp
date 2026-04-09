import type { Metadata } from "next";
import Footer from "@/components/footer";
import GalleryMainComponent from "@/components/gallery-main-components";
import NavbarHeader from "@/components/navabar-header";
import React from "react";

export const metadata: Metadata = {
  title: "Fleet Gallery | Somo Transporters Ltd | Petroleum Transport Kenya",
  description:
    "View Somo Transporters' fleet gallery — 50+ specialized petroleum tankers, LPG trucks and dry cargo vehicles operating across East Africa. See our operations in action.",
  alternates: {
    canonical: "https://www.somotransporter.co.ke/gallery",
  },
  openGraph: {
    title: "Fleet Gallery | Somo Transporters Ltd",
    description:
      "View our fleet of 50+ specialized petroleum tankers and cargo trucks operating across East Africa.",
    url: "https://www.somotransporter.co.ke/gallery",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const GalleryPage = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-background">
      <NavbarHeader />
      <main>
        <GalleryMainComponent />
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
