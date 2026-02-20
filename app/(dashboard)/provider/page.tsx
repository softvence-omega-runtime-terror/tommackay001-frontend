"use client";

import {
  Layers,
  CheckCircle,
  Database,
  Eye,
  MessageSquare,
  PlayCircle,
  ChevronRight,
  Award,
  Clock,
  Zap,
  Star,
} from "lucide-react";
import { StatCard } from "@/components/ui/common/StatCard";
import { StatusBadge } from "@/components/ui/common/StatusBadge";
import ActionLink from "@/components/ui/ActionLink";
import { Button } from "@/components/ui/Button";
import Pagination from "@/components/ui/Pagination";
import checkboxImage from "@/public/dashboard/provider/Checkbox.png";
import checkboxBaseImage from "@/public/dashboard/provider/_Checkbox base.png";
import Image from "next/image";

const activeDeliveries = [
  {
    title: "Guest Post Placement",
    requester: "Circoles • circoles.io",
    reward: "120 Credits",
    timeLeft: "2h 15m",
    status: "IN PROGRESS",
    image: checkboxImage,
  },
  {
    title: "Backlink Placement (DA+)",
    requester: "Catalog • catalog.net",
    reward: "45 Credits",
    timeLeft: "1d 4h",
    status: "AVAILABLE TO APPLY",
    image: checkboxBaseImage,
  },
  {
    title: "Backlink Placement (DA 70+)",
    requester: "Quotient • quotent.biz",
    reward: "210 Credits",
    timeLeft: "3d 12h",
    status: "IN PROGRESS",
    image: checkboxImage,
  },
];

const ProviderDashboardHome = () => {
  return (
    <div className="flex flex-col gap-6 font-inter">
      {/* Header Section */}
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1.5 px-4 py-2 bg-white border border-[#e2e2e2] rounded-full w-fit">
              <Award className="w-5 h-5 text-[#6366f1]" />
              <span className="text-xs font-semibold text-[#0f0f0f]">
                LEVEL - 2
              </span>
            </div>
            <div className="flex items-center gap-5">
              <h1 className="text-[30px] font-semibold font-sora text-[#181d27] leading-9.5">
                Welcome back, Alex
              </h1>
              <span className="px-5 py-2.5 bg-indigo text-primary rounded-full text-sm font-medium">
                Provider
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
            REFERRALS
          </button>
          <div className="flex items-center gap-5">
            <ActionLink
              variant="outline"
              href="/how-it-works"
              label="HOW IT WORKS"
              icon={<PlayCircle className="w-6 h-6" />}
              iconPosition="left"
            />
            <Button variant="secondary">BUY VISIBILITY CREDIT</Button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="flex gap-4 mt-8">
        <StatCard
          icon={Database}
          label="TOTAL CREDITS EARNED"
          value="4,250.00"
          subtext="Updated real-time"
        />
        <StatCard
          icon={CheckCircle}
          label="ACTIVE ORDERS"
          value="8"
          subtext="98% Success Rate"
        />
        <StatCard
          icon={Star}
          label="AVG. RATING"
          value="4"
          subtext="Trust Score: A+"
        />
        <StatCard
          icon={Layers}
          label="COMPLETED TASKS"
          value="1,245 Credits"
          subtext="Next reload: Oct 20"
        />
      </div>

      {/* Recent Activity Table */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 ">
        {/* Left Column - Provider Info / Stats */}
        <div className="lg:col-span-3 flex flex-col gap-6 h-full ">
          {/* Profile Card */}
          <div className=" border border-[#e9eaeb] rounded-xl p-6 shadow-sm bg-white">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-linear-to-br from-[#6366f1] to-[#a78bfa] flex items-center justify-center text-white text-2xl font-bold">
                S
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-green-500 fill-green-500" />
                  <h3 className="font-semibold text-[#181d27] text-lg">
                    Sisyphus
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="text-xs font-medium text-gray-600">
                    LEVEL - 2
                  </span>
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span className="text-sm font-semibold text-[#181d27]">
                    4.9
                  </span>
                  <span className="text-xs text-gray-500">(124)</span>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-sm font-medium text-[#535862]">
                Accepting Tasks
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  defaultChecked
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6366f1]"></div>
              </label>
            </div>

            <div className="mt-6 pt-5 border-t border-[#e9eaeb] space-y-3">
              <div>
                <p className="text-sm text-[#535862]">Total Credits Earned</p>
                <p className="text-xl font-semibold text-[#181d27]">4,250.00</p>
              </div>
              <div>
                <p className="text-sm text-[#535862]">This Month</p>
                <p className="text-lg font-medium text-[#181d27]">
                  1,240.00 Credits
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#e9eaeb]">
              <button className="w-full flex items-center justify-between text-sm font-medium text-[#535862] hover:text-primary">
                <span>BADGES & LEVEL</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Active Deliveries */}
        <div className="lg:col-span-9 flex flex-col h-full gap-5 bg-white  p-4 rounded-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold font-sora text-[#181d27]">
              Active Deliveries (8)
            </h2>
          </div>

          <div className="space-y-4">
            {activeDeliveries.map((task, i) => (
              <div
                key={i}
                className="bg-white border border-[#e9eaeb] rounded-xl p-5 hover:shadow-sm transition-shadow"
              >
                <div className="grid grid-cols-[auto_1fr_auto_auto_auto] sm:grid-cols-6 items-center gap-4">
                  {/* Placeholder icon / logo */}
                  <div className="flex col-span-2 gap-4">
                    <div className="w-12 h-12  rounded-lg bg-gray-100 flex items-center justify-center text-2xl">
                      <Image
                        src={task.image}
                        alt={task.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="font-medium text-[#181d27]">{task.title}</p>
                      <p className="text-sm text-[#535862] mt-0.5">
                        {task.requester}
                      </p>
                    </div>
                  </div>

                  {/* Reward */}
                  <div className="text-right">
                    <p className="text-sm text-[#535862]">REWARD</p>
                    <p className="font-semibold text-[#ff6b00]">
                      {task.reward}
                    </p>
                  </div>

                  {/* Time Left */}
                  <div className="text-right">
                    <p className="text-sm text-[#535862] flex items-center justify-end gap-1">
                      <Clock className="w-4 h-4" /> TIME LEFT
                    </p>
                    <p className="font-medium text-[#181d27]">
                      {task.timeLeft}
                    </p>
                  </div>

                  {/* Status & Actions */}
                  <div className="flex items-center justify-end gap-4">
                    <StatusBadge status={task.status} />
                  </div>
                  <div className="flex items-center justify-end gap-2 ">
                    <button className="text-[#535862] hover:text-primary">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="text-[#535862] hover:text-primary">
                      <MessageSquare className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
        </div>
      </div>
    </div>
  );
};

export default ProviderDashboardHome;
