import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { ChevronRight } from "lucide-react";

const services = [
  {
    title: "Bulk Petroleum Transport",
    description:
      "Specialized in cross-border haulage of petroleum products with expedited and reliable delivery service, focusing on single line bulk petroleum products.",
    href: "/services/petroleum-transport",
  },
  {
    title: "LPG Transport",
    description:
      "Professional transportation of LPG products across East Africa with advanced tracking technology and constant monitoring for maximum safety and efficiency.",
    href: "/services/lpg-transport",
  },
  {
    title: "Dry Cargo Transport",
    description:
      "Comprehensive bulk dry cargo transportation services with standardized fleet and proven operating systems for reliable and efficient delivery across the region.",
    href: "/services/dry-cargo",
  },
];

const OurServices = () => {
  return (
    <div className="w-full px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            OUR SERVICES
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Transform Your Petroleum Transportation with{" "}
            <span className="text-primary">Our services</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            Somo Transporters offers a range of transportation services designed
            to meet the diverse needs of our clients in East Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Link
                  href={service.href}
                  className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                >
                  Read more
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Link href="/services" className="block text-center rounded-lg mt-8 md:mt-12">
          <Button size="lg" className="mx-auto rounded-lg px-8 py-5 text-base w-full md:w-auto">
            View All Services
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OurServices;
