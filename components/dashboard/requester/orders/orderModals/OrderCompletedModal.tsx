"use client";

import { useState } from "react";
import {
  FileText,
  CheckSquare,
  Clock,
  MessageSquare,
  CheckCircle2,
  Globe,
  ChevronRight,
  Plus,
  UserCheck,
  Search,
  ExternalLink,
  Image as ImageIcon,
} from "lucide-react";
import ModalShell from "@/components/dashboard/provider/delivery/modals/ModalShell";
import { Button } from "@/components/ui/Button";
import type { OrderItem } from "../OrderCard";

type Tab = "summary" | "submission" | "timeline";

type Props = {
  order: OrderItem;
  open: boolean;
  onClose: () => void;
};

const TABS: { id: Tab; label: string; icon: React.ElementType }[] = [
  { id: "summary", label: "Summary", icon: FileText },
  { id: "submission", label: "Submission", icon: CheckSquare },
  { id: "timeline", label: "Timeline", icon: Clock },
];

export default function OrderCompletedModal({ order, open, onClose }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>("summary");

  const handleClose = () => {
    onClose();
    setTimeout(() => setActiveTab("summary"), 200);
  };

  return (
    <ModalShell open={open} onClose={handleClose}>
      <section className="flex flex-col max-h-[88vh]">
        {/* Header */}
        <div className="pt-4 md:pt-6 pb-0 shrink-0">
          <div className="flex items-start gap-3 md:gap-4 px-3 md:px-6 pr-4 md:pr-10 py-3 md:py-4">
            <div className="w-9 md:w-11 h-9 md:h-11 bg-[#FFF4ED] rounded-xl flex items-center justify-center shrink-0">
              <FileText className="w-5 md:w-6 h-5 md:h-6 text-secondary" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 md:gap-3">
                <h2 className="text-lg md:text-2xl font-bold text-[#181d27]">
                  {order.name}
                </h2>
                <span className="text-[9px] md:text-xs font-bold uppercase tracking-wide bg-[#f2f4f7] text-[#535862] px-2 py-0.5 rounded-full">
                  {order.id}
                </span>
              </div>
              <p className="text-xs md:text-sm text-[#535862] mt-1 md:mt-2">
                Completed for{" "}
                <span className="font-semibold text-[#181d27]">
                  {order.requester?.name ?? "Sarah J."}
                </span>
              </p>
            </div>
          </div>

          {/* Tabs – all cursor-pointer */}
          <div className="flex mt-4 bg-[#FFF4ED] p-1 gap-1 px-3 md:px-6">
            {TABS.map(({ id, label, icon: Icon }) => {
              const isActive = activeTab === id;
              return (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex-1 cursor-pointer flex items-center justify-center gap-2 py-2 md:py-3 px-2 md:px-3 rounded-lg font-semibold transition text-xs sm:text-sm ${
                    isActive
                      ? "text-secondary  "
                      : "text-[#535862] hover:text-secondary "
                  }`}
                >
                  <div
                    className={`p-1.5 rounded-xl ${
                      isActive
                        ? "bg-secondary text-white"
                        : "bg-white text-secondary/80"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="hidden sm:inline">{label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto min-h-100 max-h-100 px-6 md:px-12 py-4 md:py-6">
          {activeTab === "summary" && <SummaryTab />}
          {activeTab === "submission" && <SubmissionTab />}
          {activeTab === "timeline" && <TimelineTab />}
        </div>

        {/* Footer – only close button */}
        <div className="shrink-0 px-6 md:px-10 lg:px-16 pb-4 md:pb-5 pt-3 md:pt-4 border-t border-[#e9eaeb] flex items-center justify-end bg-white">
          <Button
            variant="white"
            onClick={handleClose}
            className="rounded-lg text-xs md:text-sm"
          >
            Close Oversight
          </Button>
        </div>
      </section>
    </ModalShell>
  );
}

function SummaryTab() {
  return (
    <div className="space-y-4 md:space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
        {/* Status – COMPLETED */}
        <div className="border border-[#e9eaeb] rounded-xl p-3 md:p-5 space-y-2 bg-white">
          <p className="text-[10px] md:text-xs font-semibold uppercase tracking-wide text-[#535862]">
            Status
          </p>
          <div className="flex items-center gap-2">
            <div className="w-7 md:w-8 h-7 md:h-8 rounded-full bg-[#ECFDF3] flex items-center justify-center">
              <CheckCircle2 className="w-4 md:w-5 h-4 md:h-5 text-[#027A48]" />
            </div>
            <span className="text-base md:text-lg font-semibold text-[#027A48]">
              Completed
            </span>
          </div>
        </div>

        {/* Target Placement */}
        <div className="border border-[#e9eaeb] rounded-xl p-3 md:p-5 space-y-2 bg-white">
          <p className="text-[10px] md:text-xs font-semibold uppercase tracking-wide text-[#535862]">
            Placement
          </p>
          <div className="flex items-center gap-2">
            <Globe className="w-4 md:w-5 h-4 md:h-5 text-[#6366f1]" />
            <a
              href="#"
              className="text-sm md:text-base font-semibold text-[#6366f1] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              techtrends.io
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-5 border-t border-b border-[#e9eaeb]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#535862] mb-2">
            Anchor Text
          </p>
          <p className="text-sm font-medium text-[#181d27]">
            “SaaS” Scaling Infrastructure
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#535862] mb-2">
            Required DR
          </p>
          <p className="text-sm font-medium text-[#181d27]">
            DR 72+ Guaranteed
          </p>
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[#535862] mb-2.5">
          Placement Guidelines
        </p>
        <p className="text-sm text-[#535862] leading-relaxed">
          The backlink must be placed within a contextually relevant paragraph.
          Minimum 800 words • 2+ high-authority outbound links • Permanent
          placement.
        </p>
      </div>
    </div>
  );
}

function SubmissionTab() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[#535862] mb-2.5">
          Provider Note
        </p>
        <div className="bg-[#FFF4ED] border border-[#FDCFBE] rounded-xl px-5 py-4">
          <p className="text-sm text-[#535862] italic leading-relaxed">
            “I&apos;ve finalized the Guest Post Placement on techtrends.io. The
            link is live and I&apos;ve verified it&apos;s indexed correctly. Let
            me know if everything looks good.”
          </p>
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[#535862] mb-2.5">
          Live Link
        </p>
        <div className="border border-[#e9eaeb] rounded-xl overflow-hidden hover:border-secondary/40 transition-colors">
          <a
            href="https://techtrends.io/blog/s-calling-saas-infra"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-4 cursor-pointer"
          >
            <ExternalLink className="w-5 h-5 text-secondary shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[#181d27] truncate">
                https://techtrends.io/blog/s-calling-saas-infra
              </p>
              <p className="text-xs font-bold text-[#027A48] uppercase tracking-wide mt-1">
                Live & Verified
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-[#535862]" />
          </a>
        </div>
      </div>

      {/* Files / Screenshot empty state */}
      <div className="bg-[#f9fafb] border border-dashed border-[#e9eaeb] rounded-xl flex flex-col items-center justify-center py-16 px-6 text-center gap-4">
        <div className="w-14 h-14 rounded-xl bg-[#e9eaeb]/60 flex items-center justify-center">
          <ImageIcon className="w-7 h-7 text-[#9DA4AE]" />
        </div>
        <div>
          <p className="text-base font-semibold text-[#181d27]">
            No files or screenshots uploaded
          </p>
          <p className="text-sm text-[#9DA4AE] mt-2 max-w-md">
            For many guest post tasks, content is managed directly on the target
            site or via external tools — no file upload is required.
          </p>
        </div>
      </div>
    </div>
  );
}

const TIMELINE_EVENTS = [
  { icon: Plus, label: "Order Created", time: "Oct 08, 09:42 AM" },
  { icon: UserCheck, label: "Provider Assigned", time: "Oct 08, 11:42 AM" },
  {
    icon: Search,
    label: "Outreach & Research Started",
    time: "Oct 09, 09:42 AM",
  },
  { icon: CheckCircle2, label: "Live Link Submitted", time: "Today, 10:24 PM" },
];

function TimelineTab() {
  return (
    <div className="space-y-5 py-2">
      {TIMELINE_EVENTS.map(({ icon: Icon, label, time }) => (
        <div key={label} className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full border-2 border-secondary bg-white flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-secondary" />
          </div>
          <div className="pt-1">
            <p className="text-sm font-semibold text-[#181d27]">{label}</p>
            <p className="text-xs text-[#9DA4AE] mt-0.5">{time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
