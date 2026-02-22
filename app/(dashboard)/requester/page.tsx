import React from "react";

import {
  Layers,
  CheckCircle,
  Shield,
  Database,
  Eye,
  MessageSquare,
  ArrowRight,
  Users,
  PlayCircle,
  ChevronLeft,
  ChevronRight,
  Award,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { StatCard } from "@/components/ui/common/StatCard";
import { StatusBadge } from "@/components/ui/common/StatusBadge";

// Mock data
const recentActivity = [
  {
    name: "High-Authority Backlink Provider",
    id: "#1249",
    status: "In Progress",
    applicants: 8,
    provider: { name: "Olivia Rhye", avatar: "/assets/avatar-1.png" },
  },
  {
    name: "Guest Post & Outreach Specialist",
    id: "#1249",
    status: "Completed",
    applicants: 8,
    provider: { name: "Phoenix Baker", avatar: "/assets/avatar-2.png" },
  },
  {
    name: "White-Hat Link Building Expert",
    id: "#1249",
    status: "Waiting for Applicants",
    applicants: 8,
    provider: { name: "Natali Craig", avatar: "/assets/avatar-3.png" },
  },
  {
    name: "Content Placement Provider",
    id: "#1249",
    status: "In Progress",
    applicants: 8,
    provider: { name: "Lyle Kauffman", avatar: "/assets/avatar-4.png" },
  },
  {
    name: "Niche Edit",
    id: "#3310",
    status: "Applied",
    applicants: 1,
    provider: null,
  },
];

const RequesterDashboardHome = () => {
  return (
    <div className="flex flex-col gap-6 font-inter">
      {/* Header Section */}
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            {/* Level Badge */}
            <div className="flex items-center gap-1.5 px-4 py-2 bg-white border border-[#e2e2e2] rounded-full w-fit">
              <Award className="w-5 h-5 text-[#6366f1]" />
              <span className="text-xs font-semibold text-[#0f0f0f]">
                LEVEL - 2
              </span>
            </div>
            <div className="flex items-center gap-5">
              <h1 className="text-[30px] font-semibold font-sora text-[#181d27] leading-[38px]">
                Welcome back, Alex
              </h1>
              <span className="px-5 py-2.5 bg-indigo text-primary rounded-full text-sm font-medium">
                REQUESTER
              </span>
            </div>
          </div>
          <p className="text-sm font-medium text-[#535862] leading-5">
            Manage your Backlyst projects, connected domains, and assigned
            placement providers from your command center.
          </p>
        </div>
        <div className="flex flex-col gap-5 items-end">
          <button className="px-5 py-3 bg-indigo text-primary rounded-full text-sm font-medium hover:bg-[#ddd8ff] transition-colors">
            REFER A FRIEND
          </button>
          <div className="flex items-center gap-5">
            <Link
              href="/how-it-works"
              className="flex items-center gap-2.5 px-5 py-2.5 bg-white border border-[#fea369] rounded-full text-sm font-medium text-[#fd751f] hover:bg-orange-50 transition-colors"
            >
              <PlayCircle className="w-6 h-6" />
              HOW IT WORKS
            </Link>
            <button className="px-5 py-3 bg-[#fd751f] hover:bg-[#e06211] text-white rounded-full text-sm font-medium transition-colors">
              BUY VISIBILITY CREDIT
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="flex gap-4 mt-8">
        <StatCard
          icon={Layers}
          label="Active Tasks"
          value="12"
          subtext="Updated real-time"
        />
        <StatCard
          icon={CheckCircle}
          label="Completed"
          value="284"
          subtext="98% Success Rate"
        />
        <StatCard
          icon={Shield}
          label="Websites Verified"
          value="4"
          subtext="Trust Score: A+"
        />
        <StatCard
          icon={Database}
          label="Available Credits"
          value="1,245 Credits"
          subtext="Next reload: Oct 20"
        />
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white border border-[#e9eaeb] rounded-xl overflow-hidden mt-8">
        {/* Table Header */}
        <div className="flex items-center justify-between px-10 py-6">
          <div>
            <h2 className="text-2xl font-semibold font-sora text-black leading-8">
              Recent Activity
            </h2>
            <p className="text-lg font-medium text-black mt-1 leading-7">
              PROVIDER
            </p>
          </div>
          <Link
            href="/requester/tasks"
            className="flex items-center gap-2 text-lg font-medium text-[#12b76a] leading-7 hover:underline"
          >
            View All
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>

        {/* Table */}
        <div className="w-full">
          {/* Table Header Row */}
          <div className="flex border-t border-b border-[#e9eaeb]">
            <div className="w-102.5 px-10 py-5 text-lg font-medium text-[#181d27]">
              Sub Name
            </div>
            <div className="w-50 px-5 py-5 text-lg font-medium text-[#181d27] text-center">
              Status
            </div>
            <div className="w-50 px-5 py-5 text-lg font-medium text-[#181d27] text-center">
              Applicants
            </div>
            <div className="w-61.5 px-5 py-5 text-lg font-medium text-[#181d27]">
              Provider
            </div>
            <div className="flex-1 px-5 py-5 text-lg font-medium text-[#181d27] text-center">
              Actions
            </div>
          </div>

          {/* Table Body */}
          {recentActivity.map((item, index) => (
            <div
              key={index}
              className="flex border-b border-[#e9eaeb] h-[100px]"
            >
              <div className="w-[410px] px-10 py-4 flex flex-col justify-center gap-2">
                <p className="text-sm font-semibold text-[#181d27] leading-5">
                  {item.name}
                </p>
                <p className="text-sm font-normal text-[#414651] leading-5">
                  {item.id}
                </p>
              </div>
              <div className="w-[200px] px-5 py-4 flex items-center justify-center">
                <StatusBadge status={item.status} />
              </div>
              <div className="w-[200px] px-5 py-4 flex items-center justify-center">
                <div className="inline-flex items-center gap-2 bg-[#f5f5f5] border border-[#fafafa] px-5 py-2.5 rounded-full">
                  <Users className="w-4 h-4 text-[#535862]" />
                  <span className="text-sm font-semibold text-[#181d27]">
                    {item.applicants}
                  </span>
                </div>
              </div>
              <div className="w-[246px] px-5 py-4 flex items-center gap-3">
                {item.provider ? (
                  <>
                    <div className="w-7 h-7 rounded-full bg-gray-200 border-4 border-white shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.08),0px_4px_6px_-2px_rgba(10,13,18,0.03)] overflow-hidden">
                      <Image
                        width={600}
                        height={600}
                        src={item.provider.avatar}
                        alt={item.provider.name}
                        className="w-full h-full object-cover"
                        // onError={(e) => {
                        //   e.currentTarget.onerror = null;
                        //   e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.provider?.name || "U")}&background=6366f1&color=fff&size=28`;
                        // }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-[#181d27]">
                      {item.provider.name}
                    </span>
                  </>
                ) : (
                  <>
                    <div className="w-7 h-7 rounded-full bg-[rgba(146,146,146,0.2)] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.08),0px_4px_6px_-2px_rgba(10,13,18,0.03)]" />
                    <span className="text-sm font-semibold text-[#b2b5b4]">
                      NOT ASSIGNED
                    </span>
                  </>
                )}
              </div>
              <div className="flex-1 px-5 py-4 flex items-center justify-center gap-5">
                <button className="text-[#535862] hover:text-primary transition-colors">
                  <Eye className="w-5 h-5" />
                </button>
                <button className="text-[#535862] hover:text-primary transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Footer */}
        <div className="flex items-center justify-between p-6 border-t border-[#e9eaeb]">
          <button className="flex items-center gap-2 px-3.5 py-2 bg-white border border-[#d5d7da] rounded-lg text-sm font-semibold text-[#414651] shadow-sm hover:bg-gray-50 transition-colors">
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>
          <div className="flex items-center gap-1">
            {[1, 2, 3, "...", 8, 9, 10].map((page, i) => (
              <button
                key={i}
                className={`w-10 h-10 rounded-lg text-sm font-medium ${
                  page === 1
                    ? "bg-[#f9f5ff] text-primary"
                    : "text-[#414651] hover:bg-gray-100"
                } transition-colors`}
              >
                {page}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-2 px-3.5 py-2 bg-white border border-[#d5d7da] rounded-lg text-sm font-semibold text-[#414651] shadow-sm hover:bg-gray-50 transition-colors">
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequesterDashboardHome;
