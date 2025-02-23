// LpgTransport.tsx
import React from "react";
import Image from "next/image";
import { TruckImg } from "@/assets/images/images";

const LpgTransport = () => {
  return (
    <div className="w-full bg-white ">
      {/* Hero Section */}
      <div className="relative w-full">
        <div className="w-full h-[400px] sm:h-[600px] md:h-[700px] relative">
          <Image
            src={TruckImg}
            alt="LPG transport truck"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-16">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              LPG <strong className="text-orange-600">Transport</strong>
            </h1>
            <span className="text-white text-lg md:text-xl">
              Safe and efficient LPG logistics solutions across East Africa
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
            As a key player in East Africa's energy logistics, Somo Transporters
            provides specialized LPG transportation services since 2006. Our
            expertise in handling flammable gases ensures safe, reliable
            delivery while maintaining strict HSSE compliance and utilizing
            state-of-the-art safety equipment.
          </p>
        </section>

        {/* Key Benefits */}
        <section className="mb-12">
          <h2 className="text-2xl text-black md:text-3xl font-bold mb-6">Key Benefits</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 mt-1 text-orange-500">•</div>
              <div>
                <h3 className="font-semibold text-black text-xl mb-2">
                  Explosion Prevention
                </h3>
                <p className="text-gray-700">
                  Specially designed tankers with pressure control systems and
                  emergency shutdown mechanisms
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 mt-1 text-orange-500">•</div>
              <div>
                <h3 className="font-semibold text-black text-xl mb-2">
                  Real-Time Monitoring
                </h3>
                <p className="text-gray-700">
                  GPS tracking with temperature and pressure sensors for 24/7
                  cargo monitoring
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 mt-1 text-orange-500">•</div>
              <div>
                <h3 className="font-semibold text-black text-xl mb-2">
                  Certified Handling
                </h3>
                <p className="text-gray-700">
                  Drivers trained in hazardous material handling and emergency
                  response procedures
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="mb-12">
          <h2 className="text-2xl text-black md:text-3xl font-bold mb-6">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-semibold  text-black text-xl mb-3">Safety Inspection</h3>
              <p className="text-gray-700">
                Comprehensive vehicle and equipment checks before each
                deployment
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-semibold text-black text-xl mb-3">Secure Loading</h3>
              <p className="text-gray-700">
                Professional handling using certified loading equipment and
                procedures
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-semibold text-black text-xl mb-3">Guarded Transit</h3>
              <p className="text-gray-700">
                Armed escort options and real-time monitoring throughout
                transportation
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gray-50 rounded-xl p-8 md:p-12">
          <h2 className="text-2xl text-black md:text-3xl font-bold mb-4">
            Need Reliable LPG Transportation?
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Trust our decade-long expertise in hazardous material logistics.
            With over 50 specialized vehicles and 96% operational efficiency, we
            guarantee safe and timely delivery of your LPG products across East
            Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
              Contact us
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

export default LpgTransport;
