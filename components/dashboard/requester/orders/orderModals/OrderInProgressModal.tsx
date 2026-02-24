"use client";

import { useState } from "react";
import {
  FileText,
  CheckSquare,
  Clock,
  MessageSquare,
  RotateCcw,
  CheckCircle2,
  Globe,
  ChevronRight,
  Plus,
  UserCheck,
  Info,
  AlertTriangle,
  ArrowUpRight,
  ExternalLink,
  LucideIcon,
} from "lucide-react";
import ModalShell from "@/components/dashboard/provider/delivery/modals/ModalShell";
import { StatusBadge } from "@/components/ui/common/StatusBadge";
import { Button } from "@/components/ui/Button";
import type { OrderItem } from "../OrderCard";

type Tab = "summary" | "submission" | "timeline";
type SubModal = "revision" | "approve" | null;

type Props = {
  order: OrderItem;
  open: boolean;
  onClose: () => void;
};

const TABS: { id: Tab; label: string; icon: LucideIcon }[] = [
  { id: "summary", label: "Summary", icon: FileText },
  { id: "submission", label: "Submission", icon: CheckSquare },
  { id: "timeline", label: "Timeline", icon: Clock },
];

const ISSUES = [
  "Wrong Link",
  "Wrong Anchor Text",
  "Poor Content Context",
  "Missing Metrics",
];

const CHECKLIST = [
  "Link is live and accessible on the domain",
  "Anchor text matches my requirements",
  "The destination URL is functional",
  "Placement relevance is satisfactory",
];

