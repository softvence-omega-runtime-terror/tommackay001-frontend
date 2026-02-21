import React from "react";
import Link from "next/link";
import { Check, CheckCircle, Globe2, ShieldCheck, Star } from "lucide-react";
import { PricingCard } from "../dashboard/subscription/PricingCard";
import { FreePlanCard } from "../dashboard/subscription/FreePlanCard";

export interface PricingTier {
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

const Pricing = () => {
  return (
    <section id="pricing" className="py-10 md:py-25 px-6 bg-[#fdfdff] ">
      <div className="max-w-330 mx-auto flex flex-col gap-20 items-center justify-center">
        {/* Heading */}
        <h2 className="font-sora font-semibold text-3xl leading-12  md:text-[48px] md:leading-15 tracking-[-0.96px] text-gray-900 text-center">
          Transparent Pricing
        </h2>

        {/* Pricing Cards */}
        <div className="flex gap-8  items-start justify-center   flex-wrap ">
          {tiers.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </div>

        {/* Free Plan */}
        <FreePlanCard />
      </div>
    </section>
  );
};

export const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2">
    <div className="w-5 h-5 rounded-full bg-success flex items-center justify-center">
      <Check className="w-3 h-3 text-success0" />
    </div>
    <span className="font-inter font-medium text-sm text-gray-600">{text}</span>
  </div>
);

export default Pricing;
