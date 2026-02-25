"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Shield, LogOut, Download, Trash2, ChevronRight } from "lucide-react";

export default function SecuritySettings() {
  const [sessions] = useState([
    {
      device: "Chrome on MacOS",
      location: "San Francisco, CA",
      status: "Current",
      time: "active 2 minutes ago",
      isCurrent: true,
    },
    {
      device: "Safari on iPhone",
      location: "San Francisco, CA",
      status: "",
      time: "Last active 1 hour ago",
      isCurrent: false,
    },
    {
      device: "Chrome on Windows",
      location: "New York, NY",
      status: "",
      time: "Last active 2 days ago",
      isCurrent: false,
    },
  ]);

  const handleRevoke = (index: number) => {
    alert(`Session revoked: ${sessions[index].device}`);
  };

  const handleLogoutAll = () => {
    if (confirm("Are you sure you want to log out from all devices?")) {
      alert("Logged out from all devices!");
    }
  };

  return (
    <div className=" p-8 bg-white rounded-2xl overflow-hidden">
      <div className="">
        <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
          Security
        </h2>
        <p className="mt-1.5 text-sm text-gray-600">
          Protect your account and data.
        </p>
      </div>

      <div className="py-4 space-y-12">
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Active Sessions
          </h3>

          <div className="space-y-4">
            {sessions.map((session, index) => (
              <div
                key={index}
                className={`p-5 border rounded-xl ${
                  session.isCurrent
                    ? "border-green-300 bg-green-50/30"
                    : "border-gray-200 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-gray-900">
                        {session.device}
                      </p>
                      {session.isCurrent && (
                        <span className="px-2.5 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {session.location} • {session.time}
                    </p>
                  </div>

                  {!session.isCurrent && (
                    <button
                      onClick={() => handleRevoke(index)}
                      className="text-red-600 hover:text-red-800 text-sm font-medium transition-colors"
                    >
                      Revoke
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <Button
            variant="white"
            onClick={handleLogoutAll}
            className="flex items-center gap-2 rounded-2xl font-medium transition-colors"
          >
            <LogOut size={18} />
            Logout from all devices
          </Button>
        </div>

        <div className="space-y-6 pt-4 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Privacy & Data
          </h3>

          <div className="space-y-5">
            <div className="flex items-center justify-between p-5 bg-gray-50 border border-gray-200 rounded-xl">
              <div>
                <div className="flex items-center gap-2">
                  <Download size={18} className="text-indigo-600" />
                  <p className="font-medium text-gray-900">
                    Request data export (GDPR)
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">7-10 days</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-5 bg-[#FEE4E2] border border-red-200 rounded-xl">
              <div>
                <div className="flex items-center gap-2">
                  <Trash2 size={18} className="text-red-600" />
                  <p className="font-medium text-gray-900">
                    Request account deletion
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-red-600 font-medium">Permanent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
