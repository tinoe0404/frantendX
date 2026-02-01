"use client";

import { Button } from "@/components/ui/button";
import { markInquiryAsRead } from "@/app/actions/admin";
import { toast } from "sonner";
import { Check } from "lucide-react";

export function MarkAsReadButton({ id }: { id: string }) {
    const handleClick = async () => {
        const result = await markInquiryAsRead(id);
        if (result.success) {
            toast.success(result.message);
        } else {
            toast.error(result.message);
        }
    };

    return (
        <Button onClick={handleClick} size="sm" variant="ghost">
            <Check className="h-4 w-4 mr-1" /> Mark Read
        </Button>
    );
}
