"use client";

import React, { useState } from "react";
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
  type LucideIcon,
  RefreshCcw,
} from "lucide-react";
import { useRole } from "@/context/RoleContext";
import DashboardHeader from "./DashboardHeader";
import logo from "@/public/backlyst-logo.png";
import Image from "next/image";
import avatarImage from "@/public/avatar/sisyphus.png";
import LogoutModal from "../modals/LogoutModal";
import CreateTaskModal from "../dashboard/provider/profile/CreateTaskModal";
import { InstantDeliveryModal } from "../dashboard/modal/InstantDeliveryModal";

interface SidebarItem {
  icon: LucideIcon;
  label: string;
  path: string;
}

interface SidebarContentProps {
  sidebarItems: SidebarItem[];
  activeLabel: string;
  onLinkClick: () => void;
  onLogoutClick: () => void;
}

const SidebarContent: React.FC<SidebarContentProps> = ({
  sidebarItems,
  activeLabel,
  onLinkClick,
  onLogoutClick,
}) => (
  <>
    <div className="p-8 pb-12">
      <Link href="/" className="flex items-center gap-3" onClick={onLinkClick}>
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
          onClick={onLinkClick}
          className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-sm transition-all duration-300 group ${
            activeLabel === item.label
              ? "bg-indigo text-primary/90 font-semibold border-l-4 border-primary transition-all duration-200"
              : "text-gray-500 hover:bg-gray-50 hover:text-gray-700 pl-2 transition-all duration-200"
          }`}
        >
          <item.icon
            size={20}
            className={
              activeLabel === item.label
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
        onClick={onLogoutClick}
        className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl hover:bg-red-50 transition-colors cursor-pointer group border border-transparent hover:border-red-100"
      >
        <div className="w-12 h-12 flex items-center justify-center">
          <Image
            width={200}
            height={200}
            src={avatarImage}
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gray-900 leading-tight truncate">
            Sisyphus
          </p>
          <p className="text-xs font-medium text-gray-500 mt-0.5">Pro Member</p>
        </div>
        <LogOut
          size={16}
          className="text-gray-400 group-hover:text-red-500 transition-colors shrink-0"
        />
      </div>
    </div>
  </>
);

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const { role, setRole } = useRole();

  const [showCreateTask, setShowCreateTask] = useState<boolean>(false);
  const [showDeliveryTask, setShowDeliveryTask] = useState<boolean>(false);
  const [showLogoutModal, setShowLogoutModal] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const currentRole: "requester" | "provider" = role;
  const basePath = "/dashboard";

  React.useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  const handleRoleSwitch = (newRole: "requester" | "provider") => {
    if (newRole === currentRole) return;
    router.push(`/dashboard`);
    setRole(newRole);
  };

  const handleCreateTask = () => {
    router.push(
      currentRole === "requester"
        ? `${basePath}/providers`
        : `${basePath}/opportunities`,
    );

    if (currentRole === "requester") {
      setShowCreateTask(true);
      setShowDeliveryTask(false);
    } else {
      setShowCreateTask(false);
      setShowDeliveryTask(true);
    }
  };

  const handleCloseCreateTask = () => setShowCreateTask(false);
  const handleCloseDeliveryTask = () => setShowDeliveryTask(false);
  const handleLogoutClick = () => setShowLogoutModal(true);
  const handleCloseLogout = () => setShowLogoutModal(false);
  const handleMenuToggle = () => setIsSidebarOpen((p) => !p);
  const handleOverlayClick = () => setIsSidebarOpen(false);
  const handleLinkClick = () => setIsSidebarOpen(false);

  const sidebarItems: SidebarItem[] =
    currentRole === "provider"
      ? [
          { icon: Home, label: "Dashboard", path: basePath },
          { icon: Layout, label: "My Job", path: `${basePath}/jobs` },
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
            icon: RefreshCcw,
            label: "Referrals",
            path: `${basePath}/referrals`,
          },
          {
            icon: Zap,
            label: "Subscription",
            path: `${basePath}/subscription`,
          },
          { icon: Settings, label: "Settings", path: `${basePath}/settings` },
        ]
      : [
          { icon: Home, label: "Dashboard", path: basePath },
          { icon: Layout, label: "Tasks", path: `${basePath}/orders` },
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
            icon: RefreshCcw,
            label: "Referrals",
            path: `${basePath}/referrals`,
          },
          {
            icon: Zap,
            label: "Subscription",
            path: `${basePath}/subscription`,
          },
          { icon: Settings, label: "Settings", path: `${basePath}/settings` },
        ];

  const activeItem: SidebarItem =
    sidebarItems.find(
      (item) =>
        pathname === item.path ||
        (item.path !== basePath && pathname.startsWith(item.path)),
    ) ?? sidebarItems[0];

  return (
    <div className="flex min-h-screen bg-[#F9FAFB] font-inter overflow-x-hidden">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-70 bg-white border-r border-gray-100 flex-col fixed h-full z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        <SidebarContent
          sidebarItems={sidebarItems}
          activeLabel={activeItem.label}
          onLinkClick={handleLinkClick}
          onLogoutClick={handleLogoutClick}
        />
      </aside>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 z-10 transition-opacity"
          onClick={handleOverlayClick}
          aria-label="Close menu overlay"
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`lg:hidden fixed top-0 left-0 h-full w-72 bg-white border-r border-gray-100 flex flex-col z-40 shadow-xl transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarContent
          sidebarItems={sidebarItems}
          activeLabel={activeItem.label}
          onLinkClick={handleLinkClick}
          onLogoutClick={handleLogoutClick}
        />
      </aside>

      {/* Main Content */}
      <div className="flex-1 lg:ml-70 flex flex-col min-h-screen">
        <DashboardHeader
          currentRole={currentRole}
          basePath={basePath}
          onRoleSwitch={handleRoleSwitch}
          onCreateTask={handleCreateTask}
          onMenuToggle={handleMenuToggle}
          isSidebarOpen={isSidebarOpen}
        />

        <main className="flex-1 p-4 lg:p-8">{children}</main>
      </div>

      {/* Modals */}
      <LogoutModal isOpen={showLogoutModal} onClose={handleCloseLogout} />

      {showCreateTask && <CreateTaskModal onClose={handleCloseCreateTask} />}

      {showDeliveryTask && (
        <InstantDeliveryModal onClose={handleCloseDeliveryTask} />
      )}
    </div>
  );
};

export default DashboardLayout;
