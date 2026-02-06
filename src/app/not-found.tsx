import Link from "next/link";
import { FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <FileQuestion className="h-16 w-16 text-muted-foreground/30 mb-6" aria-hidden="true" />
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
        404
      </h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-md leading-relaxed">
        {"Sorry, we couldn't find the page you're looking for."}
      </p>
      <Button asChild size="lg" className="rounded-full bg-brand text-brand-foreground hover:bg-brand/90">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
