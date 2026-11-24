import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import * as React from "react";

interface ContactFormEmailProps {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
    budget?: string;
    website_url?: string;
}

export const ContactFormEmail = ({
    name,
    email,
    phone,
    service,
    message,
    budget,
}: ContactFormEmailProps) => (
    <Html>
        <Head />
        <Preview>New Inquiry from {name}</Preview>
        <Body style={main}>
            <Container style={container}>
                <Heading style={h1}>New Project Inquiry</Heading>
                <Text style={text}>
                    You have received a new inquiry from the contact form on Frantiva Technologies.
                </Text>
                <Section style={section}>
                    <Text style={text}>
                        <strong>Name:</strong> {name}
                    </Text>
                    <Text style={text}>
                        <strong>Email:</strong> {email}
                    </Text>
                    <Text style={text}>
                        <strong>Phone:</strong> {phone}
                    </Text>
                    <Text style={text}>
                        <strong>Service:</strong> {service}
                    </Text>
                    {budget && (
                        <Text style={text}>
                            <strong>Budget:</strong> {budget}
                        </Text>
                    )}
                </Section>
                <Hr style={hr} />
                <Heading as="h2" style={h2}>
                    Message:
                </Heading>
                <Text style={paragraph}>{message}</Text>
                <Hr style={hr} />
                <Text style={footer}>
                    Check your Frantiva Technologies dashboard or reply directly to this email.
                </Text>
            </Container>
        </Body>
    </Html>
);

export default ContactFormEmail;

const main = {
    backgroundColor: "#ffffff",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    maxWidth: "580px",
};

const h1 = {
    color: "#333",
    fontSize: "24px",
    fontWeight: "bold",
    paddingBottom: "10px",
};

const h2 = {
    color: "#333",
    fontSize: "18px",
    fontWeight: "bold",
    paddingTop: "10px",
};

const text = {
    color: "#333",
    fontSize: "16px",
    lineHeight: "24px",
};

const paragraph = {
    color: "#333",
    fontSize: "16px",
    lineHeight: "24px",
    whiteSpace: "pre-wrap" as const,
};

const section = {
    background: "#f9f9f9",
    padding: "20px",
    borderRadius: "5px",
    marginTop: "20px",
    marginBottom: "20px",
};

const hr = {
    borderColor: "#e6ebf1",
    margin: "20px 0",
};

const footer = {
    color: "#8898aa",
    fontSize: "12px",
};
