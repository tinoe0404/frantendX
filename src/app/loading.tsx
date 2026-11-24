import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <Loader2 className="h-12 w-12 animate-spin text-[#D4693A]" />
      <p className="mt-4 text-[#5F5A55] dark:text-[#A09A93] animate-pulse">Loading...</p>
    </div>
  );
}
