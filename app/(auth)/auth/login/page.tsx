"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { useRouter } from "next/navigation";
import Link from "next/link";
import logo from "@/public/backlyst-logo.png";
import Image from "next/image";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("admin@intervo.com");
  const [password, setPassword] = useState("password");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    // Static flow for demo - redirect to requester dashboard
    router.push("/requester");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="w-full max-w-[400px] flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6">
          <Link href="/" className="flex items-center gap-3 w-78 md:pl-12">
            <Image
              src={logo}
              alt="Backlyst"
              className="w-14 h-12 object-contain"
            />
            <span className="text-[28px] font-semibold font-sora text-[#0f0f0f]">
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
              <p className="text-sm text-red-500 font-bold bg-red-50 p-3 rounded-lg">
                {error}
              </p>
            )}
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 font-inter"
        >
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-sm font-semibold text-gray-700"
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="h-12 rounded-xl bg-brand-indigo-50 border-transparent focus:ring-brand-indigo-500 focus:border-brand-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="password"
              className="text-sm font-semibold text-gray-700"
            >
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className="h-12 rounded-xl bg-brand-indigo-50 border-transparent focus:ring-brand-indigo-500 focus:border-brand-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              className="text-xs font-semibold text-brand-orange-500 hover:text-brand-orange-600 transition-colors uppercase tracking-widest"
            >
              Forgot password
            </button>
          </div>

          <Button
            type="submit"
            className="w-full bg-brand-indigo-500 hover:bg-brand-indigo-600 text-white h-12 rounded-xl font-semibold text-sm shadow-lg shadow-brand-indigo-500/20 transition-all active:scale-[0.98]"
          >
            Sign In
          </Button>
        </form>

        {/* Social Buttons */}
        <div className="flex flex-col gap-3">
          <Button
            variant="outline"
            className="w-full h-12 rounded-xl border-gray-200 font-medium text-sm text-gray-700 flex items-center justify-center gap-3 hover:bg-gray-50 transition-all"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            Sign in with Apple
          </Button>
          <Button
            variant="outline"
            className="w-full h-12 rounded-xl border-gray-200 font-medium text-sm text-gray-700 flex items-center justify-center gap-3 hover:bg-gray-50 transition-all"
          >
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
        </div>

        {/* Footer Link */}
        <div className="text-center">
          <p className="text-sm text-gray-500 font-medium">
            New to Backlyst?{" "}
            <Link
              href="/signup"
              className="text-brand-orange-500 font-semibold hover:text-brand-orange-600 transition-colors"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
