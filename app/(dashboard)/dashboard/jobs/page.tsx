"use client";

import { useState } from "react";
import {
  Calendar,
  Eye,
  Search,
  Shield,
  MessagesSquareIcon,
} from "lucide-react";
import Pagination from "@/components/ui/Pagination";
import { DeliveryItem } from "@/components/dashboard/provider/delivery/DeliveryCard";
import DeliveryAppliedModal from "@/components/dashboard/provider/delivery/modals/DeliveryAppliedModal";
import DeliveryAvailableModal from "@/components/dashboard/provider/delivery/modals/DeliveryAvailableModal";
import DeliverySubmittedModal from "@/components/dashboard/provider/delivery/modals/DeliverySubmittedModal";
import DeliveryInProgressModal from "@/components/dashboard/provider/delivery/modals/DeliveryInProgressModal";
import DeliveryCompletedModal from "@/components/dashboard/provider/delivery/modals/DeliveryCompletedModal";
import { useRouter } from "next/navigation";

type JobStatus =
  | "AVAILABLE TO APPLY"
  | "APPLIED"
  | "SUBMITTED"
  | "IN PROGRESS"
  | "COMPLETED";

interface Job {
  type: string;
  site: string;
  dr: number;
  id: string;
  due: string;
  snapshot: string[];
  notes: boolean;
  earnings: number;
  status: JobStatus;
  requester?: string;
  reward?: string;
  timeLeft?: string;
  image?: string;
}

const jobs: Job[] = [
  {
    type: "Guest Post Placement",
    site: "techtrends.io",
    dr: 72,
    id: "7821",
    due: "OCT 24, 2026",
    snapshot: ["DOFOLLOW", "CONTENT INC."],
    notes: true,
    earnings: 95,
    status: "COMPLETED",
    requester: "Alpha Brands Inc.",
    reward: "+95.00 CR",
    timeLeft: "Closed",
    image: "",
  },
  {
    type: "Backlink Insertion",
    site: "authorityblog.com",
    dr: 85,
    id: "9012",
    due: "OCT 08, 2026",
    snapshot: ["DOFOLLOW", "INSERTION ONLY"],
    notes: true,
    earnings: 45,
    status: "AVAILABLE TO APPLY",
    requester: "Alpha Brands Inc.",
    reward: "+45.00 CR",
    timeLeft: "5 days",
    image: "",
  },
  {
    type: "Guest Post Placement",
    site: "startupy.io",
    dr: 58,
    id: "4452",
    due: "OCT 24, 2026",
    snapshot: ["DOFOLLOW", "CONTENT INC."],
    notes: false,
    earnings: 80,
    status: "SUBMITTED",
    requester: "Alpha Brands Inc.",
    reward: "+80.00 CR",
    timeLeft: "2 days",
    image: "",
  },
  {
    type: "Niche Edit",
    site: "techtrends.io",
    dr: 72,
    id: "3310",
    due: "OCT 24, 2026",
    snapshot: ["DOFOLLOW", "INSERTION ONLY"],
    notes: false,
    earnings: 120,
    status: "APPLIED",
    requester: "Alpha Brands Inc.",
    reward: "+120.00 CR",
    timeLeft: "8 days",
    image: "",
  },
  {
    type: "Guest Post Placement",
    site: "marketplace.io",
    dr: 58,
    id: "1192",
    due: "OCT 24, 2026",
    snapshot: ["DOFOLLOW", "CONTENT INC."],
    notes: false,
    earnings: 110,
    status: "IN PROGRESS",
    requester: "Alpha Brands Inc.",
    reward: "+110.00 CR",
    timeLeft: "3 days",
    image: "",
  },
];

function toDeliveryItem(job: Job): DeliveryItem {
  return {
    title: job.type,
    requester: job.requester ?? job.site,
    reward: job.reward ?? `+${job.earnings}.00 CR`,
    timeLeft: job.timeLeft ?? job.due,
    status: job.status,
    image: job.image ?? "",
  };
}

const STATUS_STYLES: Record<JobStatus, string> = {
  COMPLETED: "bg-emerald-100 text-emerald-700",
  "AVAILABLE TO APPLY": "bg-amber-100 text-amber-700",
  SUBMITTED: "bg-rose-100   text-rose-700",
  APPLIED: "bg-zinc-100   text-zinc-700",
  "IN PROGRESS": "bg-indigo-100 text-indigo-700",
};

const TAG_STYLE =
  "px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full";
const NOTES_STYLE =
  "px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full";

