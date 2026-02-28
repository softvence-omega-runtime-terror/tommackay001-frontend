"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Save, ChevronDown } from "lucide-react";

export default function OrganizationSettings() {
  const [companyName, setCompanyName] = useState("Acme Corporation");
  const [businessType, setBusinessType] = useState("");
  const [countryRegion, setCountryRegion] = useState("");
  const [taxId, setTaxId] = useState("US123456789");

  const handleSave = () => {
    console.log("Saving organization details:", {
      companyName,
      businessType,
      countryRegion,
      taxId,
    });
    alert("Organization settings saved successfully!");
  };

  return (
    <div className="p-8 bg-white rounded-2xl overflow-hidden">
      <div className="">
        <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
          Organization Details
        </h2>
        <p className="mt-1.5 text-sm text-gray-600">
          Business identity used for billing and compliance.
        </p>
      </div>

      <div className="py-8 space-y-10">
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            Company Name
          </label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            placeholder="Enter company name"
          />
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            Business Type
          </label>
          <div className="relative">
            <select
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-lg appearance-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all cursor-pointer"
            >
              <option value="">Select business type...</option>
              <option value="sole-proprietor">Sole Proprietorship</option>
              <option value="partnership">Partnership</option>
              <option value="llc">LLC / Limited Liability Company</option>
              <option value="corporation">Corporation</option>
              <option value="non-profit">Non-Profit Organization</option>
              <option value="other">Other</option>
            </select>
            <ChevronDown
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
              size={18}
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            Country / Region
          </label>
          <div className="relative">
            <select
              value={countryRegion}
              onChange={(e) => setCountryRegion(e.target.value)}
              className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-lg appearance-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all cursor-pointer"
            >
              <option value="">Select country / region...</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="GB">United Kingdom</option>
              <option value="DE">Germany</option>
              <option value="FR">France</option>
              <option value="BD">Bangladesh</option>
              <option value="IN">India</option>
              <option value="other">Other</option>
            </select>
            <ChevronDown
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
              size={18}
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            VAT / Tax ID{" "}
            <span className="text-gray-500 font-normal">(optional)</span>
          </label>
          <input
            type="text"
            value={taxId}
            onChange={(e) => setTaxId(e.target.value)}
            className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            placeholder="e.g. US123456789 or EU VAT number"
          />
        </div>
      </div>

      <div className="px-8 py-6   border-t border-gray-100 flex justify-center md:justify-end">
        <Button
          onClick={handleSave}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-3 rounded-xl font-medium shadow-md transition-all flex items-center gap-2"
        >
          <Save size={18} />
          Save Organization Settings
        </Button>
      </div>
    </div>
  );
}
