"use client";

import { useState } from "react";
import {
  Search,
  Grid3X3,
  Copy,
  Share2,
  CheckCircle2,
  Info,
} from "lucide-react";

const STAGES = [
  {
    stage: "Stage 0",
    title: "Signup",
    desc: "User joins via your referral link",
    reward: "None",
    color: "bg-[#FFF4ED] text-secondary border-[#FDCFBE]",
  },
  {
    stage: "Stage 1",
    title: "Website Verified",
    desc: "At least one website verified",
    reward: "+1 Task Credit",
    color: "bg-[#FFF4ED] text-secondary border-[#FDCFBE]",
  },
  {
    stage: "Stage 2",
    title: "First Backlink Accepted",
    desc: "First backlink accepted and verified",
    reward: "+2 Task Credits",
    color: "bg-[#FFF4ED] text-secondary border-[#FDCFBE]",
  },
  {
    stage: "Stage 3",
    title: "Subscription",
    desc: "Any paid subscription activated",
    reward: "+3 Task Credits, +1 Visibility Credit",
    color: "bg-[#FFF4ED] text-secondary border-[#FDCFBE]",
  },
];

type ReferralStatus = "Active" | "Pending";

interface Referral {
  site: string;
  company: string;
  stage: number;
  completedActions: string[];
  nextRequirement: string;
  rewardsEarned: string;
  status: ReferralStatus;
}

const REFERRALS: Referral[] = [
  {
    site: "techstartup.com",
    company: "Tech Startup Inc.",
    stage: 2,
    completedActions: ["Signup", "Website Verified", "First Backlink Accepted"],
    nextRequirement: "Subscription",
    rewardsEarned: "+3 Task Credits",
    status: "Active",
  },
  {
    site: "marketingpro.io",
    company: "Marketing Pro LLC",
    stage: 1,
    completedActions: ["Signup", "Website Verified"],
    nextRequirement: "First Backlink Accepted",
    rewardsEarned: "+1 Task Credit",
    status: "Active",
  },
  {
    site: "ecommercehub.shop",
    company: "E-commerce Hub",
    stage: 0,
    completedActions: ["Signup"],
    nextRequirement: "Website Verified",
    rewardsEarned: "None",
    status: "Pending",
  },
];

const LIMITS = [
  "No rewards on signup alone",
  "Full rewards unlock only after subscription",
  "Max 3 referrals per month",
  "Max 10 rewarded referrals lifetime",
  "Referral credits are non-transferable",
  "Referral credits cannot be converted to cash",
];

const STAGE_BADGE: Record<number, string> = {
  0: "bg-[#f2f4f7] text-[#535862]",
  1: "bg-[#FFF4ED] text-secondary",
  2: "bg-[#EFF8FF] text-[#175CD3]",
  3: "bg-[#ECFDF3] text-[#027A48]",
};

