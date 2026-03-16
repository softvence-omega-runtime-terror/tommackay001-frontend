import { CheckCircle2, Info, Lock } from "lucide-react";

export default function ProfileVerifiedTab() {
  return (
    <div className="p-6 space-y-6">
      <div className="bg-[#FFF7ED] border border-[#FDCFBE] rounded-xl px-5 py-3.5 flex items-start gap-3">
        <Info className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-medium text-secondary">
            Available Placement Formats
          </p>
          <p className="text-sm text-[#535862] mt-1 leading-relaxed">
            These are the link placement formats currently supported by your
            active publishers. Exact availability, pricing, and domain match are
            confirmed during task creation.
          </p>
        </div>
      </div>

      <div className="bg-[#f6f7f9] p-2 md:p-8 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative bg-white rounded-2xl p-6 shadow-[0_10px_30px_rgba(240,79,35,0.08)] border border-[#f3d6cd]">
            <div className="absolute top-7 md:top-5 right-5 text-gray-400">
              <Lock className="w-5 h-5" />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-secondary text-secondary text-xs font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              VERIFIED PLACEMENT
            </div>

            <div className="mt-6 text-xs text-gray-400 tracking-wider uppercase">
              Placement Type
            </div>
            <div className="mt-1 text-lg font-semibold text-gray-800">
              Guest Post
            </div>

            <div className="mt-5 space-y-3">
              <div className="h-3 bg-gray-200 rounded-full w-full"></div>
              <div className="h-3 bg-gray-200 rounded-full w-2/3"></div>
            </div>

            <div className="mt-6 flex justify-between text-sm">
              <div>
                <div className="text-gray-400 text-xs uppercase tracking-wider">
                  Target Niche
                </div>
                <div className="text-gray-800 font-medium mt-1">Lifestyle</div>
              </div>

              <div className="text-right">
                <div className="text-gray-400 text-xs uppercase tracking-wider">
                  Delivered
                </div>
                <div className="text-gray-600 mt-1">1 week ago</div>
              </div>
            </div>
          </div>

          <div className="relative bg-white rounded-2xl p-6 shadow-[0_10px_30px_rgba(240,79,35,0.08)] border border-[#f3d6cd]">
            <div className="absolute top-7 md:top-5 right-5 text-gray-400">
              <Lock className="w-5 h-5" />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-secondary text-secondary text-xs font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              VERIFIED PLACEMENT
            </div>

            <div className="mt-6 text-xs text-gray-400 tracking-wider uppercase">
              Placement Type
            </div>
            <div className="mt-1 text-lg font-semibold text-gray-800">
              Backlink Insert
            </div>

            <div className="mt-5 space-y-3">
              <div className="h-3 bg-gray-200 rounded-full w-full"></div>
              <div className="h-3 bg-gray-200 rounded-full w-2/3"></div>
            </div>

            <div className="mt-6 flex justify-between text-sm">
              <div>
                <div className="text-gray-400 text-xs uppercase tracking-wider">
                  Target Niche
                </div>
                <div className="text-gray-800 font-medium mt-1">Style</div>
              </div>

              <div className="text-right">
                <div className="text-gray-400 text-xs uppercase tracking-wider">
                  Delivered
                </div>
                <div className="text-gray-600 mt-1">2 week ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f9fafb] border border-[#e9eaeb] rounded-xl p-4 text-sm text-[#535862] flex items-start gap-3">
        <Info className="w-5 h-5 text-[#9DA4AE] shrink-0 mt-0.5" />
        <p>
          Placement formats show publisher capabilities only. Final pricing,
          domain authority, relevance, and exact link placement are confirmed
          during the task matching and approval process.
        </p>
      </div>
    </div>
  );
}
