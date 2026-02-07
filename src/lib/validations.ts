import { z } from "zod"

export const contactFormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    phone: z.string().min(10, { message: "Please enter a valid phone number." }),
    service: z.string().min(1, { message: "Please select a service." }),
    budget: z.string().optional(),
    website_url: z.string().optional(), // Honeypot field
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
