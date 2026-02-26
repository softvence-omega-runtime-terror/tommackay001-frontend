"use client";

import {
  ArrowRight,
  Check,
  X,
  TrendingUp,
  Clock,
  AlertCircle,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

interface PublisherCapabilitiesModalProps {
  onClose: () => void;
  onCreateTask: () => void;
  handleApproveTask: () => void;
}

export default function PublisherCapabilitiesModal({
  onClose,
  onCreateTask,
  handleApproveTask,
}: PublisherCapabilitiesModalProps) {
  return (
    <div
      className="fixed inset-0 z-90 flex items-center justify-center bg-black/10 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 pt-5 pb-4 border-b border-gray-100 flex items-start justify-between">
          <div>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mb-2">
              <span className="text-white font-bold text-md">T</span>
            </div>
            <h2 className="text-lg font-bold text-[#181d27]">
              Publisher Capabilities
            </h2>
            <p className="text-sm text-[#717680] mt-0.5">
              NICHE SPECIALIST • LIFESTYLE
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <X className="w-4 h-4 text-[#414651]" />
          </button>
        </div>

        <div className="p-6 flex flex-col gap-5">
          <div>
            <p className="text-sm font-semibold text-[#717680] uppercase tracking-widest mb-3">
              Supported Placement Types
            </p>
            <div className="flex gap-2 flex-wrap items-center">
              {[
                "Guest Posts",
                "Link Insertions",
                "Niche Edits",
                "Editorial PR (Limited)",
              ].map((type, i) => (
                <span
                  key={type}
                  className={`text-sm font-semibold px-3 py-1.5 rounded-lg border ${i === 3 ? "bg-[#fff7ed] border-[#fed7aa] text-[#c2410c]" : "bg-[#f5f5f5] border-[#e9eaeb] text-[#414651]"}`}
                >
                  {type}
                </span>
              ))}
              <button className="w-5 h-5 rounded-full border border-[#e9eaeb] flex items-center justify-center">
                <Info className="w-3 h-3 text-[#a4a7ae]" />
              </button>
            </div>
            <p className="text-sm text-[#a4a7ae] mt-2 flex items-center gap-1">
              <Info className="w-3 h-3" /> Capabilities indicate supported
              formats, not guaranteed acceptance.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#717680] uppercase tracking-widest mb-3">
              Historical Performance
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#fafafa] border border-[#e9eaeb] rounded-xl p-4">
                <div className="flex items-center gap-1.5 mb-1">
                  <Clock className="w-4 h-4 text-[#fd751f]" />
                  <span className="text-[10px] font-bold text-[#fd751f] uppercase tracking-wide">
                    Avg. Turnaround
                  </span>
                </div>
                <p className="text-lg font-bold text-[#181d27]">
                  3-5 Business Days
                </p>
                <p className="text-[10px] text-[#a4a7ae] uppercase tracking-wide mt-0.5">
                  Average Delivery Time
                </p>
              </div>
              <div className="bg-[#fafafa] border border-[#e9eaeb] rounded-xl p-4">
                <div className="flex items-center gap-1.5 mb-1">
                  <TrendingUp className="w-4 h-4 text-[#fd751f]" />
                  <span className="text-[10px] font-bold text-[#fd751f] uppercase tracking-wide">
                    Index Success
                  </span>
                </div>
                <p className="text-lg font-bold text-[#181d27]">
                  Historically High
                </p>
                <p className="text-[10px] text-[#a4a7ae] uppercase tracking-wide mt-0.5">
                  Based on Historical Data
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#717680] uppercase tracking-widest mb-3">
              Content & Niche Constraints
            </p>
            <div className="flex flex-col gap-2">
              {[
                "No Adult, Gambling, or Pharmacy-related content",
                "Guest posts must be minimum 800 words with original images",
                "Publisher may request edits to match editorial tone",
              ].map((rule, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#2ab516] shrink-0 mt-0.5" />
                  <span className="text-md text-[#414651]">{rule}</span>
                </div>
              ))}
            </div>
            <div className="bg-[#fff7ed] border border-[#fed7aa] rounded-xl p-3 mt-3 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-[#f97316] shrink-0 mt-0.5" />
              <p className="text-sm text-[#9a3412]">
                Capabilities do not guarantee acceptance. Final approval of each
                specific placement occurs exclusively during the formal task
                review and bidding process.
              </p>
            </div>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between bg-[#fafafa] rounded-b-2xl">
          <button
            onClick={onClose}
            className="text-md font-semibold text-[#717680] hover:text-[#414651] transition-colors"
          >
            CLOSE CAPABILITY VIEW
          </button>
          <Button variant="secondary" onClick={onCreateTask}>
            CREATE TASK TO INVITE <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
