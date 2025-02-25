"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { SomoLogo, SomoLogov1 } from "@/assets/images/images";

const NavbarHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Helper function to determine active link
  const isActive = (path: string) => pathname === path;

  return (
    <header className="w-full sticky top-0 left-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-5 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src={SomoLogov1}
              width={120}
              height={120}
              alt="logo"
              className="mr-2  bg-orange-600 rounded-full "
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 text-xl font-sans">
            <Link
              href="/"
              className={`text-lg px-4 py-2 transition-colors ${
                isActive("/")
                  ? "text-orange-600 font-medium"
                  : "text-gray-800 hover:text-orange-600"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-lg px-4 py-2 transition-colors ${
                isActive("/about")
                  ? "text-orange-600 font-medium"
                  : "text-gray-800 hover:text-orange-600"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className={`text-lg px-4 py-2 transition-colors ${
                isActive("/services")
                  ? "text-orange-600 font-medium"
                  : "text-gray-800 hover:text-orange-600"
              }`}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className={`text-lg px-4 py-2 transition-colors ${
                isActive("/contact")
                  ? "text-orange-600 font-semibold"
                  : "text-gray-800 hover:text-orange-600"
              }`}
            >
              Contact Us
            </Link>
            <Link
              href="/join-us"
              className={`text-lg px-4 py-2 transition-colors ${
                isActive("/join-us")
                  ? "text-orange-600 font-medium"
                  : "text-gray-800 hover:text-orange-600"
              }`}
            >
              Join Us
            </Link>
            <Link
              href="/gallery"
              className={`text-lg px-4 py-2 transition-colors ${
                isActive("/join-us")
                  ? "text-orange-600 font-medium"
                  : "text-gray-800 hover:text-orange-600"
              }`}
            >
            Gallery
            </Link>
            <Link href="/get-quote">
              <Button className="text-lg px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-full shadow-md">
                Get Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Controls */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-800"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-2 pb-3 space-y-3 border-t mt-3">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/services", label: "Services" },
              { href: "/contact", label: "Contact Us" },
              { href: "/join-us", label: "Join Us" },
              { href: "/gallery", label: "Gallery" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 text-lg ${
                  isActive(link.href)
                    ? "text-orange-600 font-medium"
                    : "text-gray-800 hover:text-orange-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/get-quote" className="block pt-2">
              <Button className="w-full text-lg py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-full">
                Get Quote
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default NavbarHeader;
