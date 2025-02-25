"use client";
import React from "react";
import Image from "next/image";
import { Frontview, LadyImg } from "@/assets/images/images";
import {
  FaTachometerAlt,
  FaShieldAlt,
  FaUsers,
  FaMapMarkedAlt,
  FaGlobeAfrica,
  FaFileDownload,
} from "react-icons/fa";
import Footer from "./footer";
import Link from "next/link";
import { Gallery16 } from "@/assets/images/Gallery/gallery";

const AboutUsPage = () => {
  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = "/documents/SOMO-TRANSPORTERS-COMPANY-PROFILE.pdf";
    link.download = "SOMO-TRANSPORTERS-COMPANY-PROFILE.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const structure = [
    { role: "Managing Director", team: "Executive Leadership" },
    { role: "Operations Manager", team: "Operations Team" },
    { role: "Safety Manager", team: "HSSE Department" },
    { role: "Finance Manager", team: "Finance Team" },
    { role: "Chief Mechanic", team: "Technical Team" },
    { role: "Chief Driver", team: "Logistics Team" },
  ];

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
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section with Download Buttons */}
      <div className="relative w-full">
        <div className="w-full h-[500px] sm:h-[600px] md:h-[700px] relative">
          <Image
            src={Frontview}
            alt="Somo Transporters operations"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>

          {/* Floating Download Button */}
          <button
            onClick={handleDownload}
            className="absolute bottom-8 right-8 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-xl transition-all duration-300 group"
            aria-label="Download company profile"
          >
            <FaFileDownload className="w-6 h-6" />
            <span className="absolute -right-2 top-1/2 -translate-y-1/2 translate-x-full bg-gray-800 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              Download Profile
            </span>
          </button>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-16">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-xl">
              About <span className="text-orange-500">Somo Transporters</span>
            </h1>
            <p className="text-white text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
              East Africa's premier logistics partner since 2006, delivering
              excellence in petroleum and cargo transport across 5 nations
            </p>

            {/* Primary Download Button */}
            <button
              onClick={handleDownload}
              className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors duration-300 shadow-md"
            >
              <FaFileDownload className="w-5 h-5" />
              <span>Download Company Profile (PDF)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-black font-bold">
              Our Journey
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Founded in 2006 as a local Kenyan operator, Somo Transporters has
              evolved into a regional logistics powerhouse. Our strategic
              expansion now covers key routes across{" "}
              <strong>Uganda, Kenya, South Sudan, Tanzania, and Rwanda</strong>.
              From humble beginnings with a single truck, we've grown to manage
              a fleet of 50+ specialized vehicles, serving Fortune 500 companies
              and local enterprises alike.
            </p>

            {/* Regions Coverage */}
            <div className="bg-orange-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FaGlobeAfrica className="text-orange-600" />
                Regional Coverage
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {regions.map((region, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm"
                  >
                    <span className="text-2xl">{region.icon}</span>
                    <span className="font-medium text-black ">{region.name}</span>
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

      {/* Organizational Structure */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl text-black font-bold mb-12 text-center">
          Leadership Structure
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {structure.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500"
            >
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {item.role}
              </h3>
              <p className="text-gray-600">{item.team}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative h-[400px] md:h-[500px]">
        <Image
          src={LadyImg}
          alt="Transport solutions"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-4xl mx-auto px-4 text-center text-white space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Partner with Africa's Logistics Leader
            </h2>
            <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
              Join industry leaders like Kobil, TotalEnergies, and Stabex
              International in trusting your logistics needs to our expert team
            </p>
            <Link href="/contact">
              <button className="bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition-colors text-lg font-semibold shadow-lg">
                Schedule Consultation
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
