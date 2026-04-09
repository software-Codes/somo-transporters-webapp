"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { NewLogo } from "@/assets/images/Gallery/gallery";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
  { href: "/join-us", label: "Join Us" },
  { href: "/gallery", label: "Gallery" },
];

const NavbarHeader = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <header className="w-full sticky top-0 left-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-20 lg:h-16 hover:scale-105 transition-transform">
                <Image
                  src={NewLogo}
                  alt="SOMO Logo"
                  fill
                  className="object-contain rounded-full bg-white p-0.5"
                  sizes="(max-width: 768px) 48px, (max-width: 1024px) 56px, 80px"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm lg:text-base px-3 py-2 rounded-md transition-colors ${
                  isActive(link.href)
                    ? "text-primary font-medium bg-accent"
                    : "text-muted-foreground hover:text-primary hover:bg-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 ml-2">
              <ThemeToggle />
              <Link href="/get-quote">
                <Button className="text-sm lg:text-base rounded-full shadow-md hover:scale-105 transition-all">
                  Request Quotation
                </Button>
              </Link>
            </div>
          </nav>

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex md:hidden items-center gap-1">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 bg-background">
                <SheetTitle className="text-lg font-semibold text-primary">
                  Somo Transporters
                </SheetTitle>
                <Separator className="my-4" />
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className={`block px-3 py-2.5 rounded-md text-base transition-colors ${
                          isActive(link.href)
                            ? "text-primary font-medium bg-accent"
                            : "text-muted-foreground hover:text-primary hover:bg-accent"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                  <Separator className="my-3" />
                  <SheetClose asChild>
                    <Link href="/get-quote">
                      <Button className="w-full rounded-full">
                        Request Quotation
                      </Button>
                    </Link>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  );
};

export default NavbarHeader;
