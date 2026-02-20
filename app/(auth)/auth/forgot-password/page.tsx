"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/backlyst-logo.png";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Logic to send reset email would go here
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="w-full max-w-[400px] flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 pt-32">
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
              Enter your email address to continue
            </p>
          </div>
        </div>

        {/* Form */}
        {!submitted ? (
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
                className="h-12 rounded-xl bg-brand-indigo-50 border-transparent focus:ring-primary focus:border-primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary cursor-pointer hover:bg-brand-indigo-600 text-white h-12 rounded-xl font-semibold text-sm shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
            >
              Send reset link
            </Button>
          </form>
        ) : (
          <div className="bg-green-50 text-green-700 p-4 rounded-xl text-sm font-medium text-center">
            If an account exists for {email}, you will receive a password reset
            link shortly.
          </div>
        )}

        {/* Footer Link */}
        <div className="text-center">
          <Link
            href="/login"
            className="text-gray-500 font-semibold hover:text-gray-900 transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
