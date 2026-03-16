import { Button } from "@/components/ui/Button";
import {
  CheckCircle2,
  CircleAlert,
  Clock,
  Globe,
  ShieldCheck,
} from "lucide-react";

export default function SummaryTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="border border-[#e9eaeb] rounded-xl p-4 space-y-1.5 bg-white hover:shadow-sm transition">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#535862]">
            Status
          </p>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4.5 h-4.5 text-secondary" />
            <span className="font-semibold text-secondary">In Progress</span>
          </div>
        </div>

        <div className="border border-[#e9eaeb] rounded-xl p-4 space-y-1.5 bg-white hover:shadow-sm transition">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#535862]">
            Deadline
          </p>
          <div className="flex items-center gap-2">
            <Clock className="w-4.5 h-4.5 text-secondary" />
            <span className="font-semibold text-[#181d27]">Oct 24, 2026</span>
          </div>
        </div>

        <div className="border border-[#e9eaeb] rounded-xl p-4 space-y-1.5 bg-white hover:shadow-sm transition">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#535862]">
            Target Site
          </p>
          <div className="flex items-center gap-2">
            <Globe className="w-4.5 h-4.5 text-secondary" />
            <a
              href="#"
              className="font-semibold text-secondary hover:underline"
            >
              techtrends.io
            </a>
          </div>
        </div>
      </div>

      <section>
        <h3 className="text-xs font-bold uppercase tracking-widest text-[#181d27] mb-4">
          Placement Requirements
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-5 border-t border-b border-[#e9eaeb]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#535862] mb-1.5">
              Anchor Text
            </p>
            <p className="text-sm font-medium text-[#181d27]">
              &quot;SaaS&quot; Scaling Infrastructure
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#535862] mb-1.5">
              Required DR
            </p>
            <p className="text-sm font-medium text-[#181d27]">
              DR 72+ Guaranteed
            </p>
          </div>
        </div>
      </section>

      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-[#181d27] mb-3">
          Placement Guidelines
        </p>
        <p className="text-sm text-[#535862] leading-relaxed">
          The backlink must be placed within a contextually relevant paragraph.
          Content should be a minimum of 800 words, include 2 high-authority
          outbound links, and be permanent.
        </p>
      </div>

      <div className="bg-accent rounded-xl p-2 lg:p-3 flex items-start justify-between lg:items-center gap-2.5 border-2 border-secondary">
        <section className="flex  gap-1">
          <div className="w-6 h-6 lg:w-8 lg:h-8  rounded-lg flex items-center justify-center shrink-0">
            <ShieldCheck className="w-4 h-4 lg:w-5 lg:h-5 text-secondary" />
          </div>
          <div>
            <p className="text-xs">Escrow Protection Active</p>
            <p className="text-xs  text-[#535862]">
              120.00 credit assured until final confirmation.
            </p>
          </div>
        </section>

        <Button variant="ghost" className="text-secondary tracking-wider">
          {" "}
          View Policy{" "}
        </Button>
      </div>
    </div>
  );
}
