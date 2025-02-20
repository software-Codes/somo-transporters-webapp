import { Frontview, HeroImage1, LadyImg } from "@/assets/images/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutHomeComponent = () => {
  return (
    <div className="w-full px-4 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Image and Text Container */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Text Content - First on all screen sizes */}
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full font-medium text-sm mb-4">
              ABOUT US
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Redefining Efficiency in
              <span className="text-orange-500">Transport & Logistics</span>
            </h2>

            <p className="text-gray-700 mb-8">
              At Somo Transporters, we are dedicated to providing top-notch
              Logistics transportation , We specialize in all areas of
              transportation and logistics. Somo Transporters provides
              customized solutions using the most advanced technologies and our
              expertise lies on an in-house, built-in efficient IT system, a
              reactive and reliable international network and a close
              relationship with the major operators in the logistics industry
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8 lg:mb-0">
              <Link href="/get-quote">
                <button className="w-full sm:w-auto px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors">
                  Get a quote
                </button>
              </Link>
              <Link href="/about">
                <button className="w-full sm:w-auto px-6 py-3 border border-gray-300 hover:border-gray-400 text-gray-800 font-medium rounded-lg transition-colors">
                  Learn more
                </button>
              </Link>
            </div>
          </div>

          {/* Images Container - Grid layout for mobile */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              {/* Large image spanning full width */}
              <div className="col-span-2 h-64 md:h-72 overflow-hidden rounded-lg shadow-md">
                <Image
                  src={HeroImage1}
                  alt="Container terminal with crane"
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>

              {/* Two smaller images side by side */}
              <div className="h-48 md:h-56 overflow-hidden rounded-lg shadow-md">
                <Image
                  src={LadyImg}
                  alt="Forklift loading cargo"
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="h-48 md:h-56 overflow-hidden rounded-lg shadow-md">
                <Image
                  src={Frontview}
                  alt="Container port at sunset"
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHomeComponent;
