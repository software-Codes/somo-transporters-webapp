import AboutUsPage from "@/components/about-us-page";
import NavbarHeader from "@/components/navabar-header";
import React from "react";

const Aboutpage = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <NavbarHeader />

      <main>
        <AboutUsPage />
      </main>
    </div>
  );
};

export default Aboutpage;
