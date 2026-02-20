"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Search, Plus, Bell, Wallet, Check } from "lucide-react";
import NotificationPopover from "../dashboard/NotificationPopover";
import { Button } from "../ui/Button";

interface DashboardHeaderProps {
  currentRole: "requester" | "provider";
  basePath: string;
  onRoleSwitch: (role: "requester" | "provider") => void;
  onCreateTask: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  currentRole,
  basePath,
  onRoleSwitch,
  onCreateTask,
}) => {
  const router = useRouter();
  const [isNotificationsOpen, setIsNotificationsOpen] = React.useState(false);

  return (
    <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10">
      {/* Search */}
      <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-5 py-3 w-[457px]">
        <Search className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search for tasks, providers, or domains..."
          className="flex-1 text-sm text-gray-900 placeholder:text-gray-400 outline-none bg-transparent"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Role Toggle */}
        <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
          <div className="relative flex items-center gap-1 bg-gray-100 rounded-full p-1">
            {/* Sliding active indicator */}
            <span
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-primary shadow-md transition-all duration-300 ease-in-out ${
                currentRole === "requester" ? "left-1" : "left-[calc(50%+2px)]"
              }`}
            />

            {(["requester", "provider"] as const).map((role) => (
              <button
                key={role}
                onClick={() => onRoleSwitch(role)}
                className={`relative z-10 flex items-center gap-2 cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out ${
                  currentRole === role
                    ? "text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <span
                  className={`transition-all duration-300 ${
                    currentRole === role
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-90"
                  }`}
                >
                  <Check className="w-4 h-4" />
                </span>

                {role.charAt(0).toUpperCase() + role.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Wallet */}
        <Button
          variant="white"
          className="bg-indigo text-primary"
          onClick={() => router.push(`${basePath}/wallet`)}
        >
          <Wallet className="w-4 h-4  text-primary" />
          <span className="text-sm font-medium text-primary">
            Credits: 1245.50
          </span>
        </Button>

        {/* Create / Find Task */}
        <Button onClick={onCreateTask}>
          <Plus className="w-4 h-4" />
          {currentRole === "requester" ? "Create Task" : "Find Task"}
        </Button>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setIsNotificationsOpen((p) => !p)}
            className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-primary rounded-full border-2 border-white" />
          </button>

          <NotificationPopover
            isOpen={isNotificationsOpen}
            onClose={() => setIsNotificationsOpen(false)}
          />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
