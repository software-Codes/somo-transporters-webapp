"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { Frontview } from "@/assets/images/images";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FaGasPump,
  FaBoxOpen,
  FaRoute,
  FaWeightHanging,
  FaPhone,
  FaUser,
  FaClipboardList,
  FaEnvelope,
  FaTruck,
  FaCalendarAlt,
  FaShieldAlt,
} from "react-icons/fa";
import { useForm } from "@/app/get-quote/useForm";

const GetQuotation = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { handleSubmit, statusMessage, loading } = useForm();
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const [formData, setFormData] = useState({
    serviceType: "",
    cargoType: "",
    weight: "",
    volume: "",
    origin: "",
    destination: "",
    preferredDate: "",
    safetyRequirements: "",
    requirements: "",
    // Contact information fields
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  // Validate form
  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    // Required fields
    if (!formData.serviceType) errors.serviceType = "Service type is required";
    if (!formData.cargoType) errors.cargoType = "Cargo type is required";
    if (!formData.origin) errors.origin = "Origin is required";
    if (!formData.destination) errors.destination = "Destination is required";
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.phone) errors.phone = "Phone number is required";

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      handleSubmit(e, formData);
    }
  };

  return (
    <div className="bg-white w-full">
      {/* Hero Section with Overlay */}
      <div className="relative w-full">
        <div className="w-full h-[500px] sm:h-[600px] md:h-[500px] relative">
          <Image
            src={Frontview}
            alt="Somo Transporters operations"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-orange-500">Get Your Free</span> Transport
            Quotation
          </h1>
          <p className="text-white font-sans text-lg md:text-xl max-w-3xl mx-auto mb-6">
            Providing expedited and reliable transport of petroleum products and
            dry cargo across East Africa since 2006. Let us create a custom
            logistics solution for your business.
          </p>
          <div className="flex space-x-4 mt-4">
            <div className="flex items-center bg-white bg-opacity-20 rounded-lg px-4 py-2">
              <FaShieldAlt className="text-orange-500 mr-2" />
              <span className="text-white font-medium">Safety First</span>
            </div>
            <div className="flex items-center bg-white bg-opacity-20 rounded-lg px-4 py-2">
              <FaTruck className="text-orange-500 mr-2" />
              <span className="text-white font-medium">
                Fleet of 53+ Trucks
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Request Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Request a Personalized Quotation
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Fill out the form below to get a custom quote for your logistics
            needs. We provide cross-border haulage of petroleum products and dry
            cargo across East Africa with a focus on safety and reliability.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-12 border border-gray-100">
          <form ref={formRef} onSubmit={onSubmit} className="space-y-8">
            {/* Contact Information Section - Moved to top for better UX */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <FaUser className="text-orange-500 mr-2" />
                Contact Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-gray-700">
                    <FaUser className="text-orange-500" />
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={formErrors.name ? "border-red-500" : ""}
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm">{formErrors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-gray-700">
                    <FaEnvelope className="text-orange-500" />
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    className={formErrors.email ? "border-red-500" : ""}
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm">{formErrors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-gray-700">
                    <FaPhone className="text-orange-500" />
                    Phone Number <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className={formErrors.phone ? "border-red-500" : ""}
                  />
                  {formErrors.phone && (
                    <p className="text-red-500 text-sm">{formErrors.phone}</p>
                  )}
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-gray-700">
                    <FaTruck className="text-orange-500" />
                    Company (Optional)
                  </Label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                  />
                </div>
              </div>
            </div>

            {/* Cargo Details Section */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <FaBoxOpen className="text-orange-500 mr-2" />
                Cargo Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Service Type */}
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-gray-700">
                    <FaGasPump className="text-orange-500" />
                    Service Type <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    name="serviceType"
                    value={formData.serviceType}
                    onValueChange={(value) =>
                      handleSelectChange("serviceType", value)
                    }
                  >
                    <SelectTrigger
                      className={formErrors.serviceType ? "border-red-500" : ""}
                    >
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="petroleum">
                        Petroleum Products Transport
                      </SelectItem>
                      <SelectItem value="dry-cargo">
                        Dry Cargo Transport
                      </SelectItem>
                      <SelectItem value="lpg">LPG Transport</SelectItem>
                      <SelectItem value="cross-border">
                        Cross-Border Logistics
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {formErrors.serviceType && (
                    <p className="text-red-500 text-sm">
                      {formErrors.serviceType}
                    </p>
                  )}
                </div>

                {/* Cargo Type */}
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-gray-700">
                    <FaBoxOpen className="text-orange-500" />
                    Cargo Type <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    name="cargoType"
                    value={formData.cargoType}
                    onChange={handleChange}
                    placeholder="e.g., Diesel, Gasoline, Maize, Construction Materials"
                    className={formErrors.cargoType ? "border-red-500" : ""}
                  />
                  {formErrors.cargoType && (
                    <p className="text-red-500 text-sm">
                      {formErrors.cargoType}
                    </p>
                  )}
                </div>

                {/* Weight */}
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-gray-700">
                    <FaWeightHanging className="text-orange-500" />
                    Weight (Optional)
                  </Label>
                  <Input
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    placeholder="e.g., 20 tons"
                  />
                </div>

                {/* Volume */}
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-gray-700">
                    <FaBoxOpen className="text-orange-500" />
                    Volume (Optional)
                  </Label>
                  <Input
                    name="volume"
                    value={formData.volume}
                    onChange={handleChange}
                    placeholder="e.g., 40 cubic meters"
                  />
                </div>
              </div>
            </div>

            {/* Route Details Section */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <FaRoute className="text-orange-500 mr-2" />
                Route Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Origin */}
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-gray-700">
                    <FaRoute className="text-orange-500" />
                    Origin <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    name="origin"
                    value={formData.origin}
                    onChange={handleChange}
                    placeholder="e.g., Mombasa, Kenya"
                    className={formErrors.origin ? "border-red-500" : ""}
                  />
                  {formErrors.origin && (
                    <p className="text-red-500 text-sm">{formErrors.origin}</p>
                  )}
                </div>

                {/* Destination */}
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-gray-700">
                    <FaRoute className="text-orange-500" />
                    Destination <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="e.g., Kampala, Uganda"
                    className={formErrors.destination ? "border-red-500" : ""}
                  />
                  {formErrors.destination && (
                    <p className="text-red-500 text-sm">
                      {formErrors.destination}
                    </p>
                  )}
                </div>

                {/* Preferred Date */}
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-gray-700">
                    <FaCalendarAlt className="text-orange-500" />
                    Preferred Date (Optional)
                  </Label>
                  <Input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                  />
                </div>

                {/* Safety Requirements */}
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-gray-700">
                    <FaShieldAlt className="text-orange-500" />
                    Safety Requirements (Optional)
                  </Label>
                  <Input
                    name="safetyRequirements"
                    value={formData.safetyRequirements}
                    onChange={handleChange}
                    placeholder="Any specific safety requirements"
                  />
                </div>
              </div>
            </div>

            {/* Additional Requirements */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <FaClipboardList className="text-orange-500 mr-2" />
                Additional Information
              </h3>

              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-gray-700">
                  <FaClipboardList className="text-orange-500" />
                  Special Requirements or Notes
                </Label>
                <Textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleTextareaChange}
                  placeholder="Please provide any additional details about your shipment needs"
                  rows={4}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg font-semibold"
                disabled={loading}
              >
                {loading ? "PROCESSING..." : "REQUEST FREE QUOTATION"}
              </Button>
              {statusMessage.text && (
                <p
                  className={`text-center text-sm mt-4 ${
                    statusMessage.isError ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {statusMessage.text}
                </p>
              )}

              <p className="text-center text-sm text-gray-600 mt-4">
                By submitting this form, you agree to our terms and privacy
                policy. We'll respond to your request within 24 hours.
              </p>
            </div>
          </form>
        </div>

        {/* Rest of the contact information and "Why Choose Us" sections remain unchanged */}
        {/* Contact Information Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
            <FaPhone className="text-orange-500 text-3xl mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Call Us</h3>
            <p className="text-gray-600 mb-2">Speak to our team directly</p>
            <a
              href="tel:+254725718871"
              className="text-orange-500 font-bold block hover:underline"
            >
              +254 725 718 871
            </a>
            <a
              href="tel:+254721327440"
              className="text-orange-500 font-bold block hover:underline"
            >
              +254 721 327 440
            </a>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
            <FaEnvelope className="text-orange-500 text-3xl mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Email Us</h3>
            <p className="text-gray-600 mb-2">Send us an email anytime</p>
            <a
              href="mailto:somotransportersltd@gmail.com"
              className="text-orange-500 font-bold block hover:underline"
            >
              somotransportersltd@gmail.com
            </a>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
            <FaRoute className="text-orange-500 text-3xl mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Visit Us</h3>
            <p className="text-gray-600 mb-2">Our main operations base</p>
            <p className="text-gray-800 font-medium">
              Nakuru - Nairobi Road,
              <br />
              Pipeline Next to Flamingo Lodge
              <br />
              P.O Box 43998, Nairobi - Kenya
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Why Choose Somo Transporters?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="bg-orange-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <FaShieldAlt className="text-orange-500 text-xl" />
              </div>
              <h3 className="font-bold text-lg mb-2">Safety First</h3>
              <p className="text-gray-600">
                HSSE compliant with comprehensive emergency response plans and
                strict safety protocols.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="bg-orange-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <FaTruck className="text-orange-500 text-xl" />
              </div>
              <h3 className="font-bold text-lg mb-2">Large Fleet</h3>
              <p className="text-gray-600">
                Fleet of 53+ specialized trucks with advanced tracking
                technology.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="bg-orange-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <FaRoute className="text-orange-500 text-xl" />
              </div>
              <h3 className="font-bold text-lg mb-2">Regional Coverage</h3>
              <p className="text-gray-600">
                Extensive operations across East Africa with cross-border
                logistics expertise.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="bg-orange-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <FaUser className="text-orange-500 text-xl" />
              </div>
              <h3 className="font-bold text-lg mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Highly qualified and experienced professionals with local
                operating knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetQuotation;
