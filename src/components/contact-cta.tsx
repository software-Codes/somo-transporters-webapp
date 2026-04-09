import React from "react";
import Image from "next/image";
import { ContactBgImg } from "@/assets/images/images";
import { ArrowRight, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const contactCards = [
  {
    icon: <Phone className="w-8 h-8 text-primary" />,
    title: "Call Us",
    description: "Available 24/7 for urgent inquiries",
  },
  {
    icon: <Mail className="w-8 h-8 text-primary" />,
    title: "Email Support",
    description: "Get a response within 2 hours",
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "Quick Quote",
    description: "Instant pricing estimates",
  },
];

const ContactCTA = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={ContactBgImg}
          alt="Contact background"
          fill
          className="object-cover brightness-75"
          priority
        />
      </div>

      <div className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Ready to Transform Your Logistics?
            </h2>
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
              Let Somo Transporters handle your transportation needs with
              precision and care. Our expert team is ready to provide you with
              personalized solutions.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
              {contactCards.map((card, index) => (
                <Card key={index} className="bg-white/95 backdrop-blur hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 w-fit">{card.icon}</div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground">{card.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12">
              <Link href="/contact">
                <Button size="lg" className="rounded-full text-lg px-8 py-4 shadow-lg hover:shadow-xl group">
                  Contact Our Team
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCTA;
