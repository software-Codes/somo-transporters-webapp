import React from "react";
import Image from "next/image";
import { LadyImg, OurStory } from "@/assets/images/images";
// import FooterInfo from "./FooterInfo";
import {
  FaTachometerAlt,
  FaShieldAlt,
  FaUsers,
  FaMapMarkedAlt,
} from "react-icons/fa";
import Footer from "./footer";

const AboutUsPage = () => {
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
      icon: <FaTachometerAlt className="w-6 h-6" />,
      value: "96%",
      label: "Operational Efficiency",
    },
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      value: "15+",
      label: "Safety Certifications",
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      value: "50+",
      label: "Professional Staff",
    },
    {
      icon: <FaMapMarkedAlt className="w-6 h-6" />,
      value: "535km",
      label: "Daily Truck Average",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="relative w-full">
        <div className="w-full h-[500px] sm:h-[600px] md:h-[500px] relative">
          <Image
            src={LadyImg}
            alt="Somo Transporters operations"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-16">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              About <span className="text-orange-500">Somo Transporters</span>
            </h1>
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
              East Africas trusted logistics partner since 2006, delivering
              excellence in petroleum and cargo transport
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px]  rounded-xl overflow-hidden">
            <Image
              src={OurStory}
              alt="Company history"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl text-black font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Established in 2006, Somo Transporters has grown from a local
              Kenyan operator to a regional leader in bulk petroleum and dry
              cargo logistics. Our journey began with a single truck and a
              commitment to reliability, expanding to a fleet of over 50
              specialized vehicles serving major corporations across East
              Africa.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-orange-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="text-orange-500">{stat.icon}</div>
                    <div>
                      <div className="text-xl text-black  font-bold">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl text-black font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To be the most competitive, efficient, and HSSE-compliant
              transporter of petroleum products and dry cargo in East and
              Central Africa, delivering exceptional value to clients while
              ensuring sustainable growth for all stakeholders.
            </p>
          </div>
          <div>
            <h2 className="text-3xl text-black font-bold mb-6">Our Vision</h2>
            <p className="text-gray-600">
              To revolutionize East African logistics through innovative
              technology, unmatched reliability, and a safety-first culture that
              sets industry standards for excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Organizational Structure */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl text-black font-bold mb-8 text-center">
          Leadership Structure
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {structure.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2 text-orange-500">
                {item.role}
              </h3>
              <p className="text-gray-600">{item.team}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative h-96">
        <Image
          src={LadyImg}
          alt="Transport solutions"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Partner with Experts?
            </h2>
            <p className="mb-8 text-lg">
              Join our growing list of satisfied clients including Mogas, City
              Oil, and Kobil Uganda
            </p>
            <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>

      {/* <FooterInfo /> */}
      <Footer />
    </div>
  );
};

export default AboutUsPage;
