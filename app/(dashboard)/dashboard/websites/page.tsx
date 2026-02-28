"use client";

import { useState } from "react";
import {
  Search,
  Eye,
  MessageSquare,
  SquarePen,
  Shield,
  Info,
  Plus,
  EarthIcon,
} from "lucide-react";
import ConnectWebsiteModal from "@/components/dashboard/website/Connectwebsitemodal";
import WebsiteWorkspaceModal from "@/components/dashboard/website/Websiteworkspacemodal";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

export type LifecycleStatus =
  | "VERIFIED"
  | "PENDING VERIFICATION"
  | "REVIEW REQUIRED"
  | "REJECTED";

export type FilterTab =
  | "ALL"
  | "VERIFIED"
  | "PENDING"
  | "REVIEW REQUIRED"
  | "REJECTED";

export interface Website {
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

export default function YourWebsitesPage() {
  const [activeTab, setActiveTab] = useState<FilterTab>("ALL");
  const [search, setSearch] = useState("");
  const router = useRouter();

  const [connectOpen, setConnectOpen] = useState(false);
  const [workspaceOpen, setWorkspaceOpen] = useState(false);
  const [selectedWebsite, setSelectedWebsite] = useState<Website | null>(null);

  const filtered = WEBSITES.filter(
    (w) =>
      matchesFilter(w.status, activeTab) &&
      w.domain.toLowerCase().includes(search.toLowerCase()),
  );

  const openWorkspace = (website: Website) => {
    setSelectedWebsite(website);
    setWorkspaceOpen(true);
  };

  return (
    <>
      <ConnectWebsiteModal
        open={connectOpen}
        onClose={() => setConnectOpen(false)}
      />

      <WebsiteWorkspaceModal
        website={selectedWebsite}
        open={workspaceOpen}
        onClose={() => {
          setWorkspaceOpen(false);
          setSelectedWebsite(null);
        }}
      />

      <div className="flex flex-col gap-6 font-inter max-w-[90vw]">
        <div className="flex flex-col md:flex-row space-y-2 items-start justify-between">
          <div>
            <h1 className="text-xl md:text-[30px] font-semibold font-sora text-[#181d27] leading-none">
              Your Websites
            </h1>
            <p className="text-sm font-medium text-[#535862] mt-1">
              Manage verified domains for backlink fulfillment and authority
              projects.
            </p>
          </div>

          <Button variant="secondary" onClick={() => setConnectOpen(true)}>
            <Plus className="w-4 h-4" />
            CONNECT WEBSITE
          </Button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-56">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9DA4AE]" />
            <input
              type="text"
              placeholder="Search domains..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border border-[#e2e2e2] rounded-full text-sm text-[#535862] focus:outline-none focus:border-secondary placeholder:text-[#9DA4AE] bg-white"
            />
          </div>

          <div className="flex items-center gap-1.5 w-full overflow-x-scroll ">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-xs cursor-pointer font-semibold border transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-secondary text-white border-secondary"
                    : "bg-white text-[#535862] border-[#e2e2e2] hover:border-secondary hover:text-secondary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="border border-[#e9eaeb] rounded-xl bg-white overflow-hidden overflow-x-scroll">
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
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full border border-[#e9eaeb] flex items-center justify-center bg-[#f9fafb] shrink-0">
                          <EarthIcon className="w-4 h-4 text-[#535862]" />
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

                    <td className="px-6 py-5">
                      <span
                        className={`inline-block text-[10px] font-bold px-3 py-1.5 rounded-full tracking-wide ${STATUS_STYLES[w.status]}`}
                      >
                        {w.status}
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      <p className="text-sm font-bold text-[#181d27]">{w.dr}</p>
                      <p className="text-[10px] font-semibold text-[#9DA4AE] tracking-wide mt-0.5">
                        AUTHORITY
                      </p>
                    </td>

                    <td className="px-6 py-5">
                      <span className="text-[10px] font-semibold text-[#535862] bg-[#f2f4f7] px-3 py-1.5 rounded-full tracking-wide">
                        {w.category}
                      </span>
                    </td>

                    <td className="px-6 py-5 text-sm text-[#535862]">
                      {w.connectedSince}
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => openWorkspace(w)}
                          className="text-[#2AB516]  cursor-pointer hover:text-[#22a010] transition-colors"
                          aria-label={`View workspace for ${w.domain}`}
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => router.push("/dashboard/messages")}
                          className="text-[#9DA4AE] hover:text-[#535862] transition-colors cursor-pointer"
                        >
                          <MessageSquare className="w-4 h-4" />
                        </button>
                        <button className="text-[#9DA4AE] hover:text-[#535862] transition-colors cursor-pointer ">
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

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#FFF4ED] border border-[#FDCFBE] rounded-xl p-5 space-y-2">
            <Shield className="w-5 h-5 text-secondary" />
            <p className="text-sm font-bold text-secondary">
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
