import {
  TrackingImg,
  About1,
  ClientsImg,
  EmergencyImg,
  TruckFleet,
} from "@/assets/images/images";
import Image from "next/image";
import React from "react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Established Expertise",
      description:
        "Industry leaders since 2006 in petroleum and dry cargo logistics across East Africa",
      icon: "🏆",
    },
    {
      title: "HSSE Compliance",
      description:
        "Strict adherence to Health, Safety, Security & Environment protocols",
      icon: "🛡️",
    },
    {
      title: "GPS-enabled fleet monitoring with Mix Telematics",
      description:
        "Real-time tracking of vehicles and assets for optimal fleet management and security",
      icon: "📡",
    },
    {
      title: "Proactive Maintenance",
      description:
        "96% operational efficiency through planned maintenance programs",
      icon: "🔧",
    },
    {
      title: "Emergency Response",
      description:
        "Comprehensive emergency plans for spills, accidents, and incidents",
      icon: "🚨",
    },
    {
      title: "Trusted Partners",
      description:
        "Preferred transporter for Kobil, TotalEnergies, and Stabex International",
      icon: "🤝",
    },
  ];

  const images = [
    { img: TruckFleet, alt: "Modern truck fleet", class: "md:col-span-2" },
    { img: TrackingImg, alt: "GPS tracking system" },
    { img: About1, alt: "Vehicle maintenance" },
    { img: ClientsImg, alt: "Client partnerships", class: "md:row-span-2" },
    { img: EmergencyImg, alt: "Emergency response team" },
  ];

  return (
    <div className="w-full px-4 py-16 md:py-24 lg:py-32 bg-accent/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <Badge variant="secondary" className="mb-6 text-sm font-medium shadow-sm hover:scale-105 transition-transform">
                WHY Make Deal With us
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight text-foreground">
                <span className="text-primary block mt-2">
                  Petroleum & Logistics Needs
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((item, index) => (
                <Card key={index} className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h3 className="font-bold text-lg mb-2 text-card-foreground">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`overflow-hidden rounded-xl shadow-lg group ${image.class || ""}`}
                >
                  <div className="aspect-video md:aspect-square w-full h-full relative">
                    <Image
                      src={image.img}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white font-medium p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-sm md:text-base">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
