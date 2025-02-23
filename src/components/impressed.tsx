import React from "react";
import Image from "next/image";
import { ImpressedImg } from "@/assets/images/images";
import Link from "next/link";
import { Button } from "./ui/button";

const Impressed = () => {
  return (
    <div className="w-full pt-12 ">
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
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Impressed With Our Services?
          </h2>
          <Link href="/contact" >
          <Button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors" >
            Contact  Us
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}; 

export default Impressed;
