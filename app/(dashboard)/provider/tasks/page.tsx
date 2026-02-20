"use client";

import React from "react";

import {
  Search,
  ArrowRight,
  Clock,
  CheckCircle2,
  AlertCircle,
  MoreVertical,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

// Mock task data
const tasks = [
  {
    id: "TASK-7821",
    title: "High Authority Guest Post on TechCrunch.com",
    type: "GUEST POST PLACEMENT",
    status: "Submitted",
    statusColor: "text-[#3538cd] bg-[#eef4ff]",
    requester: "Alpha Brands Inc.",
    earning: "+120 CR",
    deadline: "Oct 28, 2026",
  },
  {
    id: "TASK-7820",
    title: "Niche Edit on Forbes.com",
    type: "NICHE EDIT",
    status: "In Progress",
    statusColor: "text-[#f79009] bg-[#fffaeb]",
    requester: "Growth Matrix LLC",
    earning: "+85 CR",
    deadline: "Nov 2, 2026",
  },
  {
    id: "TASK-7819",
    title: "Content Placement on Mashable",
    type: "CONTENT PLACEMENT",
    status: "Completed",
    statusColor: "text-[#039855] bg-[#d1fadf]",
    requester: "Web3 Ventures",
    earning: "+95 CR",
    deadline: "Oct 15, 2026",
  },
  {
    id: "TASK-7818",
    title: "Guest Post on Entrepreneur.com",
    type: "GUEST POST PLACEMENT",
    status: "Approved",
    statusColor: "text-[#039855] bg-[#d1fadf]",
    requester: "Content Masters",
    earning: "+150 CR",
    deadline: "Oct 30, 2026",
  },
];

const statusFilters = [
  "All",
  "In Progress",
  "Submitted",
  "Approved",
  "Completed",
];

const ProviderTasksPage = () => {
  const [selectedStatus, setSelectedStatus] = React.useState("All");

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[30px] font-semibold text-[#181d27] leading-[38px] font-sora">
            My Active Tasks
          </h1>
          <p className="text-base font-medium text-[#535862] mt-1">
            Track and manage your ongoing placement tasks
          </p>
        </div>
        <Link
          href="/provider/opportunities"
          className="flex items-center gap-2 bg-[#fd751f] text-white font-semibold text-sm px-5 py-2.5 rounded-lg"
        >
          Browse Opportunities
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-[#fff1e9] rounded-lg flex items-center justify-center">
            <Clock className="w-6 h-6 text-[#fd751f]" />
          </div>
          <div>
            <p className="text-xs text-[#717680]">IN PROGRESS</p>
            <p className="text-2xl font-bold text-[#181d27] font-sora">8</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-[#eef4ff] rounded-lg flex items-center justify-center">
            <AlertCircle className="w-6 h-6 text-[#3538cd]" />
          </div>
          <div>
            <p className="text-xs text-[#717680]">SUBMITTED</p>
            <p className="text-2xl font-bold text-[#181d27] font-sora">3</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-[#d1fadf] rounded-lg flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6 text-[#039855]" />
          </div>
          <div>
            <p className="text-xs text-[#717680]">APPROVED</p>
            <p className="text-2xl font-bold text-[#181d27] font-sora">12</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-[#ebffe9] rounded-lg flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6 text-[#2ab516]" />
          </div>
          <div>
            <p className="text-xs text-[#717680]">TOTAL EARNINGS</p>
            <p className="text-2xl font-bold text-[#2ab516] font-sora">
              +1,250 CR
            </p>
          </div>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-white rounded-xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="bg-[#f5f5f5] border border-[#e9eaeb] rounded-lg p-3 flex items-center gap-2">
            <Search className="w-5 h-5 text-[#a4a7ae]" />
            <input
              type="text"
              placeholder="Search tasks..."
              className="text-sm text-[#a4a7ae] bg-transparent outline-none w-48"
            />
          </div>

          {/* Status Tabs */}
          <div className="flex items-center gap-2">
            {statusFilters.map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedStatus === status
                    ? "bg-[#fd751f] text-white"
                    : "bg-[#f5f5f5] text-[#717680] hover:bg-[#e9eaeb]"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <span className="text-xs font-medium text-[#331ffd]">SORT BY:</span>
          <div className="flex items-center gap-1.5 cursor-pointer">
            <span className="text-xs font-medium text-[#331ffd]">Deadline</span>
            <ChevronDown className="w-4 h-4 text-[#331ffd]" />
          </div>
        </div>
      </div>

      {/* Tasks Table */}
      <div className="bg-white rounded-xl overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-7 gap-4 px-6 py-4 border-b border-[#e9eaeb] bg-[#f5f5f5]">
          <span className="text-xs font-semibold text-[#535862]">TASK ID</span>
          <span className="text-xs font-semibold text-[#535862] col-span-2">
            TITLE
          </span>
          <span className="text-xs font-semibold text-[#535862]">STATUS</span>
          <span className="text-xs font-semibold text-[#535862]">
            REQUESTER
          </span>
          <span className="text-xs font-semibold text-[#535862]">EARNING</span>
          <span className="text-xs font-semibold text-[#535862]">ACTIONS</span>
        </div>

        {/* Table Body */}
        {tasks.map((task) => (
          <div
            key={task.id}
            className="grid grid-cols-7 gap-4 px-6 py-4 border-b border-[#e9eaeb] items-center hover:bg-[#fafafa] transition-colors"
          >
            <span className="text-sm font-semibold text-[#331ffd]">
              {task.id}
            </span>
            <div className="col-span-2">
              <p className="text-sm font-medium text-[#252b37] truncate">
                {task.title}
              </p>
              <span className="text-xs text-[#717680]">{task.type}</span>
            </div>
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full w-fit ${task.statusColor}`}
            >
              {task.status}
            </span>
            <span className="text-sm text-[#717680]">{task.requester}</span>
            <span className="text-sm font-semibold text-[#2ab516]">
              {task.earning}
            </span>
            <div className="flex items-center gap-3">
              <Link
                href={`/provider/tasks/${task.id}`}
                className="text-xs font-semibold text-[#fd751f] flex items-center gap-1 hover:underline"
              >
                {task.status === "In Progress" ? "Submit" : "View"}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="text-[#717680]">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}

        {/* Summary Footer */}
        <div className="px-6 py-4 bg-[#f5f5f5] flex items-center justify-between">
          <span className="text-sm text-[#717680]">
            Showing {tasks.length} of {tasks.length} tasks
          </span>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 border border-[#e9eaeb] rounded-lg text-sm text-[#717680]">
              Previous
            </button>
            <button className="px-3 py-1.5 bg-[#fd751f] text-white rounded-lg text-sm">
              1
            </button>
            <button className="px-3 py-1.5 border border-[#e9eaeb] rounded-lg text-sm text-[#717680]">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderTasksPage;
