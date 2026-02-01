import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PricingEditor } from "./components/PricingEditor"; // Client component

export default async function PricingAdminPage() {
    const plans = await prisma.pricingPlan.findMany({
        orderBy: { order: "asc" },
    });

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Pricing Plans</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {plans.map((plan: any) => (
                    <Card key={plan.id} className={plan.highlighted ? "border-primary" : ""}>
                        <CardHeader>
                            <CardTitle className="flex justify-between items-center">
                                {plan.name}
                                {plan.highlighted && <span className="text-xs bg-primary text-secondary rounded px-2 py-1">Featured</span>}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <PricingEditor plan={plan} />
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