export default function OrderInProgressModal({ order, open, onClose }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>("summary");
  const [subModal, setSubModal] = useState<SubModal>(null);
  const [issues, setIssues] = useState<string[]>([]);
  const [instructions, setInstructions] = useState("");
  const [checklist, setChecklist] = useState<string[]>([]);

  const toggleIssue = (issue: string) =>
    setIssues((prev) =>
      prev.includes(issue) ? prev.filter((i) => i !== issue) : [...prev, issue],
    );

  const toggleCheck = (item: string) =>
    setChecklist((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
    );

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setActiveTab("summary");
      setSubModal(null);
      setIssues([]);
      setInstructions("");
      setChecklist([]);
    }, 200);
  };

  return (
    <div className="relative">
      {/* Main modal */}
      <ModalShell open={open && !subModal} onClose={handleClose}>
        <section className="flex flex-col max-h-[88vh]">
          {/* Header */}
          <div className="pt-6 pb-0 shrink-0 border-b border-[#e9eaeb]">
            <div className="flex items-start gap-4 px-6 pr-8 py-4">
              <div className="w-11 h-11 bg-[#FFF4ED] flex items-center justify-center rounded-xl shrink-0">
                <FileText className="w-6 h-6 text-[#F04F23]" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-2xl font-bold text-[#181d27]">
                    {order.name}
                  </h2>
                  <StatusBadge status={order.id} />
                </div>
                <p className="text-sm text-[#535862] mt-1">
                  Assigned to{" "}
                  <span className="font-semibold text-[#181d27]">
                    {order.requester?.name ?? "Vini B."}
                  </span>
                </p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex mt-4 bg-[#FFF4ED] p-1 gap-1 px-6 pb-4">
              {TABS.map(({ id, label, icon: Icon }) => {
                const isActive = activeTab === id;
                return (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`flex-1 cursor-pointer flex items-center justify-center gap-2 py-3 px-3 rounded-lg font-semibold transition text-sm sm:text-base ${
                      isActive
                        ? "text-[#F04F23] bg-white shadow-sm"
                        : "text-[#535862] hover:text-[#F04F23] hover:bg-white/60"
                    }`}
                  >
                    <div
                      className={`p-1.5 rounded-xl ${
                        isActive
                          ? "bg-[#F04F23] text-white"
                          : "bg-white text-[#F04F23]/80"
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

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {activeTab === "summary" && <SummaryTab />}
            {activeTab === "submission" && <SubmissionTab />}
            {activeTab === "timeline" && <TimelineTab />}
          </div>

          {/* Footer */}
          <div className="shrink-0 px-6 sm:px-16 pb-5 pt-4 border-t border-[#e9eaeb] flex items-center justify-between bg-white">
            <Button
              variant="white"
              className="flex items-center gap-2.5 text-base rounded-lg"
            >
              <MessageSquare className="w-5 h-5" />
              Open Chat
            </Button>

            <Button
              variant="secondary"
              onClick={() => setSubModal("approve")}
              className="flex items-center gap-2 rounded-lg"
            >
              <CheckCircle2 className="w-4.5 h-4.5" />
              Approve & Release
            </Button>
          </div>
        </section>
      </ModalShell>

      {/* ── Revision Request Sub-modal ──────────────────────────────────── */}
      <ModalShell
        open={subModal === "revision"}
        onClose={() => setSubModal(null)}
      >
        <div className="flex flex-col px-6 pt-6 pb-8 gap-6 max-h-[85vh]">
          {/* Header */}
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#FFF4ED] border border-[#FDCFBE] flex items-center justify-center shrink-0">
              <RotateCcw className="w-5.5 h-5.5 text-[#F04F23]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#181d27]">
                Request Revision
              </h3>
              <p className="text-xs text-[#535862] uppercase tracking-wide font-medium mt-0.5">
                Revision Request
              </p>
            </div>
          </div>

          {/* Escrow banner */}
          <div className="bg-[#FFF4ED] border border-[#FDCFBE] rounded-xl px-5 py-3.5 flex items-center gap-3">
            <Info className="w-4.5 h-4.5 text-[#F04F23] shrink-0" />
            <p className="text-sm text-[#F04F23] font-medium">
              Escrow remains locked during revision process
            </p>
          </div>

          {/* Issues */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#181d27] mb-3">
              Identify Main Issues
            </p>
            <div className="space-y-2.5">
              {ISSUES.map((issue) => (
                <label
                  key={issue}
                  className="flex items-center gap-3 text-sm text-[#181d27] cursor-pointer hover:bg-gray-50 px-2 py-1 rounded transition"
                >
                  <input
                    type="checkbox"
                    checked={issues.includes(issue)}
                    onChange={() => toggleIssue(issue)}
                    className="w-4.5 h-4.5 rounded border-[#d1d5db] accent-[#F04F23]"
                  />
                  {issue}
                </label>
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-[#181d27] mb-2.5">
              Detailed Instructions <span className="text-[#F04F23]">*</span>
            </label>
            <textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              rows={5}
              placeholder="Describe exactly what needs to be fixed or improved..."
              className="w-full border border-[#e9eaeb] rounded-xl px-4 py-3.5 text-sm text-[#181d27] placeholder:text-[#9DA4AE] resize-none focus:outline-none focus:ring-2 focus:ring-[#F04F23]/30 focus:border-[#F04F23] transition"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-between pt-4 border-t border-[#e9eaeb] mt-2">
            <button
              onClick={() => setSubModal(null)}
              className="px-6 py-2.5 text-sm font-semibold text-[#535862] hover:text-[#181d27] transition"
            >
              Cancel
            </button>
            <button className="flex items-center gap-2 bg-[#F04F23] hover:bg-[#d94118] text-white font-semibold px-7 py-2.5 rounded-lg transition">
              Send Revision Request
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </ModalShell>

      {/* ── Approve & Release Sub-modal ─────────────────────────────────── */}
      <ModalShell
        open={subModal === "approve"}
        onClose={() => setSubModal(null)}
      >
        <div className="flex flex-col px-6 pt-6 pb-8 gap-6">
          {/* Header */}
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#ECFDF3] border border-[#6CE9A6] flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5.5 h-5.5 text-[#027A48]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#181d27]">
                Approve & Release Funds
              </h3>
              <p className="text-xs text-[#535862] uppercase tracking-wide font-medium mt-0.5">
                Final Confirmation
              </p>
            </div>
          </div>

          {/* Warning */}
          <div className="bg-[#FFF4ED] border border-[#FDCFBE] rounded-xl p-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#F04F23] shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-[#F04F23]">
                Irreversible Action
              </p>
              <p className="text-sm text-[#535862] mt-1 leading-relaxed">
                Releasing funds is final and cannot be undone. Make sure all
                requirements are met.
              </p>
            </div>
          </div>

          {/* Checklist */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#181d27] mb-3">
              Verification Checklist
            </p>
            <div className="space-y-3">
              {CHECKLIST.map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-3 text-sm text-[#181d27] cursor-pointer hover:bg-gray-50 px-2 py-1 rounded transition"
                >
                  <input
                    type="checkbox"
                    checked={checklist.includes(item)}
                    onChange={() => toggleCheck(item)}
                    className="w-4.5 h-4.5 rounded border-[#d1d5db] accent-[#F04F23]"
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-between pt-5 border-t border-[#e9eaeb]">
            <button
              onClick={() => setSubModal(null)}
              className="px-6 py-2.5 text-sm font-semibold text-[#535862] hover:text-[#181d27] transition"
            >
              Return to Order
            </button>
            <button
              disabled={checklist.length < CHECKLIST.length}
              className="flex items-center gap-2 bg-[#F04F23] hover:bg-[#d94118] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-7 py-2.5 rounded-lg transition"
            >
              Confirm & Release Funds
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </ModalShell>
    </div>
  );
}

/* ── Tab Components ──────────────────────────────────────────────────────── */

function SummaryTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="border border-[#e9eaeb] rounded-xl p-4 space-y-1.5 bg-white hover:shadow-sm transition">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#535862]">
            Status
          </p>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4.5 h-4.5 text-[#F04F23]" />
            <span className="font-semibold text-[#F04F23]">In Progress</span>
          </div>
        </div>

        <div className="border border-[#e9eaeb] rounded-xl p-4 space-y-1.5 bg-white hover:shadow-sm transition">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#535862]">
            Deadline
          </p>
          <div className="flex items-center gap-2">
            <Clock className="w-4.5 h-4.5 text-[#F04F23]" />
            <span className="font-semibold text-[#181d27]">Oct 24, 2026</span>
          </div>
        </div>

        <div className="border border-[#e9eaeb] rounded-xl p-4 space-y-1.5 bg-white hover:shadow-sm transition">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#535862]">
            Target Site
          </p>
          <div className="flex items-center gap-2">
            <Globe className="w-4.5 h-4.5 text-[#F04F23]" />
            <a
              href="#"
              className="font-semibold text-[#F04F23] hover:underline"
            >
              techtrends.io
            </a>
          </div>
        </div>
      </div>

      <section>
        <h3 className="text-xs font-bold uppercase tracking-widest text-[#181d27] mb-4">
          Placement Requirements
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-5 border-t border-b border-[#e9eaeb]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#535862] mb-1.5">
              Anchor Text
            </p>
            <p className="text-sm font-medium text-[#181d27]">
              "SaaS" Scaling Infrastructure
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#535862] mb-1.5">
              Required DR
            </p>
            <p className="text-sm font-medium text-[#181d27]">
              DR 72+ Guaranteed
            </p>
          </div>
        </div>
      </section>

      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-[#181d27] mb-3">
          Placement Guidelines
        </p>
        <p className="text-sm text-[#535862] leading-relaxed">
          The backlink must be placed within a contextually relevant paragraph.
          Content should be a minimum of 800 words, include 2 high-authority
          outbound links, and be permanent.
        </p>
      </div>
    </div>
  );
}

function SubmissionTab() {
  return (
    <div className="space-y-6">
      <section>
        <h3 className="text-xs font-bold uppercase tracking-widest text-[#181d27] mb-3">
          Provider Message
        </h3>
        <div className="bg-[#FFF4ED] border border-[#FDCFBE] rounded-xl px-5 py-4">
          <p className="text-sm text-[#535862] italic leading-relaxed">
            "I&apos;ve finalized the Guest Post Placement on techtrends.io. The
            link is live and I&apos;ve verified it&apos;s indexed correctly. Let
            me know if everything looks good."
          </p>
        </div>
      </section>

      <section>
        <h3 className="text-xs font-bold uppercase tracking-widest text-[#181d27] mb-3">
          Live Link
        </h3>
        <div className="border border-[#e9eaeb] rounded-xl overflow-hidden">
          <div className="flex items-center gap-3 px-4 py-3.5 hover:bg-gray-50/50 transition">
            <ExternalLink className="w-5 h-5 text-[#F04F23] shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[#181d27] truncate">
                https://techtrends.io/blog/s-calling-saas-infra
              </p>
              <p className="text-xs font-bold text-[#027A48] uppercase tracking-wide mt-0.5">
                Live & Verified
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-[#F04F23]" />
          </div>
        </div>
      </section>

      {/* Screenshot area */}
      <section>
        <h3 className="text-xs font-bold uppercase tracking-widest text-[#181d27] mb-3">
          Screenshot Proof
        </h3>
        <div className="border border-dashed border-[#e9eaeb] rounded-xl bg-[#f9fafb] flex flex-col items-center justify-center py-16 gap-3">
          <FileText className="w-10 h-10 text-[#d1d5db]" />
          <p className="text-sm text-[#9DA4AE]">Screenshot not available</p>
        </div>
      </section>
    </div>
  );
}

function TimelineTab() {
  return (
    <div className="space-y-5 py-2">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full border-2 border-[#F04F23] bg-white flex items-center justify-center shrink-0">
          <Plus className="w-5 h-5 text-[#F04F23]" />
        </div>
        <div className="pt-1">
          <p className="text-sm font-semibold text-[#181d27]">Order Created</p>
          <p className="text-xs text-[#9DA4AE] mt-0.5">Oct 08, 09:42 AM</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full border-2 border-[#F04F23] bg-white flex items-center justify-center shrink-0">
          <UserCheck className="w-5 h-5 text-[#F04F23]" />
        </div>
        <div className="pt-1">
          <p className="text-sm font-semibold text-[#181d27]">
            Provider Assigned
          </p>
          <p className="text-xs text-[#9DA4AE] mt-0.5">Oct 08, 11:42 AM</p>
        </div>
      </div>

      <div className="flex items-start gap-4 opacity-50">
        <div className="w-10 h-10 rounded-full border-2 border-dashed border-[#9DA4AE] bg-white flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-5 h-5 text-[#9DA4AE]" />
        </div>
        <div className="pt-1">
          <p className="text-sm font-semibold text-[#9DA4AE]">
            Awaiting Delivery Submission
          </p>
          <p className="text-xs text-[#9DA4AE] mt-0.5">Pending</p>
        </div>
      </div>
    </div>
  );
}
