"use client";

import { useState } from "react";
import {
  Globe,
  Layers,
  Info,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Copy,
  CheckCircle2,
  RefreshCw,
  Code2,
  FileText,
  X,
} from "lucide-react";
import ModalShell from "@/components/dashboard/provider/delivery/modals/ModalShell"; // adjust path

// ─── Types ────────────────────────────────────────────────────────────────────

type Step = "info" | "verify" | "success";
type VerifyMethod = "dns" | "meta" | "html";

type Props = {
  open: boolean;
  onClose: () => void;
};

const CATEGORIES = [
  "Technology",
  "SaaS",
  "Marketing",
  "E-commerce",
  "Finance",
  "Health",
  "TechNews",
  "Education",
  "Other",
];

const VERIFY_TOKEN = "backlyst-site-verification-bl-hdfysud657567tydhfb";

// ─────────────────────────────────────────────────────────────────────────────

export default function ConnectWebsiteModal({ open, onClose }: Props) {
  const [step, setStep] = useState<Step>("info");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("Technology");
  const [method, setMethod] = useState<VerifyMethod>("dns");
  const [copied, setCopied] = useState(false);

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep("info");
      setUrl("");
      setCategory("Technology");
      setMethod("dns");
      setCopied(false);
    }, 200);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(VERIFY_TOKEN);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ModalShell open={open} onClose={handleClose}>
      <div className="flex flex-col">
        {/* ── Persistent header ─────────────────────────────────────── */}
        <div className="px-6 pt-6 pb-5 pr-12">
          <h2 className="text-2xl font-bold text-[#181d27]">
            Connect a Website
          </h2>
          <p className="text-sm text-[#535862] mt-1">
            Add a website to use it for tasks, visibility, and trust scoring.
          </p>
        </div>

        {/* ── Step content ──────────────────────────────────────────── */}
        {step === "info" && (
          <StepInfo
            url={url}
            setUrl={setUrl}
            category={category}
            setCategory={setCategory}
          />
        )}
        {step === "verify" && (
          <StepVerify
            method={method}
            setMethod={setMethod}
            copied={copied}
            onCopy={handleCopy}
          />
        )}
        {step === "success" && <StepSuccess url={url} />}

        {/* ── Footer ────────────────────────────────────────────────── */}
        <div className="px-6 pb-6 pt-4 border-t border-[#e9eaeb] flex items-center justify-between">
          {step === "info" && (
            <>
              <button
                onClick={handleClose}
                className="text-sm font-semibold text-[#535862] hover:text-[#181d27] tracking-wide transition-colors"
              >
                CANCEL &amp; EXIT
              </button>
              <button
                onClick={() => setStep("verify")}
                disabled={!url.trim()}
                className="flex items-center gap-2 bg-secondary hover:bg-[#d94118] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors tracking-wide"
              >
                CONTINUE TO VERIFICATION
                <ArrowRight className="w-4 h-4" />
              </button>
            </>
          )}

          {step === "verify" && (
            <>
              <button
                onClick={() => setStep("info")}
                className="flex items-center gap-2 text-sm font-semibold text-[#535862] hover:text-[#181d27] tracking-wide transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                BACK TO DETAILS
              </button>
              <button
                onClick={() => setStep("success")}
                className="flex items-center gap-2 bg-secondary hover:bg-[#d94118] text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors tracking-wide"
              >
                VERIFY WEBSITE
                <ShieldCheck className="w-4 h-4" />
              </button>
            </>
          )}

          {step === "success" && (
            <button
              onClick={handleClose}
              className="w-full bg-secondary hover:bg-[#d94118] text-white font-bold text-sm py-3 rounded-xl transition-colors tracking-wide"
            >
              DONE
            </button>
          )}
        </div>
      </div>
    </ModalShell>
  );
}

// ─── Step 1: Website Information ──────────────────────────────────────────────

