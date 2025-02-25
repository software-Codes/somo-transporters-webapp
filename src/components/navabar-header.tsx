"use client";
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

  const isActive = (path: string) => pathname === path;

  return (
    <header className="w-full sticky top-0 left-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo - Responsive sizing */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="relative w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-24 hover:scale-105 transition-transform">
                <Image
                  src={SomoLogov1}
                  alt="SOMO Logo"
                  fill
                  className="object-contain bg-orange-600 rounded-full hover:bg-orange-700 transition-colors"
                  sizes="(max-width: 768px) 64px, (max-width: 1024px) 96px, 128px"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
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
                className={`text-lg lg:text-xl px-3 py-2 transition-colors ${
                  isActive(link.href)
                    ? "text-orange-600 font-semibold"
                    : "text-gray-800 hover:text-orange-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/get-quote">
              <Button className="text-lg lg:text-xl px-8 py-6 bg-orange-600 hover:bg-orange-700 text-white rounded-full shadow-lg transform hover:scale-105 transition-all">
                Get Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-800 hover:text-orange-600"
            >
              {mobileMenuOpen ? (
                <X size={28} className="w-8 h-8" />
              ) : (
                <Menu size={28} className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-4">
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
                className={`block px-4 py-3 text-xl ${
                  isActive(link.href)
                    ? "text-orange-600 font-semibold"
                    : "text-gray-800 hover:text-orange-600"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Link href="/get-quote">
                <Button className="w-full text-xl py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-full">
                  Get Quote
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
