"use client";

import React, { useState } from "react";
import { Calendar, Eye, ExternalLink, Search, Shield } from "lucide-react";
import Pagination from "@/components/ui/Pagination";

interface Job {
  type: string;
  site: string;
  dr: number;
  id: string;
  due: string;
  snapshot: string[];
  notes: boolean;
  earnings: number;
  status: string;
  applicants: number;
  assignedProvider?: string;
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
    applicants: 3,
    assignedProvider: "John Smith",
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
    status: "WAITING FOR APPLICANTS",
    applicants: 0,
    assignedProvider: undefined,
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
    status: "APPLIED",
    applicants: 5,
    assignedProvider: "Sarah Johnson",
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
    status: "IN PROGRESS (PROVIDER WORKING)",
    applicants: 2,
    assignedProvider: "Mike Chen",
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
    status: "IN PROGRESS (PROVIDER WORKING)",
    applicants: 4,
    assignedProvider: "Emily Davis",
  },
];

const ProviderMyJobs = () => {
  const [activeTab, setActiveTab] = useState<
    "ALL" | "AVAILABLE" | "APPLIED" | "ASSIGNED" | "IN PROGRESS" | "SUBMITTED"
  >("ALL");
  const [searchTerm, setSearchTerm] = useState("");

  const tabs = [
    "ALL",
    "AVAILABLE",
    "APPLIED",
    "ASSIGNED",
    "IN PROGRESS",
    "SUBMITTED",
  ] as const;

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.site.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.id.includes(searchTerm);

    if (!matchesSearch) return false;

    if (activeTab === "ALL") return true;
    if (activeTab === "AVAILABLE")
      return job.status === "WAITING FOR APPLICANTS";
    if (activeTab === "APPLIED") return job.status === "APPLIED";
    if (activeTab === "ASSIGNED") return job.assignedProvider !== undefined;
    if (activeTab === "IN PROGRESS")
      return job.status === "IN PROGRESS (PROVIDER WORKING)";
    if (activeTab === "SUBMITTED") return job.status === "COMPLETED";

    return true;
  });

  const statusStyles: Record<string, string> = {
    COMPLETED: "bg-emerald-100 text-emerald-700",
    "WAITING FOR APPLICANTS": "bg-amber-100 text-amber-700",
    APPLIED: "bg-zinc-100 text-zinc-700",
    "IN PROGRESS (PROVIDER WORKING)": "bg-indigo-100 text-indigo-700",
  };

  return (
    <div className="flex flex-col gap-6 font-inter">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[30px] font-semibold font-sora text-[#181d27] leading-none">
              My Jobs
            </h1>
            <p className="text-sm font-medium text-[#535862] mt-1">
              Browse available placements, manage assigned work, and submit live
              links.
            </p>
          </div>

          {/* Search */}
          <div className="relative w-96">
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
      </div>

      {/* Tabs */}

      {/* Table */}
      <div className="border border-[#e9eaeb] rounded-2xl bg-white overflow-hidden">
        <div className="flex border-b border-[#e2e2e2]  overflow-x-auto py-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-4 cursor-pointer text-sm font-medium whitespace-nowrap transition-colors  ${
                activeTab === tab
                  ? "text-[#ff6b00] border-[#ff6b00]"
                  : "text-[#535862] border-transparent hover:text-[#181d27]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <table className="w-full bg-white ">
          <thead>
            <tr className="border-b border-[#e2e2e2] ">
              <th className="py-6 px-6 text-left text-xs font-semibold text-[#535862] uppercase tracking-wider">
                PLACEMENT DETAILS
              </th>
              <th className="py-6 px-6 text-left text-xs font-semibold text-[#535862] uppercase tracking-wider">
                LIFECYCLE STATUS
              </th>
              <th className="py-6 px-6 text-center text-xs font-semibold text-[#535862] uppercase tracking-wider">
                APPLICANTS
              </th>
              <th className="py-6 px-6 text-left text-xs font-semibold text-[#535862] uppercase tracking-wider">
                ASSIGNED PROVIDER
              </th>
              <th className="py-6 px-6 text-right text-xs font-semibold text-[#535862] uppercase tracking-wider">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e9eaeb]">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <tr
                  key={job.id}
                  className="hover:bg-[#fafafa] transition-colors"
                >
                  {/* Placement Details */}
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
                      ID-{job.id}
                    </div>
                  </td>

                  {/* Lifecycle Status */}
                  <td className="py-7 px-6">
                    <div
                      className={`inline-flex items-center px-5 py-1.5 rounded-full text-xs font-semibold ${statusStyles[job.status]}`}
                    >
                      {job.status}
                    </div>
                  </td>

                  {/* Applicants */}
                  <td className="py-7 px-6 text-center">
                    <div className="text-[#181d27] font-semibold text-lg">
                      {job.applicants}
                    </div>
                    <div className="text-xs text-[#535862] mt-1">
                      {job.applicants === 1 ? "applicant" : "applicants"}
                    </div>
                  </td>

                  {/* Assigned Provider */}
                  <td className="py-7 px-6">
                    {job.assignedProvider ? (
                      <div>
                        <div className="text-sm font-medium text-[#181d27]">
                          {job.assignedProvider}
                        </div>
                      </div>
                    ) : (
                      <div className="text-sm text-[#9ca3af] italic">
                        Unassigned
                      </div>
                    )}
                  </td>

                  {/* Actions */}
                  <td className="py-7 px-6">
                    <div className="flex items-center gap-5 justify-end">
                      <button className="text-[#535862] hover:text-[#6366f1] transition-colors">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="text-[#535862] hover:text-[#6366f1] transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
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

      {/* Pagination */}
      <div className="w-full">
        <Pagination
          currentPage={1}
          totalPages={10}
          className="w-full "
          onPageChange={(page) => console.log("Selected page:", page)}
        />
      </div>

      {/* Marketplace Governance Note */}
      <div className="bg-[#fff9ed] border border-[#ffe4b3] rounded-2xl p-6 flex gap-4">
        <Shield className="w-6 h-6 text-[#f59e0b] mt-0.5 flex-shrink-0" />
        <div>
          <div className="uppercase text-[#f59e0b] text-xs font-semibold tracking-widest">
            MARKETPLACE GOVERNANCE &amp; FULFILMENT
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
