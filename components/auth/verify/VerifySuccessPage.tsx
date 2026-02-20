"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ShieldCheck, ExternalLink } from "lucide-react";
import logo from "@/public/backlyst-logo.png";
import Image from "next/image";

const VerifySuccessPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-20 px-4">
      <div className="w-full max-w-[530px] flex flex-col gap-12">
        {/* Header with Logo and Breadcrumb */}
        <div className="flex flex-col items-center gap-8 w-full">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={logo}
              alt="Backlyst"
              className="w-14 h-12 object-contain"
              priority
            />
            <span className="text-[28px] font-semibold font-sora text-gray-900">
              backlyst
            </span>
          </Link>
        </div>

        {/* Success Card Content */}
        <div className="flex flex-col items-center gap-8 text-center w-full">
          {/* Decorative Top Card */}
          <div className=" flex justify-center items-center w-full h-39.25 bg-[#ebe9ff] border-b border-[#d5d7da] rounded-[22px] relative overflow-hidden shrink-0">
            <ShieldCheck
              size={64}
              className="text-primary w-18 bg-white p-4 rounded-2xl"
            />
          </div>

          <div className="space-y-3 w-full">
            <h1 className="text-[30px] font-semibold font-sora text-[#181d27] leading-[38px]">
              Website Approved!
            </h1>
            <p className="text-[16px] text-[#535862] font-normal font-inter leading-[24px]">
              Success! Your sites has been verified. You can now start creating
              tasks offering placement in the marketplace.
            </p>
          </div>

          <div className="flex items-center gap-12 justify-center w-full">
            <div className="flex flex-col items-center gap-2.5 ">
              <div className=" flex justify-center items-center w-16 h-16  bg-[#E0EAFF]! border-b border-[#d5d7da] rounded-[22px] relative overflow-hidden shrink-0">
                <ShieldCheck
                  size={56}
                  className="text-[#2E1CE6] w-18 bg-[#E0EAFF] p-4 rounded-2xl font-normal"
                />
              </div>
              <span className="text-[14px] font-medium font-inter text-[#717680]">
                Trust Level High
              </span>
            </div>
            <div className="flex flex-col items-center gap-2.5 ">
              <div className=" flex justify-center items-center w-16 h-16  bg-[#E0EAFF]! border-b border-[#d5d7da] rounded-[22px] relative overflow-hidden shrink-0">
                <ExternalLink
                  size={56}
                  className="text-[#392db9] w-18 bg-[#E0EAFF] p-4 rounded-2xl font-normal"
                />
              </div>
              <span className="text-[14px] font-medium font-inter text-[#717680]">
                Visibility: Active
              </span>
            </div>
          </div>

          <div className="w-full flex flex-col gap-6">
            <Button
              onClick={() => router.push("/dashboard")}
              className="w-full py-3 h-auto bg-[#331ffd] cursor-pointer hover:bg-[#2815d6] text-white font-semibold md:text-base rounded-lg shadow-xs transition-all flex gap-2 justify-center uppercase"
            >
              START USING BACKLYST <ChevronRight size={20} />
            </Button>
            <button
              type="button"
              onClick={() => router.push("/dashboard")}
              className="text-sm font-normal text-[#535862]  cursor-pointer uppercase tracking-normal hover:text-gray-800 transition-colors"
            >
              SKIP FOR NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifySuccessPage;
