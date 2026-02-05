import { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Contact Us | frantendX Digital Solutions",
    description: "Get in touch with FrantendX Digital Solutions for your next digital project. We're here to help you scale.",
};

export default function ContactPage() {
    return (
        <div className="py-20 md:py-32 bg-background">
            <div className="container px-4 md:px-8 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left Column: Contact Info */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                                Let's Build Your <span className="text-primary">Next Project.</span>
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Ready to scale? Fill out the form and our team will get back to you within 24 hours.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center text-primary shrink-0">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Email Us</h3>
                                    <p className="text-muted-foreground">hello@frantendx.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center text-primary shrink-0">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Our Location</h3>
                                    <p className="text-muted-foreground">Digital Remote (Serving Clients Worldwide)</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center text-primary shrink-0">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Phone</h3>
                                    <p className="text-muted-foreground">+1 (555) 000-0000</p>
                                </div>
                            </div>
                        </div>

                        <Card className="bg-secondary/20 border-border">
                            <CardContent className="p-6">
                                <p className="text-sm font-medium italic text-muted-foreground">
                                    "FrantendX Digital Solutions delivered our SaaS dashboard 2 weeks ahead of schedule. The code quality is exceptional."
                                </p>
                                <p className="text-xs font-bold mt-4 uppercase tracking-wider">— Happy Client</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-border">
                        <h2 className="text-2xl font-bold mb-8">Send us a message</h2>
                        <ContactForm />
                    </div>

                </div>
            </div>
        </div>
    );
}
