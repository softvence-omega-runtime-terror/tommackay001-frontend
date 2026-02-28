import { FeatureItem } from "@/components/landing/Pricing";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export const FreePlanCard = () => {
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
        className="bg-primary w-full text-center hover:bg-brand-indigo-600 text-white px-10 py-4 rounded-xl font-inter font-semibold text-base transition-all"
      >
        Get started
      </Link>
    </div>
  );
};
