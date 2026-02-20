"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import Image from "next/image";
import logo from "@/public/backlyst-logo.png";

const SignupPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    referralCode: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Static flow for demo
    router.push("/auth/verify");

    /* Backend Integration Example:
    try {
      await register({ ...formData });
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message || "Registration failed");
    }
    */
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-[520px] flex flex-col gap-8 py-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 pt-20 md:pt-32">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={logo}
              alt="Backlyst"
              className="w-14 h-12 object-contain"
              priority
            />
            <span className="text-[28px] font-semibold font-sora text-gray-900">
              backlyst
            </span>
          </Link>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold font-sora text-gray-900">
              Welcome back
            </h1>
            <p className="text-sm text-gray-500 font-medium font-inter">
              Log in to your workspace to continue
            </p>

            {error && (
              <p className="text-sm text-red-600 font-semibold bg-red-50 p-3 rounded-lg">
                {error}
              </p>
            )}
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 font-inter"
        >
          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-bold text-gray-700">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="h-12 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition-all duration-200"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          {/* Password */}
          <div className="space-y-2 relative">
            <Label
              htmlFor="password"
              className="text-sm font-bold text-gray-700"
            >
              Password
            </Label>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="h-12 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition-all duration-200 pr-12"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary transition-colors"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="space-y-2 relative">
            <Label
              htmlFor="confirmPassword"
              className="text-sm font-bold text-gray-700"
            >
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="••••••••"
              className="h-12 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition-all duration-200 pr-12"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary transition-colors"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Referral Code */}
          <div className="space-y-2">
            <Label
              htmlFor="referralCode"
              className="text-sm font-bold text-gray-700"
            >
              Referral Code
            </Label>
            <Input
              id="referralCode"
              type="text"
              placeholder="PRO-2025-EX"
              className="h-12 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition-all duration-200"
              value={formData.referralCode}
              onChange={(e) =>
                setFormData({ ...formData, referralCode: e.target.value })
              }
            />
          </div>

          {/* Terms */}
          <p className="text-[10px] text-gray-400 font-medium text-center px-4 leading-relaxed">
            I agree to the{" "}
            <span className="text-brand-orange font-bold cursor-pointer underline">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-brand-orange font-bold cursor-pointer underline">
              Privacy Policy
            </span>
            .
          </p>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full cursor-pointer bg-primary hover:bg-primary/90 text-white h-12 rounded-xl font-black text-sm uppercase tracking-widest shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
          >
            Create My Account
          </Button>
        </form>

        {/* OR Divider */}
        <div className="relative py-4 ">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-black text-gray-400 bg-white px-4">
            <span className="absolute text-sm font-normal -top-2 bg-white w-12 h-12 translate-x-0 px-2">
              OR
            </span>
            <div className="border-t border-base-300 w-full"></div>
          </div>
        </div>

        {/* Social Buttons */}
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="flex-1 cursor-pointer h-12 rounded-xl border-gray-200 font-bold text-xs text-gray-700 flex items-center justify-center gap-2 hover:bg-gray-50 transition-all px-0"
          >
            {/* Google Icon */}
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Sign in with Google
          </Button>
          <Button
            variant="outline"
            className="flex-1 h-12 cursor-pointer rounded-xl border-gray-200 font-bold text-xs text-gray-700 flex items-center justify-center gap-2 hover:bg-gray-50 transition-all px-0"
          >
            {/* Apple Icon */}
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            Sign in with Apple
          </Button>
        </div>

        {/* Footer Link */}
        <div className="text-center">
          <p className="text-sm text-gray-500 font-medium font-inter">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-primary font-bold hover:text-primary/80 transition-colors"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
