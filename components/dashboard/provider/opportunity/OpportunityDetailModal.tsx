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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full mx-4 max-h-[70vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative px-8 pt-7 pb-5 border-b border-[#e9eaeb]">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={opportunity.logo}
                  alt={opportunity.company}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-xl font-semibold text-[#181d27]">
                    {opportunity.company}
                  </p>
                  <div className="px-3 py-1 bg-[#f0f9ff] text-[#0369a1] text-xs font-medium rounded-full border border-[#bae6fd]">
                    VERIFIED REQUESTER
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-1.5">
                  <Star className="w-4 h-4 text-[#fbbf24] fill-[#fbbf24]" />
                  <span className="text-sm font-medium text-[#181d27]">
                    {opportunity.rating}
                  </span>
                  <span className="text-sm text-[#535862]">
                    ({opportunity.reviews} Reviews)
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-[#fff7ed] text-[#c2410c] text-xs font-medium px-3 mt-12 rounded-full">
              AVAILABLE
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-lg font-semibold text-[#181d27] mb-5">
            TECHNICAL SPECIFICATIONS
          </h3>

          <div className="bg-[#fafafa] rounded-xl p-6 border border-[#e9eaeb]">
            <div className="grid grid-cols-2 gap-x-12 gap-y-5 text-sm">
              <div>
                <p className="text-[#535862] font-medium">PROJECT TITLE</p>
                <p className="mt-1 font-medium">{opportunity.title}</p>
              </div>
              <div>
                <p className="text-[#535862] font-medium">SETTLEMENT (CR)</p>
                <p className="mt-1 font-semibold text-[#22c55e]">
                  {opportunity.credits}
                </p>
              </div>

              <div>
                <p className="text-[#535862] font-medium">PLACEMENT TYPE</p>
                <p className="mt-1 font-medium">{opportunity.type}</p>
              </div>
              <div>
                <p className="text-[#535862] font-medium">LINK PROTOCOL</p>
                <p className="mt-1 font-medium">DoFollow</p>
              </div>

              <div>
                <p className="text-[#535862] font-medium">RESPONSIBILITY</p>
                <p className="mt-1 font-medium">Provider Content</p>
              </div>
              <div>
                <p className="text-[#535862] font-medium">DEADLINE</p>
                <p className="mt-1 font-medium flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#535862]" />
                  {opportunity.deadline}
                </p>
              </div>

              <div className="col-span-2">
                <p className="text-[#535862] font-medium">TARGET URL</p>
                <div className="mt-1.5 flex items-center gap-2 bg-white border border-[#e2e2e2] rounded-lg px-4 py-2.5">
                  <Globe className="w-5 h-5 text-[#6366f1]" />
                  <a
                    href={opportunity.targetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6366f1] hover:underline font-medium"
                  >
                    {opportunity.targetUrl.replace("https://", "")}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-[#181d27] mb-4">
              REQUIRED NOTES & STANDARDS
            </h3>
            <div className="bg-[#fff7ed] border border-[#fed7aa] rounded-xl p-5 text-sm text-[#9a3412]">
              <ul className="list-disc pl-5 space-y-1.5">
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
        <div className="px-8 py-6 border-t border-[#e9eaeb] flex items-center justify-between bg-[#fafafa] rounded-b-2xl">
          <Button
            onClick={onClose}
            className="bg-[#717680] hover:bg-[#485266] text-white px-8 py-3 rounded-xl font-semibold"
          >
            CLOSE OVERVIEW
          </Button>

          <Button
            onClick={onApply}
            className="bg-[#ff6b00] hover:bg-[#e65c00] text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2"
          >
            <Plus /> APPLY FOR THE TASK
          </Button>
        </div>
      </div>
    </div>
  );
};
