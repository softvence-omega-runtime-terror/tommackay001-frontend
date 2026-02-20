/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  Star,
  Globe,
  Clock,
  ArrowRight,
  Check,
  ChevronDown,
  CircleAlert,
} from "lucide-react";

import alphaImage from "@/public/dashboard/provider/opportunity/company-alpha.png";
import growthImage from "@/public/dashboard/provider/opportunity/Growth.png";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { OpportunityDetailModal } from "@/components/dashboard/provider/opportunity/OpportunityDetailModal";
import OpportunitySuccessModal from "@/components/dashboard/provider/opportunity/OpportunitySuccessModal";
import CTASection from "@/components/landing/FinalCTA";

const opportunities = [
  {
    id: 1,
    company: "Alpha Brands Inc.",
    logo: alphaImage,
    rating: 4.9,
    reviews: 102,
    daysLeft: 5,
    type: "GUEST POST PLACEMENT",
    industry: "TECHNOLOGY",
    title: "Guest Post Placement - 'Startupy.io'",
    website: "Startupy.io",
    description:
      '"Looking for a contextually relevant placement on a high-DR technology blog to support our Q4 scanning initiative."',
    credits: "+10.00 CR",
    deadline: "Oct 28, 2026",
    targetUrl: "https://startuply.io.com",
  },
  {
    id: 2,
    company: "Growth Matrix LLC",
    logo: growthImage,
    rating: 4.9,
    reviews: 124,
    daysLeft: 2,
    type: "NICHE EDIT",
    industry: "MARKETING",
    title: "Niche Edit for Marketing Blog",
    website: "MarketingPulse.com",
    description:
      '"Seeking a link insertion into an existing article related to digital strategy and SEO trends."',
    credits: "+45.00 CR",
    deadline: "Oct 15, 2026",
    targetUrl: "https://marketingpulse.com",
  },
];

const countries = [
  { name: "South Korea", flag: "🇰🇷", checked: false },
  { name: "Portugal", flag: "🇵🇹", checked: true },
  { name: "Germany", flag: "🇩🇪", checked: true },
  { name: "Chile", flag: "🇨🇱", checked: false },
  { name: "Poland", flag: "🇵🇱", checked: true },
];

const industries = [
  { name: "Technology", checked: true },
  { name: "Marketing", checked: false },
  { name: "News", checked: false },
  { name: "Lifestyle", checked: true },
  { name: "Business", checked: false },
];

