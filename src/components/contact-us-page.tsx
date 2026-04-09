"use client";
import React, { useState } from "react";
import {
  FaAddressBook,
  FaPhone,
  FaEnvelope,
  FaMapMarker,
  FaUser,
  FaBriefcase,
  FaCommentDots,
} from "react-icons/fa";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContactFormData, useContactForm } from "@/app/contact/useContactForm";

const ContactUsMainComponent = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    position: "",
    phoneNumber: "",
    message: "",
    _honeypot: "",
  });

  const { handleSubmit, statusMessage, loading } = useContactForm();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await handleSubmit(formData);
    if (success) {
      setFormData({ fullName: "", email: "", position: "", phoneNumber: "", message: "", _honeypot: "" });
    }
  };

  const infoCards = [
    {
      icon: <FaMapMarker className="text-primary text-2xl" />,
      title: "Headquarters",
      content: (
        <>
          Nakuru - Nairobi Road,<br />
          Pipeline Next to Flamingo Lodge<br />
          PO Box 43998, Nairobi - Kenya
        </>
      ),
    },
    {
      icon: <FaPhone className="text-primary text-2xl" />,
      title: "Contacts",
      content: (
        <>
          Tel: +254 725 718 871<br />
          Tel: +254 721 327 440<br />
          Email: somotransportersltd@gmail.com
        </>
      ),
    },
    {
      icon: <FaAddressBook className="text-primary text-2xl" />,
      title: "Office Hours",
      content: (
        <>
          Mon-Fri: 8:00 AM - 6:00 PM<br />
          Saturday: 9:00 AM - 2:00 PM
        </>
      ),
    },
  ];

  return (
    <div className="w-full bg-background">
      {/* Contact Info Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {infoCards.map((card, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-accent p-3 rounded-full">{card.icon}</div>
                  <h3 className="ml-3 text-xl font-semibold text-card-foreground">
                    {card.title}
                  </h3>
                </div>
                <p className="text-muted-foreground">{card.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <div className="rounded-2xl shadow-lg overflow-hidden">
          <div className="relative pt-[56.25%] sm:pt-[40.25%]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6806630845444!2d36.28888588400566!3d-0.47595059828015857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1829a06fba388279%3A0x702934fd8bfbd5d8!2sLake%20Nakuru%20Flamingo%20Lodge!5e0!3m2!1sen!2ske!4v1740487672954!5m2!1sen!2ske"
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <Card className="shadow-lg">
          <CardContent className="p-6 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-card-foreground mb-2">
                Get in Touch
              </h2>
              <p className="text-muted-foreground">Fill the form below to talk to us</p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              {/* Honeypot — hidden from real users, catches bots */}
              <input
                type="text"
                name="_honeypot"
                value={formData._honeypot}
                onChange={handleChange}
                aria-hidden="true"
                tabIndex={-1}
                className="hidden"
                autoComplete="off"
              />
              <div className="space-y-2">
                <Label htmlFor="fullName" className="flex items-center gap-2">
                  <FaUser className="text-primary" />
                  Full Name or Company Name
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <FaEnvelope className="text-primary" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="position" className="flex items-center gap-2">
                    <FaBriefcase className="text-primary" />
                    Position
                  </Label>
                  <Input
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    placeholder="Manager"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phoneNumber" className="flex items-center gap-2">
                    <FaPhone className="text-primary" />
                    Phone Number
                  </Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="0722 455 678"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="flex items-center gap-2">
                  <FaCommentDots className="text-primary" />
                  Your Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what we can help you with"
                  rows={5}
                  required
                />
              </div>

              {statusMessage.text && (
                <p className={`text-sm ${statusMessage.isError ? "text-destructive" : "text-green-500"}`}>
                  {statusMessage.text}
                </p>
              )}

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "SENDING..." : "SEND MESSAGE"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactUsMainComponent;
