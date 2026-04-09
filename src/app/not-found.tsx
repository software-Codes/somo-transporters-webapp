"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import NavbarHeader from "@/components/navabar-header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-background">
      <NavbarHeader />
      <main className="flex flex-col items-center justify-center flex-grow px-4 py-16">
        <motion.div
          className="text-center max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-7xl sm:text-8xl font-extrabold text-primary"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          >
            404
          </motion.h1>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-4">
            Page Not Found
          </h2>

          <p className="text-muted-foreground mt-3 text-lg">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          <Separator className="my-8" />

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/">
              <Button size="lg" className="rounded-full gap-2 w-full sm:w-auto">
                <Home className="w-4 h-4" />
                Go Home
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full gap-2"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Button>
          </div>

          <Card className="mt-10 bg-accent/50 border-none">
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-3 flex items-center justify-center gap-2">
                <Search className="w-4 h-4 text-primary" />
                Looking for something?
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {[
                  { label: "Services", href: "/services" },
                  { label: "About Us", href: "/about" },
                  { label: "Contact", href: "/contact" },
                  { label: "Get Quote", href: "/get-quote" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-primary hover:underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
