"use client";

import { Button } from "@/components/ui/Button";
import {
  CreditCard,
  Info,
  FileText,
  Check,
  ListRestartIcon,
  ShoppingBag,
} from "lucide-react";
import BuyVisibilityCreditModal from "../provider/visivility/Buyvisibilitycreditmodal";
import { useState } from "react";

export default function PlanOverview() {
  const [buyModalOpen, setBuyModalOpen] = useState(false);
  return (
    <div className="space-y-8">
      <BuyVisibilityCreditModal
        open={buyModalOpen}
        onClose={() => setBuyModalOpen(false)}
      />
      {/* Header */}
      <div className="px-6 py-4 bg-white rounded-2xl border border-gray-200">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Your Plan Overview
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Your plan defines how many websites, credits, and tasks you can
              run each month.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-100 text-amber-800 rounded-full font-medium text-sm">
              <span className="text-amber-600">★</span> Gold Plan
            </span>
            <Button className="w-full ">Upgrade Plan</Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 ">
        {/* Left Section: Plan Benefits */}
        <div className="lg:col-span-3 space-y-6">
          {/* Plan Benefits */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200">
            <h3 className="text-md font-normal text-[#DC6803] mb-4 bg-[#FEDF89] w-fit px-3 py-2 rounded-full">
              Gold Plan Benefits
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Up to 5 websites",
                "10 task credits per website / month",
                "Run up to 10 tasks at the same time",
                "Priority marketplace matching",
                "Advanced filters & sorting",
                "Top Contributor badge",
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="bg-[#FEDF89] p-1 rounded-sm">
                    <Check className="text-[#DC6803] mt-0.5" size={24} />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How Credits Work */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Info size={20} className="text-indigo-600" />
              How Credits Work
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3 border border-gray-50! p-4 rounded-md">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                    <CreditCard size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Backlink task costs
                    </p>
                    <p className="text-sm text-gray-600">1 credit</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 border border-gray-50! p-4 rounded-md">
                  <div className="w-10 h-10 rounded-lg bg-[#51A2FF]/20 flex items-center justify-center text-[#51A2FF]">
                    <ListRestartIcon size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Credits reset monthly
                    </p>
                    <p className="text-sm text-gray-600">Based on your plan</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 border border-gray-50! p-4 rounded-md">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                    <FileText size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Guest post task costs
                    </p>
                    <p className="text-sm text-gray-600">2 credits</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 border border-gray-50! p-4 rounded-md">
                  <div className="w-10 h-10 rounded-lg bg-[#FFB900]/20 flex items-center justify-center text-[#FFB900]">
                    <ShoppingBag size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Guest post task costs
                    </p>
                    <p className="text-sm text-gray-600">2 credits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Credits Summary */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 space-y-4 h-fit">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Credits Summary
          </h3>

          <div className="space-y-4">
            <div className="border border-gray-50! p-3 rounded-lg">
              <p className="text-sm text-gray-600">Available Credits</p>
              <div className="text-3xl font-bold text-green-600 mt-1">12</div>
            </div>

            <div className="border border-gray-50! p-3 rounded-lg">
              <p className="text-sm text-gray-600">
                Available Visibility Credits
              </p>
              <p className="text-2xl font-bold text-indigo-600 mt-1">4</p>
            </div>

            <div className="border border-gray-50! p-3 rounded-lg">
              <p className="text-sm text-gray-600">Used This Month</p>
              <p className="text-xl font-semibold text-gray-800 mt-1">3</p>
            </div>

            <div className="border border-gray-50! p-3 rounded-lg">
              <p className="text-sm text-gray-600">Maximum Capacity</p>
              <p className="text-xl font-semibold text-gray-900 mt-1">50</p>
            </div>
            <div className="border border-gray-50! text-[#331FFD] p-3 rounded-lg font-semibold bg-[#2B7FFF4D]">
              <p className="text-sm">1 backlink = 1 credit</p>
              <p className="text-sm mt-1">1 guest post = 2 credits</p>
            </div>

            <Button className="w-full" onClick={() => setBuyModalOpen(true)}>
              Add Credit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
