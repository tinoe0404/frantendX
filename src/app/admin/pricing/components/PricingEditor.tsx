"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { updatePricingPlan } from "@/app/actions/admin";
import { toast } from "sonner";
import { Save } from "lucide-react";

export function PricingEditor({ plan }: { plan: any }) {
    const [price, setPrice] = useState(plan.price);
    const [isSaving, setIsSaving] = useState(false);

    const handleSave = async () => {
        setIsSaving(true);
        const result = await updatePricingPlan(plan.id, price);
        if (result.success) {
            toast.success(result.message);
        } else {
            toast.error(result.message);
        }
        setIsSaving(false);
    };

    return (
        <div className="space-y-4">
            <div>
                <label className="text-sm font-medium mb-1 block text-muted-foreground">Price Display</label>
                <div className="flex gap-2">
                    <Input
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <Button onClick={handleSave} disabled={isSaving} size="icon">
                        <Save className="h-4 w-4" />
                    </Button>
                </div>
            </div>
            <div>
                <p className="text-sm text-muted-foreground mb-2">Included Features:</p>
                <ul className="text-sm space-y-1 list-disc pl-4">
                    {plan.features.map((f: string, i: number) => (
                        <li key={i}>{f}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
