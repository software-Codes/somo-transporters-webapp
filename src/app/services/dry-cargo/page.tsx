// DryCargo.tsx
import React from "react";
import Image from "next/image";
import { TruckImg } from "@/assets/images/images";

const DryCargo = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full">
        <div className="w-full h-[400px] sm:h-[600px] md:h-[700px] relative">
          <Image
            src={TruckImg}
            alt="Dry cargo transport truck"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-16">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Dry Cargo <strong className="text-orange-600">Transport</strong>
            </h1>
            <span className="text-white text-lg md:text-xl">
              Efficient bulk material handling across East Africa
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Since 2006, Somo Transporters has been a leader in bulk dry cargo
            transportation, offering customized solutions for industrial and
            commercial clients. Our fleet of over 50 specialized trucks handles
            everything from construction materials to agricultural products with
            unmatched efficiency.
          </p>
        </section>

        {/* Key Benefits */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Key Advantages
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 mt-1 text-orange-500">•</div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Cargo Integrity</h3>
                <p className="text-gray-700">
                  Weatherproof containers and advanced securing systems to
                  maintain product quality
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 mt-1 text-orange-500">•</div>
              <div>
                <h3 className="font-semibold text-xl mb-2">High Capacity</h3>
                <p className="text-gray-700">
                  Fleet average of 535km/day coverage with 30-ton payload
                  capacity
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 mt-1 text-orange-500">•</div>
              <div>
                <h3 className="font-semibold text-xl mb-2">
                  Flexible Solutions
                </h3>
                <p className="text-gray-700">
                  Customized transport plans for both regular and project-based
                  cargo needs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Workflow</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-semibold text-xl mb-3">Cargo Assessment</h3>
              <p className="text-gray-700">
                Detailed analysis of cargo type, volume, and special handling
                requirements
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-semibold text-xl mb-3">Fleet Deployment</h3>
              <p className="text-gray-700">
                Assignment of optimal vehicles from our 50+ truck fleet with GPS
                tracking
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-semibold text-xl mb-3">
                Guaranteed Delivery
              </h3>
              <p className="text-gray-700">
                24/7 monitoring and contingency planning for on-time delivery
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gray-50 rounded-xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need Bulk Cargo Solutions?
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Leverage our 96% operational efficiency and regional expertise to
            move your dry cargo securely. With in-house maintenance and
            real-time tracking, we ensure your goods arrive intact and on
            schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
              Contact Us
            </button>
            <button className="bg-white text-orange-500 px-8 py-3 rounded-full border-2 border-orange-500 hover:bg-orange-50 transition-colors">
              Get quotation{" "}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DryCargo;
