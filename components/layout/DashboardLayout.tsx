"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Home,
  Layout,
  Building2,
  MessageSquare,
  Wallet,
  Globe,
  Zap,
  Settings,
  LogOut,
  Briefcase,
} from "lucide-react";
import { useRole } from "@/context/RoleContext";
import DashboardHeader from "./DashboardHeader";
import logo from "@/public/backlyst-logo.png";
import Image from "next/image";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const { role, setRole } = useRole();

  const isProviderRoute = pathname.startsWith("/provider");
  const currentRole: "requester" | "provider" = isProviderRoute
    ? "provider"
    : "requester";

  const basePath = isProviderRoute ? "/provider" : "/requester";

  React.useEffect(() => {
    if (currentRole !== role) {
      setRole(currentRole);
    }
  }, [currentRole, role, setRole]);

  const handleRoleSwitch = (newRole: "requester" | "provider") => {
    if (newRole === currentRole) return;
    setRole(newRole);
    router.push(newRole === "provider" ? "/provider" : "/requester");
  };

  const handleCreateTask = () => {
    router.push(
      currentRole === "requester"
        ? `${basePath}/tasks/new`
        : `${basePath}/opportunities`,
    );
  };

  const handleLogout = () => {
    router.push("/auth/login");
  };

  const sidebarItems =
    currentRole === "provider"
      ? [
          { icon: Home, label: "Dashboard", path: basePath },
          { icon: Layout, label: "My Tasks", path: `${basePath}/tasks` },
          {
            icon: Briefcase,
            label: "Opportunity Board",
            path: `${basePath}/opportunities`,
          },
          {
            icon: MessageSquare,
            label: "Messages",
            path: `${basePath}/messages`,
          },
          { icon: Wallet, label: "Wallet", path: `${basePath}/wallet` },
          { icon: Globe, label: "Websites", path: `${basePath}/websites` },
          {
            icon: Zap,
            label: "Subscription",
            path: `${basePath}/subscription`,
          },
          { icon: Settings, label: "Settings", path: `${basePath}/settings` },
        ]
      : [
          { icon: Home, label: "Dashboard", path: basePath },
          { icon: Layout, label: "Tasks", path: `${basePath}/tasks` },
          {
            icon: Building2,
            label: "Company Directory",
            path: `${basePath}/providers`,
          },
          {
            icon: MessageSquare,
            label: "Messages",
            path: `${basePath}/messages`,
          },
          { icon: Wallet, label: "Wallet", path: `${basePath}/wallet` },
          { icon: Globe, label: "Websites", path: `${basePath}/websites` },
          {
            icon: Zap,
            label: "Subscription",
            path: `${basePath}/subscription`,
          },
          { icon: Settings, label: "Settings", path: `${basePath}/settings` },
        ];

  const activeItem =
    sidebarItems.find(
      (item) =>
        pathname === item.path ||
        (item.path !== basePath && pathname.startsWith(item.path)),
    ) ?? sidebarItems[0];

  return (
    <div className="flex min-h-screen bg-[#F9FAFB] font-inter overflow-x-hidden">
      {/* Sidebar */}
      <aside className="w-[280px] bg-white border-r border-gray-100 flex flex-col fixed h-full z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        <div className="p-8 pb-12">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={logo}
              alt="Backlyst"
              className="w-10 h-9 object-contain"
              priority
            />
            <span className="text-2xl font-semibold font-sora text-gray-900">
              backlyst
            </span>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {sidebarItems.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-sm  transition-all duration-300 group ${
                activeItem.label === item.label
                  ? "bg-[#EBE9FF] text-primary/90 font-semibold border-l-4 border-primary transition-all duration-200"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-700 pl-2 transition-all duration-200"
              }`}
            >
              <item.icon
                size={20}
                className={
                  activeItem.label === item.label
                    ? "text-primary"
                    : "text-gray-400 group-hover:text-gray-600"
                }
              />
              <span className="text-sm">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-gray-100 mt-auto">
          <div
            onClick={handleLogout}
            className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl hover:bg-red-50 transition-colors cursor-pointer group border border-transparent hover:border-red-100"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden ring-2 ring-white shadow-sm shrink-0 bg-gray-200 flex items-center justify-center">
              <img
                src="/avatar-sisyphus.svg"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 leading-tight truncate">
                Sisyphus
              </p>
              <p className="text-xs font-medium text-gray-500 mt-0.5">
                Pro Member
              </p>
            </div>
            <LogOut
              size={16}
              className="text-gray-400 group-hover:text-red-500 transition-colors shrink-0"
            />
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 ml-[280px] flex flex-col min-h-screen">
        <DashboardHeader
          currentRole={currentRole}
          basePath={basePath}
          onRoleSwitch={handleRoleSwitch}
          onCreateTask={handleCreateTask}
        />

        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
