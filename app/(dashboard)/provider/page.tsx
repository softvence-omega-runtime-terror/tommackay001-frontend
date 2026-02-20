import {
  Search,
  ArrowRight,
  Clock,
  CheckCircle2,
  DollarSign,
  TrendingUp,
  Star,
  Wallet,
} from "lucide-react";
import Link from "next/link";

// Mock activity data
const recentActivity = [
  {
    id: "TASK-7821",
    title: "High Authority Guest Post on TechCrunch.com",
    requester: "Alpha Brands Inc.",
    status: "Submitted",
    statusColor: "text-[#3538cd] bg-[#eef4ff]",
    earning: "+120 CR",
    date: "Oct 25, 2026",
  },
  {
    id: "TASK-7820",
    title: "Niche Edit on Forbes.com",
    requester: "Growth Matrix LLC",
    status: "In Progress",
    statusColor: "text-[#f79009] bg-[#fffaeb]",
    earning: "+85 CR",
    date: "Oct 24, 2026",
  },
  {
    id: "TASK-7819",
    title: "Content Placement on Mashable",
    requester: "Web3 Ventures",
    status: "Approved",
    statusColor: "text-[#039855] bg-[#d1fadf]",
    earning: "+95 CR",
    date: "Oct 23, 2026",
  },
];

const ProviderDashboardHome = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[30px] font-semibold text-[#181d27] leading-[38px] font-sora">
            Welcome back, Provider!
          </h1>
          <p className="text-base font-medium text-[#535862] mt-1">
            Here&apos;s what&apos;s happening with your tasks today.
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

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-6">
        {/* Active Tasks */}
        <div className="bg-white rounded-[20px] p-6 border border-[#e9eaeb]">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-[#fff1e9] rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-[#fd751f]" />
            </div>
            <span className="text-xs font-medium text-[#717680]">
              This Month
            </span>
          </div>
          <p className="text-3xl font-bold text-[#181d27] font-sora">8</p>
          <p className="text-sm text-[#717680] mt-1">Active Tasks</p>
        </div>

        {/* Completed Tasks */}
        <div className="bg-white rounded-[20px] p-6 border border-[#e9eaeb]">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-[#d1fadf] rounded-xl flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-[#039855]" />
            </div>
            <span className="text-xs font-medium text-[#717680]">
              This Month
            </span>
          </div>
          <p className="text-3xl font-bold text-[#181d27] font-sora">24</p>
          <p className="text-sm text-[#717680] mt-1">Tasks Completed</p>
        </div>

        {/* Total Earnings */}
        <div className="bg-white rounded-[20px] p-6 border border-[#e9eaeb]">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-[#ebffe9] rounded-xl flex items-center justify-center">
              <Wallet className="w-6 h-6 text-[#2ab516]" />
            </div>
            <div className="flex items-center gap-1 text-[#2ab516]">
              <TrendingUp className="w-4 h-4" />
              <span className="text-xs font-medium">+12%</span>
            </div>
          </div>
          <p className="text-3xl font-bold text-[#2ab516] font-sora">
            +1,250 CR
          </p>
          <p className="text-sm text-[#717680] mt-1">Total Earnings</p>
        </div>

        {/* Success Rate */}
        <div className="bg-white rounded-[20px] p-6 border border-[#e9eaeb]">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-[#fffaeb] rounded-xl flex items-center justify-center">
              <Star className="w-6 h-6 text-[#fdb022]" />
            </div>
            <span className="text-xs font-medium text-[#717680]">All Time</span>
          </div>
          <p className="text-3xl font-bold text-[#181d27] font-sora">98%</p>
          <p className="text-sm text-[#717680] mt-1">Success Rate</p>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="col-span-2 bg-white rounded-[20px] p-6 border border-[#e9eaeb]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-[#181d27]">
              Recent Activity
            </h2>
            <Link
              href="/provider/tasks"
              className="text-sm font-medium text-[#fd751f] flex items-center gap-1"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between p-4 bg-[#fafafa] rounded-xl"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-semibold text-[#331ffd]">
                      {activity.id}
                    </span>
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${activity.statusColor}`}
                    >
                      {activity.status}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-[#252b37]">
                    {activity.title}
                  </p>
                  <p className="text-xs text-[#717680] mt-1">
                    {activity.requester} • {activity.date}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-[#2ab516]">
                    {activity.earning}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-[20px] p-6 border border-[#e9eaeb]">
          <h2 className="text-lg font-semibold text-[#181d27] mb-6">
            Quick Actions
          </h2>
          <div className="flex flex-col gap-4">
            <Link
              href="/provider/opportunities"
              className="flex items-center gap-4 p-4 bg-[#fff1e9] rounded-xl hover:bg-[#fee8d9] transition-colors"
            >
              <div className="w-10 h-10 bg-[#fd751f] rounded-lg flex items-center justify-center">
                <Search className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#fd751f]">
                  Browse Opportunities
                </p>
                <p className="text-xs text-[#717680]">
                  Find new tasks to apply for
                </p>
              </div>
            </Link>
            <Link
              href="/provider/tasks"
              className="flex items-center gap-4 p-4 bg-[#f5f5f5] rounded-xl hover:bg-[#e9eaeb] transition-colors"
            >
              <div className="w-10 h-10 bg-[#414651] rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#414651]">
                  My Active Tasks
                </p>
                <p className="text-xs text-[#717680]">
                  View and manage your tasks
                </p>
              </div>
            </Link>
            <Link
              href="/wallet"
              className="flex items-center gap-4 p-4 bg-[#f5f5f5] rounded-xl hover:bg-[#e9eaeb] transition-colors"
            >
              <div className="w-10 h-10 bg-[#2ab516] rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#414651]">
                  Withdraw Earnings
                </p>
                <p className="text-xs text-[#717680]">
                  Manage your wallet balance
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDashboardHome;
