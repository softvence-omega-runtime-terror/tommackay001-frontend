"use client";

import { useState } from "react";
import {
  Star,
  Globe,
  Shield,
  ExternalLink,
  X,
  Clock,
  CheckCircle,
  AlertCircle,
  Link2,
  FileText,
  List,
  Activity,
  Info,
  Plus,
  Eye,
  BarChart2,
  Lock,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import CreateTaskModal from "@/components/dashboard/provider/profile/CreateTaskModal";
import PublisherCapabilitiesModal from "./PublisherCapabilitiesModal";
import ModalShell from "../delivery/modals/ModalShell";

interface Provider {
  id: number;
  name: string;
  avatar: string;
  avatarBg: string;
  verified: boolean;
  rating: number;
  reviews: number;
  website: string;
  websiteUrl: string;
  domainRating: number;
  industryTag: string;
  tags: string[];
}

interface ProviderProfileModalProps {
  open: boolean;
  provider?: Provider | null;
  onClose: () => void;
}

const TABS: string[] = [
  "OVERVIEW",
  "PLACEMENT FORMATS",
  "VERIFIED SAMPLES",
  "AUTHORITY",
  "WEBSITE LIST",
];

export default function ProviderProfileModal({
  open,
  provider,
  onClose,
}: ProviderProfileModalProps) {
  const [activeTab, setActiveTab] = useState<string>("OVERVIEW");
  const [showCapabilities, setShowCapabilities] = useState<boolean>(false);
  const [showCreateTask, setShowCreateTask] = useState<boolean>(false);

  if (!provider) return null;

  const tabIcons: Record<string, React.ReactNode> = {
    OVERVIEW: <Activity className="w-4 h-4" />,
    "PLACEMENT FORMATS": <List className="w-4 h-4" />,
    "VERIFIED SAMPLES": <Eye className="w-4 h-4" />,
    AUTHORITY: <Shield className="w-4 h-4" />,
    "WEBSITE LIST": <Globe className="w-4 h-4" />,
  };

  return (
    <>
      <ModalShell open={open} onClose={onClose}>
        <div
          className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl mx-4 max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="px-6 pt-5 pb-0 border-b border-[#f0f0f0]">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3 py-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-md shrink-0"
                  style={{ backgroundColor: provider.avatarBg }}
                >
                  {provider.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-lg font-bold text-[#181d27]">
                      {provider.name}
                    </p>
                    {provider.verified && (
                      <span className="px-2 py-0.5 bg-[#f0fdf4] text-[#15803d] text-[10px] font-bold rounded-full border border-[#bbf7d0] uppercase tracking-wide">
                        ✓ Verified Publisher
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-[#fbbf24] fill-[#fbbf24]" />
                      <span className="text-md font-semibold text-[#181d27]">
                        {provider.rating}
                      </span>
                    </div>
                    <span className="text-sm text-[#717680]">
                      ({provider.reviews} Reviews)
                    </span>
                    <span className="text-[#e9eaeb]">•</span>
                    <span className="text-sm text-[#717680]">
                      NICHE SPECIALIST • LIFESTYLE
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-[#f5f5f5] flex items-center justify-center hover:bg-[#e9eaeb] transition-colors shrink-0 mt-1"
              >
                <X className="w-4 h-4 text-[#414651]" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex overflow-x-auto">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center cursor-pointer  gap-1.5 px-5 py-2.5 text-sm font-semibold whitespace-nowrap border-b-3 transition-colors ${activeTab === tab ? "border-primary  text-[#181d27]" : "border-transparent text-[#717680] hover:text-[#414651]"}`}
                >
                  {tabIcons[tab]} {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            {/* OVERVIEW */}
            {activeTab === "OVERVIEW" && (
              <div className="p-6 flex flex-col gap-6 py-8">
                <div className="grid grid-cols-4 gap-3">
                  {[
                    {
                      icon: <BarChart2 className="w-5 h-5 text-[#717680]" />,
                      label: "DOMAIN RATING",
                      value: "65",
                    },
                    {
                      icon: <Clock className="w-5 h-5 text-[#717680]" />,
                      label: "AVG. RESPONSE",
                      value: "1.2h",
                    },
                    {
                      icon: <CheckCircle className="w-5 h-5 text-[#717680]" />,
                      label: "PLATFORM SUCCESS",
                      value: "99.2%",
                    },
                    {
                      icon: <Globe className="w-5 h-5 text-[#717680]" />,
                      label: "ACTIVE DOMAINS",
                      value: "14",
                    },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col py-4 items-center gap-2 p-3 border border-[#f0f0f0] rounded-xl"
                    >
                      {stat.icon}
                      <div className="text-center">
                        <p className="text-[9px] font-semibold text-[#717680] uppercase tracking-wide leading-tight">
                          {stat.label}
                        </p>
                        <p className="text-xl font-bold text-[#181d27] mt-0.5">
                          {stat.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 pb-8">
                  <div>
                    <p className="text-sm font-bold text-[#181d27] uppercase tracking-widest mb-2">
                      Publisher Profile & Specialization
                    </p>
                    <p className="text-md text-[#535862] leading-relaxed">
                      This publisher maintains a focus on the Lifestyle sector.
                      With a historically strong fulfillment record, they
                      provide access to high-authority domains that undergo
                      manual editorial review. Placements are typically stable
                      and carry verified authority pass-through metrics.
                    </p>
                    <div className="flex gap-2 mt-3 flex-wrap">
                      <span className="bg-[#f5f5f5] text-[#414651] text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wide">
                        Technology
                      </span>
                      <span className="bg-[#f5f5f5] text-[#414651] text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wide">
                        Blog
                      </span>
                    </div>
                  </div>

                  <div className="bg-[#181d27] rounded-2xl p-4 text-white">
                    <p className="text-sm font-bold uppercase tracking-widest mb-3">
                      Quality Fulfillment Record
                    </p>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-400">
                          Fulfillment Reliability
                        </span>
                        <span className="text-sm font-bold text-[#2ab516]">
                          Historically High
                        </span>
                      </div>
                      <div className="h-1.5 bg-gray-700 rounded-full">
                        <div className="h-full w-5/6 bg-linear-to-r from-[#fd751f] to-[#2ab516] rounded-full" />
                      </div>
                    </div>
                    <p className="text-[10px] text-gray-500 mt-3 leading-relaxed">
                      Performance is monitored via consistent placement audits.
                      All tasks are governed by platform escrow and link
                      retention policies.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* PLACEMENT FORMATS / VERIFIED SAMPLES */}
            {activeTab === "PLACEMENT FORMATS" && (
              <div className="p-6 flex flex-col gap-4">
                <p className="text-sm font-bold text-[#181d27] uppercase tracking-widest">
                  Available Capability Formats
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-3 p-4 border border-[#e9eaeb] rounded-xl hover:border-[#d5d7da] transition-colors">
                    <div className="w-9 h-9 bg-[#f5f5f5] rounded-lg flex items-center justify-center shrink-0">
                      <FileText className="w-4 h-4 text-[#717680]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#181d27] text-md">
                        Guest Post
                      </p>
                      <p className="text-sm text-[#717680] mt-0.5">
                        Brand new article with a backlink. Costs 2 credits.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 border-2 border-[#fd751f] bg-[#fff7ed] rounded-xl">
                    <div className="w-9 h-9 bg-[#fd751f]/10 rounded-lg flex items-center justify-center shrink-0">
                      <Link2 className="w-4 h-4 text-[#fd751f]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#fd751f] text-md">
                        Backlink Insertion/Niche Edit
                      </p>
                      <p className="text-sm text-[#c2410c] mt-0.5">
                        Costs 1 credit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f5f5f5] border border-[#e9eaeb] rounded-xl p-3 flex items-start gap-2">
                  <Info className="w-4 h-4 text-[#a4a7ae] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#717680]">
                    These formats indicate publisher capability only. Final
                    selection, exact pricing, and domain eligibility are
                    finalized exclusively through the format task creation and
                    review process.
                  </p>
                </div>
              </div>
            )}
            {activeTab === "VERIFIED SAMPLES" && (
              <div className="p-6 space-y-6">
                {/* Info banner at top */}
                <div className="bg-[#FFF7ED] border border-[#FDCFBE] rounded-xl px-5 py-3.5 flex items-start gap-3">
                  <Info className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-secondary">
                      Available Placement Formats
                    </p>
                    <p className="text-sm text-[#535862] mt-1 leading-relaxed">
                      These are the link placement formats currently supported
                      by your active publishers. Exact availability, pricing,
                      and domain match are confirmed during task creation.
                    </p>
                  </div>
                </div>

                {/* Cards grid */}
                <div className="bg-[#f6f7f9] p-8 rounded-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* ===== Guest Post Card ===== */}
                    <div className="relative bg-white rounded-2xl p-6 shadow-[0_10px_30px_rgba(240,79,35,0.08)] border border-[#f3d6cd]">
                      {/* Lock Icon */}
                      <div className="absolute top-5 right-5 text-gray-400">
                        <Lock className="w-5 h-5" />
                      </div>

                      {/* Verified Badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-secondary text-secondary text-xs font-semibold">
                        <CheckCircle2 className="w-4 h-4" />
                        VERIFIED PLACEMENT
                      </div>

                      {/* Placement Type */}
                      <div className="mt-6 text-xs text-gray-400 tracking-wider uppercase">
                        Placement Type
                      </div>
                      <div className="mt-1 text-lg font-semibold text-gray-800">
                        Guest Post
                      </div>

                      {/* Grey content lines (like image placeholder bars) */}
                      <div className="mt-5 space-y-3">
                        <div className="h-3 bg-gray-200 rounded-full w-full"></div>
                        <div className="h-3 bg-gray-200 rounded-full w-2/3"></div>
                      </div>

                      {/* Footer Info */}
                      <div className="mt-6 flex justify-between text-sm">
                        <div>
                          <div className="text-gray-400 text-xs uppercase tracking-wider">
                            Target Niche
                          </div>
                          <div className="text-gray-800 font-medium mt-1">
                            Lifestyle
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="text-gray-400 text-xs uppercase tracking-wider">
                            Delivered
                          </div>
                          <div className="text-gray-600 mt-1">1 week ago</div>
                        </div>
                      </div>
                    </div>

                    {/* ===== Backlink Insert Card ===== */}
                    <div className="relative bg-white rounded-2xl p-6 shadow-[0_10px_30px_rgba(240,79,35,0.08)] border border-[#f3d6cd]">
                      {/* Lock Icon */}
                      <div className="absolute top-5 right-5 text-gray-400">
                        <Lock className="w-5 h-5" />
                      </div>

                      {/* Verified Badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-secondary text-secondary text-xs font-semibold">
                        <CheckCircle2 className="w-4 h-4" />
                        VERIFIED PLACEMENT
                      </div>

                      {/* Placement Type */}
                      <div className="mt-6 text-xs text-gray-400 tracking-wider uppercase">
                        Placement Type
                      </div>
                      <div className="mt-1 text-lg font-semibold text-gray-800">
                        Backlink Insert
                      </div>

                      {/* Grey content lines */}
                      <div className="mt-5 space-y-3">
                        <div className="h-3 bg-gray-200 rounded-full w-full"></div>
                        <div className="h-3 bg-gray-200 rounded-full w-2/3"></div>
                      </div>

                      {/* Footer Info */}
                      <div className="mt-6 flex justify-between text-sm">
                        <div>
                          <div className="text-gray-400 text-xs uppercase tracking-wider">
                            Target Niche
                          </div>
                          <div className="text-gray-800 font-medium mt-1">
                            Style
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="text-gray-400 text-xs uppercase tracking-wider">
                            Delivered
                          </div>
                          <div className="text-gray-600 mt-1">2 week ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final note */}
                <div className="bg-[#f9fafb] border border-[#e9eaeb] rounded-xl p-4 text-sm text-[#535862] flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#9DA4AE] shrink-0 mt-0.5" />
                  <p>
                    Placement formats show publisher capabilities only. Final
                    pricing, domain authority, relevance, and exact link
                    placement are confirmed during the task matching and
                    approval process.
                  </p>
                </div>
              </div>
            )}

            {/* AUTHORITY */}
            {activeTab === "AUTHORITY" && (
              <div className="p-6 flex flex-col items-center gap-6">
                <div className="flex flex-col items-center text-center pt-4">
                  <div className="w-16 h-16 bg-[#ede9fe] rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-8 h-8 text-[#6366f1]" />
                  </div>
                  <p className="text-base font-bold text-[#181d27] uppercase tracking-widest">
                    Escrow Protected Publisher
                  </p>
                  <p className="text-md text-[#535862] mt-2 max-w-sm leading-relaxed">
                    This provider is a verified member of our Elite fulfillment
                    network. Every task is governed by automated platform
                    governance and fraud prevention protocols.
                  </p>
                </div>
                <div className="w-full grid grid-cols-3 gap-3">
                  {[
                    { label: "INDEX RATE", value: "98.4%" },
                    { label: "AVERAGE TAT", value: "3.2 days" },
                    { label: "RETENTION", value: "94.1%" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-[#fafafa] border border-[#e9eaeb] rounded-xl p-4 text-center"
                    >
                      <p className="text-[10px] font-bold text-[#717680] uppercase tracking-widest mb-1">
                        {stat.label}
                      </p>
                      <p className="text-xl font-bold text-[#181d27]">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="w-full bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-4 flex items-start gap-3">
                  <Lock className="w-5 h-5 text-[#15803d] shrink-0 mt-0.5" />
                  <p className="text-md text-[#166534]">
                    All placements are protected by platform escrow. Funds are
                    only released upon verified task completion and quality
                    review.
                  </p>
                </div>
              </div>
            )}

            {/* WEBSITE LIST */}
            {activeTab === "WEBSITE LIST" && (
              <div className="p-6 flex flex-col gap-4">
                <p className="text-sm font-bold text-[#181d27] uppercase tracking-widest">
                  Websites
                </p>
                <div className="flex flex-col divide-y divide-[#f0f0f0]">
                  {[
                    { url: "startuply.io", type: "Primary" },
                    { url: "techfriends.net", type: "Frequent" },
                    { url: "crypto-niche.biz", type: "Occasional" },
                    { url: "spam-blog.xyz", type: "Rare" },
                  ].map((site) => (
                    <div
                      key={site.url}
                      className="flex items-center justify-between py-3.5"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#f5f5f5] rounded-lg flex items-center justify-center">
                          <Globe className="w-4 h-4 text-[#717680]" />
                        </div>
                        <div>
                          <p className="text-md font-semibold text-[#fd751f] hover:underline cursor-pointer">
                            {site.url}
                          </p>
                          <p className="text-sm text-[#a4a7ae]">{site.type}</p>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-[#a4a7ae]" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-[#f0f0f0] flex items-center justify-between bg-[#fafafa] rounded-b-2xl">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1.5 text-sm font-semibold text-[#535862] hover:text-[#181d27] transition-colors">
                <AlertCircle className="w-4 h-4" /> ASK A QUESTION
              </button>
              <button
                onClick={() => setShowCapabilities(true)}
                className="flex  cursor-pointer items-center gap-1.5 text-sm font-semibold text-[#535862] hover:text-[#181d27] transition-colors"
              >
                <Eye className="w-4 h-4" /> EXPLORE CAPABILITY
              </button>
            </div>
            <Button variant="secondary" onClick={() => setShowCreateTask(true)}>
              <Plus className="w-4 h-4" /> CREATE TASK TO INVITE
            </Button>
          </div>
        </div>
      </ModalShell>

      {showCapabilities && (
        <PublisherCapabilitiesModal
          onClose={() => setShowCapabilities(false)}
          onCreateTask={() => {
            setShowCapabilities(false);
            setShowCreateTask(true);
          }}
        />
      )}
      {showCreateTask && (
        <CreateTaskModal onClose={() => setShowCreateTask(false)} />
      )}
    </>
  );
}
