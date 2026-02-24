import { PricingTier } from "@/components/landing/Pricing";
import { Check, PoundSterling } from "lucide-react";
import Link from "next/link";

export const PricingCard = ({ tier }: { tier: PricingTier }) => {
  return (
    <div
      className={`flex-1 min-w-full md:min-w-100  bg-white rounded-2xl border overflow-hidden shadow-lg flex flex-col justify-between ${
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
