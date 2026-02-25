import { ChevronRight, ExternalLink, FileText } from "lucide-react";

export default function SubmissionTab() {
  return (
    <div className="space-y-6">
      <section>
        <h3 className="text-xs font-bold uppercase tracking-widest text-[#181d27] mb-3">
          Provider Message
        </h3>
        <div className="bg-[#FFF4ED] border border-[#FDCFBE] rounded-xl px-5 py-4">
          <p className="text-sm text-[#535862] italic leading-relaxed">
            &quot;I&apos;ve finalized the Guest Post Placement on techtrends.io.
            The link is live and I&apos;ve verified it&apos;s indexed correctly.
            Let me know if everything looks good.&quot;
          </p>
        </div>
      </section>

      <section>
        <h3 className="text-xs font-bold uppercase tracking-widest text-[#181d27] mb-3">
          Live Link
        </h3>
        <div className="border border-[#e9eaeb] rounded-xl overflow-hidden">
          <div className="flex items-center gap-3 px-4 py-3.5 hover:bg-gray-50/50 transition">
            <ExternalLink className="w-5 h-5 text-secondary shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[#181d27] truncate">
                https://techtrends.io/blog/s-calling-saas-infra
              </p>
              <p className="text-xs font-bold text-[#027A48] uppercase tracking-wide mt-0.5">
                Live & Verified
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-secondary" />
          </div>
        </div>
      </section>

      {/* Screenshot area */}
      <section>
        <h3 className="text-xs font-bold uppercase tracking-widest text-[#181d27] mb-3">
          Screenshot Proof
        </h3>
        <div className="border border-dashed border-[#e9eaeb] rounded-xl bg-[#f9fafb] flex flex-col items-center justify-center py-16 gap-3">
          <FileText className="w-10 h-10 text-[#d1d5db]" />
          <p className="text-sm text-[#9DA4AE]">Screenshot not available</p>
        </div>
      </section>
    </div>
  );
}
