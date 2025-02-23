import React from "react";
import Image from "next/image";
import { ContactBgImg } from "@/assets/images/images";
import { ArrowRight, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";

const ContactCTA = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={ContactBgImg}
          alt="Contact background"
          fill
          className="object-cover brightness-75"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Ready to Transform Your Logistics?
            </h2>

            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
              Let Somo Transporters handle your transportation needs with
              precision and care. Our expert team is ready to provide you with
              personalized solutions.
            </p>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
              <div className="bg-white/95 backdrop-blur p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <Phone className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Call Us
                </h3>
                <p className="text-gray-600">
                  Available 24/7 for urgent inquiries
                </p>
              </div>

              <div className="bg-white/95 backdrop-blur p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <Mail className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Email Support
                </h3>
                <p className="text-gray-600">Get a response within 2 hours</p>
              </div>

              <div className="bg-white/95 backdrop-blur p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <Clock className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Quick Quote
                </h3>
                <p className="text-gray-600">Instant pricing estimates</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-12">
                <Link href="/contact" >
                <button className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto">
                Contact Our Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
                </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCTA;
