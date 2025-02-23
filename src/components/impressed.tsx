import React from "react";
import Image from "next/image";
import { ImpressedImg } from "@/assets/images/images";

const Impressed = () => {
  return (
    <div className="w-full">
      <div className="relative w-full">
        {/* Background Container with Image */}
        <div className="w-full h-[300px] sm:h-[600px] md:h-[400px] relative">
          <Image
            src={ImpressedImg}
            alt="Logistics containers and shipping yard"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay to improve text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Text Content positioned over the image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-16">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Reliable & Efficient Logistics <br /> by{" "}
              <span className="text-orange-500">Somo Transporters</span>
            </h1>

            <p className="text-white text-base md:text-lg max-w-2xl mb-8">
              Seamless, secure, and cost-effective transportation solutions
              across East Africa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressed;
