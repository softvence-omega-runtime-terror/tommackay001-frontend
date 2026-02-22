"use client";

import React from "react";
import { Wallet, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function RequesterWalletPage() {
  return (
    <div className="flex flex-col gap-8 font-inter">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl lg:text-[30px] font-semibold font-sora text-[#181d27]">
          Wallet & Credits
        </h1>
        <p className="text-sm lg:text-base font-medium text-[#535862]">
          Manage your credit balance and view spending history.
        </p>
      </div>

      {/* Coming Soon Content */}
      <div className="flex flex-col items-center justify-center min-h-[400px] lg:min-h-[500px] bg-white rounded-2xl p-6 lg:p-12">
        <div className="flex flex-col items-center gap-6 text-center max-w-sm">
          <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-emerald-100 to-green-100 rounded-full flex items-center justify-center">
            <Wallet className="w-8 h-8 lg:w-10 lg:h-10 text-green-600" />
          </div>

          <div className="space-y-3">
            <h2 className="text-xl lg:text-2xl font-semibold text-[#181d27]">
              Wallet Coming Soon
            </h2>
            <p className="text-sm lg:text-base text-[#535862] leading-relaxed">
              We're building a comprehensive wallet system to manage your
              credits and budget.
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2.5 bg-green-50 rounded-lg border border-green-200 w-full">
            <Clock className="w-5 h-5 text-green-600 shrink-0" />
            <span className="text-sm text-green-600 font-medium">
              Expected launch in Q2 2026
            </span>
          </div>

          <Button className="mt-4">Explore Other Features</Button>
        </div>
      </div>

      {/* Feature Preview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <div className="bg-white border border-[#e9eaeb] rounded-xl p-4 lg:p-6">
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <Wallet className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" />
          </div>
          <h3 className="font-semibold text-[#181d27] mb-2 text-sm lg:text-base">
            Credit Management
          </h3>
          <p className="text-xs lg:text-sm text-[#535862]">
            Track your credit balance and purchase history at a glance.
          </p>
        </div>

        <div className="bg-white border border-[#e9eaeb] rounded-xl p-4 lg:p-6">
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <TrendingUp className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
          </div>
          <h3 className="font-semibold text-[#181d27] mb-2 text-sm lg:text-base">
            Spending Analytics
          </h3>
          <p className="text-xs lg:text-sm text-[#535862]">
            View detailed spending patterns and budget insights.
          </p>
        </div>

        <div className="bg-white border border-[#e9eaeb] rounded-xl p-4 lg:p-6">
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <Wallet className="w-5 h-5 lg:w-6 lg:h-6 text-purple-600" />
          </div>
          <h3 className="font-semibold text-[#181d27] mb-2 text-sm lg:text-base">
            Quick Recharge
          </h3>
          <p className="text-xs lg:text-sm text-[#535862]">
            Easily purchase credits with multiple payment options.
          </p>
        </div>
      </div>
    </div>
  );
}
