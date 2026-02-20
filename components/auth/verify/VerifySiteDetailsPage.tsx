"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import {
  Globe,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Layers,
  ExternalLink,
} from "lucide-react";
import logo from "@/public/backlyst-logo.png";
import Image from "next/image";
const VerifySiteDetailsPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    url: "",
    industry: "",
    country: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/auth/verify-2");
  };

  return (
    <div className="min-h-screen bg-[#FDFDFF] flex flex-col items-center py-20 px-4">
      <div className="w-full max-w-172.5 flex flex-col gap-12">
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

          <div className="w-full flex flex-col gap-3">
            <div
              className="flex flex-col leading-12 md:flex-row
             items-center justify-between w-full"
            >
              <div className="bg-[#fff1e9] border border-[#fea369] px-2 py-1 rounded-[30px] flex items-center justify-center">
                <span className="text-[#fd751f] text-xs font-medium font-inter">
                  STEP 1 OF 3
                </span>
              </div>
              <h2 className="text-[20px] font-semibold font-inter text-[#181d27] text-center">
                Website Details
              </h2>
              <span className="text-[#535862] font-medium font-inter text-sm uppercase text-center w-[160px]">
                NEXT: VERIFICATION
              </span>
            </div>
            <div className="w-full h-1.5 bg-[#e9eaeb] rounded-full relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-[33%] bg-[#fd751f] rounded-full" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center text-center gap-8 w-full max-w-172.5">
          <div className=" flex justify-center items-center w-16 h-16  bg-[#E0EAFF]! border-b border-[#d5d7da] rounded-[22px] relative overflow-hidden shrink-0">
            <ShieldCheck
              size={56}
              className="text-[#392db9] w-18 bg-[#E0EAFF] p-4 rounded-2xl font-normal"
            />
          </div>

          <div className="space-y-3">
            <h1 className="text-[30px] font-semibold font-sora text-black leading-9.5">
              Connect your website
            </h1>
            <p className="text-[16px] text-[#535862] font-normal font-inter leading-6">
              To begin building or offering placements, we need to index your
              domain&apos;s authority metrics.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full space-y-6 text-left">
            <div className="space-y-2">
              <Label
                htmlFor="url"
                className="text-sm font-medium font-inter text-[#414651] uppercase"
              >
                WEBSITE URL
              </Label>
              <div className="relative group">
                <Globe
                  size={20}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#331FFD]"
                />
                <Input
                  id="url"
                  placeholder="https://youtube.com"
                  className="pl-10 h-11 bg-white border border-[#d5d7da] rounded-lg focus:ring-[#331ffd] focus:border-[#331ffd] transition-all shadow-xs text-[#181d27] placeholder:text-[#717680] text-base"
                  value={formData.url}
                  onChange={(e) =>
                    setFormData({ ...formData, url: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label
                  htmlFor="industry"
                  className="text-sm font-medium font-inter text-[#414651] uppercase"
                >
                  INDUSTRY
                </Label>
                <div className="relative group">
                  <Layers
                    size={20}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#331FFD]"
                  />
                  <select
                    id="industry"
                    className="w-full pl-10 pr-4 h-11 bg-white border border-[#d5d7da] rounded-lg focus:ring-2 focus:ring-[#331ffd] focus:border-transparent transition-all shadow-xs appearance-none font-normal text-base text-[#181d27] cursor-pointer"
                    value={formData.industry}
                    onChange={(e) =>
                      setFormData({ ...formData, industry: e.target.value })
                    }
                    required
                  >
                    <option value="" disabled>
                      Select...
                    </option>
                    <option value="tech">Technology</option>
                    <option value="marketing">Marketing</option>
                    <option value="finance">Finance</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#717680]">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="country"
                  className="text-sm font-medium font-inter text-[#414651] uppercase"
                >
                  COUNTRY
                </Label>
                <div className="relative group">
                  <MapPin
                    size={20}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#331FFD]"
                  />
                  <select
                    id="country"
                    className="w-full pl-10 pr-4 h-11 bg-white border border-[#d5d7da] rounded-lg focus:ring-2 focus:ring-[#331ffd] focus:border-transparent transition-all shadow-xs appearance-none font-normal text-base text-[#181d27] cursor-pointer"
                    value={formData.country}
                    onChange={(e) =>
                      setFormData({ ...formData, country: e.target.value })
                    }
                    required
                  >
                    <option value="" disabled>
                      Select...
                    </option>
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="ca">Canada</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#717680]">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2 pt-2">
              <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center shrink-0 mt-0.5">
                {/* Placeholder for checkbox */}
              </div>
              <p className="text-sm font-medium text-[#414651]">
                We&apos;ll verify ownership in the next step. Your data is
                encrypted and used for marketplace discovery.
              </p>
            </div>

            <div className="pt-4 flex flex-col gap-4 w-full items-center">
              <Button
                type="submit"
                className="w-full py-3 h-auto cursor-pointer bg-[#331ffd] hover:bg-[#2815d6] text-white font-semibold md:text-base rounded-lg shadow-xs transition-all flex gap-2 justify-center"
              >
                CONTINUE TO CONFIRMATION <ArrowRight size={18} />
              </Button>
              <button
                type="button"
                onClick={() => router.push("/dashboard")}
                className="text-sm font-medium text-[#535862] hover:text-gray-800 transition-colors uppercase tracking-widest"
              >
                SKIP FOR NOW
              </button>
            </div>

            <div className="flex items-center justify-center gap-8 mt-4">
              <span className="text-sm text-[#717680] font-normal uppercase">
                GDPR COMPLIANT
              </span>
              <span className="text-sm text-[#717680] font-normal uppercase">
                SSL SECURED
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifySiteDetailsPage;
