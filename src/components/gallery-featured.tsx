import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Gallery10,
  Gallery11,
  Gallery5,
} from "@/assets/images/Gallery/gallery";

const FeaturedGallery = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Gallery
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at our operations and experience the excellence of Somo
            Transporters
          </p>
        </div>

        {/* Featured Images */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center mb-10">
          <div className="flex-1 relative h-64 md:h-80 overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:shadow-xl hover:scale-105">
            <Image
              src={Gallery10}
              alt="Somo Transporters operations"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition-opacity duration-300"></div>
          </div>

          <div className="flex-1 relative h-64 md:h-80 overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:shadow-xl hover:scale-105">
            <Image
              src={Gallery5}
              alt="Somo Transporters operations"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition-opacity duration-300"></div>
          </div>

          <div className="flex-1 relative h-64 md:h-80 overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:shadow-xl hover:scale-105">
            <Image
              src={Gallery11}
              alt="Somo Transporters operations"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* View Gallery Button */}
        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            View Our Gallery
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGallery;