const ProviderOpportunityBoard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountries, setSelectedCountries] = useState(countries);
  const [selectedIndustries, setSelectedIndustries] = useState(industries);
  const [selectedOpportunity, setSelectedOpportunity] = useState<any>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleApplyForTask = () => {
    setSelectedOpportunity(null);
    setShowSuccessModal(true);
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <div className="flex flex-col gap-17.5">
      {/* Header */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2.5">
            <h1 className="text-[30px] font-semibold text-[#181d27] leading-9.5 font-sora">
              Opportunity Board
            </h1>
            <p className="text-base font-medium text-[#535862] leading-6">
              Discover and evaluate elite providers to understand quality and
              trust before starting your next campaign.
            </p>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-[#f5f5f5] rounded-xl p-2 flex items-center gap-2.5">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <CircleAlert className="w-5 h-5 text-[#2AB516]" />
          </div>
          <p className="text-xs text-[#535862]">
            Browse vetted providers to understand quality and trust before
            creating a placement task. All hiring and fulfillment happens
            exclusively through the task-based workflow.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex gap-4">
        {/* Filters Sidebar */}
        <div className="w-74 bg-white rounded-[20px] p-5 flex flex-col gap-5 h-fit">
          <div className="flex items-center justify-between h-7">
            <div className="flex items-center gap-1.5">
              <Filter className="w-6 h-6 text-[#414651]" />
              <span className="text-base font-bold text-[#414651]">
                Filters
              </span>
            </div>
            <button className="text-xs font-bold text-[#717680]">RESET</button>
          </div>

          {/* Country Filter */}
          <div className="flex flex-col gap-3.5">
            <p className="text-xs font-medium text-primary">Country</p>
            <div className="bg-[#f5f5f5] border border-[#e9eaeb] rounded p-1.5 flex items-center gap-2">
              <Search className="w-4 h-4 text-[#a4a7ae]" />
              <input
                type="text"
                placeholder="Type here..."
                className="text-xs text-[#a4a7ae] bg-transparent outline-none flex-1"
              />
            </div>
            <div className="flex flex-col gap-2.5 max-h-35 overflow-y-auto">
              {selectedCountries.map((country, idx) => (
                <label
                  key={idx}
                  className="flex items-center gap-2.5 cursor-pointer"
                >
                  <div
                    className={`w-5 h-4.75 rounded border flex items-center justify-center ${
                      country.checked
                        ? "bg-[#fff1e9] border-[#fd751f]"
                        : "bg-[#fafafa] border-[#d5d7da]"
                    }`}
                  >
                    {country.checked && (
                      <Check className="w-3 h-3 text-[#fd751f]" />
                    )}
                  </div>
                  <span className="text-xs text-[#1e242c]">{country.name}</span>
                  <span className="text-sm">{country.flag}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Industry Filter */}
          <div className="flex flex-col gap-3.5">
            <p className="text-xs font-medium text-primary">COMPANY INDUSTRY</p>
            <div className="bg-[#f5f5f5] border border-[#e9eaeb] rounded p-1.5 flex items-center gap-2">
              <Search className="w-4 h-4 text-[#a4a7ae]" />
              <input
                type="text"
                placeholder="Search by title..."
                className="text-xs text-[#a4a7ae] bg-transparent outline-none flex-1"
              />
            </div>
            <div className="flex flex-col gap-2.5 max-h-35 overflow-y-auto">
              {selectedIndustries.map((industry, idx) => (
                <label
                  key={idx}
                  className="flex items-center gap-2.5 cursor-pointer"
                >
                  <div
                    className={`w-5 h-4.75 rounded border flex items-center justify-center ${
                      industry.checked
                        ? "bg-[#fff1e9] border-[#fd751f]"
                        : "bg-[#fafafa] border-[#d5d7da]"
                    }`}
                  >
                    {industry.checked && (
                      <Check className="w-3 h-3 text-[#fd751f]" />
                    )}
                  </div>
                  <span className="text-xs text-[#1e242c]">
                    {industry.name}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Min Domain Rating */}
          <div className="flex flex-col gap-3.5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-primary">
                MIN. DOMAIN RATING
              </p>
              <div className="bg-[#ebffe9] px-2 py-1 rounded">
                <span className="text-xs font-medium text-[#2ab516]">50+</span>
              </div>
            </div>
            <div className="bg-[#f9f9f9] border border-[#f5f5f5] rounded-3xl h-1 relative p-2">
              <div className="absolute w-2.5 h-2.5 bg-[#2ab516] rounded-full top-1/2 -translate-y-1/2 left-1/2" />
            </div>
          </div>

          {/* Authority Rating */}
          <div className="flex flex-col gap-3.5">
            <p className="text-xs font-medium text-primary">AUTHORITY RATING</p>
            <div className="bg-[#f9f9f9] border border-[#f5f5f5] rounded-lg p-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-primary">
                  ALL Ratings
                </span>
                <ChevronDown className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>

          {/* Apply Button */}
          <button className="w-full bg-[#fd751f] text-white font-semibold text-base py-2.5 rounded-lg">
            APPLY FILTER
          </button>
        </div>

        {/* Opportunities Grid */}
        <div className="flex-1 flex flex-col gap-5">
          {/* Search Bar */}
          <div className="bg-white rounded-xl p-3 flex items-center justify-between">
            <div className="bg-[#f5f5f5] border border-[#e9eaeb] rounded p-3 flex items-center gap-2">
              <Search className="w-6 h-6 text-[#a4a7ae]" />
              <input
                type="text"
                placeholder="Search by site, ID, or title..."
                className="text-sm font-medium text-[#a4a7ae] bg-transparent outline-none w-60"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-medium text-primary">SORT BY:</span>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-medium text-primary">
                  Top Rated
                </span>
                <ChevronDown className="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 gap-4">
            {opportunities.map((opp) => (
              <div key={opp.id} className="bg-white rounded-[20px] p-5">
                <div className="flex flex-col gap-7.5">
                  <div className="flex flex-col gap-5">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-11 h-11 rounded-lg overflow-hidden bg-gray-200">
                          <Image
                            src={opp.logo}
                            alt={opp.company}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(opp.company)}&background=331ffd&color=fff&size=44`;
                            }}
                          />
                        </div>
                        <div>
                          <p className="text-base font-bold text-[#414651]">
                            {opp.company}
                          </p>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-[#fbbf24] fill-[#fbbf24]" />
                            <span className="text-xs font-medium text-[#394554]">
                              {opp.rating}
                            </span>
                            <span className="text-xs text-[#394554]">
                              ({opp.reviews})
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#f5f5f5] border border-[#e9eaeb] rounded-lg p-1 flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                        <span className="text-[10px] text-primary">
                          {opp.daysLeft} Days Left
                        </span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex gap-2.5">
                      <span className="bg-[#ebffe9] text-[#196b0d] text-xs px-2 py-1 rounded-lg">
                        {opp.type}
                      </span>
                      <span className="bg-[#f5f5f5] text-[#414651] text-xs px-2 py-1 rounded-lg">
                        {opp.industry}
                      </span>
                    </div>

                    {/* Title */}
                    <p className="text-base font-semibold text-[#535862]">
                      {opp.title}
                    </p>

                    {/* Description Box */}
                    <div className="bg-[#fafafa] rounded-lg p-2.5 flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <Globe className="w-6 h-6 text-[#fd751f]" />
                        <span className="text-xs font-medium text-[#fd751f]">
                          {opp.website}
                        </span>
                      </div>
                      <p className="text-xs font-medium text-[#717680]">
                        {opp.description}
                      </p>
                    </div>

                    {/* Credits */}
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col gap-2 p-3">
                        <span className="text-xs text-[#717680]">
                          PROJECT ALLOCATION
                        </span>
                        <span className="text-lg font-semibold text-[#2ab516]">
                          {opp.credits}
                        </span>
                      </div>
                      <div className="p-3">
                        <span className="text-xs text-[#717680] text-right">
                          EARNED ON APPROVAL
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <Button
                    variant="secondary"
                    className="rounded-xl"
                    onClick={() => setSelectedOpportunity(opp)}
                  >
                    VIEW DETAILS & APPLY
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTASection
        title="Ready to grow your authority?"
        className="min-w-340"
        description="We’ve detected 14 more high-DR opportunities matching your verified domain profiles."
        primaryAction={{
          label: "LOAD MORE DISCOVERIES",
          href: "/auth/register",
        }}
      />

      {/* Modal */}
      {selectedOpportunity && (
        <OpportunityDetailModal
          isOpen={!!selectedOpportunity}
          onClose={() => setSelectedOpportunity(null)}
          onApply={handleApplyForTask}
          opportunity={selectedOpportunity}
        />
      )}

      {/* Success Modal */}
      <OpportunitySuccessModal
        isOpen={showSuccessModal}
        onClose={handleCloseSuccessModal}
      />
    </div>
  );
};

export default ProviderOpportunityBoard;
