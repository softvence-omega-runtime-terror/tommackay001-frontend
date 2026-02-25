"use client";

import { useState } from "react";
import { Search, Filter, Check, ChevronDown, CircleAlert } from "lucide-react";
import ProviderCard from "@/components/dashboard/provider/profile/ProviderCard";
import ProviderProfileModal from "@/components/dashboard/provider/profile/ProviderProfileModal";

interface Provider {
  id: number;
  name: string;
  avatar: string;
  avatarBg: string;
  verified: boolean;
  rating: number;
  reviews: number;
  website: string;
  websiteUrl: string;
  domainRating: number;
  industryTag: string;
  tags: string[];
}

interface Country {
  name: string;
  flag: string;
  checked: boolean;
}

interface Industry {
  name: string;
  checked: boolean;
}

const providers: Provider[] = [
  {
    id: 1,
    name: "TechTrends",
    avatar: "TT",
    avatarBg: "#6366f1",
    verified: true,
    rating: 4.9,
    reviews: 124,
    website: "TECHTRENDS.IO",
    websiteUrl: "https://techtrends.io",
    domainRating: 78,
    industryTag: "TECHNOLOGY",
    tags: ["HIGH TRAFFIC", "GUEST POST"],
  },
  {
    id: 2,
    name: "Circooles",
    avatar: "CI",
    avatarBg: "#06b6d4",
    verified: true,
    rating: 4.7,
    reviews: 124,
    website: "Circooles.oi",
    websiteUrl: "https://circooles.io",
    domainRating: 50,
    industryTag: "COLD",
    tags: ["HIGH TRAFFIC", "GUEST POST"],
  },
  {
    id: 3,
    name: "Catalog",
    avatar: "CA",
    avatarBg: "#f97316",
    verified: true,
    rating: 4.9,
    reviews: 124,
    website: "Catalog.IO",
    websiteUrl: "https://catalog.io",
    domainRating: 78,
    industryTag: "NEWS",
    tags: ["HIGH TRAFFIC", "GUEST POST"],
  },
  {
    id: 4,
    name: "ContentQueen",
    avatar: "CQ",
    avatarBg: "#8b5cf6",
    verified: true,
    rating: 5.0,
    reviews: 124,
    website: "TECHTRENDS.IO",
    websiteUrl: "https://techtrends.io",
    domainRating: 11,
    industryTag: "TECHNOLOGY",
    tags: ["HIGH TRAFFIC", "GUEST POST"],
  },
  {
    id: 5,
    name: "IronDev",
    avatar: "ID",
    avatarBg: "#3b82f6",
    verified: true,
    rating: 3.8,
    reviews: 124,
    website: "WEBSITERMA.COM",
    websiteUrl: "https://websiterma.com",
    domainRating: 45,
    industryTag: "BUSINESS",
    tags: ["HIGH TRAFFIC", "GUEST POST"],
  },
  {
    id: 6,
    name: "GolbalEditor",
    avatar: "GE",
    avatarBg: "#f59e0b",
    verified: true,
    rating: 2.9,
    reviews: 124,
    website: "TECHTRENDS.IO",
    websiteUrl: "https://techtrends.io",
    domainRating: 23,
    industryTag: "TECHNOLOGY",
    tags: ["HIGH TRAFFIC", "GUEST POST"],
  },
];

const countries: Country[] = [
  { name: "South Korea", flag: "🇰🇷", checked: false },
  { name: "Portugal", flag: "🇵🇹", checked: true },
  { name: "Germany", flag: "🇩🇪", checked: true },
  { name: "Chile", flag: "🇨🇱", checked: false },
  { name: "Poland", flag: "🇵🇱", checked: true },
];

const industries: Industry[] = [
  { name: "Technology", checked: true },
  { name: "Marketing", checked: false },
  { name: "News", checked: false },
  { name: "Lifestyle", checked: true },
  { name: "Business", checked: false },
];

const TABS: string[] = [
  "OVERVIEW",
  "PLACEMENT FORMATS",
  "VERIFIED SAMPLES",
  "AUTHORITY",
  "WEBSITE LIST",
];

