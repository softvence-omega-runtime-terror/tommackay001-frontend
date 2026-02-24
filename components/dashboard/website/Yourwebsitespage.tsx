"use client";

import { useState } from "react";
import {
  Search,
  Grid3X3,
  Eye,
  MessageSquare,
  SquarePen,
  Shield,
  Info,
  Plus,
  Globe,
} from "lucide-react";
import ConnectWebsiteModal from "./Connectwebsitemodal";

// ─── Types & Data ─────────────────────────────────────────────────────────────

type LifecycleStatus =
  | "VERIFIED"
  | "PENDING VERIFICATION"
  | "REVIEW REQUIRED"
  | "REJECTED";
type FilterTab =
  | "ALL"
  | "VERIFIED"
  | "PENDING"
  | "REVIEW REQUIRED"
  | "REJECTED";

interface Website {
  domain: string;
  host: string;
  status: LifecycleStatus;
  dr: number;
  category: string;
  connectedSince: string;
}

const WEBSITES: Website[] = [
  {
    domain: "startuply.io",
    host: "MANAGED HOST",
    status: "VERIFIED",
    dr: 52,
    category: "SAAS",
    connectedSince: "Oct 12, 2026",
  },
  {
    domain: "techtrends.net",
    host: "MANAGED HOST",
    status: "PENDING VERIFICATION",
    dr: 48,
    category: "TECHNEWS",
    connectedSince: "Nov 08, 2026",
  },
  {
    domain: "crypto-niche.biz",
    host: "MANAGED HOST",
    status: "REVIEW REQUIRED",
    dr: 8,
    category: "MARKETING",
    connectedSince: "Oct 12, 2026",
  },
  {
    domain: "spam-blog.xyz",
    host: "MANAGED HOST",
    status: "REJECTED",
    dr: 2,
    category: "UNKNOWN",
    connectedSince: "Jan 30, 2026",
  },
];

const STATUS_STYLES: Record<LifecycleStatus, string> = {
  VERIFIED: "bg-[#ECFDF3] text-[#027A48]",
  "PENDING VERIFICATION": "bg-[#FFF6ED] text-[#B54708]",
  "REVIEW REQUIRED": "bg-[#f2f4f7] text-[#535862]",
  REJECTED: "bg-[#FEF3F2] text-[#B42318]",
};

const FILTER_TABS: FilterTab[] = [
  "ALL",
  "VERIFIED",
  "PENDING",
  "REVIEW REQUIRED",
  "REJECTED",
];

function matchesFilter(status: LifecycleStatus, tab: FilterTab): boolean {
  if (tab === "ALL") return true;
  if (tab === "VERIFIED") return status === "VERIFIED";
  if (tab === "PENDING") return status === "PENDING VERIFICATION";
  if (tab === "REVIEW REQUIRED") return status === "REVIEW REQUIRED";
  if (tab === "REJECTED") return status === "REJECTED";
  return true;
}

// ─────────────────────────────────────────────────────────────────────────────

