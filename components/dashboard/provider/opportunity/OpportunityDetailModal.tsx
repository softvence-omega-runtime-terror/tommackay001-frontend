/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/Button";
import { Clock, Globe, Plus, Star } from "lucide-react";
import Image from "next/image";

interface OpportunityDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: () => void;
  opportunity: {
    company: string;
    logo: any;
    rating: number;
    reviews: number;
    type: string;
    title: string;
    website: string;
    credits: string;
    deadline: string;
    targetUrl: string;
  };
}

export const OpportunityDetailModal = ({
  isOpen,
  onClose,
  onApply,
  opportunity,
}: OpportunityDetailModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-3 md:p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-sm md:max-w-5xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative px-4 md:px-8 pt-4 md:pt-7 pb-3 md:pb-5 border-b border-[#e9eaeb]">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2 md:gap-4 min-w-0">
              <div className="w-10 md:w-14 h-10 md:h-14 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                <Image
                  src={opportunity.logo}
                  alt={opportunity.company}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="text-lg md:text-xl font-semibold text-[#181d27] truncate">
                    {opportunity.company}
                  </p>
                  <div className="px-2 md:px-3 py-0.5 md:py-1 bg-[#f0f9ff] text-[#0369a1] text-[8px] md:text-xs font-medium rounded-full border border-[#bae6fd] whitespace-nowrap">
                    VERIFIED REQUESTER
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-1 md:mt-1.5 flex-wrap">
                  <Star className="w-3.5 md:w-4 h-3.5 md:h-4 text-[#fbbf24] fill-[#fbbf24] shrink-0" />
                  <span className="text-xs md:text-sm font-medium text-[#181d27]">
                    {opportunity.rating}
                  </span>
                  <span className="text-[10px] md:text-sm text-[#535862]">
                    ({opportunity.reviews} Reviews)
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-[#fff7ed] text-[#c2410c] text-[8px] md:text-xs font-medium px-2 md:px-3 py-1 md:py-1.5 rounded-full whitespace-nowrap shrink-0">
              AVAILABLE
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-8">
          <h3 className="text-sm md:text-lg font-semibold text-[#181d27] mb-3 md:mb-5 uppercase tracking-wide">
            TECHNICAL SPECIFICATIONS
          </h3>

          <div className="bg-[#fafafa] rounded-xl p-4 md:p-6 border border-[#e9eaeb]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-x-12 md:gap-y-5 text-xs md:text-sm">
              <div>
                <p className="text-[#535862] font-medium uppercase text-[10px] md:text-xs">
                  PROJECT TITLE
                </p>
                <p className="mt-1 font-medium text-[#181d27]">
                  {opportunity.title}
                </p>
              </div>
              <div>
                <p className="text-[#535862] font-medium uppercase text-[10px] md:text-xs">
                  SETTLEMENT (CR)
                </p>
                <p className="mt-1 font-semibold text-[#22c55e]">
                  {opportunity.credits}
                </p>
              </div>

              <div>
                <p className="text-[#535862] font-medium uppercase text-[10px] md:text-xs">
                  PLACEMENT TYPE
                </p>
                <p className="mt-1 font-medium text-[#181d27]">
                  {opportunity.type}
                </p>
              </div>
              <div>
                <p className="text-[#535862] font-medium uppercase text-[10px] md:text-xs">
                  LINK PROTOCOL
                </p>
                <p className="mt-1 font-medium text-[#181d27]">DoFollow</p>
              </div>

              <div>
                <p className="text-[#535862] font-medium uppercase text-[10px] md:text-xs">
                  RESPONSIBILITY
                </p>
                <p className="mt-1 font-medium text-[#181d27]">
                  Provider Content
                </p>
              </div>
              <div>
                <p className="text-[#535862] font-medium uppercase text-[10px] md:text-xs">
                  DEADLINE
                </p>
                <p className="mt-1 font-medium text-[#181d27] flex items-center gap-1.5">
                  <Clock className="w-3.5 md:w-4 h-3.5 md:h-4 text-[#535862] shrink-0" />
                  {opportunity.deadline}
                </p>
              </div>

              <div className="col-span-1 md:col-span-2">
                <p className="text-[#535862] font-medium uppercase text-[10px] md:text-xs">
                  TARGET URL
                </p>
                <div className="mt-1.5 flex items-center gap-2 bg-white border border-[#e2e2e2] rounded-lg px-2 md:px-4 py-2 md:py-2.5">
                  <Globe className="w-3.5 md:w-5 h-3.5 md:h-5 text-[#6366f1] shrink-0" />
                  <a
                    href={opportunity.targetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6366f1] hover:underline font-medium text-[10px] md:text-sm truncate"
                  >
                    {opportunity.targetUrl.replace("https://", "")}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-8">
            <h3 className="text-sm md:text-lg font-semibold text-[#181d27] mb-3 md:mb-4 uppercase tracking-wide">
              REQUIRED NOTES & STANDARDS
            </h3>
            <div className="bg-[#fff7ed] border border-[#fed7aa] rounded-xl p-3 md:p-5 text-[10px] md:text-sm text-[#9a3412]">
              <ul className="list-disc pl-4 md:pl-5 space-y-1 md:space-y-1.5">
                <li>Guest Post Placement</li>
                <li>
                  Content must be high-quality, original, and contextually
                  relevant
                </li>
                <li>DoFollow link required in body content</li>
                <li>No AI-generated content allowed</li>
                <li>Final link must be live and indexed before submission</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-4 md:px-8 py-4 md:py-6 border-t border-[#e9eaeb] flex flex-col md:flex-row items-center justify-between bg-[#fafafa] rounded-b-2xl gap-3">
          <Button
            onClick={onClose}
            className="bg-[#717680] hover:bg-[#485266] text-white px-4 md:px-8 py-2 md:py-3 rounded-xl font-semibold text-xs md:text-sm w-full md:w-auto"
          >
            CLOSE OVERVIEW
          </Button>

          <Button
            onClick={onApply}
            className="bg-[#ff6b00] hover:bg-[#e65c00] text-white px-4 md:px-8 py-2 md:py-3 rounded-xl font-semibold text-xs md:text-sm flex items-center justify-center gap-2 w-full md:w-auto"
          >
            <Plus className="w-3.5 md:w-4 h-3.5 md:h-4" /> APPLY FOR THE TASK
          </Button>
        </div>
      </div>
    </div>
  );
};
