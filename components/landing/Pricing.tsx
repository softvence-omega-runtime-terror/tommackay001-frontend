import React from "react";
import Link from "next/link";
import {
  Check,
  CheckCircle,
  Globe2,
  PoundSterling,
  ShieldCheck,
  Star,
} from "lucide-react";

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

const Pricing = () => {
  return (
    <section id="pricing" className="py-[100px] px-6 bg-[#fdfdff] ">
      <div className="max-w-330 mx-auto flex flex-col gap-20 items-center justify-center">
        {/* Heading */}
        <h2 className="font-sora font-semibold text-3xl leading-12  md:text-[48px] md:leading-[60px] tracking-[-0.96px] text-gray-900 text-center">
          Transparent Pricing
        </h2>

        {/* Pricing Cards */}
        <div className="flex gap-8  items-start justify-center  max-w-full flex-wrap ">
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

const PricingCard = ({ tier }: { tier: PricingTier }) => {
  return (
    <div
      className={`flex-1 min-w-full md:min-w-[320px] max-w-90 bg-white rounded-2xl border overflow-hidden shadow-lg flex flex-col justify-between ${
        tier.highlighted ? "border-primary0" : "border-gray-200"
      }`}
    >
      {/* Header */}
      <div className="pt-8 px-8">
        <div className="flex flex-col gap-2 items-center">
          <div className="flex flex-col gap-5 items-center">
            <div className="w-10 h-10 bg-gray-200 rounded-[28px] border-[6px] border-gray-200 flex items-center justify-center">
              <tier.icon size={20} className="text-gray-500" />
            </div>
            <span className="font-inter font-semibold text-xl leading-7.5 text-gray-500 text-center">
              {tier.name}
            </span>
          </div>
          <div className="flex items-end justify-center pr-2">
            <span className="font-sora font-semibold relative  text-[48px] leading-15 tracking-[-0.96px] text-gray-700">
              {tier.price.split(".")[0]}
              <div className="absolute top-10 right-12 ">
                <PoundSterling size={24} />
              </div>
            </span>
            <span className="font-sora font-bold text-[30px] leading-9.5 text-gray-700">
              .{tier.price.split(".")[1]}
            </span>
            <span className="font-sora font-bold text-[30px] leading-9.5 text-gray-700">
              /mth
            </span>
          </div>
          <span className="font-inter font-normal text-base leading-6 text-gray-600 text-center">
            Billed annually.
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col gap-4">
        {tier.features.map((feature, i) => (
          <div key={i} className="flex gap-3 items-center">
            <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center shrink-0">
              <Check className="w-3 h-3 text-success0" />
            </div>
            <span className="font-inter font-normal text-base leading-6 text-gray-600">
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-8 pb-8">
        <Link
          href="/auth/register"
          className={`block w-full text-center py-4 rounded-xl font-inter font-semibold text-base transition-all ${
            tier.highlighted
              ? "bg-secondary hover:bg-brand-orange-600 text-white"
              : "bg-[#A4A7AE]! border border-[#717680]! text-white hover:bg-gray-50"
          }`}
        >
          Get started
        </Link>
      </div>
    </div>
  );
};

const FreePlanCard = () => {
  return (
    <div className="w-full max-w-285  bg-white rounded-2xl border border-gray-200 shadow-md px-12 py-5 flex items-center justify-between flex-wrap gap-6">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-success flex items-center justify-center">
          <CheckCircle className="w-6 h-6 text-success" />
        </div>
        <div className="flex flex-col">
          <span className="font-inter text-sm text-gray-500">Free</span>
          <div className="flex items-baseline gap-1">
            <span className="font-sora font-bold text-3xl text-gray-900">
              £0
            </span>
            <span className="font-sora font-bold text-xl text-gray-900">
              /mth
            </span>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="flex flex-col gap-2">
        <FeatureItem text="1 Credit Per Month" />
        <FeatureItem text="Visible For 7 Days" />
      </div>

      {/* CTA */}
      <Link
        href="/auth/register"
        className="bg-primary hover:bg-brand-indigo-600 text-white px-10 py-4 rounded-xl font-inter font-semibold text-base transition-all"
      >
        Get started
      </Link>
    </div>
  );
};

const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2">
    <div className="w-5 h-5 rounded-full bg-success flex items-center justify-center">
      <Check className="w-3 h-3 text-success0" />
    </div>
    <span className="font-inter font-medium text-sm text-gray-600">{text}</span>
  </div>
);

export default Pricing;
