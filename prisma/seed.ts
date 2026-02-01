import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('Start seeding...')

    // Seed Pricing Plans
    const plans = [
        {
            name: "Starter",
            price: "$150+",
            description: "Perfect for small businesses looking for a professional start.",
            features: ["Custom Design", "SEO basic", "Contact Form", "Mobile Responsive", "1 Month Support"],
            highlighted: false,
            order: 1,
        },
        {
            name: "Business",
            price: "$400+",
            description: "For growing companies needing more features and visibility.",
            features: [
                "Everything in Starter",
                "CMS Integration",
                "Blog Section",
                "Advanced Analytics",
                "3 Months Support",
                "Fast Performance Opt."
            ],
            highlighted: true, // Making this pop
            order: 2,
        },
        {
            name: "Enterprise",
            price: "Custom",
            description: "Complex Web Apps tailored to unique business logic.",
            features: [
                "Everything in Business",
                "User Authentication",
                "Complex Databases",
                "API Integrations",
                "Ongoing Maintenance",
                "SLA Guarantee"
            ],
            highlighted: false,
            order: 3,
        },
    ]

    for (const plan of plans) {
        const existingPlan = await prisma.pricingPlan.findFirst({
            where: { name: plan.name }
        })

        if (!existingPlan) {
            await prisma.pricingPlan.create({
                data: plan,
            })
            console.log(`Created plan: ${plan.name}`)
        } else {
            console.log(`Plan already exists: ${plan.name}`)
        }
    }

    // Seed Testimonials
    const testimonials = [
        {
            client: "Sarah J.",
            company: "CEO, TechStart",
            content: "frantendX transformed our digital presence. The AI integration significantly boosted our efficiency.",
            approved: true,
        },
        {
            client: "Michael B.",
            company: "Founder, GreenWave",
            content: "Incredible attention to detail and performance. Our site loads instantly and looks stunning.",
            approved: true,
        },
        {
            client: "Jessica L.",
            company: "CTO, FutureCorp",
            content: "The best agency we've worked with. Professional, fast, and technically brilliant.",
            approved: true,
        }
    ]

    for (const t of testimonials) {
        await prisma.testimonial.create({
            data: t
        })
        console.log(`Created testimonial from: ${t.client}`)
    }

    console.log('Seeding finished.')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
