import { CheckCircle2, Plus, UserCheck } from "lucide-react";

export default function TimelineTab() {
  return (
    <div className="space-y-5 py-2">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full border-2 border-secondary bg-white flex items-center justify-center shrink-0">
          <Plus className="w-5 h-5 text-secondary" />
        </div>
        <div className="pt-1">
          <p className="text-sm font-semibold text-[#181d27]">Order Created</p>
          <p className="text-xs text-[#9DA4AE] mt-0.5">Oct 08, 09:42 AM</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full border-2 border-secondary bg-white flex items-center justify-center shrink-0">
          <UserCheck className="w-5 h-5 text-secondary" />
        </div>
        <div className="pt-1">
          <p className="text-sm font-semibold text-[#181d27]">
            Provider Assigned
          </p>
          <p className="text-xs text-[#9DA4AE] mt-0.5">Oct 08, 11:42 AM</p>
        </div>
      </div>

      <div className="flex items-start gap-4 opacity-50">
        <div className="w-10 h-10 rounded-full border-2 border-dashed border-[#9DA4AE] bg-white flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-5 h-5 text-[#9DA4AE]" />
        </div>
        <div className="pt-1">
          <p className="text-sm font-semibold text-[#9DA4AE]">
            Awaiting Delivery Submission
          </p>
          <p className="text-xs text-[#9DA4AE] mt-0.5">Pending</p>
        </div>
      </div>
    </div>
  );
}
