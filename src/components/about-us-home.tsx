import { LadyImg, RealImg, SomoBossImg } from "@/assets/images/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const AboutHomeComponent = () => {
  return (
    <div className="w-full px-4 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <Badge variant="secondary" className="mb-4 text-sm font-medium">
              ABOUT US
            </Badge>
            <h2 className="text-3xl text-foreground md:text-4xl lg:text-5xl font-bold mb-4">
              Enhancing Efficiency in{" "}
              <span className="text-primary">Transport & Logistics</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              At Somo Transporters, we are dedicated to providing top-notch
              Logistics transportation. We specialize in all areas of
              transportation and logistics. Somo Transporters provides
              customized solutions using the most advanced technologies and our
              expertise lies on an in-house, built-in efficient IT system, a
              reactive and reliable international network and a close
              relationship with the major operators in the logistics industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8 lg:mb-0">
              <Link href="/get-quote">
                <Button className="w-full sm:w-auto rounded-lg">
                  Get a quote
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="w-full sm:w-auto rounded-lg">
                  Learn more
                </Button>
              </Link>
            </div>
          </div>

          {/* Images Container */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 h-64 md:h-72 overflow-hidden rounded-lg shadow-md">
                <Image
                  src={RealImg}
                  alt="Container terminal with crane"
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="h-48 md:h-56 overflow-hidden rounded-lg shadow-md">
                <Image
                  src={LadyImg}
                  alt="Forklift loading cargo"
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="h-48 md:h-56 overflow-hidden rounded-lg shadow-md">
                <Image
                  src={SomoBossImg}
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
