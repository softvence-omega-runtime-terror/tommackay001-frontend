"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, Mail, Pencil, Eye, EyeOff, X } from "lucide-react";

export default function AccountInformation() {
  const [fullName, setFullName] = useState("Sarah Johnson");
  const [isEditingName, setIsEditingName] = useState(false);

  const email = "sarah.johnson@backlyst.com";

  const [role] = useState<"Requester" | "Provider">("Provider");

  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);

  // Form fields for password change
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Toggle visibility
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSaveAccount = () => {
    // Normally: API call to update name etc.
    console.log("Saving account changes:", { fullName });
    setIsEditingName(false);
  };

  const handleUpdatePassword = (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("New password and confirmation do not match!");
      return;
    }

    if (newPassword.length < 8) {
      alert("New password must be at least 8 characters long.");
      return;
    }

    // Normally: API call to change password
    console.log("Changing password:", {
      current: currentPassword,
      new: newPassword,
    });

    // Reset form & close modal
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setShowChangePasswordModal(false);
    alert("Password updated successfully! (demo)");
  };

  const resetPasswordForm = () => {
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setShowCurrent(false);
    setShowNew(false);
    setShowConfirm(false);
    setShowChangePasswordModal(false);
  };

  return (
    <>
      <div className="p-8 bg-white rounded-2xl overflow-hidden">
        {/* Header */}
        <div className=" ">
          <h2 className="text-2xl font-semibold text-gray-900">
            Account Information
          </h2>
          <p className="mt-1.5 text-sm text-gray-600">
            Manage your personal account details.
          </p>
        </div>

        <div className=" py-8 space-y-10">
          {/* Full Name */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <div className="relative">
              {isEditingName ? (
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  autoFocus
                />
              ) : (
                <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg">
                  <span className="text-gray-900">{fullName}</span>
                  <button
                    onClick={() => setIsEditingName(true)}
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <Pencil size={18} />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Email Address */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <div className="relative">
              <div className="flex items-center px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700">
                <Mail size={18} className="mr-3 text-gray-500" />
                {email}
              </div>
            </div>
            <p className="text-xs text-gray-500 italic">
              Email cannot be changed. Contact support if needed.
            </p>
          </div>

          {/* Password */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={() => setShowChangePasswordModal(true)}
              >
                Change Password
              </Button>
            </div>
          </div>

          {/* Role */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <div className="flex items-center gap-3">
              <button
                className={`px-5 py-2 cursor-pointer rounded-full text-sm font-medium transition-all ${
                  role === "Requester"
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                disabled
              >
                Requester
              </button>
              <button
                className={`px-5 py-2 cursor-pointer rounded-full text-sm font-medium transition-all ${
                  role === "Provider"
                    ? "bg-emerald-100 text-emerald-700 border border-emerald-300 shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                disabled
              >
                Provider
              </button>
            </div>
          </div>

          {/* Security Note + Save */}
          <div className="pt-6 border-t border-gray-200 flex items-center justify-between">
            <div className="flex items-start gap-3 text-sm text-gray-600">
              <ShieldCheck className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
              <p>All changes are logged for security purposes.</p>
            </div>

            <Button
              onClick={handleSaveAccount}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-lg font-medium shadow-md transition-all"
            >
              Save Changes
            </Button>
          </div>
        </div>
      </div>

      {showChangePasswordModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={resetPasswordForm}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900">
                Change Password
              </h3>
              <button
                onClick={resetPasswordForm}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleUpdatePassword} className="p-6 space-y-6">
              {/* Current Password */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Current Password
                </label>
                <div className="relative">
                  <input
                    type={showCurrent ? "text" : "password"}
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrent(!showCurrent)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showCurrent ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* New Password */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showNew ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowNew(!showNew)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showNew ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Confirm New Password */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirm ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-4 pt-4">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={resetPasswordForm}
                  className="px-6 py-2.5 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-lg font-medium shadow-md transition-all"
                >
                  Update Password
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
