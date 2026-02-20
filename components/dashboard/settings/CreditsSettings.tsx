"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

export default function CreditsWalletPreferences() {
  const [autoTopupEnabled, setAutoTopupEnabled] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h3 className="text-xl font-bold font-sora text-gray-900">
          Credits & Wallet Preferences
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Visibility and spending preferences.
        </p>
      </div>

      {/* Credit Balance */}
      <div className="border border-primary bg-indigo rounded-xl bg-brand-indigo-50 px-6 py-4">
        <p className="text-sm font-medium  text-primary">
          Current Credit Balance
        </p>
        <p className="text-2xl font-bold text-brand-indigo-700 mt-1">
          12,450 Credits
        </p>
      </div>

      {/* Auto top-up */}
      <div className="flex items-center justify-between py-2 border-b border-gray-100">
        <div>
          <p className="text-sm font-medium text-gray-900">Auto top-up</p>
          <p className="text-xs text-gray-500">
            Automatically add credits when balance is low
          </p>
        </div>

        {/* Toggle */}
        <button
          type="button"
          onClick={() => setAutoTopupEnabled(!autoTopupEnabled)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            autoTopupEnabled ? "bg-primary" : "bg-gray-300"
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              autoTopupEnabled ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
      </div>

      {/* Monthly limit */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-gray-900">
          Monthly soft spending limit
        </p>

        <div className="flex items-center gap-3">
          <input
            type="number"
            defaultValue={5000}
            className="w-28 h-10 rounded-lg border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <span className="text-sm text-gray-500">Credits</span>
        </div>

        <p className="text-xs text-gray-500">
          You&apos;ll be notified when approaching this limit
        </p>
      </div>

      {/* Footer action */}
      <div className="flex justify-end pt-4">
        <Button className="h-11 px-6 rounded-xl bg-primary text-white text-sm font-medium hover:bg-brand-indigo-600">
          Update Wallet Preferences
        </Button>
      </div>
    </div>
  );
}
