import React from "react";
import { Link, useLocation, Outlet, useNavigate } from "react-router-dom";
import {
  Search,
  Plus,
  Bell,
  Home,
  Layout,
  Building2,
  MessageSquare,
  Wallet,
  Globe,
  Zap,
  Settings,
  LogOut,
  Check,
  Briefcase,
} from "lucide-react";
import { useRole } from "@/context/RoleContext";

import NotificationPopover from "../dashboard/NotificationPopover";

const DashboardLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { role, setRole } = useRole();
  const [isNotificationsOpen, setIsNotificationsOpen] = React.useState(false);

  // Determine current role from URL path
  const isProviderRoute = location.pathname.startsWith("/provider");
  const currentRole = isProviderRoute ? "provider" : "requester";
  const basePath = isProviderRoute ? "/provider" : "/requester";

  // Update role context based on route
  React.useEffect(() => {
    if (currentRole !== role) {
      setRole(currentRole);
    }
  }, [currentRole, role, setRole]);

  const handleRoleSwitch = (newRole: "requester" | "provider") => {
    if (newRole === currentRole) return;
    setRole(newRole);
    navigate(newRole === "provider" ? "/provider" : "/requester");
  };

  const handleCreateTask = () => {
    if (currentRole === "requester") {
      navigate(`${basePath}/tasks/new`);
    } else {
      navigate(`${basePath}/opportunities`);
    }
  };

  const handleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  const handleLogout = () => {
    navigate("/login");
  };

  // Dynamic sidebar items based on role
  const sidebarItems =
    currentRole === "provider"
      ? [
          { icon: Home, label: "Dashboard", path: `${basePath}` },
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
          { icon: Home, label: "Dashboard", path: `${basePath}` },
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
        item.path === location.pathname ||
        (item.path !== basePath && location.pathname.startsWith(item.path)),
    ) || sidebarItems[0];

  return (
    <div className="flex min-h-screen bg-[#F9FAFB] font-inter overflow-x-hidden">
      {/* Sidebar */}
      <aside className="w-[280px] bg-white border-r border-gray-100 flex flex-col fixed h-full z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        <div className="p-8 pb-12">
          <Link
            to="/"
            className="flex items-center gap-3 active:scale-95 transition-all"
          >
            <div className="w-10 h-10 bg-brand-indigo-500 rounded-xl flex items-center justify-center overflow-hidden shadow-lg shadow-brand-indigo-500/20 p-1">
              <img
                src="/assets/backlyst-logo.png"
                alt="Backlyst"
                className="w-full h-full object-contain brightness-0 invert"
              />
            </div>
            <span className="text-2xl font-semibold font-sora text-gray-900">
              backlyst
            </span>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {sidebarItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 group ${
                activeItem.label === item.label
                  ? "bg-brand-indigo-50 text-brand-indigo-500 font-semibold"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              }`}
            >
              <item.icon
                size={20}
                className={
                  activeItem.label === item.label
                    ? "text-brand-indigo-500"
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
                src="/assets/avatar-sisyphus.svg"
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

      {/* Main Content Area */}
      <div className="flex-1 ml-[280px] flex flex-col min-h-screen">
        {/* Header */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10">
          {/* Search */}
          <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-5 py-3 w-[457px]">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for tasks, providers, or domains..."
              className="flex-1 text-sm font-inter text-gray-900 placeholder:text-gray-400 outline-none bg-transparent"
            />
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Role Toggle */}
            <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
              <button
                onClick={() => handleRoleSwitch("requester")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  currentRole === "requester"
                    ? "bg-brand-indigo-500 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {currentRole === "requester" && <Check className="w-4 h-4" />}
                Requester
              </button>
              <button
                onClick={() => handleRoleSwitch("provider")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  currentRole === "provider"
                    ? "bg-brand-indigo-500 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {currentRole === "provider" && <Check className="w-4 h-4" />}
                Provider
              </button>
            </div>

            {/* Credits Display - Clickable to Wallet */}
            <button
              onClick={() => navigate(`${basePath}/wallet`)}
              className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2.5 rounded-full hover:border-brand-indigo-300 hover:bg-brand-indigo-50 transition-colors"
            >
              <Wallet className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-900">
                Credits: 1245.50
              </span>
            </button>

            {/* Create Task Button (Requester) or Find Task (Provider) */}
            <button
              onClick={handleCreateTask}
              className="flex items-center gap-2 bg-brand-indigo-500 hover:bg-brand-indigo-600 text-white px-4 py-2.5 rounded-full text-sm font-medium transition-all shadow-md shadow-brand-indigo-500/20"
            >
              <Plus className="w-4 h-4" />
              {currentRole === "requester" ? "Create Task" : "Find Task"}
            </button>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={handleNotifications}
                className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-brand-orange-500 rounded-full border-2 border-white" />
              </button>
              <NotificationPopover
                isOpen={isNotificationsOpen}
                onClose={() => setIsNotificationsOpen(false)}
              />
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <main className="flex-1 p-8">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="h-16 bg-white border-t border-gray-100 flex items-center justify-between px-8 shrink-0">
          <p className="text-xs font-medium text-gray-400">
            © 2025 Backlyst Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: "Privacy Policy", path: "/privacy" },
              { label: "Terms of Service", path: "/terms" },
              { label: "Support", path: "/support" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-xs font-medium text-gray-400 hover:text-brand-indigo-500 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DashboardLayout;
