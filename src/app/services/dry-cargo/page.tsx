import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TruckImg } from "@/assets/images/images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import NavbarHeader from "@/components/navabar-header";
import Footer from "@/components/footer";

const benefits = [
  {
    title: "Cargo Integrity",
    description: "Weatherproof containers and advanced securing systems to maintain product quality",
  },
  {
    title: "High Capacity",
    description: "Fleet average of 535km/day coverage with 30-ton payload capacity",
  },
  {
    title: "Flexible Solutions",
    description: "Customized transport plans for both regular and project-based cargo needs",
  },
];

const steps = [
  { title: "Cargo Assessment", description: "Detailed analysis of cargo type, volume, and special handling requirements" },
  { title: "Fleet Deployment", description: "Assignment of optimal vehicles from our 50+ truck fleet with GPS tracking" },
  { title: "Guaranteed Delivery", description: "24/7 monitoring and contingency planning for on-time delivery" },
];

const DryCargo = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-background">
      <NavbarHeader />
      <main>
        {/* Hero */}
        <div className="relative w-full">
          <div className="w-full h-[400px] sm:h-[500px] md:h-[550px] relative">
            <Image src={TruckImg} alt="Dry cargo transport truck" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Dry Cargo <span className="text-primary">Transport</span>
            </h1>
            <p className="text-white text-lg md:text-xl">Efficient bulk material handling across East Africa</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 space-y-16">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Since 2006, Somo Transporters has been a leader in bulk dry cargo transportation, offering customized solutions for industrial and commercial clients. Our fleet of over 50 specialized trucks handles everything from construction materials to agricultural products with unmatched efficiency.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Key Advantages</h2>
            <div className="space-y-4">
              {benefits.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground text-xl mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Workflow</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((step, i) => (
                <Card key={i} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-card-foreground">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <Card className="bg-muted/50 border-none">
            <CardContent className="text-center p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Need Bulk Cargo Solutions?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Leverage our 96% operational efficiency and regional expertise to move your dry cargo securely. With in-house maintenance and real-time tracking, we ensure your goods arrive intact and on schedule.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full px-8">Contact Us</Button>
                </Link>
                <Link href="/get-quote">
                  <Button variant="outline" size="lg" className="rounded-full px-8">Get quotation</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DryCargo;
