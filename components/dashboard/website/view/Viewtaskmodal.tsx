"use client";

import { useState } from "react";
import {
  ExternalLink,
  FileText,
  Link2,
  CheckCircle2,
  XCircle,
  Clock,
} from "lucide-react";
import ModalShell from "@/components/dashboard/provider/delivery/modals/ModalShell";

export type TaskStatus = "In Progress" | "Completed" | "Pending";

export interface TaskDetail {
  name: string;
  type: "Follow" | "No-Follow";
  status: TaskStatus;
  provider: string;
  created: string;
  domain: string;
}

type Tab = "overview" | "content" | "messages" | "audit";

type Props = {
  task: TaskDetail | null;
  open: boolean;
  onClose: () => void;
};

const AUDIT_ROWS = [
  {
    timestamp: "2026-01-15  10:30:15",
    action: "Task Created",
    actor: "admin@backlyst.com",
    before: "—",
    after: "Pending",
    severity: "Info",
  },
  {
    timestamp: "2026-01-15  11:42:08",
    action: "Provider Assigned",
    actor: "System",
    before: "Unassigned",
    after: "SaaSMarketing.io",
    severity: "Info",
  },
  {
    timestamp: "2026-01-16  09:15:32",
    action: "Status Changed",
    actor: "provider@saasmarketing.io",
    before: "Pending",
    after: "In Progress",
    severity: "Info",
  },
  {
    timestamp: "2026-01-18  14:22:41",
    action: "Deadline Extended",
    actor: "admin@backlyst.com",
    before: "2026-01-20",
    after: "2026-01-25",
    severity: "Warning",
  },
];

const CONTENT_REQUIREMENTS = [
  { text: "Minimum 800 words article required", pass: true },
  { text: "Original content only - no plagiarism", pass: true },
  { text: "SEO-optimized with proper headings (H2, H3)", pass: true },
  { text: "Link must be contextually relevant within paragraph", pass: true },
  { text: "No gambling, adult, or pharmaceutical topics", pass: false },
];

const STATUS_BADGE: Record<TaskStatus, string> = {
  "In Progress": "bg-[#EFF8FF] text-[#175CD3]",
  Completed: "bg-[#ECFDF3] text-[#027A48]",
  Pending: "bg-[#FFF6ED] text-[#B54708]",
};

const SEVERITY_BADGE: Record<string, string> = {
  Info: "bg-[#EFF8FF] text-[#175CD3]",
  Warning: "bg-[#FFF6ED] text-[#B54708]",
  Error: "bg-[#FEF3F2] text-[#B42318]",
};

