import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const OurServices = () => {
  return (
    <div className="w-full py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <button className="bg-orange-100 text-orange-500 px-6 py-2 rounded-full mb-4 font-medium">
            OUR SERVICES
          </button>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Elevate Your Petroleum Transportation  {' '}with{" "}
            <span className="text-orange-500">Our services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Somo Transporters offers a range of transportation services designed
            to meet the diverse needs of our clients in East Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Bulk Petroleum Transport */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-3">
              Bulk Petroleum Transport
            </h3>
            <p className="text-gray-600 mb-4">
              Specialized in cross-border haulage of petroleum products with
              expedited and reliable delivery service, focusing on single line
              bulk petroleum products.
            </p>
            <Link
              href="/services/petroleum-transport"
              className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center"
            >
              Read more
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {/* LPG Transport */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-3">LPG Transport</h3>
            <p className="text-gray-600 mb-4">
              Professional transportation of LPG products across East Africa
              with advanced tracking technology and constant monitoring for
              maximum safety and efficiency.
            </p>
            <Link
              href="/services/lpg-transport"
              className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center"
            >
              Read more
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {/* Dry Cargo Transport */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Dry Cargo Transport</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive bulk dry cargo transportation services with
              standardized fleet and proven operating systems for reliable and
              efficient delivery across the region.
            </p>
            <Link
              href="/services/dry-cargo"
              className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center"
            >
              Read more
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
        <Link href="/services" className="block text-center rounded-lg mt-8 md:mt-12">
          <Button
            size="lg"
            className="mx-auto bg-orange-400 hover:bg-orange-500 rounded-lg transition-colors px-8 py-6 text-lg w-full md:w-auto"
          >
            View All Services
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OurServices;
