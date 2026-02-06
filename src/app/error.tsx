"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <AlertTriangle className="h-16 w-16 text-muted-foreground/30 mb-6" aria-hidden="true" />
      <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
        Something went wrong
      </h2>
      <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
        We apologize for the inconvenience. An unexpected error has occurred.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => reset()} size="lg" className="rounded-full">
          Try Again
        </Button>
        <Button onClick={() => (window.location.href = "/")} variant="outline" size="lg" className="rounded-full">
          Return Home
        </Button>
      </div>
    </div>
  );
}
