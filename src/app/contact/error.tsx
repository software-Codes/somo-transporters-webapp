"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, RefreshCw, Phone, Mail } from "lucide-react";

export default function ContactError({
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
          Contact form unavailable
        </h1>
        <p className="text-muted-foreground mb-8">
          Something went wrong loading the contact form. You can still reach us directly:
        </p>
        <Card className="bg-accent/50 border-none mb-8 text-left">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary flex-shrink-0" />
              <div>
                <p className="text-foreground font-medium">+254 725 718 871</p>
                <p className="text-foreground font-medium">+254 721 327 440</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary flex-shrink-0" />
              <p className="text-foreground font-medium">somotransportersltd@gmail.com</p>
            </div>
          </CardContent>
        </Card>
        <Button onClick={reset} className="rounded-full gap-2">
          <RefreshCw className="w-4 h-4" />
          Try Again
        </Button>
      </div>
    </div>
  );
}
