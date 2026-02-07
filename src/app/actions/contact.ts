"use server";

import { z } from "zod";
import { contactFormSchema, ContactFormValues } from "@/lib/validations";
import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import ContactFormEmail from "@/emails/contact-form-email";

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

        const { name, email, phone, service, message, budget, website_url } = validatedFields.data;

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
                phone,
                service,
                message,
                budget,
                status: "UNREAD",
            },
        });

        // 3. Send Email Notification via Nodemailer
        try {
            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: Number(process.env.SMTP_PORT) || 587,
                secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                },
            });

            const emailHtml = await render(
                ContactFormEmail({
                    name,
                    email,
                    phone,
                    service,
                    message,
                    budget,
                })
            );

            await transporter.sendMail({
                from: process.env.SMTP_USER, // Sender address matching the authenticated user to avoid spam filters
                to: "info@frantendxsolutions.co.zw", // Your receiving email
                replyTo: email, // Reply to the user's email
                subject: `New Inquiry from ${name} - ${service}`,
                html: emailHtml,
            });

        } catch (emailError) {
            console.error("Failed to send email:", emailError);
            // We don't fail the request here because the DB save was successful
        }

        // 4. Return success
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
