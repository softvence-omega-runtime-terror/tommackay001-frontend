import { PricingTier } from "@/components/landing/Pricing";
import { Check, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const PricingCard = ({ tier }: { tier: PricingTier }) => {
  return (
    <div
      className={`flex-1 min-w-full md:min-w-100  bg-white rounded-2xl border  shadow-lg flex flex-col justify-between relative ${
        tier.highlighted ? "border-secondary!" : "border-gray-200!"
      }`}
    >
      {/* Most Popular Badge */}
      {tier.highlighted && (
        <div className="absolute left-1/2 -translate-x-1/2 -top-5  md:-top-4 ">
          <span className="bg-secondary flex gap-2 md:gap-3 text-white text-md text-center items-center tracking-wide px-3 md:px-4 py-2 rounded-full shadow-md">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5" /> Most Popular
          </span>
        </div>
      )}

      {/* Header */}
      <div className="pt-8 px-8">
        <div className="flex flex-col gap-2 items-center">
          <div className="flex flex-col gap-5 items-center">
            <div
              className={`w-10 h-10  rounded-[28px]   flex items-center justify-center ${
                tier.highlighted
                  ? "bg-[#FFF1E9]!"
                  : "bg-gray-200 border-gray-200"
              }`}
            >
              <tier.icon
                size={20}
                className={`${
                  tier.highlighted ? "text-[#FD751F] " : "text-gray-500"
                }`}
              />
            </div>
            <span
              className={`font-inter font-semibold text-xl leading-7.5  text-center  ${
                tier.highlighted ? "text-[#FD751F] " : "text-gray-500"
              }`}
            >
              {tier.name}
            </span>
          </div>
          <div className="flex items-end justify-center pr-2 relative">
            <span className="font-sora font-semibold relative  text-[48px] leading-15 tracking-[-0.96px] text-gray-700">
              {tier.price}
              <span className="font-sora font-bold text-[30px] leading-9.5 text-gray-700">
                /mth
              </span>
            </span>

            <Image
              width={200}
              height={200}
              src="/icon/pound.svg"
              className="absolute w-10 h-10 pointer-events-none -left-8 top-6"
              alt="pound"
            />
          </div>
          <span className="font-inter font-normal text-base leading-6 text-gray-600 text-center">
            Billed monthly.
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 md:p-6 flex flex-col gap-4">
        {tier.features.map((feature, i) => (
          <div key={i} className="flex gap-3 items-center">
            <div
              className={`w-6 h-6 rounded-full  flex items-center justify-center shrink-0 ${
                tier.highlighted
                  ? "bg-[#FFF1E9]!"
                  : "bg-gray-200 border-gray-200"
              }`}
            >
              <Check
                className={`w-4 h-4 ${
                  tier.highlighted ? "text-[#FD751F] " : "text-gray-500"
                }`}
              />
            </div>
            <span className="font-inter font-normal text-base leading-6 text-gray-600">
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-8 py-8 ">
        <Link
          href="/auth/register"
          className={`block w-full text-center py-4 rounded-xl font-inter font-semibold text-base transition-all ${
            tier.highlighted
              ? "bg-secondary hover:bg-brand-orange-600 text-white"
              : "bg-[#A4A7AE]!  text-white hover:bg-gray-50"
          }`}
        >
          Get started
        </Link>
      </div>
    </div>
  );
};
