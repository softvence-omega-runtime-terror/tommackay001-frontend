"use client";

import React from "react";
import { Globe2, Info, ShieldCheck, Star } from "lucide-react";
import { PricingCard } from "@/components/dashboard/subscription/PricingCard";
import { FreePlanCard } from "@/components/dashboard/subscription/FreePlanCard";

interface PricingTier {
  name: string;
  icon: React.ElementType;
  price: string;
  features: string[];
  highlighted?: boolean;
}

const tiers: PricingTier[] = [
  {
    name: "Silver",
    price: "44.99",
    icon: Globe2,
    features: [
      "5 task credits included",
      "1 active website",
      "Basic visibility options",
      "Standard support",
      "Task history for 30 days",
      "Email notifications",
    ],
  },
  {
    name: "Gold",
    price: "79.99",
    icon: Star,
    features: [
      "15 task credits included",
      "3 active websites",
      "Enhanced visibility options",
      "Priority support",
      "Task history for 90 days",
      "Advanced analytics",
    ],
    highlighted: true,
  },
  {
    name: "Platinum",
    price: "139.99",
    icon: ShieldCheck,
    features: [
      "40 task credits included",
      "10 active websites",
      "Maximum visibility options",
      "Dedicated account manager",
      "Unlimited task history",
      "Custom reporting",
    ],
  },
];

export default function RequesterSubscriptionPage() {
  return (
    <div className="w-full flex flex-col gap-20 items-center justify-center">
      <div className="px-4 lg:px-8 py-10 text-center max-w-5xl">
        <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900">
          Membership Tiers
        </h2>
        <p className="mt-3 text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
          Scale your outreach with enterprise-grade tiers management and task
          tracking
        </p>

        {/* Note Banner */}
        <div className="mt-6 inline-flex items-center text-left gap-2 px-4 lg:px-5 py-2.5 bg-white rounded-xl text-sm lg:text-base text-gray-500">
          <Info className="w-5 h-5 shrink-0" />
          <span>
            These are verified placements from previously completed tasks.
            Sensitive information has been redacted to maintain network
            integrity.
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="flex gap-4 lg:gap-8 items-start justify-center max-w-full px-4 flex-wrap">
        {tiers.map((tier) => (
          <div key={tier.name} className="w-full sm:w-auto">
            <PricingCard tier={tier} />
          </div>
        ))}
      </div>

      {/* Free Plan */}
      <FreePlanCard />
    </div>
  );
}
