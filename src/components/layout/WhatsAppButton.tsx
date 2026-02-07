"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
    const phoneNumber = "263780885780";
    const message = encodeURIComponent(
        "Hello FrantendX, I'm interested in your services."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:bg-[#20bd5a] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            aria-label="Chat with us on WhatsApp"
        >
            <MessageCircle className="h-8 w-8" />
        </Link>
    );
}