export default function ReferralsPage() {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://backlyst.com/ref/user-abc123";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-6 font-inter max-w-[90vw]">
      <div className="flex flex-col gap-4 md:flex-row items-start justify-between">
        <div>
          <h1 className="text-xl md:text-[30px] font-semibold font-sora text-[#181d27] leading-none">
            Referrals
          </h1>
          <p className="text-sm font-medium text-[#535862] mt-1">
            Invite real contributors. Rewards unlock as referrals verify,
            contribute, and subscribe.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#535862]" />
            <input
              type="text"
              placeholder="Search by site, ID, or title..."
              className="pl-9 pr-4 py-2 border border-[#e2e2e2] rounded-full text-sm text-[#535862] focus:outline-none focus:border-[#6366f1] w-60 bg-white placeholder:text-[#9DA4AE]"
            />
          </div>
          <button className="p-2 border border-[#e2e2e2] rounded-lg bg-white hover:bg-gray-50 transition-colors">
            <Grid3X3 className="w-4 h-4 text-[#535862]" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-0 border border-[#e9eaeb] rounded-xl bg-white overflow-hidden">
        {[
          {
            label: "TASK CREDITS EARNED",
            value: "6",
            sub: "From referrals only",
          },
          {
            label: "VISIBILITY CREDITS EARNED",
            value: "0",
            sub: "Earned at subscription stage",
          },
          { label: "REWARDED REFERRALS", value: "2/10", sub: "Lifetime limit" },
        ].map((s, i) => (
          <div
            key={s.label}
            className={`p-6 ${i < 2 ? "border-r border-[#e9eaeb]" : ""}`}
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#535862]">
              {s.label}
            </p>
            <p className="text-3xl font-bold text-[#181d27] mt-2">{s.value}</p>
            <p className="text-xs text-[#9DA4AE] mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="bg-white border border-[#e9eaeb] rounded-xl p-6 space-y-4">
        <div>
          <p className="text-sm font-bold text-[#181d27]">Your Referral Link</p>
          <p className="text-xs text-[#535862] mt-0.5">
            Share this link with potential contributors
          </p>
        </div>

        <div className="flex gap-2">
          <div className="flex-1 border border-[#e9eaeb] rounded-lg px-4 py-2.5 text-sm text-[#535862] bg-[#f9fafb] font-mono truncate">
            {referralLink}
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 border border-[#e9eaeb] rounded-lg px-4 py-2.5 text-sm font-semibold text-[#535862] hover:bg-gray-50 transition-colors whitespace-nowrap"
          >
            {copied ? (
              <CheckCircle2 className="w-4 h-4 text-[#027A48]" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <p className="text-xs text-[#9DA4AE]">
          No rewards are granted on signup alone.
        </p>

        <button className="w-full bg-[#4169E1] hover:bg-[#2952BE] text-white font-semibold text-sm py-3 rounded-xl transition-colors flex items-center justify-center gap-2 tracking-wide">
          <Share2 className="w-4 h-4" />
          SHARE
        </button>
      </div>

      <div className="bg-white border border-[#e9eaeb] rounded-xl p-6 space-y-5">
        <div>
          <p className="text-sm font-bold text-[#181d27]">
            How Referral Rewards Unlock
          </p>
          <p className="text-xs text-[#535862] mt-0.5">
            Credits are earned as referrals complete specific milestones
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STAGES.map((s) => (
            <div key={s.stage} className="space-y-2">
              <span
                className={`inline-block text-[10px] font-bold px-2.5 py-1 rounded-full border ${s.color}`}
              >
                {s.stage}
              </span>
              <p className="text-sm font-bold text-[#181d27]">{s.title}</p>
              <p className="text-xs text-[#535862] leading-relaxed">{s.desc}</p>
              <p className="text-xs text-[#535862]">
                <span className="font-semibold">Reward:</span> {s.reward}
              </p>
            </div>
          ))}
        </div>

        <p className="text-xs text-[#9DA4AE] pt-2 border-t border-[#e9eaeb]">
          Credits are applied to the website wallet, not the user account.
        </p>
      </div>

      <div className="bg-white border border-[#e9eaeb] rounded-xl overflow-x-scroll">
        <div className="px-6 py-5 border-b border-[#e9eaeb]">
          <p className="text-sm font-bold text-[#181d27]">Referral Progress</p>
          <p className="text-xs text-[#535862] mt-0.5">
            Track your referrals and their milestones
          </p>
        </div>

        <table className="w-full ">
          <thead>
            <tr className="border-b border-[#e9eaeb]">
              {[
                "Referred Website / Company",
                "Current Stage",
                "Completed Actions",
                "Next Unlock Requirement",
                "Rewards Earned",
                "Status",
              ].map((h) => (
                <th
                  key={h}
                  className="px-6 py-4 text-left text-[10px] font-bold uppercase tracking-wider text-[#535862]"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e9eaeb]">
            {REFERRALS.map((r) => (
              <tr key={r.site} className="hover:bg-[#fafafa] transition-colors">
                <td className="px-6 py-4">
                  <p className="text-sm font-semibold text-[#181d27]">
                    {r.site}
                  </p>
                  <p className="text-xs text-[#535862] mt-0.5">{r.company}</p>
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`inline-block text-[10px] font-bold px-3 py-1 rounded-full ${STAGE_BADGE[r.stage]}`}
                  >
                    Stage {r.stage}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <ul className="space-y-1">
                    {r.completedActions.map((a) => (
                      <li
                        key={a}
                        className="flex items-center gap-1.5 text-xs text-[#535862]"
                      >
                        <span className="text-[#181d27]">•</span> {a}
                      </li>
                    ))}
                  </ul>
                </td>

                <td className="px-6 py-4 text-sm text-[#535862]">
                  {r.nextRequirement}
                </td>

                <td className="px-6 py-4 text-sm font-medium text-[#181d27]">
                  {r.rewardsEarned}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
                      r.status === "Active"
                        ? "text-[#027A48] bg-[#ECFDF3]"
                        : "text-[#B54708] bg-[#FFF6ED]"
                    }`}
                  >
                    {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="px-6 py-4 border-t border-[#e9eaeb]">
          <p className="text-xs text-[#9DA4AE]">
            Referral credits are non-transferable and have no cash value.
          </p>
        </div>
      </div>

      <div className="bg-white border border-[#e9eaeb] rounded-xl p-6 space-y-4">
        <div>
          <p className="text-sm font-bold text-[#181d27]">Limits &amp; Rules</p>
          <p className="text-xs text-[#535862] mt-0.5">
            Review the referral program guidelines
          </p>
        </div>

        <ul className="space-y-2">
          {LIMITS.map((rule) => (
            <li
              key={rule}
              className="flex items-center gap-2 text-sm text-[#535862]"
            >
              <span className="text-[#9DA4AE] font-bold leading-none">·</span>
              {rule}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-start gap-3 border border-[#e9eaeb] rounded-xl p-5 bg-white">
        <Info className="w-4 h-4 text-[#4169E1] shrink-0 mt-0.5" />
        <div>
          <p className="text-xs font-bold text-[#181d27]">
            System &amp; Compliance Notice
          </p>
          <p className="text-xs text-[#535862] mt-1 leading-relaxed">
            All referral actions are logged and auditable. Backlyst may
            throttle, revoke, or pause referrals to prevent abuse.
          </p>
        </div>
      </div>
    </div>
  );
}
