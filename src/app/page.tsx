import React from "react";
import NavbarHeader from "@/components/navabar-header";
import { Component } from "./components/chart-sample";
import HeroProfile from "@/components/hero-profile";
import AboutHomeComponent from "@/components/about-us-home";
import WhyChooseUs from "@/components/why-choose-us";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <NavbarHeader />
      <main className="">
        {/* Your homepage content goes here */}
        <HeroProfile />
        <AboutHomeComponent />
        <WhyChooseUs />
      </main>
    </div>
  );
};

export default Page;