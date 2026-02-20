"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, FileText, Info, ExternalLink } from "lucide-react";

export default function LegalAndConsent() {
  // Mock data - in real app, fetch from user profile / backend
  const [legalDocs] = useState([
    {
      name: "Terms of Service",
      version: "v2.1",
      acceptedDate: "Jan 15, 2024",
      status: "Accepted",
      isCurrent: true,
    },
    {
      name: "Privacy Policy",
      version: "v1.8",
      acceptedDate: "Jan 15, 2024",
      status: "Accepted",
      isCurrent: true,
    },
    {
      name: "Cookie Policy",
      version: "v1.3",
      acceptedDate: "Jan 15, 2024",
      status: "Accepted",
      isCurrent: true,
    },
    {
      name: "Data Processing Agreement",
      version: "v2.0",
      acceptedDate: "Jan 15, 2024",
      status: "Accepted",
      isCurrent: true,
    },
  ]);

  const needsReaccept = false;

  const handleReaccept = () => {
    // In real app: show consent flow / modal for re-acceptance
    alert("Re-acceptance flow would start here.");
  };

  return (
    <div className=" bg-white ">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
          <ShieldCheck className="w-6 h-6 text-indigo-600" />
          Legal & Consent
        </h2>
        <p className="mt-1.5 text-sm text-gray-600">
          Legal agreements and policy acknowledgements.
        </p>
      </div>

      <div className="py-4 space-y-10 ">
        {/* Documents Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="pb-4 text-sm font-semibold text-gray-700">
                  Document Name
                </th>
                <th className="pb-4 text-sm font-semibold text-gray-700">
                  Version
                </th>
                <th className="pb-4 text-sm font-semibold text-gray-700">
                  Accepted Date
                </th>
                <th className="pb-4 text-sm font-semibold text-gray-700">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {legalDocs.map((doc, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="py-5 px-1 font-medium text-gray-900">
                    {doc.name}
                  </td>
                  <td className="py-5 text-gray-600">{doc.version}</td>
                  <td className="py-5 text-gray-600">{doc.acceptedDate}</td>
                  <td className="py-5">
                    <span className="inline-flex px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                      {doc.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Info Note */}
        <div className="p-4 rounded-2xl flex items-start gap-3 text-sm text-gray-600  bg-indigo">
          <ShieldCheck className="w-5 h-5 text-indigo-600 mt-0.5 shrink-0" />
          <p>
            By using our services, you agree to our legal terms. You can review
            them at any time. Changes to policies will be notified via email and
            in-app.
          </p>
        </div>
      </div>
    </div>
  );
}
