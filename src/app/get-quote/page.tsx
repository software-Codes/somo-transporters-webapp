import Footer from "@/components/footer";
import GetQuotation from "@/components/get-quote";
import NavbarHeader from "@/components/navabar-header";
import React from "react";

const GetQuotationPage = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <NavbarHeader />
      <main>
        <GetQuotation />

      </main>
      <Footer />
    </div>
  );
};

export default GetQuotationPage;
