import React from "react";
import NavbarHeader from "@/components/navabar-header";
import { Component } from "./components/chart-sample";
import HeroProfile from "@/components/hero-profile";
import AboutHomeComponent from "@/components/about-us-home";
import WhyChooseUs from "@/components/why-choose-us";
import ClientsSlider from "@/components/client-slider";
import OurServices from "@/components/our-services";

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
      </main>
    </div>
  );
};

export default Page;
