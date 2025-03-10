"use client";
import React from "react";
import { FaTachometerAlt, FaShieldAlt, FaUsers, FaMapMarkedAlt, FaGlobeAfrica, FaFileDownload } from "react-icons/fa";
import Footer from "./footer";
import Link from "next/link";
import { Gallery16 } from "@/assets/images/Gallery/gallery";
import Image from "next/image";
import LeadershipStructure from "./LeadershipStructure";

const AboutUsPage = () => {
  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = "/documents/Somo transporters profile.pdf";
    link.download = "Somo transporters profile.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const stats = [
    {
      icon: <FaTachometerAlt className="w-8 h-8" />,
      value: "96%",
      label: "Operational Efficiency",
      description: "Industry-leading asset utilization rate",
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      value: "15+",
      label: "Safety Certifications",
      description: "HSSE compliance achievements",
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      value: "50+",
      label: "Professional Staff",
      description: "Dedicated logistics experts",
    },
    {
      icon: <FaMapMarkedAlt className="w-8 h-8" />,
      value: "535km",
      label: "Daily Average",
      description: "Per truck performance metric",
    },
  ];

  const regions = [
    { name: "Kenya", icon: "🇰🇪" },
    { name: "Uganda", icon: "🇺🇬" },
    { name: "South Sudan", icon: "🇸🇸" },
    { name: "Tanzania", icon: "🇹🇿" },
    { name: "Rwanda", icon: "🇷🇼" },
    { name: "DRC Congo", icon: "🇨🇩" },
  ];

  return (
    <div className="w-full bg-white">
      {/* Floating Download Button */}
      <button
        onClick={handleDownload}
        className="fixed bottom-8 right-8 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-xl transition-all duration-300 group z-50"
        aria-label="Download company profile"
      >
        <FaFileDownload className="w-6 h-6" />
        <span className="absolute -right-2 top-1/2 -translate-y-1/2 translate-x-full bg-gray-800 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Download Profile
        </span>
      </button>

      {/* Our Story Section - Now the first content section */}
      <div className="max-w-7xl mx-auto px-4 py-16 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-[350px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src={Gallery16}
              alt="Company history"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              About <span className="text-orange-500">Somo Transporters</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Founded in 2006 as a local Kenyan operator, Somo Transporters has
              evolved into a regional logistics powerhouse. Our strategic
              expansion now covers key routes across{" "}
              <strong>Uganda, Kenya, South Sudan, Tanzania, and Rwanda</strong>.
            </p>

            {/* Primary Download Button */}
            <button
              onClick={handleDownload}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors duration-300 shadow-md w-full sm:w-auto justify-center"
            >
              <FaFileDownload className="w-5 h-5" />
              <span>Download Company Profile (PDF)</span>
            </button>

            {/* Regions Coverage */}
            <div className="bg-orange-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FaGlobeAfrica className="text-orange-600" />
                Regional Coverage
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {regions.map((region, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm"
                  >
                    <span className="text-2xl">{region.icon}</span>
                    <span className="font-medium text-black">{region.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-gradient-to-br from-orange-50 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl text-black md:text-4xl font-bold text-center mb-12">
            Our Milestones
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="text-orange-500 bg-orange-50 p-4 rounded-full">
                    {stat.icon}
                  </div>
                  <h3 className="text-4xl font-bold text-gray-800">
                    {stat.value}
                  </h3>
                  <p className="text-lg font-semibold text-gray-700">
                    {stat.label}
                  </p>
                  <p className="text-sm text-gray-500">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl text-black font-bold">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To maintain our position as East Africa's most competitive and
              HSSE-compliant transporter of petroleum products and dry cargo,
              delivering exceptional value while ensuring sustainable growth for
              all stakeholders.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl text-black font-bold">Our Vision</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To redefine regional logistics through cutting-edge technology,
              unmatched reliability, and a safety-first culture that becomes the
              industry benchmark for excellence.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="max-w-7xl mx-auto px-4 mt-16">
          <h2 className="text-3xl text-black font-bold mb-12 text-center">
            Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "Safety First",
                description: "Uncompromising commitment to HSSE standards",
              },
              {
                title: "Operational Excellence",
                description: "96% fleet utilization through efficient systems",
              },
              {
                title: "Regional Expertise",
                description: "Deep understanding of East African logistics",
              },
              {
                title: "Client-Centric Approach",
                description: "Custom solutions for diverse needs",
              },
              {
                title: "Sustainability",
                description: "Eco-friendly practices across operations",
              },
              {
                title: "Innovation",
                description: "GPS tracking and advanced maintenance systems",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Structure - REPLACED the old section with the new component */}
      <LeadershipStructure />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUsPage;