import React from "react";
import Image from "next/image";
import { TruckImg } from "@/assets/images/images";

const PetroleumTransport = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="relative w-full">
        <div className="w-full h-[400px] sm:h-[600px] md:h-[700px] relative">
          <Image
            src={TruckImg}
            alt="Petroleum transport truck"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-16">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Bulk Petroleum{" "}
              <strong className="text-orange-600">Transport</strong>
            </h1>
            <span className="text-white text-lg md:text-xl">
              Expert petroleum logistics across East Africa
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl text-black md:text-3xl font-bold mb-6">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Somo Transporters specializes in cross-border haulage of petroleum
            products, serving reputable and large corporations across East
            Africa since 2006. Our core focus is on providing expedited and
            reliable delivery service for single line bulk petroleum products,
            maintaining the highest standards of safety and efficiency.
          </p>
        </section>

        {/* Key Benefits */}
        <section className="mb-12">
          <h2 className="text-2xl text-black md:text-3xl font-bold mb-6">Key Benefits</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 mt-1 text-orange-500">•</div>
              <div>
                <h3 className="font-semibold text-black text-xl mb-2">HSSE Compliance</h3>
                <p className="text-gray-700">
                  Our operations strictly adhere to Health, Safety, Security,
                  and Environmental standards, ensuring safe transportation of
                  petroleum products.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 mt-1 text-orange-500">•</div>
              <div>
                <h3 className="font-semibold text-black  text-xl mb-2">
                  Advanced Tracking
                </h3>
                <p className="text-gray-700">
                  Real-time GPS tracking and monitoring systems allow constant
                  contact with all trucks, ensuring security and timely
                  delivery.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 mt-1 text-orange-500">•</div>
              <div>
                <h3 className="font-semibold text-black text-xl mb-2">
                  Quality Assurance
                </h3>
                <p className="text-gray-700">
                  We deploy honest drivers with high integrity and ensure
                  effective sealing and vehicle monitoring to maintain product
                  quality and prevent losses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="mb-12">
          <h2 className="text-2xl text-black md:text-3xl font-bold mb-6">How it Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-semibold text-black text-xl mb-3">Request a Quote</h3>
              <p className="text-gray-700">
                Contact us with your petroleum transport requirements, including
                volume, origin, and destination points.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-semibold text-black text-xl mb-3">Vehicle Assignment</h3>
              <p className="text-gray-700">
                We assign well-maintained vehicles and experienced drivers from
                our fleet of over 50 specialized trucks.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-semibold text-black text-xl mb-3">Safe Delivery</h3>
              <p className="text-gray-700">
                Your products are transported safely with real-time tracking and
                our emergency response capabilities.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gray-50 rounded-xl p-8 md:p-12">
          <h2 className="text-2xl text-black md:text-3xl font-bold mb-4">
            Ready to Transport Your Petroleum Products?
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            With a focus on reliability and customer satisfaction, Somo
            Transporters is your trusted partner for petroleum transport across
            East Africa. Our commitment to excellence ensures your deliveries
            are handled with utmost care and professionalism.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
              Contact us
            </button>
            <button className="bg-white text-orange-500 px-8 py-3 rounded-full border-2 border-orange-500 hover:bg-orange-50 transition-colors">
              Get a quote
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PetroleumTransport;
