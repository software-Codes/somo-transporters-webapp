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

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <NavbarHeader />
      <main className="">
        {/* Your homepage content goes here */}
        <HeroProfile />
        <AboutHomeComponent />
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
  );
};

export default Page;
