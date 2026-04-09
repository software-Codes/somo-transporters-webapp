import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { FinalImgeBg } from "@/assets/images/images";

const HeroProfile = () => {
  return (
    <div className="w-full">
      <div className="relative w-full">
        <div className="w-full h-[500px] sm:h-[600px] md:h-[500px] relative">
          <Image
            src={FinalImgeBg}
            alt="Logistics containers and shipping yard"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Reliable & Efficient Logistics <br /> by{" "}
            <span className="text-primary">Somo Transporters</span>
          </h1>
          <p className="text-white text-base md:text-lg max-w-2xl mb-8">
            Seamless, secure, and cost-effective transportation solutions
            across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/join-us">
              <Button size="lg" className="rounded-full px-12 py-6 text-lg">
                Join us
              </Button>
            </Link>
            <Link href="/get-quote">
              <Button
                variant="secondary"
                size="lg"
                className="rounded-full px-8 py-6 text-lg bg-white hover:bg-gray-100 text-gray-800"
              >
                Get Personalized Quotation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroProfile;
