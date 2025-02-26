import { LadyImg } from "@/assets/images/images";
import React from "react";
import Image from "next/image";
import {
  FaTruckMoving,
  FaGasPump,
  FaShieldAlt,
  FaWarehouse,
  FaMapMarkedAlt,
  FaCogs,
} from "react-icons/fa";
import ClientsSlider from "./client-slider";
import Footer from "./footer";
import Link from "next/link";

const AllServices = () => {
  const services = [
    {
      icon: <FaTruckMoving className="w-8 h-8" />,
      title: "Petroleum Transport",
      description:
        "Cross-border haulage of bulk petroleum products with HSSE-compliant tankers and real-time GPS tracking",
      stats: "50+ specialized trucks",
    },
    {
      icon: <FaGasPump className="w-8 h-8" />,
      title: "LPG Transport",
      description:
        "Safe handling of flammable gases with pressure-controlled tankers and certified drivers",
      stats: "96% operational efficiency",
    },
    {
      icon: <FaCogs className="w-8 h-8" />,
      title: "Dry Cargo Solutions",
      description:
        "Bulk material transport with 30-ton payload capacity and weatherproof securing systems",
      stats: "535km/day coverage",
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "HSSE Compliance",
      description:
        "Full compliance with Health, Safety, Security & Environmental standards",
      stats: "24/7 monitoring",
    },
    {
      icon: <FaWarehouse className="w-8 h-8" />,
      title: "Logistics Management",
      description:
        "Advanced IT systems for supply chain optimization and inventory management",
      stats: "98% client retention",
    },
    {
      icon: <FaMapMarkedAlt className="w-8 h-8" />,
      title: "Last-Mile Delivery",
      description:
        "Guaranteed final destination delivery with armed escorts when needed",
      stats: "99% on-time rate",
    },
  ];

  // const clients = [
  //   "Mogas (U) Ltd",
  //   "City Oil (U) Ltd",
  //   "Hared Petroleum Ltd",
  //   "Stabex International Ltd",
  //   "Banoda Oil Ltd",
  //   "Kobil Uganda Ltd",
  // ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      {/* <div className="relative w-full">
        <div className="w-full h-[500px] sm:h-[600px] md:h-[500px] relative">
          <Image
            src={LadyImg}
            alt="Logistics operations"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-16">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Comprehensive{" "}
              <span className="text-orange-500">Logistics Solutions</span>
            </h1>
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
              Serving East Africas transport needs since 2006 with safety,
              efficiency, and cutting-edge technology
            </p>
          </div>
        </div>
      </div> */}

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl text-black md:text-4xl font-bold text-center mb-12">
          Our Core Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4 text-orange-500">{service.icon}</div>
              <h3 className="text-xl text-black font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="text-sm font-semibold text-orange-500">
                {service.stats}
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500 rounded-xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Client Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <ClientsSlider />
        </div>
      </div>

      {/* USP Section */}
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl text-black font-bold">Why Choose Us</h2>
            <p className="text-gray-600">
              With over 15 years experience in East African logistics, we
              combine local expertise with global standards
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 mt-1 text-orange-500">•</div>
                <div>
                  <h3 className="font-semibold text-black text-lg">Advanced Tracking</h3>
                  <p className="text-gray-600">
                    GPS monitoring and Mix Telematics integration
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 mt-1 text-orange-500">•</div>
                <div>
                  <h3 className="font-semibold text-black text-lg">Quality Assurance</h3>
                  <p className="text-gray-600">
                    Triple-check sealing system and driver integrity programs
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 mt-1 text-orange-500">•</div>
                <div>
                  <h3 className="font-semibold text-black text-lg">Emergency Ready</h3>
                  <p className="text-gray-600">
                    24/7 response team for spills, accidents, and security
                    incidents
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-orange-50 rounded-xl p-8">
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500">96%</div>
                <div className="text-gray-600">Operational Efficiency</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500">50+</div>
                <div className="text-gray-600">Specialized Vehicles</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500">535km</div>
                <div className="text-gray-600">Daily Truck Average</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-orange-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Streamline Your Logistics?
          </h2>
          <p className="mb-8 text-lg">
            Partner with East Africas most reliable transport solution provider
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-quote" >
            <button className="bg-white text-orange-500 px-8 py-3 rounded-full hover:bg-orange-100 transition-colors">
              Request Consultation
            </button>
            </Link>
            <Link href="/contact" >

            <button className="border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-orange-500 transition-colors">
              Emergency Contact
            </button>
            </Link>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllServices;
