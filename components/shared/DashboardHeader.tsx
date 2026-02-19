import React from "react";
import { Search, Plus, Bell, Wallet } from "lucide-react";
import { Button } from "@/components/ui/Button";

import { Role } from "@/context/RoleContext";

interface DashboardHeaderProps {
  title?: string;
  onSearch?: (term: string) => void;
  onCreateClick?: () => void;
  role?: Role;
  onRoleSwitch?: (role: Role) => void;
  credits?: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  onSearch,
  onCreateClick,
  role,
  onRoleSwitch,
  credits = "1245.50",
}) => {
  return (
    <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-10 sticky top-0 z-10 w-full">
      <div className="relative w-[400px]">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
        />
        <input
          type="text"
          onChange={(e) => onSearch?.(e.target.value)}
          placeholder="Search for tasks, providers, or domains..."
          className="w-full h-11 bg-gray-50 border-none rounded-2xl pl-12 pr-4 text-sm focus:ring-2 focus:ring-brand-indigo/20 transition-all font-medium placeholder:text-gray-300 outline-none"
        />
      </div>

      <div className="flex items-center gap-6">
        {onRoleSwitch && (
          <div className="bg-gray-50 p-1 rounded-xl flex">
            {(["requester", "provider"] as Role[]).map((r) => (
              <button
                key={r}
                onClick={() => onRoleSwitch(r)}
                className={`px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${
                  role === r
                    ? "bg-brand-indigo text-white shadow-lg shadow-brand-indigo/20"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {r.charAt(0).toUpperCase() + r.slice(1)}
              </button>
            ))}
          </div>
        )}

        <div className="h-10 w-px bg-gray-100" />

        <div className="flex items-center gap-3 bg-brand-indigo-soft/20 px-4 py-2.5 rounded-xl border border-brand-indigo/5">
          <Wallet size={18} className="text-brand-indigo" />
          <span className="text-xs font-black text-brand-indigo uppercase tracking-widest leading-none mt-0.5">
            Credits: {credits}
          </span>
        </div>

        {onCreateClick && (
          <Button
            onClick={onCreateClick}
            className="bg-brand-indigo hover:bg-brand-indigo-light text-white h-11 px-6 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-brand-indigo/20 transition-all flex gap-2"
          >
            <Plus size={16} /> Create Task
          </Button>
        )}

        <button className="relative w-11 h-11 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors">
          <Bell size={20} />
          <span className="absolute top-3 right-3 w-2 h-2 bg-brand-orange rounded-full ring-2 ring-white" />
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;