export default function CompanyDirectory() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCountries, setSelectedCountries] =
    useState<Country[]>(countries);
  const [selectedIndustries, setSelectedIndustries] =
    useState<Industry[]>(industries);
  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(
    null,
  );

  const toggleCountry = (idx: number) =>
    setSelectedCountries((prev) =>
      prev.map((c, i) => (i === idx ? { ...c, checked: !c.checked } : c)),
    );
  const toggleIndustry = (idx: number) =>
    setSelectedIndustries((prev) =>
      prev.map((ind, i) =>
        i === idx ? { ...ind, checked: !ind.checked } : ind,
      ),
    );

  const filtered: Provider[] = providers.filter((p) => {
    if (!searchQuery) return true;
    return (
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.website.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.industryTag.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-[#f7f7f7] font-sans">
      <div className=" flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-2xl lg:text-3xl font-semibold text-[#181d27]">
              Company Directory
            </h1>
            <p className="text-md lg:text-base font-medium text-[#535862] mt-1">
              Discover and evaluate elite providers to understand quality and
              trust before starting your next campaign.
            </p>
          </div>
          <div className="bg-[#f5f5f5] rounded-xl p-3 flex items-start lg:items-center gap-2.5">
            <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center shrink-0">
              <CircleAlert className="w-4 h-4 text-[#2AB516]" />
            </div>
            <p className="text-sm lg:text-md text-[#535862]">
              Browse vetted providers to understand quality and trust before
              creating a placement task. All hiring and fulfillment happens
              exclusively through the task-based workflow.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="hidden lg:flex w-56 xl:w-64 bg-white rounded-[20px] p-5 flex-col gap-5 h-fit shrink-0">
            <div className="flex items-center justify-between h-7">
              <div className="flex items-center gap-1.5">
                <Filter className="w-5 h-5 text-[#414651]" />
                <span className="text-base font-bold text-[#414651]">
                  Filters
                </span>
              </div>
              <button
                className="text-sm font-bold text-[#717680] hover:text-[#fd751f] transition-colors"
                onClick={() => {
                  setSelectedCountries(
                    countries.map((c) => ({ ...c, checked: false })),
                  );
                  setSelectedIndustries(
                    industries.map((i) => ({ ...i, checked: false })),
                  );
                }}
              >
                RESET
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-semibold text-[#fd751f] uppercase tracking-widest">
                Country
              </p>
              <div className="bg-[#f5f5f5] border border-[#e9eaeb] rounded p-1.5 flex items-center gap-2">
                <Search className="w-3.5 h-3.5 text-[#a4a7ae]" />
                <input
                  type="text"
                  placeholder="Type here..."
                  className="text-sm text-[#a4a7ae] bg-transparent outline-none flex-1"
                />
              </div>
              <div className="flex flex-col gap-2.5 max-h-36 overflow-y-auto">
                {selectedCountries.map((c, idx) => (
                  <label
                    key={idx}
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => toggleCountry(idx)}
                  >
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${c.checked ? "bg-[#fff1e9] border-[#fd751f]" : "bg-[#fafafa] border-[#d5d7da]"}`}
                    >
                      {c.checked && (
                        <Check className="w-2.5 h-2.5 text-[#fd751f]" />
                      )}
                    </div>
                    <span className="text-sm text-[#1e242c]">{c.name}</span>
                    <span className="text-sm ml-auto">{c.flag}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-semibold text-[#fd751f] uppercase tracking-widest">
                Company Industry
              </p>
              <div className="bg-[#f5f5f5] border border-[#e9eaeb] rounded p-1.5 flex items-center gap-2">
                <Search className="w-3.5 h-3.5 text-[#a4a7ae]" />
                <input
                  type="text"
                  placeholder="Search by title..."
                  className="text-sm text-[#a4a7ae] bg-transparent outline-none flex-1"
                />
              </div>
              <div className="flex flex-col gap-2.5 max-h-36 overflow-y-auto">
                {selectedIndustries.map((ind, idx) => (
                  <label
                    key={idx}
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => toggleIndustry(idx)}
                  >
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${ind.checked ? "bg-[#fff1e9] border-[#fd751f]" : "bg-[#fafafa] border-[#d5d7da]"}`}
                    >
                      {ind.checked && (
                        <Check className="w-2.5 h-2.5 text-[#fd751f]" />
                      )}
                    </div>
                    <span className="text-sm text-[#1e242c]">{ind.name}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-semibold text-[#fd751f] uppercase tracking-widest">
                  Min. Domain Rating
                </p>
                <div className="bg-[#ebffe9] px-2 py-0.5 rounded">
                  <span className="text-[10px] font-semibold text-[#2ab516]">
                    50+
                  </span>
                </div>
              </div>
              <div className="relative h-1.5 bg-[#f0f0f0] rounded-full">
                <div className="absolute left-0 top-0 h-full w-1/2 bg-[#2ab516] rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-[#2ab516] rounded-full shadow-md border-2 border-white cursor-pointer" />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-semibold text-[#fd751f] uppercase tracking-widest">
                Authority Rating
              </p>
              <div className="bg-[#f9f9f9] border border-[#f0f0f0] rounded-lg p-2.5 flex items-center justify-between cursor-pointer">
                <span className="text-sm font-semibold text-[#414651]">
                  ALL Ratings
                </span>
                <ChevronDown className="w-4 h-4 text-[#414651]" />
              </div>
            </div>

            <button className="w-full bg-[#fd751f] hover:bg-[#e65c00] transition-colors text-white font-bold text-md py-2.5 rounded-lg">
              APPLY FILTER
            </button>
          </div>

          <div className="flex-1 flex flex-col gap-4 min-w-0">
            <div className="bg-white rounded-xl p-3 flex items-center justify-between gap-3">
              <div className="flex-1 bg-[#f5f5f5] border border-[#e9eaeb] rounded p-2.5 flex items-center gap-2">
                <Search className="w-5 h-5 text-[#a4a7ae] shrink-0" />
                <input
                  type="text"
                  placeholder="Search by site, ID, or title..."
                  className="text-md font-medium text-[#a4a7ae] bg-transparent outline-none flex-1"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="hidden lg:flex items-center gap-2">
                <span className="text-sm font-semibold text-[#414651] uppercase tracking-wide">
                  Sort by:
                </span>
                <button className="flex items-center gap-1 text-sm font-semibold text-[#fd751f]">
                  Top Rated <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {filtered.map((p) => (
                <ProviderCard
                  key={p.id}
                  provider={p}
                  onViewProfile={setSelectedProvider}
                />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <Search className="w-10 h-10 text-[#d5d7da] mb-3" />
                <p className="text-[#535862] font-medium">
                  No providers match your search
                </p>
                <p className="text-md text-[#a4a7ae] mt-1">
                  Try a different keyword
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {selectedProvider && (
        <ProviderProfileModal
          open={selectedProvider ? true : false}
          provider={selectedProvider}
          onClose={() => setSelectedProvider(null)}
        />
      )}
    </div>
  );
}
