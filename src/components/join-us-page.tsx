import React from "react";
import Image from "next/image";
import { Frontview } from "@/assets/images/images";
import { DriverForm } from "./driver-form";

const JoinUsComponent = () => {
  const benefits = [
    {
      title: "Range of Opportunities",
      content:
        "Work with major clients like Kobil, Banoda Oil, and international partners across East Africa.",
    },
    {
      title: "Flexible Work Schedules",
      content:
        "Efficient route planning and modern fleet management enable adaptable operational hours.",
    },
    {
      title: "Competitive Compensation",
      content:
        "Attractive rates with performance bonuses and rewards for top-performing drivers.",
    },
    {
      title: "Comprehensive Support",
      content:
        "Full maintenance support, safety training, and 24/7 operational assistance.",
    },
  ];

  const steps = [
    {
      title: "Registration",
      content:
        "Complete our online form with vehicle and documentation details",
    },
    {
      title: "Verification",
      content: "Submit required licenses and certifications for approval",
    },
    {
      title: "Onboarding",
      content: "Complete HSSE training and operational briefings",
    },
    {
      title: "Deployment",
      content:
        "Start assignments with GPS-tracked routes and client coordination",
    },
  ];

  return (
    <div className="bg-white w-full">
      {/* Hero Section */}
      {/* <div className="relative w-full">
        <div className="w-full h-[500px] sm:h-[600px] md:h-[600px] relative">
          <Image
            src={Frontview}
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
              Join <span className="text-orange-500">Somo Transporters</span>
            </h1>
            <p className="text-white font-sans text-lg md:text-xl max-w-2xl mx-auto">
              Register your vehicle and join our elite fleet of professional
              transporters
            </p>
          </div>
        </div>
      </div> */}

      {/* Benefits Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Benefits Of Joining Our Crew
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Steps to Join Our Crew
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-orange-500/30 rounded-xl blur opacity-25 group-hover:opacity-40 transition"></div>
                <div className="relative bg-white p-6 rounded-xl border border-gray-200 hover:border-orange-500 transition-all">
                  <div className="text-orange-500 text-3xl font-bold mb-4">
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*Driver information form*/}
      <DriverForm />
    </div>
  );
};

export default JoinUsComponent;
