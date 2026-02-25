// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client";

import { useState } from "react";
import {
  Star,
  Globe,
  Shield,
  X,
  AlertCircle,
  List,
  Activity,
  Plus,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import CreateTaskModal from "@/components/dashboard/provider/profile/CreateTaskModal";
import PublisherCapabilitiesModal from "./PublisherCapabilitiesModal";
import ModalShell from "../delivery/modals/ModalShell";
import { OrderItem } from "../../requester/orders/OrderCard";
import ProfileOverviewTab from "./profileTabs/ProfileOverviewTab";
import ProfilePaymentTab from "./profileTabs/ProfilePaymentTab";
import ProfileVerifiedTab from "./profileTabs/ProfileVerifiedTab";
import ProfileAuthorityTab from "./profileTabs/ProfileAuthorityTab";
import ProfileWebsite from "./profileTabs/ProfileWebsite";

interface Provider {
  id: number;
  name: string;
  avatar: string;
  avatarBg: string;
  verified: boolean;
  rating: number;
  reviews: number;
  website: string;
  websiteUrl?: string;
  domainRating: number;
  industryTag: string;
  tags: string[];
  verified: boolean;
}

interface ProviderProfileModalProps {
  open: boolean;
  provider?: Provider | null | OrderItem;
  onClose: () => void;
}

const TABS: string[] = [
  "OVERVIEW",
  "PLACEMENT FORMATS",
  "VERIFIED SAMPLES",
  "AUTHORITY",
  "WEBSITE LIST",
];

export default function ProviderProfileModal({
  open,
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
      <ModalShell open={open} onClose={onClose}>
        <div
          className="bg-white rounded-2xl  w-full max-w-5xl  max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-6 pt-5 pb-0 border-b border-[#f0f0f0]">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3 py-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-md shrink-0"
                  style={{ backgroundColor: provider?.avatarBg }}
                >
                  {provider?.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-lg font-bold text-[#181d27]">
                      {provider?.name}
                    </p>
                    {provider?.verified && (
                      <span className="px-2 py-0.5 bg-[#f0fdf4] text-[#15803d] text-[10px] font-bold rounded-full border border-[#bbf7d0] uppercase tracking-wide">
                        ✓ Verified Publisher
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-[#fbbf24] fill-[#fbbf24]" />
                      <span className="text-md font-semibold text-[#181d27]">
                        {provider?.rating}
                      </span>
                    </div>
                    <span className="text-sm text-[#717680]">
                      ({provider?.reviews} Reviews)
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

          <div className="flex-1 overflow-y-auto">
            {activeTab === "OVERVIEW" && <ProfileOverviewTab />}

            {activeTab === "PLACEMENT FORMATS" && <ProfilePaymentTab />}
            {activeTab === "VERIFIED SAMPLES" && <ProfileVerifiedTab />}

            {activeTab === "AUTHORITY" && <ProfileAuthorityTab />}

            {activeTab === "WEBSITE LIST" && <ProfileWebsite />}
          </div>

          <div className="px-6 py-4 border-t border-[#f0f0f0] flex items-center justify-between bg-[#fafafa] rounded-b-2xl">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1.5 text-sm font-semibold text-[#535862] hover:text-[#181d27] transition-colors">
                <AlertCircle className="w-4 h-4" /> ASK A QUESTION
              </button>
              <button
                onClick={() => setShowCapabilities(true)}
                className="flex  cursor-pointer items-center gap-1.5 text-sm font-semibold text-[#535862] hover:text-[#181d27] transition-colors"
              >
                <Eye className="w-4 h-4" /> EXPLORE CAPABILITY
              </button>
            </div>
            <Button variant="secondary" onClick={() => setShowCreateTask(true)}>
              <Plus className="w-4 h-4" /> CREATE TASK TO INVITE
            </Button>
          </div>
        </div>
      </ModalShell>

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
