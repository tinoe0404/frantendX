"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function markInquiryAsRead(id: string) {
    try {
        await prisma.contactInquiry.update({
            where: { id },
            data: { status: "READ" },
        });
        revalidatePath("/admin/inquiries");
        return { success: true, message: "Marked as read" };
    } catch (error) {
        console.error("Failed to update inquiry:", error);
        return { success: false, message: "Failed to update inquiry" };
    }
}

export async function updatePricingPlan(id: string, price: string) {
    try {
        await prisma.pricingPlan.update({
            where: { id },
            data: { price },
        });
        revalidatePath("/admin/pricing");
        revalidatePath("/pricing"); // Update public page
        return { success: true, message: "Price updated" };
    } catch (error) {
        console.error("Failed to update price:", error);
        return { success: false, message: "Failed to update price" };
    }
}
