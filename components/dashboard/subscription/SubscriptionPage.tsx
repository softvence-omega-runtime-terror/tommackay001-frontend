import { Info } from "lucide-react";
import { PricingCard } from "./PricingCard";
import { FreePlanCard } from "./FreePlanCard";
import { tiers } from "@/components/landing/Pricing";

export default function SubscriptionPage() {
  return (
    <div className=" flex flex-col gap-12 lg:gap-20 items-center justify-center w-full max-w-[90vw] lg:max-w-[65vw] xl:max-w-[85vw] 2xl:max-w-[90vw] md:mx-auto lg:mx-0">
      <div className="px-4 lg:px-8 py-8 lg:py-10 text-center max-w-5xl">
        <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900">
          Membership Tiers
        </h2>
        <p className="mt-3 text-base lg:text-xl text-gray-600 max-w-2xl mx-auto">
          Scale your outreach with enterprise-grade tiers management and task
          tracking
        </p>

        <div className="mt-6 inline-flex items-start lg:items-center text-left gap-2 px-3 lg:px-5 py-2.5 bg-white rounded-xl text-sm lg:text-base text-gray-500">
          <Info className="w-4 h-4 lg:w-5 lg:h-5 shrink-0 mt-0.5 lg:mt-0" />
          <span>
            These are verified placements from previously completed tasks.
            Sensitive information has been redacted to maintain network
            integrity.
          </span>
        </div>
      </div>
      <div className="flex gap-4 lg:gap-8 items-start justify-center w-full px-4 lg :px-0 lg:max-w-full flex-wrap">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className="w-full sm:w-auto flex-1 lg:flex-none min-w-full sm:min-w-fit"
          >
            <PricingCard tier={tier} />
          </div>
        ))}
      </div>

      <FreePlanCard />
    </div>
  );
}
