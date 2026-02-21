"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Bell, Info, X } from "lucide-react";

export default function NotificationSettings() {
  // Notification toggles
  const [taskStatusUpdates, setTaskStatusUpdates] = useState(true);
  const [creditBalanceAlerts, setCreditBalanceAlerts] = useState(true);
  const [disputeReviewNotifications, setDisputeReviewNotifications] =
    useState(true);
  const [systemAnnouncements, setSystemAnnouncements] = useState(false);

  // Contact preferences - tags
  const [contactTags, setContactTags] = useState<string[]>([
    "Notification",
    "Advertisement",
    "Offers",
    "Payments",
    "Security",
  ]);
  const [newTag, setNewTag] = useState("");

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ";") {
      e.preventDefault();
      if (newTag.trim() && !contactTags.includes(newTag.trim())) {
        setContactTags([...contactTags, newTag.trim()]);
        setNewTag("");
      }
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setContactTags(contactTags.filter((tag) => tag !== tagToRemove));
  };

  const handleSave = () => {
    // In real app: send preferences to backend
    console.log("Saving notification & contact preferences:", {
      taskStatusUpdates,
      creditBalanceAlerts,
      disputeReviewNotifications,
      systemAnnouncements,
      contactTags,
    });
    alert("Preferences saved successfully!");
  };

  return (
    <div className="bg-[#F9FAFB] space-y-12 overflow-hidden">
      <div className="p-8 bg-white rounded-xl">
        <div className="pb-4">
          <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
            Notification Preferences
          </h2>
          <p className="mt-1.5 text-sm text-gray-600">
            Control how you receive platform updates.
          </p>
        </div>
        {/* Notification Toggles */}
        <div className="space-y-8 ">
          <div className="flex items-center justify-between border-b pb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Task status updates
              </label>
              <p className="text-xs text-gray-500 mt-0.5 ">
                Receive notifications when task status changes
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={taskStatusUpdates}
                onChange={(e) => setTaskStatusUpdates(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between border-b pb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Credit balance alerts
              </label>
              <p className="text-xs text-gray-500 mt-0.5">
                Get notified when credits are low
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={creditBalanceAlerts}
                onChange={(e) => setCreditBalanceAlerts(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between border-b pb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Dispute & review notifications
              </label>
              <p className="text-xs text-gray-500 mt-0.5">
                Stay updated on disputes and reviews
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={disputeReviewNotifications}
                onChange={(e) =>
                  setDisputeReviewNotifications(e.target.checked)
                }
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between ">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                System announcements
              </label>
              <p className="text-xs text-gray-500 mt-0.5">
                Platform updates and maintenance notices
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={systemAnnouncements}
                onChange={(e) => setSystemAnnouncements(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>
        </div>

        {/* Contact Preferences */}
      </div>
      <div className="p-8 space-y-6 bg-white  rounded-xl">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Contact Preferences
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Control how you want to be contacted by the Admin.
          </p>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onKeyDown={handleAddTag}
              placeholder="Search or enter tags..."
              className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            />
            <p className="text-xs text-gray-500 mt-1.5">
              Enter ; or press Enter to separate tags.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {contactTags.map((tag) => (
              <div
                key={tag}
                className="flex items-center gap-1.5 px-4 py-1.5 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-full border border-indigo-200"
              >
                {tag}
                <button
                  onClick={() => handleRemoveTag(tag)}
                  className="text-indigo-500 hover:text-indigo-800 transition-colors"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
