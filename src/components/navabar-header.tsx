"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { NewLogo } from "@/assets/images/Gallery/gallery";

const NavbarHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="w-full sticky top-0 left-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Responsive sizing */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="relative w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-20 hover:scale-105 transition-transform">
                <Image
                  src={NewLogo}
                  alt="SOMO Logo"
                  fill
                  className="object-contain bg-white rounded-full hover:bg-gray-100 transition-colors"
                  sizes="(max-width: 768px) 48px, (max-width: 1024px) 64px, 100px"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
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
                className={`text-sm lg:text-base px-2 py-1 transition-colors ${
                  isActive(link.href)
                    ? "text-orange-600 font-medium"
                    : "text-gray-700 hover:text-orange-500"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/get-quote">
              <Button className="text-sm lg:text-base px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-full shadow-md transform hover:scale-105 transition-all">
               Request Quotation
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 text-gray-800 hover:text-orange-600"
            >
              {mobileMenuOpen ? (
                <X size={24} className="w-6 h-6" />
              ) : (
                <Menu size={24} className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-3 space-y-2">
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
                className={`block px-3 py-2 text-base ${
                  isActive(link.href)
                    ? "text-orange-600 font-medium"
                    : "text-gray-700 hover:text-orange-500"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-3 pt-1">
              <Link href="/get-quote">
                <Button className="w-full text-base py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-full">
                 Request Quotation
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavbarHeader;