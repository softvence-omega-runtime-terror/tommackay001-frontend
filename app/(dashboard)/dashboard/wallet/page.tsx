import { PricingCard } from "@/components/dashboard/subscription/PricingCard";
import CreditStatement from "@/components/dashboard/wallet/CreditStatement";
import PlanOverview from "@/components/dashboard/wallet/PlanOverview";
import { PricingTier } from "@/components/landing/Pricing";
import { Button } from "@/components/ui/Button";
import { Globe2, ShieldCheck, Star } from "lucide-react";

export default function WalletPage() {
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

  return (
    <div className="  md:px-4  md:py-8 space-y-10 w-full max-w-[90vw] lg:max-w-[65vw] xl:max-w-[85vw] 2xl:max-w-[90vw] md:mx-auto lg:mx-0">
      <PlanOverview />
      <div className="flex flex-col">
        <h1>Compare Plans</h1>
        <div className="flex gap-2 py-4">
          <Button variant="outline" className="bg-[#E9EAEB]">
            Silver
          </Button>
          <Button variant="outline" className="bg-[#FEDF89]">
            Gold
          </Button>
          <Button variant="outline" className="bg-[#E9EAEB]">
            Platinum
          </Button>
        </div>
        <div className="flex gap-4 lg:gap-8 items-start justify-center w-full px-4 lg:px-0 lg:max-w-full flex-wrap">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="w-full sm:w-auto flex-1 lg:flex-none min-w-full sm:min-w-fit"
            >
              <PricingCard tier={tier} />
            </div>
          ))}
        </div>
      </div>
      <CreditStatement />
    </div>
  );
}