export default function ViewTaskModal({ task, open, onClose }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  if (!task) return null;

  const handleClose = () => {
    onClose();
    setTimeout(() => setActiveTab("overview"), 200);
  };

  return (
    <ModalShell open={open} onClose={handleClose} widthClass="max-w-4xl">
      <div className="flex flex-col max-h-[90vh]">
        <div className="px-6 pt-5 pb-4 border-b border-[#e9eaeb] shrink-0">
          <div className="flex items-start justify-between pr-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#181d27] flex items-center justify-center text-white font-bold text-base shrink-0">
                {task.domain[0].toUpperCase()}
              </div>
              <div>
                <p className="text-sm font-bold text-[#181d27]">
                  {task.domain}
                </p>
                <p className="text-xs text-[#9DA4AE]">Website Task Workspace</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-1.5">
              <p className="text-sm font-semibold text-[#181d27]">
                {task.name}
              </p>
              <span className="text-[10px] font-bold bg-[#EFF8FF] text-[#175CD3] border border-[#B2DDFF] px-3 py-0.5 rounded-full">
                {task.type}
              </span>
            </div>

            <span
              className={`text-xs font-bold px-3 py-1.5 rounded-full ${STATUS_BADGE[task.status]}`}
            >
              {task.status}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-2 mt-4 text-sm">
            <MetaRow label="Task ID" value="TSK-000001" />
            <MetaRow label="Provider Name" value={task.provider} />
            <MetaRow label="Created Date" value={task.created} />
            <MetaRow label="Website Category" value="Tech" />
            <MetaRow label="Delivery Deadline" value="Jan 25, 2026" />
            <MetaRow label="Domain Authority (DR)" value="DR 92" />
            <MetaRow label="Requested By" value="Backlyst Admin" bold />
            <MetaRow label="Trust Score" value="94/100" green />
          </div>
        </div>

        <div className="flex border-b border-[#e9eaeb] shrink-0 px-6">
          {(
            [
              { id: "overview", label: "Task Overview" },
              { id: "content", label: "Content & Requirements" },
              { id: "messages", label: "Activity & Messages" },
              { id: "audit", label: "Audit Trail" },
            ] as { id: Tab; label: string }[]
          ).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 cursor-pointer py-3 text-sm font-medium  transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? "border-b-secondary text-secondary"
                  : "border-transparent text-[#535862] hover:text-[#181d27]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5 min-h-80 max-h-80">
          {activeTab === "overview" && <TabOverview task={task} />}
          {activeTab === "content" && <TabContent />}
          {activeTab === "messages" && <TabMessages />}
          {activeTab === "audit" && <TabAudit />}
        </div>

        <div className="shrink-0 px-6 py-4 border-t border-[#e9eaeb] flex items-center justify-between">
          <p className="text-xs text-[#9DA4AE]">
            This task belongs to the selected website and maintains immutable
            history.
          </p>
          <div className="flex gap-3">
            <button
              onClick={handleClose}
              className="border border-[#e9eaeb] text-[#535862] font-semibold text-sm px-5 py-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Back to Website
            </button>
            <button className="bg-secondary hover:bg-[#d94118] text-white font-semibold text-sm px-5 py-2 rounded-lg transition-colors">
              Mark as Review
            </button>
          </div>
        </div>
      </div>
    </ModalShell>
  );
}

function TabOverview({ task }: { task: TaskDetail }) {
  return (
    <div className="space-y-5">
      <div className="border border-[#e9eaeb] rounded-xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <FileText className="w-4 h-4 text-[#535862]" />
          <p className="text-sm font-bold text-[#181d27]">Task Description</p>
        </div>
        <p className="text-sm text-[#535862] leading-relaxed">
          We are looking for a high-quality backlink placement on your website.
          The link should be placed within an informative blog post that
          provides value to your readers. The content should naturally
          incorporate our target URL with the specified anchor text.
        </p>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <Link2 className="w-4 h-4 text-[#535862]" />
          <p className="text-sm font-bold text-[#181d27]">
            Link Placement Details
          </p>
        </div>

        <div className="space-y-0 border border-[#e9eaeb] rounded-xl overflow-hidden divide-y divide-[#e9eaeb]">
          <PlacementRow label="Target URL">
            <a
              href="https://example.com/blog/article"
              className="text-[#4169E1] hover:underline text-sm flex items-center gap-1"
            >
              https://example.com/blog/article
              <ExternalLink className="w-3 h-3" />
            </a>
          </PlacementRow>

          <PlacementRow label="Anchor Text">
            <span className="text-sm text-[#181d27] font-medium">
              best marketing tools
            </span>
          </PlacementRow>

          <PlacementRow label="Link Type">
            <span className="text-xs font-bold bg-[#EFF8FF] text-[#175CD3] px-3 py-1 rounded-full">
              {task.type}
            </span>
          </PlacementRow>
        </div>
      </div>
    </div>
  );
}

function TabContent() {
  return (
    <div>
      <p className="text-sm font-bold text-[#181d27] mb-4">
        Content Requirements
      </p>
      <div className="space-y-3">
        {CONTENT_REQUIREMENTS.map((req) => (
          <div
            key={req.text}
            className="flex items-center gap-3 text-sm text-[#535862]"
          >
            {req.pass ? (
              <CheckCircle2 className="w-5 h-5 text-[#027A48] shrink-0" />
            ) : (
              <XCircle className="w-5 h-5 text-[#B42318] shrink-0" />
            )}
            {req.text}
          </div>
        ))}
      </div>
    </div>
  );
}

function TabMessages() {
  return (
    <div className="space-y-4">
      <SystemEvent
        text="Task created and assigned to provider"
        timestamp="2026-01-15 10:30 AM"
      />

      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-[#EDE9FE] flex items-center justify-center text-xs font-bold text-[#7C3AED] shrink-0">
          S
        </div>
        <div className="max-w-xs">
          <p className="text-xs text-[#535862] mb-1">
            <span className="font-semibold text-[#181d27]">
              SaaSMarketing.io
            </span>{" "}
            <span className="text-[#9DA4AE]">2026-01-15 11:45 AM</span>
          </p>
          <div className="bg-white border border-[#e9eaeb] rounded-2xl rounded-tl-none px-4 py-3 text-sm text-[#535862] leading-relaxed">
            Hello! I&apos;ve reviewed your requirements and can have the
            backlink placed within 3 days. The blog post will be published on
            our homepage.
          </div>
        </div>
      </div>

      <div className="flex items-start gap-3 justify-end">
        <div className="max-w-xs text-right">
          <p className="text-xs text-[#535862] mb-1">
            <span className="font-semibold text-[#181d27]">You</span>{" "}
            <span className="text-[#9DA4AE]">2026-01-15 02:20 PM</span>
          </p>
          <div className="bg-secondary rounded-2xl rounded-tr-none px-4 py-3 text-sm text-white leading-relaxed text-left">
            Perfect! Please make sure the anchor text is exactly as specified
            and the link is do-follow.
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-white shrink-0">
          Y
        </div>
      </div>

      <SystemEvent
        text="Provider marked task as in progress"
        timestamp="2026-01-16 09:15 AM"
      />
    </div>
  );
}

function TabAudit() {
  return (
    <div className="border border-[#e9eaeb] rounded-xl overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-[#f9fafb] border-b border-[#e9eaeb]">
            {[
              "Timestamp",
              "Action",
              "Actor",
              "Before",
              "After",
              "Severity",
            ].map((h) => (
              <th
                key={h}
                className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-[#535862]"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#e9eaeb]">
          {AUDIT_ROWS.map((row) => (
            <tr
              key={row.timestamp}
              className="hover:bg-[#fafafa] transition-colors"
            >
              <td className="px-4 py-3 text-xs text-[#535862] font-mono">
                {row.timestamp}
              </td>
              <td className="px-4 py-3 text-xs font-semibold text-[#181d27]">
                {row.action}
              </td>
              <td className="px-4 py-3 text-xs text-[#535862]">{row.actor}</td>
              <td className="px-4 py-3 text-xs text-[#535862]">{row.before}</td>
              <td className="px-4 py-3 text-xs text-[#535862]">{row.after}</td>
              <td className="px-4 py-3">
                <span
                  className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${SEVERITY_BADGE[row.severity]}`}
                >
                  {row.severity}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MetaRow({
  label,
  value,
  bold,
  green,
}: {
  label: string;
  value: string;
  bold?: boolean;
  green?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs text-[#9DA4AE]">{label}</span>
      <span
        className={`text-xs ${bold ? "font-bold text-[#181d27]" : green ? "font-bold text-[#027A48]" : "text-[#535862]"}`}
      >
        {value}
      </span>
    </div>
  );
}

function PlacementRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between px-5 py-3">
      <span className="text-sm text-[#535862]">{label}</span>
      {children}
    </div>
  );
}

function SystemEvent({ text, timestamp }: { text: string; timestamp: string }) {
  return (
    <div className="flex items-center justify-center gap-2 text-xs text-[#9DA4AE]">
      <Clock className="w-3.5 h-3.5" />
      <span>{text}</span>
      <span className="text-[#e9eaeb]">·</span>
      <span>{timestamp}</span>
    </div>
  );
}
