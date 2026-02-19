import React from "react";
import { motion } from "framer-motion";
import { Zap, type LucideIcon } from "lucide-react";

interface SidebarLinkProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  onClick: () => void;
}

const SidebarLink = ({
  icon: Icon,
  label,
  active,
  onClick,
}: SidebarLinkProps) => (
  <motion.button
    whileHover={{ x: 4 }}
    onClick={onClick}
    className={`w-full flex items-center gap-3 p-3 rounded-md transition-all duration-200 cursor-pointer mb-1 ${
      active
        ? "bg-brand-indigo-soft text-brand-indigo"
        : "text-gray-600 hover:bg-gray-50"
    }`}
  >
    <Icon size={20} className={active ? "stroke-[2.5px]" : "stroke-2"} />
    <span
      className={`text-sm tracking-tight ${
        active ? "font-semibold font-sora" : "font-medium font-inter"
      }`}
    >
      {label}
    </span>
    {active && <div className="ml-auto w-1 h-1 rounded-full bg-brand-indigo" />}
  </motion.button>
);

interface SidebarProps {
  activeItem: string;
  onNavigate: (item: string) => void;
  items: { icon: LucideIcon; label: string }[];
}

const Sidebar = ({ activeItem, onNavigate, items }: SidebarProps) => (
  <aside className="fixed left-0 top-0 w-[280px] h-screen bg-white border-r border-gray-100 p-8 flex flex-col hidden lg:flex z-50 overflow-y-auto">
    <div className="flex items-center gap-3 mb-12 px-2">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-indigo to-brand-indigo-light flex items-center justify-center text-white shadow-brand-indigo/30 shadow-lg">
        <Zap size={24} fill="currentColor" />
      </div>
      <h2 className="text-xl tracking-tight font-sora font-semibold">
        Wedev Pro
      </h2>
    </div>

    <nav className="flex-1">
      {items.map((item) => (
        <SidebarLink
          key={item.label}
          icon={item.icon}
          label={item.label}
          active={activeItem === item.label}
          onClick={() => onNavigate(item.label)}
        />
      ))}
    </nav>

    <div className="mt-auto pt-8 border-t border-gray-50">
      <SidebarLink icon={items[0].icon} label="Support" onClick={() => {}} />
      <SidebarLink icon={items[1].icon} label="Logout" onClick={() => {}} />
    </div>
  </aside>
);

export default Sidebar;
