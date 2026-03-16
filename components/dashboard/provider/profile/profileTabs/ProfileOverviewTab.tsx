import { BarChart2, CheckCircle, Clock, Globe } from "lucide-react";

const profileOverview = [
  {
    icon: <BarChart2 className="w-5 h-5 text-[#717680]" />,
    label: "DOMAIN RATING",
    value: "65",
  },
  {
    icon: <Clock className="w-5 h-5 text-[#717680]" />,
    label: "AVG. RESPONSE",
    value: "1.2h",
  },
  {
    icon: <CheckCircle className="w-5 h-5 text-[#717680]" />,
    label: "PLATFORM SUCCESS",
    value: "99.2%",
  },
  {
    icon: <Globe className="w-5 h-5 text-[#717680]" />,
    label: "ACTIVE DOMAINS",
    value: "14",
  },
];
export default function ProfileOverviewTab() {
  return (
    <div className="p-6 flex flex-col gap-6 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {profileOverview.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col py-4 items-center gap-2 p-3 border border-[#f0f0f0] rounded-xl"
          >
            {stat.icon}
            <div className="text-center">
              <p className="text-[9px] font-semibold text-[#717680] uppercase tracking-wide leading-tight">
                {stat.label}
              </p>
              <p className="text-xl font-bold text-[#181d27] mt-0.5">
                {stat.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 pb-8">
        <div>
          <p className="text-sm font-bold text-[#181d27] uppercase tracking-widest mb-2">
            Publisher Profile & Specialization
          </p>
          <p className="text-md text-[#535862] leading-relaxed">
            This publisher maintains a focus on the Lifestyle sector. With a
            historically strong fulfillment record, they provide access to
            high-authority domains that undergo manual editorial review.
            Placements are typically stable and carry verified authority
            pass-through metrics.
          </p>
          <div className="flex gap-2 mt-3 flex-wrap">
            <span className="bg-[#f5f5f5] text-[#414651] text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wide">
              Technology
            </span>
            <span className="bg-[#f5f5f5] text-[#414651] text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wide">
              Blog
            </span>
          </div>
        </div>

        <div className="bg-[#181d27] rounded-2xl p-4 text-white">
          <p className="text-sm font-bold uppercase tracking-widest mb-3">
            Quality Fulfillment Record
          </p>
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-gray-400">
                Fulfillment Reliability
              </span>
              <span className="text-sm font-bold text-[#2ab516]">
                Historically High
              </span>
            </div>
            <div className="h-1.5 bg-gray-700 rounded-full">
              <div className="h-full w-5/6 bg-linear-to-r from-[#fd751f] to-[#2ab516] rounded-full" />
            </div>
          </div>
          <p className="text-[10px] text-gray-500 mt-3 leading-relaxed">
            Performance is monitored via consistent placement audits. All tasks
            are governed by platform escrow and link retention policies.
          </p>
        </div>
      </div>
    </div>
  );
}
