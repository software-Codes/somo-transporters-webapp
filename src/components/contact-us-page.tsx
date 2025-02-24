"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Frontview } from "@/assets/images/images";
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
import { ContactFormData, useContactForm } from "@/app/contact/useContactForm";

const ContactUsMainComponent = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    position: "",
    phoneNumber: "",
    message: "",
  });

  const { handleSubmit, statusMessage, loading } = useContactForm();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await handleSubmit(formData);
    if (success) {
      setFormData({
        fullName: "",
        email: "",
        position: "",
        phoneNumber: "",
        message: "",
      });
    }
  };

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="relative w-full">
        <div className="w-full h-[500px] sm:h-[600px] md:h-[500px] relative">
          <Image
            src={Frontview}
            alt="Somo Transporters operations"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-16">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Contact <span className="text-orange-500">Somo Transporters</span>
            </h1>
            <p className="text-white font-sans text-lg md:text-xl max-w-2xl mx-auto">
              LET IT FLOW ALL THE WAY | SAFETY FIRST
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <FaMapMarker className="text-orange-500 text-2xl" />
              </div>
              <h3 className="ml-3 text-xl font-semibold text-gray-800">
                Headquarters
              </h3>
            </div>
            <p className="text-gray-600">
              Nakuru - Nairobi Road,
              <br />
              Pipeline Next to Flamingo Lodge
              <br />
              PO Box 43998, Nairobi - Kenya
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <FaPhone className="text-orange-500 text-2xl" />
              </div>
              <h3 className="ml-3 text-xl font-semibold text-gray-800">
                Contacts
              </h3>
            </div>
            <p className="text-gray-600">
              Tel: +254 725 718 871
              <br />
              Tel: +254 721 327 440
              <br />
              Email: somotransportersltd@gmail.com
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <FaAddressBook className="text-orange-500 text-2xl" />
              </div>
              <h3 className="ml-3 text-xl font-semibold text-gray-800">
                Office Hours
              </h3>
            </div>
            <p className="text-gray-600">
              Mon-Fri: 8:00 AM - 6:00 PM
              <br />
              Saturday: 9:00 AM - 2:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Get in Touch
            </h2>
            <p className="text-gray-600">Fill the form below to talk to us</p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label
                htmlFor="fullName"
                className="flex items-center gap-2 text-gray-700"
              >
                <FaUser className="text-orange-500" />
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
              <Label
                htmlFor="email"
                className="flex items-center gap-2 text-gray-700"
              >
                <FaEnvelope className="text-orange-500" />
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
                <Label
                  htmlFor="position"
                  className="flex items-center gap-2 text-gray-700"
                >
                  <FaBriefcase className="text-orange-500" />
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
                <Label
                  htmlFor="phoneNumber"
                  className="flex items-center gap-2 text-gray-700"
                >
                  <FaPhone className="text-orange-500" />
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
              <Label
                htmlFor="message"
                className="flex items-center gap-2 text-gray-700"
              >
                <FaCommentDots className="text-orange-500" />
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
              <p
                className={`text-sm ${
                  statusMessage.isError ? "text-red-500" : "text-green-500"
                }`}
              >
                {statusMessage.text}
              </p>
            )}

            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              disabled={loading}
            >
              {loading ? "SENDING..." : "SEND MESSAGE"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsMainComponent;