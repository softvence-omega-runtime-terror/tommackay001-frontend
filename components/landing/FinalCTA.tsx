import Link from "next/link";
import { FileCheck, PlayCircle } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-12.5 px-1 md:px-6 ">
      <div className="w- md:max-w-330 mx-auto">
        <div className="bg-[#FFF1E9]! rounded-2xl p-12 flex flex-col gap-5 items-center text-center relative overflow-hidden">
          {/* Decorative Circles */}
          <div className="absolute -bottom-20 -left-15  w-40 h-40 rounded-full border border-white/20 pointer-events-none bg-[#FED4BA]" />
          <div className="absolute -top-20 -right-15  w-40 h-40 rounded-full border border-white/20 pointer-events-none bg-[#FED4BA]" />

          <h2 className="relative z-10 font-sora font-semibold text-3xl md:text-5xl md:leading-15 tracking-[-0.96px] text-secondary">
            Ready to grow your authority?
          </h2>

          <p className="relative z-10 font-inter font-normal md:text-xl leading-7.5 text-gray-900 md:max-w-185.25">
            Join the new era of SEO outreach. Buy credits, create your first
            task, and experience backlink building without the friction.
          </p>

          <div className="relative z-10 flex gap-5 items-center mt-4 flex-wrap justify-center w-full ">
            <Link
              href="/auth/register"
              className="flex gap-2.5 items-center justify-center bg-secondary   hover:bg-gray-50 text-white px-7.5 py-3.5 rounded-2xl font-semibold font-inter text-xs md:text-base leading-6 shadow-[0_3px_7px_0_rgba(0,0,0,0.1)] transition-all"
            >
              <FileCheck className="w-6 h-6" />
              <span>CREATE YOUR FIRST TASK</span>
            </Link>
            <Link
              href="/how-it-works"
              className="flex gap-2.5 items-center justify-center bg-white hover:bg-brand-orange-700 border border-[#FEA369]! text-secondary px-15 md:px-7.5 py-3.5 rounded-2xl font-semibold font-inter text-xs md:text-base leading-6 transition-all"
            >
              <PlayCircle className="w-6 h-6" />
              <span>HOW IT WORKS</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
