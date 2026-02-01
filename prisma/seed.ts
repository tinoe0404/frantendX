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
