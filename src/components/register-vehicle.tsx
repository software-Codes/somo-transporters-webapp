import React from "react";
import Image from "next/image";

import { FaShieldAlt, FaCoins, FaCogs, FaChartLine } from "react-icons/fa";
import { TruckImg1 } from "@/assets/images/images";

const VehicleCrew = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Expand Your{" "}
              <span className="text-orange-500">Transport Business</span>
            </h2>

            <p className="text-lg text-gray-600">
              Join East Africa&apos;s premier logistics network and access exclusive
              benefits:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg">
                <FaShieldAlt className="w-8 h-8 text-orange-500" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Asset Protection
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive insurance and maintenance support
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg">
                <FaCoins className="w-8 h-8 text-orange-500" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Competitive Earnings
                  </h3>
                  <p className="text-gray-600">
                    Premium rates with performance bonuses
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg">
                <FaCogs className="w-8 h-8 text-orange-500" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Smart Matching</h3>
                  <p className="text-gray-600">
                    AI-powered load assignments for maximum utilization
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg">
                <FaChartLine className="w-8 h-8 text-orange-500" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Growth Support</h3>
                  <p className="text-gray-600">
                    Fleet expansion financing and training programs
                  </p>
                </div>
              </div>
            </div>

            <button
              className="bg-orange-500 text-white px-8 py-3 rounded-full 
              hover:bg-orange-600 transition-colors font-semibold
              flex items-center gap-2 mt-6"
            >
              Join Our Fleet Network
            </button>
          </div>

          {/* Side Image */}
          <div className="flex-1 relative h-96 w-full rounded-xl overflow-hidden">
            <Image
              src={TruckImg1}
              alt="Fleet network"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/40 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleCrew;
