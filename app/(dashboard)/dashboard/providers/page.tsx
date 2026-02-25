"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  Star,
  Globe,
  ArrowRight,
  Check,
  ChevronDown,
  CircleAlert,
  Shield,
  ExternalLink,
  X,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Link2,
  FileText,
  List,
  Activity,
  Info,
  Calendar,
  ChevronRight,
  Plus,
  Users,
  Eye,
  BarChart2,
  Zap,
  Lock,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

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

interface PlacementOption {
  id: string;
  icon: React.ReactNode;
  label: string;
  desc: string;
  recommended?: boolean;
}

interface PublisherCapabilitiesModalProps {
  onClose: () => void;
  onCreateTask: () => void;
}

interface CreateTaskModalProps {
  onClose: () => void;
}

interface ProviderProfileModalProps {
  provider: Provider | null;
  onClose: () => void;
}

interface ProviderCardProps {
  provider: Provider;
  onViewProfile: (provider: Provider) => void;
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

function PublisherCapabilitiesModal({
  onClose,
  onCreateTask,
}: PublisherCapabilitiesModalProps) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 pt-5 pb-4 border-b border-gray-100 flex items-start justify-between">
          <div>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mb-2">
              <span className="text-white font-bold text-md">T</span>
            </div>
            <h2 className="text-lg font-bold text-[#181d27]">
              Publisher Capabilities
            </h2>
            <p className="text-sm text-[#717680] mt-0.5">
              NICHE SPECIALIST • LIFESTYLE
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <X className="w-4 h-4 text-[#414651]" />
          </button>
        </div>

