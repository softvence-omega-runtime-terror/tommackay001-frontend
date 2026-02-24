"use client";

import { useState } from "react";
import {
  FileText,
  Users,
  Clock,
  CheckCircle2,
  AlertCircle,
  UserPlus,
  Plus,
  Pencil,
  Hourglass,
} from "lucide-react";
import ModalShell from "@/components/dashboard/provider/delivery/modals/ModalShell";
import { Button } from "@/components/ui/Button";
import type { OrderItem } from "../OrderCard";

type Tab = "summary" | "applicants" | "timeline";

const TABS: { id: Tab; label: string; icon: React.ElementType }[] = [
  { id: "summary", label: "SUMMARY", icon: FileText },
  { id: "applicants", label: "APPLICANTS", icon: Users },
  { id: "timeline", label: "TIMELINE", icon: Clock },
];

type Props = { order: OrderItem; open: boolean; onClose: () => void };

export default function OrderWaitingModal({ order, open, onClose }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>("summary");

  const handleClose = () => {
    onClose();
    setTimeout(() => setActiveTab("summary"), 200);
  };

  return (
    <ModalShell open={open} onClose={handleClose}>
      <div className="flex flex-col max-h-[88vh]">
        {/* Header */}
        <div className="px-6 pt-6 pb-0 shrink-0">
          <div className="flex items-start gap-4 pr-10 pb-4">
            <div className="w-11 h-11 rounded-xl bg-[#FFF4ED] border border-[#FDCFBE] flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5 text-[#F04F23]" />
            </div>
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h2 className="text-xl font-bold text-[#181d27]">
                  {order.name}
                </h2>
                <span className="text-[10px] font-bold bg-[#f2f4f7] text-[#535862] px-2.5 py-1 rounded-full tracking-wide">
                  {order.id}
                </span>
              </div>
              <p className="text-sm text-[#535862] mt-0.5">
                No provider assigned yet
              </p>
            </div>
          </div>

          {/* Tab bar */}
          <div className="flex bg-[#FFF4ED]">
            {TABS.map(({ id, label, icon: Icon }) => {
              const active = activeTab === id;
              return (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3.5 font-bold text-sm transition-colors ${
                    active
                      ? "text-[#F04F23]"
                      : "text-[#535862] hover:text-[#F04F23]"
                  }`}
                >
                  <div
                    className={`p-1.5 rounded-lg ${active ? "bg-[#F04F23] text-white" : "bg-white text-[#535862]"}`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab body */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {activeTab === "summary" && <SummaryTab />}
          {activeTab === "applicants" && <ApplicantsTab />}
          {activeTab === "timeline" && <TimelineTab />}
        </div>

        {/* Footer */}
        <div className="shrink-0 px-6 pb-5 pt-4 border-t border-[#e9eaeb] bg-white flex items-center justify-between">
          <Button variant="white" onClick={handleClose} className="rounded-xl">
            CLOSE OVERSIGHT
          </Button>
          <Button
            variant="white"
            className="flex items-center gap-2 rounded-xl"
          >
            <Pencil className="w-4 h-4" />
            EDIT TASK
          </Button>
        </div>
      </div>
    </ModalShell>
  );
}

// ─── Summary ──────────────────────────────────────────────────────────────────

function SummaryTab() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-3">
        <div className="border border-[#e9eaeb] rounded-xl p-4 space-y-2">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#535862]">
            Lifecycle Status
          </p>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#F04F23]" />
            <span className="text-sm font-bold text-[#F04F23]">
              WAITING FOR APPLICANTS
            </span>
          </div>
          <p className="text-xs text-[#9DA4AE]">No provider applied yet</p>
        </div>
        <div className="border border-[#e9eaeb] rounded-xl p-4 space-y-2">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#535862]">
            Delivery Deadline
          </p>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#6366f1]" />
            <span className="text-sm font-bold text-[#181d27]">
              Oct 24, 2026
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[#9DA4AE]">
            <span className="uppercase tracking-wide">Extend</span>
            <span className="w-5 h-5 rounded-full border border-[#e9eaeb] flex items-center justify-center text-[10px] font-bold text-[#181d27]">
              +
            </span>
            <span className="font-bold text-[#181d27]">1</span>
            <span>Day</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 py-4 border-t border-b border-[#e9eaeb]">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#535862] mb-1">
            Anchor Text
          </p>
          <p className="text-sm text-[#181d27]">
            &ldquo;SaaS&rdquo; Scaling Infrastructure
          </p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#535862] mb-1">
            Required Domain Rating
          </p>
          <p className="text-sm text-[#181d27]">DR 72+ Guaranteed</p>
        </div>
      </div>

      <div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#535862] mb-2">
          Placement Guidelines
        </p>
        <p className="text-sm text-[#535862] leading-relaxed">
          The backlink must be placed within a contextually relevant paragraph.
          Content should be a minimum of 800 words, include 2 high-authority
          outbound links, and be permanent.
        </p>
      </div>

      <div className="flex items-center gap-2 bg-[#FFF4ED] border border-[#FDCFBE] rounded-xl px-4 py-3">
        <CheckCircle2 className="w-4 h-4 text-[#F04F23] shrink-0" />
        <p className="text-xs font-semibold text-[#F04F23] uppercase tracking-wide">
          Escrow Protection Active
        </p>
      </div>
    </div>
  );
}

// ─── Applicants ───────────────────────────────────────────────────────────────

function ApplicantsTab() {
  return (
    <div className="space-y-5">
      <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-[#FFF4ED] border border-[#FDCFBE] flex items-center justify-center">
          <Hourglass className="w-8 h-8 text-[#F04F23]" />
        </div>
        <div>
          <p className="text-base font-bold text-[#181d27]">
            No applicants yet
          </p>
          <p className="text-sm text-[#9DA4AE] mt-1 max-w-xs leading-relaxed">
            Your task is live on the marketplace. Qualified providers will apply
            once they find a match.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-3 bg-[#EFF8FF] border border-[#B2DDFF] rounded-xl px-4 py-4">
        <AlertCircle className="w-4 h-4 text-[#175CD3] shrink-0 mt-0.5" />
        <div>
          <p className="text-xs font-bold text-[#175CD3] uppercase tracking-wide mb-1">
            Increase Visibility
          </p>
          <p className="text-sm text-[#175CD3] leading-relaxed">
            Tasks with higher reward credits and flexible DR thresholds attract
            more applicants faster.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Total Views", value: "24" },
          { label: "Saved by Providers", value: "6" },
          { label: "Applicants", value: "0" },
        ].map((s) => (
          <div
            key={s.label}
            className="border border-[#e9eaeb] rounded-xl p-4 text-center"
          >
            <p className="text-2xl font-bold text-[#181d27]">{s.value}</p>
            <p className="text-[10px] font-semibold text-[#9DA4AE] uppercase tracking-wide mt-1">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Timeline ─────────────────────────────────────────────────────────────────

function TimelineTab() {
  return (
    <div className="space-y-5 py-2">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full border-2 border-[#F04F23] flex items-center justify-center shrink-0 bg-white">
          <Plus className="w-4 h-4 text-[#F04F23]" />
        </div>
        <div className="pt-1">
          <p className="text-sm font-semibold text-[#181d27]">
            Placement Task Created
          </p>
          <p className="text-xs text-[#9DA4AE] mt-0.5">OCT 08, 09:42 AM</p>
        </div>
      </div>
      <div className="flex items-start gap-4 opacity-40">
        <div className="w-10 h-10 rounded-full border-2 border-dashed border-[#9DA4AE] flex items-center justify-center shrink-0 bg-white">
          <UserPlus className="w-4 h-4 text-[#9DA4AE]" />
        </div>
        <div className="pt-1">
          <p className="text-sm font-semibold text-[#9DA4AE]">
            Awaiting Provider Application
          </p>
          <p className="text-xs text-[#9DA4AE] mt-0.5">Pending</p>
        </div>
      </div>
    </div>
  );
}
