import React from "react";
import Image from "next/image";
import { FaShieldAlt, FaCoins, FaCogs, FaChartLine } from "react-icons/fa";
import { TruckImg1 } from "@/assets/images/images";
import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const benefits = [
  {
    icon: <FaShieldAlt className="w-8 h-8 text-primary" />,
    title: "Asset Protection",
    description: "Comprehensive insurance and maintenance support",
  },
  {
    icon: <FaCoins className="w-8 h-8 text-primary" />,
    title: "Competitive Earnings",
    description: "Premium rates with performance bonuses",
  },
  {
    icon: <FaCogs className="w-8 h-8 text-primary" />,
    title: "Smart Matching",
    description: "AI-powered load assignments for maximum utilization",
  },
  {
    icon: <FaChartLine className="w-8 h-8 text-primary" />,
    title: "Growth Support",
    description: "Fleet expansion financing and training programs",
  },
];

const VehicleCrew = () => {
  return (
    <div className="bg-background py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Expand Your{" "}
              <span className="text-primary">Transport Business</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Join East Africa&apos;s premier logistics network and access exclusive
              benefits:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((item, index) => (
                <Card key={index} className="border-none bg-accent/50">
                  <CardContent className="p-4 flex items-start gap-4">
                    {item.icon}
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Link href="/join-us">
              <Button size="lg" className="rounded-full mt-6">
                Join Our Fleet Network
              </Button>
            </Link>
          </div>

          <div className="flex-1 relative h-96 w-full rounded-xl overflow-hidden">
            <Image src={TruckImg1} alt="Fleet network" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleCrew;
