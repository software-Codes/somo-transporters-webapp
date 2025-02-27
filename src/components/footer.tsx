import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";
import { NewLogo } from "@/assets/images/Gallery/gallery";

const Footer = () => {
  const socialIcons = {
    facebook:
      "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  };

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="block w-48">
              <Image
                src={NewLogo}
                alt="Somo Transporters"
                width={180}
                height={60}
                className="w-auto h-12 bg-white rounded-full "
              />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Somo Transporters is a leading logistics provider specializing in
              cross-border haulage of petroleum products for reputable
              corporations in East Africa since 2006.
            </p>
            <div className="flex items-center space-x-4">
              {Object.entries(socialIcons).map(([platform, path]) => (
                <Link
                  key={platform}
                  href={`https://www.facebook.com/share/18QsQoidbb/?mibextid=qi2Omg`}
                  className="text-orange-500 hover:text-orange-600 transition-colors"
                  aria-label={`Follow us on ${platform}`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d={path} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                "Transport & Logistics",
                "Freight Services",
                "Last Mile Delivery",
                "Warehousing",
                "Custom Solutions",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href={`/services/${service
                      .toLowerCase()
                      .replace(/ /g, "-")}`}
                    className="text-gray-600 hover:text-orange-500 transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-orange-500 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-orange-500 transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li></li>
              <li>
                <Link
                  href="/get-quote"
                  className="text-gray-600 hover:text-orange-500 transition-colors text-sm"
                >
                  Get personalized quotation
                </Link>
              </li>
              <li>
                <Link
                  href="/join-us"
                  className="text-gray-600 hover:text-orange-500 transition-colors text-sm"
                >
                  Join us 
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <div className="text-gray-600 text-sm">
                  <p>+254 725 718 871</p>
                  <p>+254 721 327 440</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600 text-sm">
                  Nakuru - Nairobi Road, Pipeline Next to Flamingo Lodge,
                  Nakuru, Kenya
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600 text-sm">
                  somotransportersltd@gmail.com
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © 2025 Somo Transporters. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {["Privacy Policy", "Terms & Conditions"].map((item) => (
                <Link
                  key={item}
                  href={`/${item
                    .toLowerCase()
                    .replace(/ & /g, "-")
                    .replace(/ /g, "-")}`}
                  className="text-gray-600 hover:text-orange-500 transition-colors text-sm"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
