import React from "react";
import Image from "next/image";
import { ImpressedImg } from "@/assets/images/images";
import Link from "next/link";
import { Button } from "./ui/button";

const Impressed = () => {
  return (
    <div className="w-full pt-12">
      <div className="relative w-full">
        <div className="w-full h-[300px] sm:h-[600px] md:h-[400px] relative">
          <Image
            src={ImpressedImg}
            alt="Logistics containers and shipping yard"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Want to Get Our Amazing Services?
          </h2>
          <Link href="/contact">
            <Button size="lg" className="rounded-full px-8 py-3">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Impressed;
