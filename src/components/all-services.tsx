import React from "react";
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
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

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

const AllServices = () => {
  return (
    <div className="w-full bg-background">
      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl text-foreground md:text-3xl font-bold text-center mb-12">
          Our Core Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:border-primary"
            >
              <CardHeader>
                <div className="mb-2 text-primary">{service.icon}</div>
                <CardTitle className="text-xl text-card-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Badge variant="secondary" className="text-sm font-semibold">
                  {service.stats}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Client Section */}
      <div className="bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <ClientsSlider />
        </div>
      </div>

      {/* USP Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl text-foreground font-bold">Why Choose Us</h2>
            <p className="text-muted-foreground">
              With over 15 years experience in East African logistics, we
              combine local expertise with global standards
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Advanced Tracking",
                  desc: "GPS monitoring and Mix Telematics integration",
                },
                {
                  title: "Quality Assurance",
                  desc: "Triple-check sealing system and driver integrity programs",
                },
                {
                  title: "Emergency Ready",
                  desc: "24/7 response team for spills, accidents, and security incidents",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 text-primary">•</div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-accent/50 border-none">
            <CardContent className="p-8 space-y-6">
              {[
                { value: "96%", label: "Operational Efficiency" },
                { value: "50+", label: "Specialized Vehicles" },
                { value: "535km", label: "Daily Truck Average" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">
            Ready to Streamline Your Logistics?
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/90">
            Partner with East Africa&apos;s most reliable transport solution provider
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-quote">
              <Button variant="secondary" size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
                Request Consultation
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="rounded-full border-2 border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto">
                Emergency Contact
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AllServices;
