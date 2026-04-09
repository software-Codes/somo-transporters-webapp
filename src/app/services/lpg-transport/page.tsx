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
  title: "LPG Transport Kenya & East Africa | Somo Transporters Ltd",
  description:
    "Safe and certified LPG transport across East Africa. Pressure-controlled tankers, GPS monitoring, HSSE-compliant drivers. Somo Transporters Ltd — trusted since 2006.",
  alternates: { canonical: "https://www.somotransporter.co.ke/services/lpg-transport" },
  openGraph: {
    title: "LPG Transport East Africa | Somo Transporters Ltd",
    description: "Certified LPG transport with pressure-controlled tankers and 24/7 GPS monitoring across East Africa.",
    url: "https://www.somotransporter.co.ke/services/lpg-transport",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const benefits = [
  {
    title: "Explosion Prevention",
    description: "Specially designed tankers with pressure control systems and emergency shutdown mechanisms",
  },
  {
    title: "Real-Time Monitoring",
    description: "GPS tracking with temperature and pressure sensors for 24/7 cargo monitoring",
  },
  {
    title: "Certified Handling",
    description: "Drivers trained in hazardous material handling and emergency response procedures",
  },
];

const steps = [
  { title: "Safety Inspection", description: "Comprehensive vehicle and equipment checks before each deployment" },
  { title: "Secure Loading", description: "Professional handling using certified loading equipment and procedures" },
  { title: "Guarded Transit", description: "Armed escort options and real-time monitoring throughout transportation" },
];

const LpgTransport = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-background">
      <NavbarHeader />
      <main>
        {/* Hero */}
        <div className="relative w-full">
          <div className="w-full h-[400px] sm:h-[500px] md:h-[550px] relative">
            <Image src={TruckImg} alt="LPG transport truck" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              LPG <span className="text-primary">Transport</span>
            </h1>
            <p className="text-white text-lg md:text-xl">Safe and efficient LPG logistics solutions across East Africa</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 space-y-16">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              As a key player in East Africa&apos;s energy logistics, Somo Transporters provides specialized LPG transportation services since 2006. Our expertise in handling flammable gases ensures safe, reliable delivery while maintaining strict HSSE compliance and utilizing state-of-the-art safety equipment.
            </p>
          </section>

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

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Process</h2>
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
                Need Reliable LPG Transportation?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Trust our decade-long expertise in hazardous material logistics. With over 50 specialized vehicles and 96% operational efficiency, we guarantee safe and timely delivery of your LPG products across East Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full px-8">Contact us</Button>
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

export default LpgTransport;
