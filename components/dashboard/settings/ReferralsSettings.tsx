"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Copy, ExternalLink, Info } from "lucide-react";

export default function ReferralProgram() {
  const referralLink = "https://backlyst.com/ref/SARAH2026";

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const stats = [
    { label: "Total Referrals", value: "24" },
    { label: "Earned Credits", value: "3,600" },
    { label: "Conversion Rate", value: "68%" },
  ];

  return (
    <div className="p-8 bg-white rounded-2xl overflow-hidden">
      <div className="pb-4">
        <h2 className="text-2xl font-semibold text-gray-900 ">
          Referral Program
        </h2>
        <p className="mt-1.5 text-sm text-gray-600">
          View referral performance and rewards.
        </p>
      </div>

      <div className="py-4 space-y-10">
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Your Referral Link
          </label>
          <div className="flex items-center gap-3">
            <div className="flex-1 px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 font-medium break-all">
              {referralLink}
            </div>
            <Button
              variant="outline"
              className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 min-w-[100px]"
              onClick={handleCopy}
            >
              {copied ? "Copied!" : "Copy"}
              <Copy size={16} className="ml-2" />
            </Button>
          </div>
          <p className="text-xs text-gray-500 italic">
            Share this link with others to earn credits when they sign up and
            become active.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-left"
            >
              <p className="text-sm font-medium text-gray-600">{stat.label}</p>
              <p className="text-xl font-bold text-black mb-2">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-8 py-6 flex justify-end">
        <Button onClick={() => window.open("/referrals/details", "_blank")}>
          View Referral Details
        </Button>
      </div>
    </div>
  );
}
