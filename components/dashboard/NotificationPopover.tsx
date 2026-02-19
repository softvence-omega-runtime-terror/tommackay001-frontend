import React from "react";
import { Bell, Check, Clock, AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";

interface NotificationPopoverProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationPopover: React.FC<NotificationPopoverProps> = ({
  isOpen,
  onClose,
}) => {
  const router = useRouter();

  if (!isOpen) return null;

  const notifications = [
    {
      id: 1,
      title: "Task Approved",
      message: "Your task 'SEO Article regarding Tech' has been approved.",
      time: "2 mins ago",
      type: "success",
      read: false,
    },
    {
      id: 2,
      title: "New Application",
      message: "TechTrends.io applied to 'Backlink for Fintech Startup'.",
      time: "1 hour ago",
      type: "info",
      read: false,
    },
    {
      id: 3,
      title: "Credits Low",
      message: "Your credit balance is running low. Top up soon.",
      time: "5 hours ago",
      type: "warning",
      read: true,
    },
  ];

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-transparent"
        onClick={onClose}
      ></div>
      <div className="absolute right-0 top-14 w-[380px] bg-white rounded-2xl shadow-xl border border-gray-100 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <h3 className="font-bold font-sora text-gray-900">Notifications</h3>
          <button className="text-xs font-medium text-primary hover:text-brand-indigo-600">
            Mark all as read
          </button>
        </div>
        <div className="max-h-[400px] overflow-y-auto">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              className={`p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer ${
                !notif.read ? "bg-brand-indigo-50/30" : ""
              }`}
            >
              <div className="flex gap-4">
                <div
                  className={`mt-1 w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    notif.type === "success"
                      ? "bg-green-100 text-green-600"
                      : notif.type === "warning"
                        ? "bg-orange-100 text-orange-600"
                        : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {notif.type === "success" ? (
                    <Check size={14} strokeWidth={3} />
                  ) : notif.type === "warning" ? (
                    <AlertCircle size={14} strokeWidth={3} />
                  ) : (
                    <Bell size={14} strokeWidth={3} />
                  )}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between items-start">
                    <p
                      className={`text-sm font-semibold ${
                        !notif.read ? "text-gray-900" : "text-gray-600"
                      }`}
                    >
                      {notif.title}
                    </p>
                    <span className="text-[10px] font-medium text-gray-400 whitespace-nowrap ml-2">
                      {notif.time}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {notif.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-3 bg-gray-50 text-center border-t border-gray-100">
          <button
            onClick={() => {
              router.push("/requester/messages"); // Or a dedicate notifications page
              onClose();
            }}
            className="text-xs font-bold text-gray-500 hover:text-gray-900 uppercase tracking-wide transition-colors"
          >
            View All Activity
          </button>
        </div>
      </div>
    </>
  );
};

export default NotificationPopover;
