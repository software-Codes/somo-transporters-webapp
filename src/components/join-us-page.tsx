import React from "react";
import { DriverForm } from "./driver-form";
import { Card, CardContent } from "./ui/card";

const benefits = [
  {
    title: "Range of Opportunities",
    content:
      "Work with major clients like Kobil, Banoda Oil, and international partners across East Africa.",
  },
  {
    title: "Flexible Work Schedules",
    content:
      "Efficient route planning and modern fleet management enable adaptable operational hours.",
  },
  {
    title: "Competitive Compensation",
    content:
      "Attractive rates with performance bonuses and rewards for top-performing drivers.",
  },
  {
    title: "Comprehensive Support",
    content:
      "Full maintenance support, safety training, and 24/7 operational assistance.",
  },
];

const steps = [
  { title: "Registration", content: "Complete our online form with vehicle and documentation details" },
  { title: "Verification", content: "Submit required licenses and certifications for approval" },
  { title: "Onboarding", content: "Complete HSSE training and operational briefings" },
  { title: "Deployment", content: "Start assignments with GPS-tracked routes and client coordination" },
];

const JoinUsComponent = () => {
  return (
    <div className="bg-background w-full">
      {/* Benefits Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
            Benefits Of Joining Our Crew
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <span className="text-primary-foreground font-bold text-xl">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
            Steps to Join Our Crew
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-primary/20 rounded-xl blur opacity-25 group-hover:opacity-40 transition" />
                <Card className="relative hover:border-primary transition-all">
                  <CardContent className="p-6">
                    <div className="text-primary text-2xl font-bold mb-3">
                      0{index + 1}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.content}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      <DriverForm />
    </div>
  );
};

export default JoinUsComponent;
