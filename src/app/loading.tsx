import React from "react";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <Loader2 className="w-12 h-12 text-primary animate-spin" />
      <p className="mt-4 text-muted-foreground text-sm font-medium">Loading...</p>
    </div>
  );
}