function StepInfo({
  url,
  setUrl,
  category,
  setCategory,
}: {
  url: string;
  setUrl: (v: string) => void;
  category: string;
  setCategory: (v: string) => void;
}) {
  return (
    <div className="px-6 pb-2 space-y-5">
      {/* Section label */}
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-[#FFF4ED] flex items-center justify-center shrink-0">
          <Globe className="w-4 h-4 text-secondary" />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-[#181d27]">
          Website Information
        </span>
      </div>

      {/* URL input */}
      <div>
        <label className="block text-[10px] font-bold uppercase tracking-widest text-[#535862] mb-2">
          Website URL (Required)
        </label>
        <div
          className={`flex items-center gap-3 border-2 rounded-xl px-4 py-3 transition-colors ${
            url
              ? "border-secondary"
              : "border-secondary/40 focus-within:border-secondary"
          }`}
        >
          <Globe className="w-4 h-4 text-secondary shrink-0" />
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            className="flex-1 text-sm text-[#181d27] placeholder:text-[#9DA4AE] bg-transparent outline-none"
          />
        </div>
      </div>

      {/* Category selector */}
      <div>
        <label className="block text-[10px] font-bold uppercase tracking-widest text-[#535862] mb-2">
          Website Category
        </label>
        <div className="border border-[#e9eaeb] rounded-xl overflow-hidden">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-[#e9eaeb] bg-white cursor-pointer hover:bg-[#fafafa]">
            <Layers className="w-5 h-5 text-[#535862] shrink-0" />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="flex-1 text-sm text-[#181d27] bg-transparent outline-none cursor-pointer appearance-none"
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Info note */}
      <div className="flex items-start gap-3 bg-[#EFF8FF] border border-[#B2DDFF] rounded-xl px-4 py-3">
        <Info className="w-4 h-4 text-[#175CD3] shrink-0 mt-0.5" />
        <p className="text-sm text-[#175CD3] leading-relaxed">
          Each website is treated as a separate entity with its own tasks,
          credits, and trust score.
        </p>
      </div>
    </div>
  );
}

// ─── Step 2: Verify Website Ownership ────────────────────────────────────────

type VerifyMethodConfig = {
  id: VerifyMethod;
  label: string;
  icon: React.ReactNode;
};

const VERIFY_METHODS: VerifyMethodConfig[] = [
  { id: "dns", label: "DNS Record", icon: <RefreshCw className="w-6 h-6" /> },
  { id: "meta", label: "Meta Tag", icon: <Code2 className="w-6 h-6" /> },
  { id: "html", label: "HTML File", icon: <FileText className="w-6 h-6" /> },
];

const METHOD_CONTENT: Record<
  VerifyMethod,
  { title: string; sub: string; token: string }
> = {
  dns: {
    title: "DNS TXT Configuration",
    sub: "Add this TXT record to your domain DNS",
    token: VERIFY_TOKEN,
  },
  meta: {
    title: "Meta Tag",
    sub: "Add this meta tag to your homepage <head>",
    token: `<meta name="backlyst-site-verification" content="${VERIFY_TOKEN}" />`,
  },
  html: {
    title: "HTML File",
    sub: "Upload this file to your website root",
    token: VERIFY_TOKEN,
  },
};

function StepVerify({
  method,
  setMethod,
  copied,
  onCopy,
}: {
  method: VerifyMethod;
  setMethod: (v: VerifyMethod) => void;
  copied: boolean;
  onCopy: () => void;
}) {
  const content = METHOD_CONTENT[method];

  return (
    <div className="px-6 pb-2 space-y-5">
      {/* Section label + badge */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#ECFDF3] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-4 h-4 text-[#027A48]" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#181d27]">
            Verify Website Ownership
          </span>
        </div>
        <span className="text-[10px] font-bold bg-[#FFF6ED] text-[#B54708] border border-[#FEE6C0] px-3 py-1 rounded-full tracking-widest">
          VERIFICATION PENDING
        </span>
      </div>

      {/* Method tabs */}
      <div className="grid grid-cols-3 gap-3">
        {VERIFY_METHODS.map((m) => {
          const active = method === m.id;
          return (
            <button
              key={m.id}
              onClick={() => setMethod(m.id)}
              className={`flex flex-col items-center gap-2 py-4 px-3 rounded-xl border-2 transition-all ${
                active
                  ? "border-[#027A48] bg-white"
                  : "border-[#e9eaeb] bg-[#f9fafb] hover:border-[#9DA4AE]"
              }`}
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                  active ? "bg-[#027A48] text-white" : "bg-white text-[#9DA4AE]"
                }`}
              >
                {m.icon}
              </div>
              <span
                className={`text-[10px] font-bold uppercase tracking-widest ${
                  active ? "text-[#027A48]" : "text-[#535862]"
                }`}
              >
                {m.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* DNS / method config */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-[#181d27] mb-1">
          {content.title}
        </p>
        <p className="text-sm text-[#535862] mb-3">{content.sub}</p>

        <div className="flex items-center gap-2 border border-[#e9eaeb] rounded-xl px-4 py-3 bg-[#f9fafb]">
          <code className="flex-1 text-xs text-[#535862] font-mono truncate">
            {content.token}
          </code>
          <button
            onClick={onCopy}
            className="shrink-0 text-[#9DA4AE] hover:text-[#535862] transition-colors"
          >
            {copied ? (
              <CheckCircle2 className="w-4 h-4 text-[#027A48]" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Propagation warning */}
      <div className="flex items-start gap-3 bg-[#FEF3F2] border border-[#FDA29B] rounded-xl px-4 py-3">
        <Info className="w-4 h-4 text-[#B42318] shrink-0 mt-0.5" />
        <p className="text-sm text-[#B42318] leading-relaxed">
          Propagation can take between 5 minutes and 24 hours depending on your
          host. Automated verification will re-run every hour.
        </p>
      </div>
    </div>
  );
}

// ─── Step 3: Success ──────────────────────────────────────────────────────────

function StepSuccess({ url }: { url: string }) {
  const displayName = url
    ? url.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : "NovaAI";

  return (
    <div className="px-6 pb-2 space-y-5">
      {/* Big green check */}
      <div className="flex flex-col items-center text-center py-4 space-y-3">
        <div className="w-16 h-16 rounded-full bg-[#ECFDF3] flex items-center justify-center">
          <CheckCircle2 className="w-9 h-9 text-[#027A48]" />
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-[#181d27]">
            Website Connected!
          </p>
          <p className="text-sm text-[#535862] mt-1 max-w-sm">
            Verification successful. Your domain is now part of the Backlyst
            verified ecosystem.
          </p>
        </div>
      </div>

      {/* Domain summary card */}
      <div className="border border-[#e9eaeb] rounded-xl px-5 py-4 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full border border-[#e9eaeb] bg-[#f9fafb] flex items-center justify-center shrink-0">
          <Globe className="w-5 h-5 text-[#535862]" />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-[#181d27] truncate">
            {displayName}
          </p>
          <span className="inline-block mt-1 text-[10px] font-bold text-[#027A48] bg-[#ECFDF3] border border-[#6CE9A6] px-2.5 py-0.5 rounded-full tracking-wide">
            STATUS: VERIFIED
          </span>
        </div>

        <div className="flex gap-8 shrink-0">
          <div className="text-right">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#535862]">
              Trust Score
            </p>
            <p className="text-sm font-bold text-[#181d27] mt-0.5">
              Calculating...
            </p>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#535862]">
              Visibility
            </p>
            <p className="text-sm font-bold text-secondary mt-0.5">Inactive</p>
          </div>
        </div>
      </div>

      {/* Info note */}
      <div className="flex items-start gap-3 bg-[#ECFDF3] border border-[#6CE9A6] rounded-xl px-4 py-3">
        <Info className="w-4 h-4 text-[#027A48] shrink-0 mt-0.5" />
        <p className="text-sm text-[#027A48] leading-relaxed">
          Verified websites can request or apply for tasks. Each website has its
          own task history, credits, and visibility metrics to maintain high
          data integrity.
        </p>
      </div>
    </div>
  );
}
