"use client";

import {
  Layers,
  CheckCircle,
  Database,
  PlayCircle,
  Award,
  Shield,
  Globe,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { StatCard } from "@/components/ui/common/StatCard";
import ActionLink from "@/components/ui/ActionLink";
import { Button } from "@/components/ui/Button";
import BuyVisibilityCreditModal from "@/components/dashboard/provider/visivility/Buyvisibilitycreditmodal";
import RecentOrders from "@/components/dashboard/requester/orders/RecentOrders";
import type { OrderItem } from "@/components/dashboard/requester/orders/OrderCard";

const recentActivity: OrderItem[] = [
  {
    name: "High-Authority Backlink Provider",
    id: "#1249",
    status: "In Progress",
    applicants: 8,
    requester: { name: "Olivia Rhye", avatar: "/avatar/oli.png" },
  },
  {
    name: "Guest Post & Outreach Specialist",
    id: "#1249",
    status: "Completed",
    applicants: 8,
    requester: { name: "Phoenix Baker", avatar: "/avatar/phoenix.png" },
  },
  {
    name: "White-Hat Link Building Expert",
    id: "#1249",
    status: "WAITING FOR APPLICANTS",
    applicants: 8,
    requester: { name: "Natali Craig", avatar: "/avatar/oli.png" },
  },
  {
    name: "Content Placement Provider",
    id: "#1249",
    status: "In Progress",
    applicants: 8,
    requester: { name: "Lyle Kauffman", avatar: "/avatar/phoenix.png" },
  },
  {
    name: "Niche Edit",
    id: "#3310",
    status: "Applied",
    applicants: 1,
    requester: null,
  },
];
const RequesterDashboardHome = () => {
  const [buyModalOpen, setBuyModalOpen] = useState(false);

  return (
    <>
      <BuyVisibilityCreditModal
        open={buyModalOpen}
        onClose={() => setBuyModalOpen(false)}
      />

      <div className="flex flex-col gap-6 font-inter max-w-[90vw] lg:max-w-[65vw] xl:max-w-[85vw] 2xl:max-w-[90vw] md:mx-auto lg:mx-0">
        {/* Header Section */}
        <div className="md:flex items-end justify-between">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3 w-full  ">
              <div className="flex items-center gap-1.5 px-4 py-2 bg-white border border-[#e2e2e2] rounded-full w-fit">
                <Award className="w-5 h-5 text-[#6366f1] " />
                <span className="text-xs font-semibold text-[#0f0f0f]">
                  LEVEL - 2
                </span>
              </div>
              <div className="md:flex md:items-center gap-5 ">
                <h1 className="pb-2 text-2xl  md:text-[30px] font-semibold font-sora text-[#181d27] md:leading-9.5">
                  Welcome back, Alex
                </h1>
                <span className="px-5 py-2.5 bg-indigo text-primary rounded-full text-sm font-medium">
                  Requester
                </span>
              </div>
            </div>
            <p className="text-sm font-medium text-[#535862] leading-5">
              Manage your Backlyst projects, connected domains, and assigned
              placement providers from your command center.
            </p>
          </div>
          <div className="flex flex-col gap-5 items-end">
            <ActionLink
              label="REFER A FRIEND"
              href={`/dashboard/referrals`}
              className="px-5 py-3 bg-indigo text-primary rounded-full text-sm font-medium hover:bg-[#ddd8ff] transition-colors "
            />
            <div className="md:flex items-center gap-5 w-full space-y-2">
              <ActionLink
                variant="outline"
                href="/how-it-works"
                label="HOW IT WORKS"
                icon={<PlayCircle className="w-6 h-6" />}
                iconPosition="left"
                className="w-full"
              />
              <Button
                variant="secondary"
                onClick={() => setBuyModalOpen(true)}
                className="w-full"
              >
                BUY VISIBILITY CREDIT
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-4 mt-8">
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

        <div className="lg:col-span-9 flex flex-col h-full gap-5 bg-white p-4 rounded-2xl">
          <RecentOrders
            title="Recent Activity"
            role="PROVIDER"
            orders={recentActivity}
            currentPage={1}
            totalPages={10}
            onPageChange={(page) => console.log(page)}
          />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-6">
          {/* Website Overview */}
          <div className="bg-white border border-[#e2e2e2] rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-semibold text-[#181d27] flex items-center gap-2">
                Website Overview
              </h3>
              <Globe className="w-5 h-5 text-indigo-600" />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between bg-gray-100 px-2 rounded-sm">
                <span className="text-sm font-medium text-[#535862] py-2">
                  Websites Connected
                </span>
                <span className="text-lg font-semibold text-[#181d27]">4</span>
              </div>
              <div className="flex items-center justify-between bg-orange-50 border border-orange-200 rounded-sm px-2">
                <div className="inline-flex items-center gap-2 px-3 py-2  text-xs font-medium text-secondary">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  Verified
                </div>
                <span className=" font-semibold text-secondary text-sm">
                  ALL ACTIVE
                </span>
              </div>

              <Button variant="white" className="rounded-md w-full">
                <ActionLink
                  label="Manage Websites"
                  href="/dashboard/websites"
                  className=" text-sm font-medium flex items-center gap-1 "
                  icon={<ChevronRight className="w-4 h-4" />}
                  iconPosition="right"
                />
              </Button>
            </div>
          </div>

          {/* Task Control */}
          <div className="bg-white border border-[#e2e2e2] rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-semibold text-[#181d27] flex items-center gap-2">
                Task Control
              </h3>
            </div>

            <div className=" gap-4 text-center space-y-1">
              <div className="flex items-center justify-between bg-gray-100 px-4 py-1 rounded-sm">
                <span className="text-sm font-medium text-primary">All</span>
                <div className="px-3 py-1 bg-primary text-white rounded-full text-xs font-medium">
                  24
                </div>
              </div>
              <div className="flex items-center justify-between px-4 py-1 rounded-sm">
                <span className="text-sm font-medium text-[#535862]">
                  Active
                </span>
                <div className="px-3 py-1 bg-gray-300 text-[#535862] rounded-full text-xs font-medium">
                  12
                </div>
              </div>
              <div className="flex items-center justify-between px-4 py-1 rounded-sm">
                <span className="text-sm font-medium text-[#535862]">
                  Submitted
                </span>
                <div className="px-3 py-1 bg-gray-300 text-[#535862] rounded-full text-xs font-medium">
                  15
                </div>
              </div>
              <div className="flex items-center justify-between px-4 py-1 rounded-sm">
                <span className="text-sm font-medium text-[#535862]">
                  Review
                </span>
                <div className="px-3 py-1 bg-gray-300 text-[#535862] rounded-full text-xs font-medium">
                  7
                </div>
              </div>
            </div>
          </div>

          {/* BRACKLYST PRO Promotion */}
          <div className="bg-[#FFF1E9] border border-[#fd751f]! rounded-2xl p-6 shadow-sm relative overflow-hidden">
            <div className="absolute -top-20 -right-15 w-40 h-40 rounded-full border border-white/20 pointer-events-none bg-[#FED4BA]" />

            <div className="relative z-10">
              <div className="inline-block px-4 bg-secondary text-white text-xs font-normal tracking-wide rounded-md py-2 mb-4">
                BACKLYST PRO
              </div>

              <h3 className="text-xl font-semibold text-[#181d27] mb-3">
                Elevate Your Strategy
              </h3>

              <p className="text-md max-w-xs text-black mb-6 leading-relaxed">
                Unlock high-authority domains and dedicated account managers.
              </p>

              <Button
                variant="secondary"
                className="w-full  text-white font-medium py-3 rounded-xl shadow-md"
              >
                Go Platinum
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequesterDashboardHome;
