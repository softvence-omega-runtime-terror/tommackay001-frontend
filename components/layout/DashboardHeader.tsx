"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Search, Plus, Bell, Wallet, Check, X, Menu, Send } from "lucide-react";
import NotificationPopover from "../dashboard/NotificationPopover";
import { Button } from "../ui/Button";

interface DashboardHeaderProps {
  currentRole: "requester" | "provider";
  basePath: string;
  onRoleSwitch: (role: "requester" | "provider") => void;
  onCreateTask: () => void;
  onMenuToggle?: () => void;
  isSidebarOpen?: boolean;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  currentRole,
  basePath,
  onRoleSwitch,
  onCreateTask,
  onMenuToggle,
  isSidebarOpen,
}) => {
  const router = useRouter();
  const [isNotificationsOpen, setIsNotificationsOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  return (
    <>
      <header className="h-16 lg:h-20 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-10">
        <div className="flex items-center gap-3 flex-1 lg:flex-none lg:w-114.25">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 cursor-pointer hover:bg-gray-100 rounded-lg transition-colors shrink-0"
            aria-label="Toggle menu"
          >
            {isSidebarOpen ? (
              <X className="w-5 h-5 text-gray-600" />
            ) : (
              <Menu className="w-5 h-5 text-gray-600" />
            )}
          </button>

          <div className="hidden lg:flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-5 py-3 w-full">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for tasks, providers, or domains..."
              className="flex-1 text-sm text-gray-900 placeholder:text-gray-400 outline-none bg-transparent"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 lg:gap-4">
          <button
            onClick={() => setIsSearchOpen((p) => !p)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Search"
          >
            <Search className="w-5 h-5 text-gray-600" />
          </button>

          <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
            <div className="relative flex items-center gap-1 bg-gray-100 rounded-full p-1">
              <span
                className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-primary shadow-md transition-all duration-300 ease-in-out ${
                  currentRole === "requester"
                    ? "left-1"
                    : "left-[calc(50%+2px)]"
                }`}
              />

              {(["requester", "provider"] as const).map((role) => (
                <button
                  key={role}
                  onClick={() => onRoleSwitch(role)}
                  className={`relative z-10 flex items-center gap-1 lg:gap-2 cursor-pointer px-2 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-medium transition-all duration-300 ease-out ${
                    currentRole === role
                      ? "text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <span
                    className={`transition-all duration-300 ${
                      currentRole === role
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-90 w-0 overflow-hidden"
                    }`}
                  >
                    <Check className="w-3 h-3 lg:w-4 lg:h-4" />
                  </span>

                  <span className="hidden sm:inline">
                    {role.charAt(0).toUpperCase() + role.slice(1)}
                  </span>
                  <span className="sm:hidden">
                    {role === "requester" ? "Req" : "Pro"}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <Button
            variant="white"
            className="bg-indigo text-primary"
            onClick={() => router.push(`${basePath}/wallet`)}
          >
            <Wallet className="w-4 h-4 text-primary" />
            <span className="hidden sm:inline text-sm font-medium text-primary">
              Credits: 1245.50
            </span>
          </Button>

          <Button onClick={onCreateTask} className="px-2 lg:px-4">
            {currentRole === "requester" ? (
              <Plus className="w-4 h-4" />
            ) : (
              <Send className="w-4 h-4" />
            )}
            <span className="hidden sm:inline">
              {currentRole === "requester" ? "Create Task" : "Submit Delivery"}
            </span>
          </Button>

          <div className="relative">
            <button
              onClick={() => setIsNotificationsOpen((p) => !p)}
              className="relative cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition-colors"
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

      {isSearchOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 sticky top-16 z-10">
          <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5">
            <Search className="w-4 h-4 text-gray-400 shrink-0" />
            <input
              type="text"
              placeholder="Search for tasks, providers, or domains..."
              className="flex-1 text-sm text-gray-900 placeholder:text-gray-400 outline-none bg-transparent"
              autoFocus
            />
            <button onClick={() => setIsSearchOpen(false)}>
              <X className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardHeader;
