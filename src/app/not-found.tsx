import Link from "next/link";
import { FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
            <FileQuestion className="h-24 w-24 text-primary/20 mb-6" aria-hidden="true" />
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
                404 - Page Not Found
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md">
                Sorry, we couldn't find the page you're looking for. It might have been removed or renamed.
            </p>
            <Button asChild size="lg">
                <Link href="/">Return Home</Link>
            </Button>
        </div>
    );
}
