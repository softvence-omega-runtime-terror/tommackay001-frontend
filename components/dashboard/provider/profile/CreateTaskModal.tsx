"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  X,
  Link2,
  FileText,
  Info,
  Calendar,
  ChevronRight,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

interface PlacementOption {
  id: string;
  icon: React.ReactNode;
  label: string;
  desc: string;
  recommended?: boolean;
}

interface CreateTaskModalProps {
  onClose: () => void;
}

export default function CreateTaskModal({ onClose }: CreateTaskModalProps) {
  const [step, setStep] = useState<number>(1);
  const [placement, setPlacement] = useState<string>("flexible");
  const [targetUrl, setTargetUrl] = useState<string>("");
  const [anchorText, setAnchorText] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const [guidelines, setGuidelines] = useState<string>("");

  const placementOptions: PlacementOption[] = [
    {
      id: "guest",
      icon: <FileText className="w-5 h-5" />,
      label: "Guest Post",
      desc: "Publish a new, original article including your backlink.",
    },
    {
      id: "backlink",
      icon: <Link2 className="w-5 h-5" />,
      label: "Backlink Insertion",
      desc: "Insert your backlink into an existing, relevant article.",
    },
    {
      id: "flexible",
      icon: <Zap className="w-5 h-5" />,
      label: "Flexible",
      desc: "Allow providers to suggest the best placement method.",
      recommended: true,
    },
  ];

  return (
    <div
      className="fixed inset-0 z-70 flex items-center justify-center bg-black/10 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl mx-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 pt-6 pb-4 border-b border-gray-100 flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#181d27]">
              Create Placement Task
            </h2>
            <p className="text-md text-[#717680] mt-0.5">
              Scale your SEO authority using verified publisher
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <X className="w-4 h-4 text-[#414651]" />
          </button>
        </div>

        {/* Step Bar */}
        <div className="px-6 py-3 bg-[#fff7ed] border-b border-[#fed7aa]">
          <div className="flex items-center gap-2">
            {[
              { n: 1, label: "PREFERENCE" },
              { n: 2, label: "REQUIREMENTS" },
              { n: 3, label: "REVIEW" },
            ].map(({ n, label }, i) => (
              <div key={n} className="flex items-center gap-2 w-1/3 ">
                <div className="flex items-center gap-1.5 mx-auto">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-base font-bold transition-colors ${step >= n ? "bg-[#fd751f] text-white" : "bg-white border-2 border-[#e9eaeb] text-secondary"}`}
                  >
                    {n}
                  </div>
                  <span
                    className={`text-base font-bold uppercase tracking-wide ${step >= n ? "text-[#fd751f]" : "text-gray-900"}`}
                  >
                    {label}
                  </span>
                </div>
                {i < 2 && (
                  <ArrowRight
                    className={`w-8 h-8  ${step >= n ? "text-[#fd751f]" : "text-gray-900"}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Invited Banner */}
        <div className="px-6 py-2.5 bg-[#f0f4ff] border-b border-[#c7d2fe] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-[#6366f1] rounded-full flex items-center justify-center">
              <span className="text-white text-[9px] font-bold">S</span>
            </div>
            <Users className="w-4 h-4 text-[#6366f1]" />
            <span className="text-sm font-semibold text-[#414651]">
              TASK INVITED TO: MARKETINGGURU
            </span>
          </div>
          <span className="text-sm font-bold text-[#6366f1] border border-[#c7d2fe] px-2 py-0.5 rounded">
            PRIVATE INVITE
          </span>
        </div>

        <div className="p-6">
          {/* STEP 1 */}
          {step === 1 && (
            <div className="flex flex-col gap-5">
              <div className="text-center">
                <h3 className="text-lg font-bold text-[#181d27]">
                  Placement Preference
                </h3>
                <p className="text-md text-[#717680] mt-1">
                  Choose how you want your link to be placed.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {placementOptions.map((opt) => (
                  <label
                    key={opt.id}
                    onClick={() => setPlacement(opt.id)}
                    className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${placement === opt.id ? "border-[#fd751f] bg-[#fff7ed]" : "border-[#e9eaeb] bg-white hover:border-[#fca067]"}`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${placement === opt.id ? "bg-[#fd751f] text-white" : "bg-[#f5f5f5] text-[#717680]"}`}
                    >
                      {opt.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[#181d27]">
                          {opt.label}
                        </span>
                        {opt.recommended && (
                          <span className="text-[10px] font-bold bg-[#fd751f] text-white px-1.5 py-0.5 rounded-full uppercase tracking-wide">
                            Recommended
                          </span>
                        )}
                      </div>
                      <p className="text-md text-[#717680] mt-0.5">
                        {opt.desc}
                      </p>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${placement === opt.id ? "border-[#fd751f] bg-[#fd751f]" : "border-[#d5d7da]"}`}
                    >
                      {placement === opt.id && (
                        <Check className="w-3 h-3 text-white" />
                      )}
                    </div>
                  </label>
                ))}
              </div>
              <div className="bg-[#fff7ed] border border-[#fed7aa] rounded-xl p-3 flex items-start gap-2">
                <Info className="w-4 h-4 text-[#f97316] shrink-0 mt-0.5" />
                <p className="text-sm text-[#9a3412]">
                  Guest posts take longer but offer more control. Insertions are
                  faster but depend on existing content. Choose Flexible for the
                  fastest fulfillment.
                </p>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-sm font-bold text-[#414651] uppercase tracking-widest mb-2">
                  Target URL (Destination)
                </p>
                <div
                  className={`flex items-center gap-3 border-2 rounded-xl px-4 py-3 transition-colors ${targetUrl ? "border-[#fd751f]" : "border-[#e9eaeb]"} bg-white`}
                >
                  <Link2 className="w-4 h-4 text-[#a4a7ae] shrink-0" />
                  <input
                    type="text"
                    placeholder="https://yourwebsite.com/seo-article"
                    value={targetUrl}
                    onChange={(e) => setTargetUrl(e.target.value)}
                    className="flex-1 text-md text-[#181d27] outline-none bg-transparent placeholder-[#a4a7ae]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-bold text-[#414651] uppercase tracking-widest mb-2">
                    Primary Anchor Text
                  </p>
                  <div className="flex items-center gap-2 border-2 border-[#e9eaeb] rounded-xl px-3 py-3 bg-[#fafafa]">
                    <ChevronRight className="w-4 h-4 text-[#a4a7ae]" />
                    <input
                      type="text"
                      placeholder="Ex: Top Saas CRM tools"
                      value={anchorText}
                      onChange={(e) => setAnchorText(e.target.value)}
                      className="flex-1 text-md text-[#181d27] outline-none bg-transparent placeholder-[#a4a7ae]"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#414651] uppercase tracking-widest mb-2">
                    Requested Deadline
                  </p>
                  <div className="flex items-center gap-2 border-2 border-[#e9eaeb] rounded-xl px-3 py-3 bg-[#fafafa]">
                    <Calendar className="w-4 h-4 text-[#a4a7ae]" />
                    <input
                      type="text"
                      placeholder="Within 3 days..."
                      value={deadline}
                      onChange={(e) => setDeadline(e.target.value)}
                      className="flex-1 text-sm text-[#181d27] outline-none bg-transparent placeholder-[#a4a7ae]"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm font-bold text-[#414651] uppercase tracking-widest mb-2">
                  Publishing Guidelines
                </p>
                <div className="flex items-start gap-2 border-2 border-[#e9eaeb] rounded-xl px-3 py-3 bg-[#fafafa]">
                  <FileText className="w-4 h-4 text-[#a4a7ae] mt-0.5 shrink-0" />
                  <textarea
                    placeholder="Describe preferred niche, content tone, or any blacklisted sites/words..."
                    value={guidelines}
                    onChange={(e) => setGuidelines(e.target.value)}
                    rows={3}
                    className="flex-1 text-md text-[#181d27] outline-none bg-transparent placeholder-[#a4a7ae] resize-none"
                  />
                </div>
              </div>
              <div>
                <p className="text-sm font-bold text-[#414651] uppercase tracking-widest mb-2">
                  Website Category
                </p>
                <div className="flex items-center justify-between border-2 border-[#e9eaeb] rounded-xl px-4 py-3 bg-[#fafafa] cursor-pointer">
                  <span className="text-md text-[#a4a7ae]">
                    Select category...
                  </span>
                  <ChevronDown className="w-4 h-4 text-[#a4a7ae]" />
                </div>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="flex flex-col gap-4">
              <div className="bg-[#fff7ed] border border-[#fed7aa] rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#fd751f]/10 rounded-full" />
                <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-[#fd751f]/5 rounded-full" />
                <div className="flex items-start justify-between mb-4 relative">
                  <div>
                    <p className="text-sm font-semibold text-[#717680] uppercase tracking-widest">
                      Service Strategy
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm font-bold bg-[#f5f5f5] text-[#414651] px-2 py-0.5 rounded">
                        No Follow
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#fd751f] mt-2">
                      Backlink Placement
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-[#717680] uppercase tracking-widest">
                      Credit Reward
                    </p>
                    <p className="text-5xl font-black text-[#fd751f] mt-1">
                      01
                    </p>
                    <p className="text-sm font-bold text-[#717680]">CR</p>
                  </div>
                </div>
                <div className="h-px bg-[#fed7aa] my-4" />
                <div className="grid grid-cols-2 gap-4 relative">
                  <div>
                    <p className="text-sm font-semibold text-[#717680] uppercase tracking-widest mb-1">
                      Anchor Selection
                    </p>
                    <p className="font-bold text-[#fd751f]">
                      {anchorText || "Best SaaS Tools 2024"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#717680] uppercase tracking-widest mb-1">
                      Executive Method
                    </p>
                    <p className="font-bold text-[#fd751f] capitalize">
                      {placement === "flexible"
                        ? "Flexible"
                        : placement === "guest"
                          ? "Guest Post"
                          : "Backlink Insertion"}
                    </p>
                  </div>
                </div>
                <div className="mt-4 relative">
                  <p className="text-sm font-semibold text-[#717680] uppercase tracking-widest mb-1">
                    Target Destination
                  </p>
                  <p className="text-md text-[#fd751f] break-all">
                    {targetUrl ||
                      "https://yourwebsite.com/seo-article-optimization"}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between bg-white rounded-b-2xl">
          {step > 1 ? (
            <button
              onClick={() => setStep((s) => s - 1)}
              className="flex items-center gap-2 bg-[#f5f5f5] hover:bg-[#e9eaeb] transition-colors text-[#414651] font-bold text-md px-5 py-2.5 rounded-xl"
            >
              <ArrowRight className="w-4 h-4 rotate-180" /> PREVIOUS STEP
            </button>
          ) : (
            <div />
          )}
          {step < 3 ? (
            <Button variant="secondary" onClick={() => setStep((s) => s + 1)}>
              CONTINUE TO NEXT STEP <ArrowRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button variant="secondary" onClick={onClose}>
              CONFIRM & SUBMIT <ArrowRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
