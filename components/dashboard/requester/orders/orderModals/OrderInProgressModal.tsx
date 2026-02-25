"use client";

import { useState } from "react";
import {
  FileText,
  Clock,
  MessageSquare,
  RotateCcw,
  CheckCircle2,
  Info,
  AlertTriangle,
  ArrowUpRight,
  LucideIcon,
  ClipboardCheck,
  CheckCircle,
} from "lucide-react";
import ModalShell from "@/components/dashboard/provider/delivery/modals/ModalShell";
import { StatusBadge } from "@/components/ui/common/StatusBadge";
import { Button } from "@/components/ui/Button";
import type { OrderItem } from "../OrderCard";
import SummaryTab from "./orderTabs/SummaryTab";
import SubmissionTab from "./orderTabs/SubmissionTab";
import TimelineTab from "./orderTabs/TimelineTab";

type Tab = "summary" | "submission" | "timeline";
type SubModal = "revision" | "approve" | null;

type Props = {
  order: OrderItem;
  open: boolean;
  onClose: () => void;
};

const TABS: { id: Tab; label: string; icon: LucideIcon }[] = [
  { id: "summary", label: "Summary", icon: FileText },
  { id: "submission", label: "Submission", icon: ClipboardCheck },
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
      <ModalShell
        open={open && !subModal}
        onClose={handleClose}
        widthClass="max-w-4xl"
      >
        <section className="flex flex-col max-h-[88vh] ">
          {/* Header */}
          <div className="pt-6 pb-0 shrink-0 border-b border-[#e9eaeb]">
            <div className="flex items-start gap-4 px-6 pr-8 py-4">
              <div className="w-11 h-11 bg-[#FFF4ED] flex items-center justify-center rounded-xl shrink-0">
                <FileText className="w-6 h-6 text-secondary" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-2xl font-bold text-gray-600">
                    {order.name}
                  </h2>
                  <StatusBadge status={order.id} />
                </div>
                <p className="text-sm text-[#535862] mt-1">
                  Assigned to{" "}
                  <span className="font-semibold text-gray-600">
                    {order.requester?.name ?? "Vini B."}
                  </span>
                </p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex mt-4 bg-[#FFF4ED] p-1 gap-1 px-6 ">
              {TABS.map(({ id, label, icon: Icon }) => {
                const isActive = activeTab === id;
                return (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`flex-1 cursor-pointer flex items-center justify-center gap-2 py-3 px-3 rounded-lg font-semibold transition text-sm sm:text-base ${
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

          {/* Content */}
          <div className="flex-1 overflow-y-auto min-h-100 max-h-100 px-12 py-6">
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

            <div className="flex gap-4">
              <Button
                variant="ghost"
                onClick={() => setSubModal("revision")}
                className="flex items-center border gap-2 rounded-lg bg-gray-300 text-black uppercase"
              >
                <RotateCcw className="w-5 h-5" />
                Request Revision
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
          </div>
        </section>
      </ModalShell>

      {/* ── Revision Request Sub-modal ──────────────────────────────────── */}
      <ModalShell
        open={subModal === "revision"}
        onClose={() => setSubModal(null)}
        widthClass="max-w-4xl"
      >
        <div className="flex flex-col px-6 pt-6 pb-8 gap-6 max-h-[85vh]">
          {/* Header */}
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#FFF4ED] border border-[#FDCFBE] flex items-center justify-center shrink-0 ">
              <RotateCcw className="w-5.5 h-5.5 text-secondary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-600">
                Request Revision
              </h3>
              <p className="text-xs text-[#535862] uppercase tracking-wide font-medium mt-0.5">
                Revision Request
              </p>
            </div>
          </div>

          {/* Escrow banner */}
          <div className="bg-[#FFF4ED] mt-12 border border-[#FDCFBE] rounded-xl px-5 py-3.5 flex items-center gap-3 max-w-md mx-auto ">
            <Info className="w-4.5 h-4.5 text-secondary shrink-0" />
            <p className="text-sm text-secondary font-medium">
              ESCROW REMAINS LOCKED DURING REVISION
            </p>
          </div>

          {/* Issues */}
          <div className="px-2">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-3 ">
              Identify Main Issues
            </p>
            <div className="space-y-2.5">
              {ISSUES.map((issue) => (
                <label
                  key={issue}
                  className="flex items-center gap-3 text-sm text-gray-600 cursor-pointer hover:bg-gray-50 px-2 py-1 rounded transition"
                >
                  <input
                    type="checkbox"
                    checked={issues.includes(issue)}
                    onChange={() => toggleIssue(issue)}
                    className="w-4.5 h-4.5 rounded border-[#d1d5db] accent-secondary appearance-none checked:bg-[#fd751f] border focus:outline-none focus:ring-2 focus:ring-[#fd751f]/20
          transition-all cursor-pointer"
                  />
                  {issue}
                </label>
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-2.5">
              Detailed Instructions <span className="text-secondary">*</span>
            </label>
            <textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              rows={5}
              placeholder="Describe exactly what needs to be fixed or improved..."
              className="w-full border border-[#e9eaeb] rounded-xl px-4 py-3.5 text-sm text-gray-600 placeholder:text-[#9DA4AE] resize-none focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-between pt-4 border-t border-[#e9eaeb] mt-2">
            <button
              onClick={() => setSubModal(null)}
              className="px-6 py-2.5 text-sm font-semibold text-[#535862] hover:text-gray-600 transition"
            >
              Cancel
            </button>
            <Button variant="secondary" onClick={() => handleClose()}>
              Send Revision Request
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </ModalShell>

      {/* ── Approve & Release Sub-modal ─────────────────────────────────── */}
      <ModalShell
        open={subModal === "approve"}
        onClose={() => setSubModal(null)}
        widthClass="max-w-4xl"
      >
        <div className="flex flex-col px-6 pt-6 pb-8 gap-6">
          {/* Header */}
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-accent border border-[#6CE9A6] flex items-center justify-center shrink-0">
              <CheckCircle className="w-5.5 h-5.5 text-secondary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-600">
                Approve & Release Funds
              </h3>
              <p className="text-xs text-[#535862] uppercase tracking-wide font-medium mt-0.5">
                Final Confirmation
              </p>
            </div>
          </div>

          {/* Warning */}
          <div className="bg-[#FFF4ED] border border-[#FDCFBE] rounded-xl p-4 flex items-start gap-3 max-w-lg mx-auto">
            <AlertTriangle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-secondary">
                Irreversible Action
              </p>
              <p className="text-xs text-secondary mt-1 leading-relaxed">
                Releasing funds is final and cannot be undone. Make sure all
                requirements are met.
              </p>
            </div>
          </div>

          {/* Checklist */}
          <div className="px-6">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-600 text-wider mb-3">
              Verification Checklist
            </p>
            <div className="space-y-3 ">
              {CHECKLIST.map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-3  bg-gray-50 hover:bg-gray-50 text-sm font-medium text-gray-600 cursor-pointer p-2 rounded-lg border border-transparent hover:border-gray-200 transition-all group"
                >
                  <div className="relative flex items-center justify-center">
                    <input
                      type="checkbox"
                      checked={checklist.includes(item)}
                      onChange={() => toggleCheck(item)}
                      className="
          peer appearance-none w-7 rounded-lg h-7  border border-white
          checked:bg-[#fd751f] checked:border-secondary
          checked:ring-1 checked:ring-inset checked:ring-white
          focus:outline-none focus:ring-2 focus:ring-secondary/20
          transition-all cursor-pointer
        "
                    />
                    {/* Custom Checkmark Icon */}
                    <svg
                      className="absolute w-3 h-3 text-white transition-opacity opacity-0 peer-checked:opacity-100 pointer-events-none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-between pt-5 border-t border-[#e9eaeb]">
            <Button
              variant="white"
              onClick={() => setSubModal(null)}
              className="border-none text-lg transition uppercase"
            >
              Return to Summery
            </Button>
            <Button
              variant="secondary"
              className="rounded-lg"
              disabled={checklist.length < CHECKLIST.length}
            >
              Confirm & Release Funds
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </ModalShell>
    </div>
  );
}
