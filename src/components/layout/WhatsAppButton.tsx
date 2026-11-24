"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "263780885780";
  const message = encodeURIComponent(
    "Hello Frantiva Technologies, I'm interested in your services."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#141210] dark:bg-[#FAF7F4] text-[#FAF7F4] dark:text-[#141210] hover:bg-[#D4693A] dark:hover:bg-[#D4693A] dark:hover:text-white transition-all duration-200"
      aria-label="Direct Technical Support on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="sr-only">Chat on WhatsApp</span>
    </Link>
  );
}