function JobRow({ job }: { job: Job }) {
  const [open, setOpen] = useState(false);
  const task = toDeliveryItem(job);
  const router = useRouter();

  return (
    <>
      <tr className="hover:bg-[#fafafa] transition-colors">
        <td className="py-7 px-6">
          <div className="font-semibold text-[#181d27] text-[15px]">
            {job.type}
          </div>
          <div className="flex items-center gap-2 mt-3">
            <span className="text-sm font-medium text-[#535862]">
              {job.site}
            </span>
            <span className="px-2.5 py-px bg-emerald-100 text-emerald-700 text-xs font-semibold rounded">
              DR {job.dr}
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-3 text-xs text-[#535862]">
            <Calendar className="w-4 h-4" />
            ID-{job.id} &nbsp;DUE {job.due}
          </div>
        </td>

        <td className="py-7 px-6">
          <div className="flex flex-wrap gap-2">
            {job.snapshot.map((tag, i) => (
              <span key={i} className={TAG_STYLE}>
                {tag}
              </span>
            ))}
            {job.notes && <span className={NOTES_STYLE}>NOTES</span>}
          </div>
        </td>

        <td className="py-7 px-6">
          <div className="text-gray-800 font-semibold text-2xl tracking-tight">
            +{job.earnings}.00
          </div>
          <div className="text-xs text-[#535862] mt-1 leading-tight">
            EARNED ON APPROVAL
            <br />
            NON-WITHDRAWABLE
          </div>
        </td>

        <td className="py-7 px-6">
          <span
            className={`inline-flex items-center px-5 py-1.5 rounded-full text-xs font-semibold ${STATUS_STYLES[job.status]}`}
          >
            {job.status}
          </span>
        </td>

        <td className="py-7 px-6">
          <div className="flex items-center gap-5">
            <button
              onClick={() => setOpen(true)}
              className="text-[#2AB516] hover:text-[#2ad110] transition-colors cursor-pointer"
              aria-label="View details"
            >
              <Eye className="w-5 h-5" />
            </button>
            <button
              onClick={() => router.push("/dashboard/messages")}
              className="text-[#9E77ED] hover:text-[#6366f1] transition-colors cursor-pointer"
              aria-label="Open chat"
            >
              <MessagesSquareIcon className="w-5 h-5" />
            </button>
          </div>
        </td>
      </tr>

      {job.status === "AVAILABLE TO APPLY" && (
        <DeliveryAvailableModal
          task={task}
          open={open}
          onClose={() => setOpen(false)}
        />
      )}
      {job.status === "APPLIED" && (
        <DeliveryAppliedModal
          task={task}
          open={open}
          onClose={() => setOpen(false)}
        />
      )}
      {job.status === "SUBMITTED" && (
        <DeliverySubmittedModal
          task={task}
          open={open}
          onClose={() => setOpen(false)}
        />
      )}
      {job.status === "IN PROGRESS" && (
        <DeliveryInProgressModal
          task={task}
          open={open}
          onClose={() => setOpen(false)}
        />
      )}
      {job.status === "COMPLETED" && (
        <DeliveryCompletedModal
          task={task}
          open={open}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}

type TabValue =
  | "ALL"
  | "AVAILABLE"
  | "APPLIED"
  | "ASSIGNED"
  | "IN PROGRESS"
  | "SUBMITTED";

const TABS: TabValue[] = [
  "ALL",
  "AVAILABLE",
  "APPLIED",
  "ASSIGNED",
  "IN PROGRESS",
  "SUBMITTED",
];

function filterByTab(job: Job, tab: TabValue): boolean {
  if (tab === "ALL") return true;
  if (tab === "AVAILABLE") return job.status === "AVAILABLE TO APPLY";
  if (tab === "APPLIED") return job.status === "APPLIED";
  if (tab === "IN PROGRESS") return job.status === "IN PROGRESS";
  if (tab === "SUBMITTED") return job.status === "SUBMITTED";
  return true;
}

const ProviderMyJobs = () => {
  const [activeTab, setActiveTab] = useState<TabValue>("ALL");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.site.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.id.includes(searchTerm);

    return matchesSearch && filterByTab(job, activeTab);
  });

  return (
    <div className="flex flex-col gap-6 font-inter">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-[30px] font-semibold font-sora text-[#181d27] leading-none">
            My Jobs
          </h1>
          <p className="text-sm font-medium text-[#535862] mt-1">
            Browse available placements, manage assigned work, and submit live
            links.
          </p>
        </div>

        <div className="relative w-96 shrink-0">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#535862]" />
          <input
            type="text"
            placeholder="Search by site, ID, or title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-white border border-[#e2e2e2] rounded-full text-sm focus:outline-none focus:border-[#6366f1] placeholder:text-[#535862]"
          />
        </div>
      </div>

      <div className="border border-[#e9eaeb] rounded-2xl bg-white overflow-hidden">
        <div className="flex border-b border-[#e2e2e2] overflow-x-auto py-1">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-4 cursor-pointer text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
                activeTab === tab
                  ? "text-[#ff6b00] border-[#ff6b00]"
                  : "text-[#535862] border-transparent hover:text-[#181d27]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <table className="w-full bg-white">
          <thead>
            <tr className="border-b border-[#e2e2e2]">
              {[
                "Placement Requirements",
                "Requirements Snapshot",
                "Earnings (CR)",
                "Work Status",
                "Action",
              ].map((h) => (
                <th
                  key={h}
                  className="py-6 px-6 text-left text-xs font-semibold text-[#535862] uppercase tracking-wider"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e9eaeb]">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => <JobRow key={job.id} job={job} />)
            ) : (
              <tr>
                <td colSpan={5} className="py-20 text-center text-[#535862]">
                  No jobs found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="w-full">
        <Pagination
          currentPage={currentPage}
          totalPages={10}
          className="w-full"
          onPageChange={setCurrentPage}
        />
      </div>

      <div className="bg-[#fff9ed] border border-[#ffe4b3] rounded-2xl p-6 flex gap-4">
        <Shield className="w-6 h-6 text-[#f59e0b] mt-0.5 shrink-0" />
        <div>
          <div className="uppercase text-[#f59e0b] text-xs font-semibold tracking-widest">
            Marketplace Governance &amp; Fulfillment
          </div>
          <p className="text-sm text-[#854d0e] mt-2 leading-relaxed">
            Earnings is issued to your ledger strictly after Requester Approval.
            Note that credits are non-withdrawable platform units intended for
            ecosystem reinvestment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProviderMyJobs;
