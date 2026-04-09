"use client";
import React, { useState, useRef } from "react";
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
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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

const whyChooseItems = [
  { icon: <FaShieldAlt className="text-primary text-xl" />, title: "Safety First", desc: "HSSE compliant with comprehensive emergency response plans and strict safety protocols." },
  { icon: <FaTruck className="text-primary text-xl" />, title: "Large Fleet", desc: "Fleet of 53+ specialized trucks with advanced tracking technology." },
  { icon: <FaRoute className="text-primary text-xl" />, title: "Regional Coverage", desc: "Extensive operations across East Africa with cross-border logistics expertise." },
  { icon: <FaUser className="text-primary text-xl" />, title: "Expert Team", desc: "Highly qualified and experienced professionals with local operating knowledge." },
];

const GetQuotation = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { handleSubmit, statusMessage, loading } = useForm();
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const [formData, setFormData] = useState({
    serviceType: "", cargoType: "", weight: "", volume: "",
    origin: "", destination: "", preferredDate: "", safetyRequirements: "",
    requirements: "", name: "", email: "", phone: "", company: "",
  });

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.serviceType) errors.serviceType = "Service type is required";
    if (!formData.cargoType) errors.cargoType = "Cargo type is required";
    if (!formData.origin) errors.origin = "Origin is required";
    if (!formData.destination) errors.destination = "Destination is required";
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.phone) errors.phone = "Phone number is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) errors.email = "Please enter a valid email address";
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
    if (validateForm()) handleSubmit(e, formData);
  };

  const errorClass = (field: string) => formErrors[field] ? "border-destructive" : "";

  return (
    <div className="bg-background w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Request a Personalized Quotation
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Fill out the form below to get a custom quote for your logistics
            needs. We provide cross-border haulage of petroleum products and dry
            cargo across East Africa with a focus on safety and reliability.
          </p>
        </div>

        <Card className="shadow-xl">
          <CardContent className="p-6 md:p-12">
            <form ref={formRef} onSubmit={onSubmit} className="space-y-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                  <FaUser className="text-primary mr-2" /> Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2"><FaUser className="text-primary" /> Full Name <span className="text-destructive">*</span></Label>
                    <Input name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" className={errorClass("name")} />
                    {formErrors.name && <p className="text-destructive text-sm">{formErrors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2"><FaEnvelope className="text-primary" /> Email Address <span className="text-destructive">*</span></Label>
                    <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email address" className={errorClass("email")} />
                    {formErrors.email && <p className="text-destructive text-sm">{formErrors.email}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2"><FaPhone className="text-primary" /> Phone Number <span className="text-destructive">*</span></Label>
                    <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your phone number" className={errorClass("phone")} />
                    {formErrors.phone && <p className="text-destructive text-sm">{formErrors.phone}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2"><FaTruck className="text-primary" /> Company (Optional)</Label>
                    <Input name="company" value={formData.company} onChange={handleChange} placeholder="Your company name" />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Cargo Information */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                  <FaBoxOpen className="text-primary mr-2" /> Cargo Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2"><FaGasPump className="text-primary" /> Service Type <span className="text-destructive">*</span></Label>
                    <Select name="serviceType" value={formData.serviceType} onValueChange={(v) => handleSelectChange("serviceType", v)}>
                      <SelectTrigger className={errorClass("serviceType")}><SelectValue placeholder="Select service type" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="petroleum">Petroleum Products Transport</SelectItem>
                        <SelectItem value="dry-cargo">Dry Cargo Transport</SelectItem>
                        <SelectItem value="lpg">LPG Transport</SelectItem>
                        <SelectItem value="cross-border">Cross-Border Logistics</SelectItem>
                      </SelectContent>
                    </Select>
                    {formErrors.serviceType && <p className="text-destructive text-sm">{formErrors.serviceType}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2"><FaBoxOpen className="text-primary" /> Cargo Type <span className="text-destructive">*</span></Label>
                    <Input name="cargoType" value={formData.cargoType} onChange={handleChange} placeholder="e.g., Diesel, Gasoline, Maize" className={errorClass("cargoType")} />
                    {formErrors.cargoType && <p className="text-destructive text-sm">{formErrors.cargoType}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2"><FaWeightHanging className="text-primary" /> Weight (Optional)</Label>
                    <Input name="weight" value={formData.weight} onChange={handleChange} placeholder="e.g., 20 tons" />
                  </div>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2"><FaBoxOpen className="text-primary" /> Volume (Optional)</Label>
                    <Input name="volume" value={formData.volume} onChange={handleChange} placeholder="e.g., 40 cubic meters" />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Route Information */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                  <FaRoute className="text-primary mr-2" /> Route Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2"><FaRoute className="text-primary" /> Origin <span className="text-destructive">*</span></Label>
                    <Input name="origin" value={formData.origin} onChange={handleChange} placeholder="e.g., Mombasa, Kenya" className={errorClass("origin")} />
                    {formErrors.origin && <p className="text-destructive text-sm">{formErrors.origin}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2"><FaRoute className="text-primary" /> Destination <span className="text-destructive">*</span></Label>
                    <Input name="destination" value={formData.destination} onChange={handleChange} placeholder="e.g., Kampala, Uganda" className={errorClass("destination")} />
                    {formErrors.destination && <p className="text-destructive text-sm">{formErrors.destination}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2"><FaCalendarAlt className="text-primary" /> Preferred Date (Optional)</Label>
                    <Input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2"><FaShieldAlt className="text-primary" /> Safety Requirements (Optional)</Label>
                    <Input name="safetyRequirements" value={formData.safetyRequirements} onChange={handleChange} placeholder="Any specific safety requirements" />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Additional Information */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                  <FaClipboardList className="text-primary mr-2" /> Additional Information
                </h3>
                <div className="space-y-2">
                  <Label className="flex items-center gap-2"><FaClipboardList className="text-primary" /> Special Requirements or Notes</Label>
                  <Textarea name="requirements" value={formData.requirements} onChange={handleTextareaChange} placeholder="Please provide any additional details about your shipment needs" rows={4} />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-4">
                <Button type="submit" size="lg" className="w-full py-6 text-lg font-semibold" disabled={loading}>
                  {loading ? "PROCESSING..." : "REQUEST FREE QUOTATION"}
                </Button>
                {statusMessage.text && (
                  <p className={`text-center text-sm mt-4 ${statusMessage.isError ? "text-destructive" : "text-green-500"}`}>
                    {statusMessage.text}
                  </p>
                )}
                <p className="text-center text-sm text-muted-foreground mt-4">
                  By submitting this form, you agree to our terms and privacy policy. We&apos;ll respond within 24 hours.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-muted/50 border-none text-center">
            <CardContent className="p-6">
              <FaPhone className="text-primary text-3xl mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2 text-card-foreground">Call Us</h3>
              <p className="text-muted-foreground mb-2">Speak to our team directly</p>
              <a href="tel:+254725718871" className="text-primary font-bold block hover:underline">+254 725 718 871</a>
              <a href="tel:+254721327440" className="text-primary font-bold block hover:underline">+254 721 327 440</a>
            </CardContent>
          </Card>
          <Card className="bg-muted/50 border-none text-center">
            <CardContent className="p-6">
              <FaEnvelope className="text-primary text-3xl mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2 text-card-foreground">Email Us</h3>
              <p className="text-muted-foreground mb-2">Send us an email anytime</p>
              <a href="mailto:somotransportersltd@gmail.com" className="text-primary font-bold block hover:underline text-sm sm:text-base break-all">somotransportersltd@gmail.com</a>
            </CardContent>
          </Card>
          <Card className="bg-muted/50 border-none text-center">
            <CardContent className="p-6">
              <FaRoute className="text-primary text-3xl mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2 text-card-foreground">Visit Us</h3>
              <p className="text-muted-foreground mb-2">Our main operations base</p>
              <p className="text-foreground font-medium">Nakuru - Nairobi Road,<br />Pipeline Next to Flamingo Lodge<br />P.O Box 43998, Nairobi - Kenya</p>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-foreground mb-8">
            Why Choose Somo Transporters?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseItems.map((item, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="bg-accent p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-card-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetQuotation;
