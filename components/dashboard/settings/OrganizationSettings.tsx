import { Button } from "@/components/ui/Button";
import { LogOut } from "lucide-react";
import React from "react";

export default function OrganizationSettings() {
  const organizations = [
    {
      name: "Alex Thompson",
      email: "alex@growthlab.net",
      role: "Owner",
    },
    {
      name: "Sarah Chen",
      email: "sarah@growthlab.net",
      role: "Editor",
    },
    {
      name: "Mike Ross",
      email: "mike@growthlab.net",
      role: "Viewer",
    },
  ];
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold font-sora text-gray-900">
            Organization Settings
          </h3>
          <Button className="h-10 px-4 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-lg shadow-primary/20">
            Invite Member
          </Button>
        </div>
        <p className="text-sm text-gray-500">
          Manage your organization and team members.
        </p>
      </div>

      <div className="space-y-4">
        {organizations.map((member, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                {member.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {member.name}
                </p>
                <p className="text-xs text-gray-500">{member.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                {member.role}
              </span>
              <button className="text-gray-400 hover:text-red-500">
                <LogOut size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