export default function YourWebsitesPage() {
  const [activeTab, setActiveTab] = useState<FilterTab>("ALL");
  const [search, setSearch] = useState("");
  const [connectModalOpen, setConnectModalOpen] = useState(false);

  const filtered = WEBSITES.filter(
    (w) =>
      matchesFilter(w.status, activeTab) &&
      w.domain.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      {/* ── Connect Website modal ──────────────────────────────────── */}
      <ConnectWebsiteModal
        open={connectModalOpen}
        onClose={() => setConnectModalOpen(false)}
      />

      <div className="flex flex-col gap-6 font-inter max-w-[90vw]">
        {/* ── Page header ─────────────────────────────────────────── */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-[30px] font-semibold font-sora text-[#181d27] leading-none">
              Your Websites
            </h1>
            <p className="text-sm font-medium text-[#535862] mt-1">
              Manage verified domains for backlink fulfillment and authority
              projects.
            </p>
          </div>

          {/* ── Wired to modal ──────────────────────────────────── */}
          <button
            onClick={() => setConnectModalOpen(true)}
            className="flex items-center gap-2 bg-[#F04F23] hover:bg-[#d94118] text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
          >
            <Plus className="w-4 h-4" />
            CONNECT WEBSITE
          </button>
        </div>

        {/* ── Search + filter bar ─────────────────────────────────── */}
        <div className="flex items-center justify-between gap-4">
          <div className="relative w-56">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9DA4AE]" />
            <input
              type="text"
              placeholder="Search domains..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border border-[#e2e2e2] rounded-full text-sm text-[#535862] focus:outline-none focus:border-[#F04F23] placeholder:text-[#9DA4AE] bg-white"
            />
          </div>

          <div className="flex items-center gap-1.5">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-xs font-semibold border transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-[#F04F23] text-white border-[#F04F23]"
                    : "bg-white text-[#535862] border-[#e2e2e2] hover:border-[#F04F23] hover:text-[#F04F23]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* ── Websites table ──────────────────────────────────────── */}
        <div className="border border-[#e9eaeb] rounded-xl bg-white overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#e9eaeb]">
                {[
                  "Domain",
                  "Lifecycle Status",
                  "DR",
                  "Category",
                  "Connected Since",
                  "Actions",
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
              {filtered.length > 0 ? (
                filtered.map((w) => (
                  <tr
                    key={w.domain}
                    className="hover:bg-[#fafafa] transition-colors"
                  >
                    {/* Domain */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full border border-[#e9eaeb] flex items-center justify-center bg-[#f9fafb] shrink-0">
                          <Globe className="w-4 h-4 text-[#535862]" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#181d27]">
                            {w.domain}
                          </p>
                          <p className="text-[10px] font-semibold text-[#9DA4AE] tracking-wide mt-0.5">
                            {w.host}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-5">
                      <span
                        className={`inline-block text-[10px] font-bold px-3 py-1.5 rounded-full tracking-wide ${STATUS_STYLES[w.status]}`}
                      >
                        {w.status}
                      </span>
                    </td>

                    {/* DR */}
                    <td className="px-6 py-5">
                      <p className="text-sm font-bold text-[#181d27]">{w.dr}</p>
                      <p className="text-[10px] font-semibold text-[#9DA4AE] tracking-wide mt-0.5">
                        AUTHORITY
                      </p>
                    </td>

                    {/* Category */}
                    <td className="px-6 py-5">
                      <span className="text-[10px] font-semibold text-[#535862] bg-[#f2f4f7] px-3 py-1.5 rounded-full tracking-wide">
                        {w.category}
                      </span>
                    </td>

                    {/* Connected since */}
                    <td className="px-6 py-5 text-sm text-[#535862]">
                      {w.connectedSince}
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <button className="text-[#2AB516] hover:text-[#22a010] transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-[#9DA4AE] hover:text-[#535862] transition-colors">
                          <MessageSquare className="w-4 h-4" />
                        </button>
                        <button className="text-[#9DA4AE] hover:text-[#535862] transition-colors">
                          <SquarePen className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="py-16 text-center text-sm text-[#9DA4AE]"
                  >
                    No websites found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* ── Bottom info cards ────────────────────────────────────── */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#FFF4ED] border border-[#FDCFBE] rounded-xl p-5 space-y-2">
            <Shield className="w-5 h-5 text-[#F04F23]" />
            <p className="text-sm font-bold text-[#F04F23]">
              Domain Trust Index
            </p>
            <p className="text-xs text-[#B54708] leading-relaxed">
              Verified websites receive an automatic Trust Score based on
              backlink profile, spam history, and site age. Higher scores unlock
              lower service fees.
            </p>
          </div>

          <div className="bg-white border border-[#e9eaeb] rounded-xl p-5 space-y-2">
            <Info className="w-5 h-5 text-[#535862]" />
            <p className="text-sm font-bold text-[#181d27]">
              Need Manual Review?
            </p>
            <p className="text-xs text-[#535862] leading-relaxed">
              If your site was flagged but you believe it meets our quality
              standards, you can request a manual audit from our editorial team.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
