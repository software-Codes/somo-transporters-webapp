import Footer from "@/components/footer";
import JoinUsComponent from "@/components/join-us-page";
import NavbarHeader from "@/components/navabar-header";
import React from "react";

const JoinUs = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <NavbarHeader />

      <main>
        <JoinUsComponent />
      </main>

      <Footer />
    </div>
  );
};

export default JoinUs;
