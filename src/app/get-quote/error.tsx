"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, RefreshCw, Phone } from "lucide-react";
import Link from "next/link";

export default function GetQuoteError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-background px-4 py-16">
      <div className="text-center max-w-md">
        <div className="mx-auto w-14 h-14 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
          <AlertTriangle className="w-7 h-7 text-destructive" />
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-3">
          Quote form unavailable
        </h1>
        <p className="text-muted-foreground mb-8">
          We couldn&apos;t load the quotation form. Call us directly for an instant quote:
        </p>
        <Card className="bg-accent/50 border-none mb-8">
          <CardContent className="p-6 flex items-center justify-center gap-3">
            <Phone className="w-5 h-5 text-primary" />
            <div className="text-left">
              <a href="tel:+254725718871" className="block text-foreground font-semibold hover:text-primary transition-colors">
                +254 725 718 871
              </a>
              <a href="tel:+254721327440" className="block text-foreground font-semibold hover:text-primary transition-colors">
                +254 721 327 440
              </a>
            </div>
          </CardContent>
        </Card>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={reset} className="rounded-full gap-2">
            <RefreshCw className="w-4 h-4" />
            Try Again
          </Button>
          <Link href="/contact">
            <Button variant="outline" className="rounded-full w-full sm:w-auto">
              Contact Us Instead
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
