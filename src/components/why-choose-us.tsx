import {
  FleetImg,
  TrackingImg,
  MaintenanceImg,
  SafetyImg,
  ClientsImg,
  EmergencyImg,
} from "@/assets/images/images";
import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="w-full px-4 py-16 md:py-24 lg:py-32 bg-blue-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <div className="inline-block px-5 py-2 bg-orange-100 text-orange-600 rounded-full font-medium text-sm mb-6 shadow-sm transform hover:scale-105 transition-transform">
                WHY CHOOSE US
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                Why Trust Somo Transporters for Your
                <span className="text-orange-500 block mt-2">
                  Petroleum & Logistics Needs
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
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
                  title: "Real-Time Tracking",
                  description:
                    "GPS-enabled fleet monitoring with Chui Tracking System & SGS Kenya ECTS",
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
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-400"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  img: FleetImg,
                  alt: "Modern truck fleet",
                  class: "md:col-span-2",
                },
                { img: TrackingImg, alt: "GPS tracking system" },
                { img: MaintenanceImg, alt: "Vehicle maintenance" },
                {
                  img: ClientsImg,
                  alt: "Client partnerships",
                  class: "md:row-span-2",
                },
                { img: EmergencyImg, alt: "Emergency response team" },
              ].map((image, index) => (
                <div
                  key={index}
                  className={`overflow-hidden rounded-xl shadow-lg group ${
                    image.class || ""
                  }`}
                >
                  <div className="aspect-video md:aspect-square w-full h-full relative">
                    <Image
                      src={image.img}
                      alt={image.alt}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-110 transition-transform duration-500"
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
