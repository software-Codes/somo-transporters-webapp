import React from "react";
import Image from "next/image";
import { TruckImg } from "@/assets/images/images";

const DryCargo = () => {
  return (
    <div>
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
             Dry Cargo{" "}
              <strong className="text-orange-600">Transport</strong>
            </h1>
            <span className="text-white text-lg md:text-xl">
              Expert petroleum logistics across East Africa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DryCargo;
