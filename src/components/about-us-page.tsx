"use client";
import React from "react";
import { FaTachometerAlt, FaShieldAlt, FaUsers, FaMapMarkedAlt, FaGlobeAfrica, FaFileDownload } from "react-icons/fa";
import Footer from "./footer";
import Link from "next/link";
import { Gallery16 } from "@/assets/images/Gallery/gallery";
import Image from "next/image";
import LeadershipStructure from "./LeadershipStructure";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const stats = [
  {
    icon: <FaTachometerAlt className="w-8 h-8" />,
    value: "96%",
    label: "Operational Efficiency",
    description: "Industry-leading asset utilization rate",
  },
  {
    icon: <FaShieldAlt className="w-8 h-8" />,
    value: "15+",
    label: "Safety Certifications",
    description: "HSSE compliance achievements",
  },
  {
    icon: <FaUsers className="w-8 h-8" />,
    value: "50+",
    label: "Professional Staff",
    description: "Dedicated logistics experts",
  },
  {
    icon: <FaMapMarkedAlt className="w-8 h-8" />,
    value: "535km",
    label: "Daily Average",
    description: "Per truck performance metric",
  },
];

const regions = [
  { name: "Kenya", icon: "🇰🇪" },
  { name: "Uganda", icon: "🇺🇬" },
  { name: "South Sudan", icon: "🇸🇸" },
  { name: "Tanzania", icon: "🇹🇿" },
  { name: "Rwanda", icon: "🇷🇼" },
  { name: "DRC Congo", icon: "🇨🇩" },
];

const coreValues = [
  { title: "Safety First", description: "Uncompromising commitment to HSSE standards" },
  { title: "Operational Excellence", description: "96% fleet utilization through efficient systems" },
  { title: "Regional Expertise", description: "Deep understanding of East African logistics" },
  { title: "Client-Centric Approach", description: "Custom solutions for diverse needs" },
  { title: "Sustainability", description: "Eco-friendly practices across operations" },
  { title: "Innovation", description: "GPS tracking and advanced maintenance systems" },
];

const AboutUsPage = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/documents/Somo transporters profile.pdf";
    link.download = "Somo transporters profile.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full bg-background">
      {/* Floating Download Button */}
      <button
        onClick={handleDownload}
        className="fixed bottom-8 right-8 bg-primary hover:bg-primary/90 text-primary-foreground p-4 rounded-full shadow-xl transition-all duration-300 group z-50"
        aria-label="Download company profile"
      >
        <FaFileDownload className="w-6 h-6" />
        <span className="absolute -right-2 top-1/2 -translate-y-1/2 translate-x-full bg-foreground text-background text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Download Profile
        </span>
      </button>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-[350px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
            <Image src={Gallery16} alt="Company history" fill className="object-cover" />
          </div>

          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About <span className="text-primary">Somo Transporters</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Founded in 2006 as a local Kenyan operator, Somo Transporters has
              evolved into a regional logistics powerhouse. Our strategic
              expansion now covers key routes across{" "}
              <strong>Uganda, Kenya, South Sudan, Tanzania, and Rwanda</strong>.
            </p>

            <Button onClick={handleDownload} size="lg" className="w-full sm:w-auto">
              <FaFileDownload className="w-5 h-5 mr-2" />
              Download Company Profile (PDF)
            </Button>

            {/* Regions Coverage */}
            <Card className="bg-accent/50 border-none">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FaGlobeAfrica className="text-primary" />
                  Regional Coverage
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                  {regions.map((region, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="flex items-center gap-2 px-3 py-2 text-sm bg-background"
                    >
                      <span className="text-2xl">{region.icon}</span>
                      <span className="font-medium">{region.name}</span>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-gradient-to-br from-accent/50 to-accent py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl text-foreground md:text-4xl font-bold text-center mb-12">
            Our Milestones
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="text-primary bg-accent p-4 rounded-full">
                    {stat.icon}
                  </div>
                  <h3 className="text-4xl font-bold text-card-foreground">{stat.value}</h3>
                  <p className="text-lg font-semibold text-card-foreground">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision Section with Tabs */}
      <div className="bg-muted/50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Tabs defaultValue="mission" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="mission" className="text-lg">Our Mission</TabsTrigger>
              <TabsTrigger value="vision" className="text-lg">Our Vision</TabsTrigger>
            </TabsList>
            <TabsContent value="mission">
              <Card>
                <CardContent className="p-8">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    To maintain our position as East Africa&apos;s most competitive and
                    HSSE-compliant transporter of petroleum products and dry cargo,
                    delivering exceptional value while ensuring sustainable growth for
                    all stakeholders.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="vision">
              <Card>
                <CardContent className="p-8">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    To redefine regional logistics through cutting-edge technology,
                    unmatched reliability, and a safety-first culture that becomes the
                    industry benchmark for excellence.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Core Values */}
        <div className="max-w-7xl mx-auto px-4 mt-16">
          <h2 className="text-3xl text-foreground font-bold mb-12 text-center">
            Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <LeadershipStructure />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
