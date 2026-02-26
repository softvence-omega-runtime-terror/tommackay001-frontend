"use client";

import React, { useState } from "react";
import { Bell, Check, Clock, ShieldCheck, UserPlus, X } from "lucide-react";
import { useRouter } from "next/navigation";
import ProviderProfileModal from "./provider/profile/ProviderProfileModal";
import SendFeedbackModal from "./Sendfeedbackmodal";

type NotifType = "congratulations" | "completed" | "deadline" | "verified";

interface ProviderData {
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
}

interface Notification {
  id: number;
  type: NotifType;
  title: string;
  message: string;
  time: string;

  read: boolean;
  cta: "view" | "feedback";
  partnerName?: string;
}

const PROVIDER_DATA: ProviderData = {
  id: 6,
  name: "GolbalEditor",
  avatar: "GE",
  avatarBg: "#f59e0b",
  verified: true,
  rating: 2.9,
  reviews: 124,
  website: "TECHTRENDS.IO",
  domainRating: 23,
  industryTag: "TECHNOLOGY",
  tags: ["HIGH TRAFFIC", "GUEST POST"],
};

const INITIAL_NOTIFICATIONS: Notification[] = [
  {
    id: 1,
    type: "congratulations",
    title: "Congratulations",
    message: "Sarah J. Applied for backlink.",
    time: "2 MINS AGO",
    read: false,
    cta: "view",
  },
  {
    id: 2,
    type: "completed",
    title: "Task Completed",
    message: 'Your task "Social Media Banner" is now live!',
    time: "1 HOUR AGO",
    read: false,
    cta: "feedback",
    partnerName: "Alex M. Media",
  },
  {
    id: 3,
    type: "deadline",
    title: "Deadline Approaching",
    message: "Task #3122 is due in 12 hours.",
    time: "3 HOURS AGO",
    read: false,
    cta: "feedback",
    partnerName: "TechTrends.io",
  },
  {
    id: 4,
    type: "verified",
    title: "Domain Verified",
    message: "startuply.io passed all trust checks.",
    time: "YESTERDAY",
    read: true,
    cta: "feedback",
    partnerName: "startuply.io",
  },
];

const ICON_CONFIG: Record<
  NotifType,
  { bg: string; border: string; iconColor: string; icon: React.ElementType }
> = {
  congratulations: {
    bg: "#EEF2FF",
    border: "#C7D7FD",
    iconColor: "#6366f1",
    icon: UserPlus,
  },
  completed: {
    bg: "#ECFDF3",
    border: "#6CE9A6",
    iconColor: "#027A48",
    icon: Check,
  },
  deadline: {
    bg: "#FFF6ED",
    border: "#FEC84B",
    iconColor: "#B54708",
    icon: Clock,
  },
  verified: {
    bg: "#ECFDF3",
    border: "#6CE9A6",
    iconColor: "#027A48",
    icon: ShieldCheck,
  },
};

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationPopover: React.FC<Props> = ({ isOpen, onClose }) => {
  const router = useRouter();

  const [notifications, setNotifications] = useState<Notification[]>(
    INITIAL_NOTIFICATIONS,
  );
  const [profileOpen, setProfileOpen] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackPartner, setFeedbackPartner] = useState<string | undefined>();

  if (!isOpen) return null;

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllRead = () =>
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));

  const handleCta = (notif: Notification) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === notif.id ? { ...n, read: true } : n)),
    );

    if (notif.cta === "view") {
      setProfileOpen(true);
    } else {
      setFeedbackPartner(notif.partnerName);
      setFeedbackOpen(true);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 bg-transparent" onClick={onClose} />

      <div className="absolute right-0 top-14 w-105 bg-white rounded-2xl shadow-2xl border border-[#e9eaeb] z-50 overflow-hidden">
        <div className="flex items-center justify-between px-5 pt-5 pb-4">
          <div className="flex items-center gap-2.5">
            <Bell className="w-5 h-5 text-[#6366f1]" />
            <h3 className="text-xl font-bold font-sora text-[#181d27]">
              Notifications
            </h3>
            {unreadCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-[#F04F23] text-white text-[10px] font-bold flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-[#e9eaeb] flex items-center justify-center text-[#9DA4AE] hover:text-[#535862] hover:bg-gray-50 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center justify-between px-5 pb-3 border-b border-[#e9eaeb]">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#9DA4AE]">
            Recent Activity
          </span>
          <button
            onClick={markAllRead}
            className="text-[10px] font-bold uppercase tracking-widest text-[#6366f1] hover:text-[#4f46e5] transition-colors"
          >
            Mark All As Read
          </button>
        </div>

        <div className="max-h-125 overflow-y-auto divide-y divide-[#f2f4f7]">
          {notifications.map((notif) => {
            const cfg = ICON_CONFIG[notif.type];
            const Icon = cfg.icon;

            return (
              <div
                key={notif.id}
                className={`px-5 py-4 transition-colors ${
                  !notif.read
                    ? "bg-white hover:bg-[#fafafa]"
                    : "bg-[#fafafa] hover:bg-[#f2f4f7]"
                }`}
              >
                <div className="flex gap-4">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 border"
                    style={{ backgroundColor: cfg.bg, borderColor: cfg.border }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: cfg.iconColor }}
                      strokeWidth={2.5}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p
                        className={`text-sm font-bold ${!notif.read ? "text-[#181d27]" : "text-[#535862]"}`}
                      >
                        {notif.title}
                      </p>
                      {!notif.read && (
                        <span className="w-2 h-2 rounded-full bg-[#6366f1] shrink-0 mt-1.5" />
                      )}
                    </div>
                    <p className="text-sm text-[#535862] mt-0.5 leading-relaxed">
                      {notif.message}
                    </p>
                    <p className="text-[10px] font-semibold text-[#9DA4AE] uppercase tracking-wider mt-1.5">
                      {notif.time}
                    </p>

                    <div className="flex justify-end mt-2">
                      <button
                        onClick={() => handleCta(notif)}
                        className="text-xs cursor-pointer font-bold text-[#F04F23] hover:text-[#d94118] transition-colors"
                      >
                        {notif.cta === "view"
                          ? "Click to View"
                          : "Send Feedback"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="px-5 py-3 border-t border-[#e9eaeb]">
          <button
            onClick={() => {
              router.push("/dashboard/messages");
              onClose();
            }}
            className="w-full bg-[#f2f4f7] hover:bg-[#e9eaeb] text-[#535862] font-bold text-xs uppercase tracking-widest py-3 rounded-xl transition-colors"
          >
            Load More Activity
          </button>
        </div>
      </div>

      <ProviderProfileModal
        open={profileOpen}
        provider={PROVIDER_DATA}
        onClose={() => setProfileOpen(false)}
      />

      <SendFeedbackModal
        open={feedbackOpen}
        partnerName={feedbackPartner}
        onClose={() => {
          setFeedbackOpen(false);
          setFeedbackPartner(undefined);
        }}
      />
    </>
  );
};

export default NotificationPopover;
