"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4">
      <div className="text-center max-w-md">
        <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
          <AlertTriangle className="w-8 h-8 text-destructive" />
        </div>

        <h1 className="text-2xl font-bold text-foreground">
          Something went wrong
        </h1>

        <p className="text-muted-foreground mt-3">
          An unexpected error occurred. Please try again or return to the homepage.
        </p>

        <Separator className="my-8" />

        <Card className="bg-muted/50 border-none mb-8">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground font-mono break-all">
              {error.message || "Unknown error"}
            </p>
            {error.digest && (
              <p className="text-xs text-muted-foreground mt-2">
                Error ID: {error.digest}
              </p>
            )}
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" className="rounded-full gap-2" onClick={reset}>
            <RefreshCw className="w-4 h-4" />
            Try Again
          </Button>
          <Link href="/">
            <Button variant="outline" size="lg" className="rounded-full gap-2 w-full">
              <Home className="w-4 h-4" />
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