        <div className="p-6 flex flex-col gap-5">
          <div>
            <p className="text-sm font-semibold text-[#717680] uppercase tracking-widest mb-3">
              Supported Placement Types
            </p>
            <div className="flex gap-2 flex-wrap items-center">
              {[
                "Guest Posts",
                "Link Insertions",
                "Niche Edits",
                "Editorial PR (Limited)",
              ].map((type, i) => (
                <span
                  key={type}
                  className={`text-sm font-semibold px-3 py-1.5 rounded-lg border ${i === 3 ? "bg-[#fff7ed] border-[#fed7aa] text-[#c2410c]" : "bg-[#f5f5f5] border-[#e9eaeb] text-[#414651]"}`}
                >
                  {type}
                </span>
              ))}
              <button className="w-5 h-5 rounded-full border border-[#e9eaeb] flex items-center justify-center">
                <Info className="w-3 h-3 text-[#a4a7ae]" />
              </button>
            </div>
            <p className="text-sm text-[#a4a7ae] mt-2 flex items-center gap-1">
              <Info className="w-3 h-3" /> Capabilities indicate supported
              formats, not guaranteed acceptance.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#717680] uppercase tracking-widest mb-3">
              Historical Performance
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#fafafa] border border-[#e9eaeb] rounded-xl p-4">
                <div className="flex items-center gap-1.5 mb-1">
                  <Clock className="w-4 h-4 text-[#fd751f]" />
                  <span className="text-[10px] font-bold text-[#fd751f] uppercase tracking-wide">
                    Avg. Turnaround
                  </span>
                </div>
                <p className="text-lg font-bold text-[#181d27]">
                  3-5 Business Days
                </p>
                <p className="text-[10px] text-[#a4a7ae] uppercase tracking-wide mt-0.5">
                  Average Delivery Time
                </p>
              </div>
              <div className="bg-[#fafafa] border border-[#e9eaeb] rounded-xl p-4">
                <div className="flex items-center gap-1.5 mb-1">
                  <TrendingUp className="w-4 h-4 text-[#fd751f]" />
                  <span className="text-[10px] font-bold text-[#fd751f] uppercase tracking-wide">
                    Index Success
                  </span>
                </div>
                <p className="text-lg font-bold text-[#181d27]">
                  Historically High
                </p>
                <p className="text-[10px] text-[#a4a7ae] uppercase tracking-wide mt-0.5">
                  Based on Historical Data
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#717680] uppercase tracking-widest mb-3">
              Content & Niche Constraints
            </p>
            <div className="flex flex-col gap-2">
              {[
                "No Adult, Gambling, or Pharmacy-related content",
                "Guest posts must be minimum 800 words with original images",
                "Publisher may request edits to match editorial tone",
              ].map((rule, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#2ab516] shrink-0 mt-0.5" />
                  <span className="text-md text-[#414651]">{rule}</span>
                </div>
              ))}
            </div>
            <div className="bg-[#fff7ed] border border-[#fed7aa] rounded-xl p-3 mt-3 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-[#f97316] shrink-0 mt-0.5" />
              <p className="text-sm text-[#9a3412]">
                Capabilities do not guarantee acceptance. Final approval of each
                specific placement occurs exclusively during the formal task
                review and bidding process.
              </p>
            </div>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between bg-[#fafafa] rounded-b-2xl">
          <button
            onClick={onClose}
            className="text-md font-semibold text-[#717680] hover:text-[#414651] transition-colors"
          >
            CLOSE CAPABILITY VIEW
          </button>
          <Button variant="secondary" onClick={onCreateTask}>
            CREATE TASK TO INVITE <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

function CreateTaskModal({ onClose }: CreateTaskModalProps) {
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

const TABS: string[] = [
  "OVERVIEW",
  "PLACEMENT FORMATS",
  "VERIFIED SAMPLES",
  "AUTHORITY",
  "WEBSITE LIST",
];

function ProviderProfileModal({
  provider,
  onClose,
}: ProviderProfileModalProps) {
  const [activeTab, setActiveTab] = useState<string>("OVERVIEW");
  const [showCapabilities, setShowCapabilities] = useState<boolean>(false);
  const [showCreateTask, setShowCreateTask] = useState<boolean>(false);

  if (!provider) return null;

  const tabIcons: Record<string, React.ReactNode> = {
    OVERVIEW: <Activity className="w-4 h-4" />,
    "PLACEMENT FORMATS": <List className="w-4 h-4" />,
    "VERIFIED SAMPLES": <Eye className="w-4 h-4" />,
    AUTHORITY: <Shield className="w-4 h-4" />,
    "WEBSITE LIST": <Globe className="w-4 h-4" />,
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl mx-4 max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="px-6 pt-5 pb-0 border-b border-[#f0f0f0]">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3 py-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-md shrink-0"
                  style={{ backgroundColor: provider.avatarBg }}
                >
                  {provider.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-lg font-bold text-[#181d27]">
                      {provider.name}
                    </p>
                    {provider.verified && (
                      <span className="px-2 py-0.5 bg-[#f0fdf4] text-[#15803d] text-[10px] font-bold rounded-full border border-[#bbf7d0] uppercase tracking-wide">
                        ✓ Verified Publisher
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-[#fbbf24] fill-[#fbbf24]" />
                      <span className="text-md font-semibold text-[#181d27]">
                        {provider.rating}
                      </span>
                    </div>
                    <span className="text-sm text-[#717680]">
                      ({provider.reviews} Reviews)
                    </span>
                    <span className="text-[#e9eaeb]">•</span>
                    <span className="text-sm text-[#717680]">
                      NICHE SPECIALIST • LIFESTYLE
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-[#f5f5f5] flex items-center justify-center hover:bg-[#e9eaeb] transition-colors shrink-0 mt-1"
              >
                <X className="w-4 h-4 text-[#414651]" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex overflow-x-auto">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center cursor-pointer  gap-1.5 px-5 py-2.5 text-sm font-semibold whitespace-nowrap border-b-3 transition-colors ${activeTab === tab ? "border-primary  text-[#181d27]" : "border-transparent text-[#717680] hover:text-[#414651]"}`}
                >
                  {tabIcons[tab]} {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            {/* OVERVIEW */}
            {activeTab === "OVERVIEW" && (
              <div className="p-6 flex flex-col gap-6 py-8">
                <div className="grid grid-cols-4 gap-3">
                  {[
                    {
                      icon: <BarChart2 className="w-5 h-5 text-[#717680]" />,
                      label: "DOMAIN RATING",
                      value: "65",
                    },
                    {
                      icon: <Clock className="w-5 h-5 text-[#717680]" />,
                      label: "AVG. RESPONSE",
                      value: "1.2h",
                    },
                    {
                      icon: <CheckCircle className="w-5 h-5 text-[#717680]" />,
                      label: "PLATFORM SUCCESS",
                      value: "99.2%",
                    },
                    {
                      icon: <Globe className="w-5 h-5 text-[#717680]" />,
                      label: "ACTIVE DOMAINS",
                      value: "14",
                    },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col py-4 items-center gap-2 p-3 border border-[#f0f0f0] rounded-xl"
                    >
                      {stat.icon}
                      <div className="text-center">
                        <p className="text-[9px] font-semibold text-[#717680] uppercase tracking-wide leading-tight">
                          {stat.label}
                        </p>
                        <p className="text-xl font-bold text-[#181d27] mt-0.5">
                          {stat.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 pb-8">
                  <div>
                    <p className="text-sm font-bold text-[#181d27] uppercase tracking-widest mb-2">
                      Publisher Profile & Specialization
                    </p>
                    <p className="text-md text-[#535862] leading-relaxed">
                      This publisher maintains a focus on the Lifestyle sector.
                      With a historically strong fulfillment record, they
                      provide access to high-authority domains that undergo
                      manual editorial review. Placements are typically stable
                      and carry verified authority pass-through metrics.
                    </p>
                    <div className="flex gap-2 mt-3 flex-wrap">
                      <span className="bg-[#f5f5f5] text-[#414651] text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wide">
                        Technology
                      </span>
                      <span className="bg-[#f5f5f5] text-[#414651] text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wide">
                        Blog
                      </span>
                    </div>
                  </div>

                  <div className="bg-[#181d27] rounded-2xl p-4 text-white">
                    <p className="text-sm font-bold uppercase tracking-widest mb-3">
                      Quality Fulfillment Record
                    </p>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-400">
                          Fulfillment Reliability
                        </span>
                        <span className="text-sm font-bold text-[#2ab516]">
                          Historically High
                        </span>
                      </div>
                      <div className="h-1.5 bg-gray-700 rounded-full">
                        <div className="h-full w-5/6 bg-linear-to-r from-[#fd751f] to-[#2ab516] rounded-full" />
                      </div>
                    </div>
                    <p className="text-[10px] text-gray-500 mt-3 leading-relaxed">
                      Performance is monitored via consistent placement audits.
                      All tasks are governed by platform escrow and link
                      retention policies.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* PLACEMENT FORMATS / VERIFIED SAMPLES */}
            {activeTab === "PLACEMENT FORMATS" && (
              <div className="p-6 flex flex-col gap-4">
                <p className="text-sm font-bold text-[#181d27] uppercase tracking-widest">
                  Available Capability Formats
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-3 p-4 border border-[#e9eaeb] rounded-xl hover:border-[#d5d7da] transition-colors">
                    <div className="w-9 h-9 bg-[#f5f5f5] rounded-lg flex items-center justify-center shrink-0">
                      <FileText className="w-4 h-4 text-[#717680]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#181d27] text-md">
                        Guest Post
                      </p>
                      <p className="text-sm text-[#717680] mt-0.5">
                        Brand new article with a backlink. Costs 2 credits.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 border-2 border-[#fd751f] bg-[#fff7ed] rounded-xl">
                    <div className="w-9 h-9 bg-[#fd751f]/10 rounded-lg flex items-center justify-center shrink-0">
                      <Link2 className="w-4 h-4 text-[#fd751f]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#fd751f] text-md">
                        Backlink Insertion/Niche Edit
                      </p>
                      <p className="text-sm text-[#c2410c] mt-0.5">
                        Costs 1 credit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f5f5f5] border border-[#e9eaeb] rounded-xl p-3 flex items-start gap-2">
                  <Info className="w-4 h-4 text-[#a4a7ae] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#717680]">
                    These formats indicate publisher capability only. Final
                    selection, exact pricing, and domain eligibility are
                    finalized exclusively through the format task creation and
                    review process.
                  </p>
                </div>
              </div>
            )}
            {activeTab === "VERIFIED SAMPLES" && (
              <div className="p-6 space-y-6">
                {/* Info banner at top */}
                <div className="bg-[#FFF7ED] border border-[#FDCFBE] rounded-xl px-5 py-3.5 flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#F04F23] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-[#F04F23]">
                      Available Placement Formats
                    </p>
                    <p className="text-sm text-[#535862] mt-1 leading-relaxed">
                      These are the link placement formats currently supported
                      by your active publishers. Exact availability, pricing,
                      and domain match are confirmed during task creation.
                    </p>
                  </div>
                </div>

                {/* Cards grid */}
                <div className="bg-[#f6f7f9] p-8 rounded-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* ===== Guest Post Card ===== */}
                    <div className="relative bg-white rounded-2xl p-6 shadow-[0_10px_30px_rgba(240,79,35,0.08)] border border-[#f3d6cd]">
                      {/* Lock Icon */}
                      <div className="absolute top-5 right-5 text-gray-400">
                        <Lock className="w-5 h-5" />
                      </div>

                      {/* Verified Badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#F04F23] text-[#F04F23] text-xs font-semibold">
                        <CheckCircle2 className="w-4 h-4" />
                        VERIFIED PLACEMENT
                      </div>

                      {/* Placement Type */}
                      <div className="mt-6 text-xs text-gray-400 tracking-wider uppercase">
                        Placement Type
                      </div>
                      <div className="mt-1 text-lg font-semibold text-gray-800">
                        Guest Post
                      </div>

                      {/* Grey content lines (like image placeholder bars) */}
                      <div className="mt-5 space-y-3">
                        <div className="h-3 bg-gray-200 rounded-full w-full"></div>
                        <div className="h-3 bg-gray-200 rounded-full w-2/3"></div>
                      </div>

                      {/* Footer Info */}
                      <div className="mt-6 flex justify-between text-sm">
                        <div>
                          <div className="text-gray-400 text-xs uppercase tracking-wider">
                            Target Niche
                          </div>
                          <div className="text-gray-800 font-medium mt-1">
                            Lifestyle
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="text-gray-400 text-xs uppercase tracking-wider">
                            Delivered
                          </div>
                          <div className="text-gray-600 mt-1">1 week ago</div>
                        </div>
                      </div>
                    </div>

                    {/* ===== Backlink Insert Card ===== */}
                    <div className="relative bg-white rounded-2xl p-6 shadow-[0_10px_30px_rgba(240,79,35,0.08)] border border-[#f3d6cd]">
                      {/* Lock Icon */}
                      <div className="absolute top-5 right-5 text-gray-400">
                        <Lock className="w-5 h-5" />
                      </div>

                      {/* Verified Badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#F04F23] text-[#F04F23] text-xs font-semibold">
                        <CheckCircle2 className="w-4 h-4" />
                        VERIFIED PLACEMENT
                      </div>

                      {/* Placement Type */}
                      <div className="mt-6 text-xs text-gray-400 tracking-wider uppercase">
                        Placement Type
                      </div>
                      <div className="mt-1 text-lg font-semibold text-gray-800">
                        Backlink Insert
                      </div>

                      {/* Grey content lines */}
                      <div className="mt-5 space-y-3">
                        <div className="h-3 bg-gray-200 rounded-full w-full"></div>
                        <div className="h-3 bg-gray-200 rounded-full w-2/3"></div>
                      </div>

                      {/* Footer Info */}
                      <div className="mt-6 flex justify-between text-sm">
                        <div>
                          <div className="text-gray-400 text-xs uppercase tracking-wider">
                            Target Niche
                          </div>
                          <div className="text-gray-800 font-medium mt-1">
                            Style
                          </div>
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

                {/* Final note */}
                <div className="bg-[#f9fafb] border border-[#e9eaeb] rounded-xl p-4 text-sm text-[#535862] flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#9DA4AE] shrink-0 mt-0.5" />
                  <p>
                    Placement formats show publisher capabilities only. Final
                    pricing, domain authority, relevance, and exact link
                    placement are confirmed during the task matching and
                    approval process.
                  </p>
                </div>
              </div>
            )}

            {/* AUTHORITY */}
            {activeTab === "AUTHORITY" && (
              <div className="p-6 flex flex-col items-center gap-6">
                <div className="flex flex-col items-center text-center pt-4">
                  <div className="w-16 h-16 bg-[#ede9fe] rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-8 h-8 text-[#6366f1]" />
                  </div>
                  <p className="text-base font-bold text-[#181d27] uppercase tracking-widest">
                    Escrow Protected Publisher
                  </p>
                  <p className="text-md text-[#535862] mt-2 max-w-sm leading-relaxed">
                    This provider is a verified member of our Elite fulfillment
                    network. Every task is governed by automated platform
                    governance and fraud prevention protocols.
                  </p>
                </div>
                <div className="w-full grid grid-cols-3 gap-3">
                  {[
                    { label: "INDEX RATE", value: "98.4%" },
                    { label: "AVERAGE TAT", value: "3.2 days" },
                    { label: "RETENTION", value: "94.1%" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-[#fafafa] border border-[#e9eaeb] rounded-xl p-4 text-center"
                    >
                      <p className="text-[10px] font-bold text-[#717680] uppercase tracking-widest mb-1">
                        {stat.label}
                      </p>
                      <p className="text-xl font-bold text-[#181d27]">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="w-full bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-4 flex items-start gap-3">
                  <Lock className="w-5 h-5 text-[#15803d] shrink-0 mt-0.5" />
                  <p className="text-md text-[#166534]">
                    All placements are protected by platform escrow. Funds are
                    only released upon verified task completion and quality
                    review.
                  </p>
                </div>
              </div>
            )}

            {/* WEBSITE LIST */}
            {activeTab === "WEBSITE LIST" && (
              <div className="p-6 flex flex-col gap-4">
                <p className="text-sm font-bold text-[#181d27] uppercase tracking-widest">
                  Websites
                </p>
                <div className="flex flex-col divide-y divide-[#f0f0f0]">
                  {[
                    { url: "startuply.io", type: "Primary" },
                    { url: "techfriends.net", type: "Frequent" },
                    { url: "crypto-niche.biz", type: "Occasional" },
                    { url: "spam-blog.xyz", type: "Rare" },
                  ].map((site) => (
                    <div
                      key={site.url}
                      className="flex items-center justify-between py-3.5"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#f5f5f5] rounded-lg flex items-center justify-center">
                          <Globe className="w-4 h-4 text-[#717680]" />
                        </div>
                        <div>
                          <p className="text-md font-semibold text-[#fd751f] hover:underline cursor-pointer">
                            {site.url}
                          </p>
                          <p className="text-sm text-[#a4a7ae]">{site.type}</p>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-[#a4a7ae]" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-[#f0f0f0] flex items-center justify-between bg-[#fafafa] rounded-b-2xl">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1.5 text-sm font-semibold text-[#535862] hover:text-[#181d27] transition-colors">
                <AlertCircle className="w-4 h-4" /> ASK A QUESTION
              </button>
              <button
                onClick={() => setShowCapabilities(true)}
                className="flex items-center gap-1.5 text-sm font-semibold text-[#535862] hover:text-[#181d27] transition-colors"
              >
                <Eye className="w-4 h-4" /> EXPLORE CAPABILITY
              </button>
            </div>
            <Button variant="secondary" onClick={() => setShowCreateTask(true)}>
              <Plus className="w-4 h-4" /> CREATE TASK TO INVITE
            </Button>
          </div>
        </div>
      </div>

      {showCapabilities && (
        <PublisherCapabilitiesModal
          onClose={() => setShowCapabilities(false)}
          onCreateTask={() => {
            setShowCapabilities(false);
            setShowCreateTask(true);
          }}
        />
      )}
      {showCreateTask && (
        <CreateTaskModal onClose={() => setShowCreateTask(false)} />
      )}
    </>
  );
}

function ProviderCard({ provider, onViewProfile }: ProviderCardProps) {
  return (
    <div className="bg-white rounded-[20px] p-5 flex flex-col gap-4 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold text-md shrink-0"
            style={{ backgroundColor: provider.avatarBg }}
          >
            {provider.avatar}
          </div>
          <div>
            <p className="text-base font-bold text-[#414651]">
              {provider.name}
            </p>
            <div className="flex items-center gap-1 mt-0.5">
              <Star className="w-3.5 h-3.5 text-[#fbbf24] fill-[#fbbf24]" />
              <span className="text-sm font-medium text-[#394554]">
                {provider.rating}
              </span>
              <span className="text-sm text-[#394554]">
                ({provider.reviews})
              </span>
            </div>
          </div>
        </div>
        {provider.verified && (
          <Shield className="w-5 h-5 text-[#2ab516] shrink-0" />
        )}
      </div>
      <div className="h-px bg-[#f0f0f0]" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-[#fd751f]" />
          <span className="text-md font-medium text-[#fd751f]">
            {provider.website}
          </span>
        </div>
        <ExternalLink className="w-4 h-4 text-[#a4a7ae]" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-[#fafafa] rounded-lg p-2.5">
          <p className="text-[10px] font-semibold text-[#717680] uppercase tracking-wide mb-1">
            Domain Rating
          </p>
          <p className="text-xl font-bold text-[#181d27]">
            {provider.domainRating}
          </p>
        </div>
        <div className="bg-[#fafafa] rounded-lg p-2.5">
          <p className="text-[10px] font-semibold text-[#717680] uppercase tracking-wide mb-1">
            Industry Tag
          </p>
          <p className="text-md font-semibold text-[#181d27]">
            {provider.industryTag}
          </p>
        </div>
      </div>
      <div className="flex gap-2 flex-wrap">
        {provider.tags.map((tag) => (
          <span
            key={tag}
            className="bg-[#f5f5f5] text-[#414651] text-[10px] font-semibold px-2.5 py-1 rounded-lg tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>
      <Button
        variant="secondary"
        className="rounded-lg"
        onClick={() => onViewProfile(provider)}
      >
        VIEW PROFILE <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  );
}

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
      <div className=" px-4 md:py-8 flex flex-col gap-8">
        {/* Page Header */}
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
          {/* Sidebar */}
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

          {/* Grid */}
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
          provider={selectedProvider}
          onClose={() => setSelectedProvider(null)}
        />
      )}
    </div>
  );
}
