"use server";

import { z } from "zod";
import { contactFormSchema, ContactFormValues } from "@/lib/validations";
import { prisma } from "@/lib/prisma";

export async function submitContactForm(data: ContactFormValues) {
    try {
        // 1. Validate data securely on the server
        const validatedFields = contactFormSchema.safeParse(data);

        if (!validatedFields.success) {
            return {
                success: false,
                message: "Invalid fields provided.",
            };
        }

        const { name, email, service, message, budget, website_url } = validatedFields.data;

        // Honeypot check
        if (website_url) {
            return {
                success: false,
                message: "Invalid submission.",
            };
        }

        // 2. Save to database
        await prisma.contactInquiry.create({
            data: {
                name,
                email,
                service,
                message,
                budget,
                status: "UNREAD",
            },
        });

        // 3. Return success
        return {
            success: true,
            message: "Message received! We'll be in touch shortly.",
        };
    } catch (error) {
        console.error("Database Error:", error);
        return {
            success: false,
            message: "Something went wrong. Please try again later.",
        };
    }
}
