import { FileText, Info, Link2 } from "lucide-react";
import React from "react";

export default function ProfilePaymentTab() {
  return (
    <div className="p-6 flex flex-col gap-4">
      <p className="text-sm font-bold text-[#181d27] uppercase tracking-widest">
        Available Capability Formats
      </p>
      <div className="flex flex-col gap-3">
        <div className="flex items-start gap-3 p-4 border border-[#e9eaeb] rounded-xl hover:border-[#d5d7da] transition-colors">
          <div className="w-9 h-9 bg-[#f5f5f5] rounded-lg flex items-center justify-center shrink-0">
            <FileText className="w-4 h-4 text-[#717680]" />
          </div>
          <div>
            <p className="font-semibold text-[#181d27] text-md">Guest Post</p>
            <p className="text-sm text-[#717680] mt-0.5">
              Brand new article with a backlink. Costs 2 credits.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 border-2 border-[#fd751f] bg-[#fff7ed] rounded-xl">
          <div className="w-9 h-9 bg-[#fd751f]/10 rounded-lg flex items-center justify-center shrink-0">
            <Link2
             className="w-4 h-4 text-[#fd751f]" />
          </div>
          <div>
            <p className="font-semibold text-[#fd751f] text-md">
              Backlink Insertion/Niche Edit
            </p>
            <p className="text-sm text-[#c2410c] mt-0.5">Costs 1 credit.</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f5f5f5] border border-[#e9eaeb] rounded-xl p-3 flex items-start gap-2">
        <Info className="w-4 h-4 text-[#a4a7ae] shrink-0 mt-0.5" />
        <p className="text-sm text-[#717680]">
          These formats indicate publisher capability only. Final selection,
          exact pricing, and domain eligibility are finalized exclusively
          through the format task creation and review process.
        </p>
      </div>
    </div>
  );
}
