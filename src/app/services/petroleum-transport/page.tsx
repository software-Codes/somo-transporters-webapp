import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TruckImg } from "@/assets/images/images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import NavbarHeader from "@/components/navabar-header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Bulk Petroleum Transport Kenya & East Africa | Somo Transporters",
  description:
    "Somo Transporters provides HSSE-compliant bulk petroleum transport across Kenya, Uganda, Tanzania, Rwanda & South Sudan. Real-time GPS tracking, 50+ tankers, cross-border haulage since 2006.",
  alternates: { canonical: "https://www.somotransporter.co.ke/services/petroleum-transport" },
  openGraph: {
    title: "Bulk Petroleum Transport East Africa | Somo Transporters Ltd",
    description: "HSSE-compliant bulk petroleum haulage across East Africa. 50+ tankers, GPS tracked, cross-border expertise since 2006.",
    url: "https://www.somotransporter.co.ke/services/petroleum-transport",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const benefits = [
  {
    title: "HSSE Compliance",
    description:
      "Our operations strictly adhere to Health, Safety, Security, and Environmental standards, ensuring safe transportation of petroleum products.",
  },
  {
    title: "Advanced Tracking",
    description:
      "Real-time GPS tracking and monitoring systems allow constant contact with all trucks, ensuring security and timely delivery.",
  },
  {
    title: "Quality Assurance",
    description:
      "We deploy honest drivers with high integrity and ensure effective sealing and vehicle monitoring to maintain product quality and prevent losses.",
  },
];

const steps = [
  { title: "Request a Quote", description: "Contact us with your petroleum transport requirements, including volume, origin, and destination points." },
  { title: "Vehicle Assignment", description: "We assign well-maintained vehicles and experienced drivers from our fleet of over 50 specialized trucks." },
  { title: "Safe Delivery", description: "Your products are transported safely with real-time tracking and our emergency response capabilities." },
];

const PetroleumTransport = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-background">
      <NavbarHeader />
      <main>
        {/* Hero */}
        <div className="relative w-full">
          <div className="w-full h-[400px] sm:h-[500px] md:h-[550px] relative">
            <Image src={TruckImg} alt="Petroleum transport truck" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Bulk Petroleum <span className="text-primary">Transport</span>
            </h1>
            <p className="text-white text-lg md:text-xl">Expert petroleum logistics across East Africa</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 space-y-16">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Somo Transporters specializes in cross-border haulage of petroleum products, serving reputable and large corporations across East Africa since 2006. Our core focus is on providing expedited and reliable delivery service for single line bulk petroleum products, maintaining the highest standards of safety and efficiency.
            </p>
          </section>

          {/* Benefits */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Key Benefits</h2>
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

          {/* How it Works */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">How it Works</h2>
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

          {/* CTA */}
          <Card className="bg-muted/50 border-none">
            <CardContent className="text-center p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Transport Your Petroleum Products?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                With a focus on reliability and customer satisfaction, Somo Transporters is your trusted partner for petroleum transport across East Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full px-8">Contact us</Button>
                </Link>
                <Link href="/get-quote">
                  <Button variant="outline" size="lg" className="rounded-full px-8">Get a quote</Button>
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

export default PetroleumTransport;
