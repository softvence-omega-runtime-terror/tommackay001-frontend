"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import logo from "@/public/backlyst-logo.png";
import { usePathname } from "next/navigation";

const NAV_LINKS = ["Features", "Process", "Pricing", "FAQ"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = usePathname();

  const isHidden = location.startsWith("/how-it-works");

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100">
      <div className="max-w-330 mx-auto h-20 flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={logo}
            alt="Backlyst"
            className="w-10 h-9 object-contain"
            priority
          />
          <span className="text-2xl font-semibold font-sora text-gray-900">
            backlyst
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {isHidden ||
            NAV_LINKS.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-base font-inter text-gray-900 hover:text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          {isHidden && (
            <Link
              href="/home"
              onClick={() => setOpen(false)}
              className="text-base font-inter text-gray-900 hover:text-primary"
            >
              Home
            </Link>
          )}
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/auth/login"
            className="px-5 py-3 text-base font-semibold font-inter text-primary"
          >
            Log In
          </Link>
          <Link
            href="/auth/register"
            className="bg-primary hover:bg-brand-indigo-600 text-white px-5 py-3 rounded-2xl font-semibold font-inter transition-all"
          >
            Get Started Free
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-6 py-6 flex flex-col gap-6">
            {isHidden ||
              NAV_LINKS.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-base font-inter text-gray-900 hover:text-primary"
                >
                  {item}
                </Link>
              ))}
            {isHidden && (
              <Link
                href="/home"
                onClick={() => setOpen(false)}
                className="text-base font-inter text-gray-900 hover:text-primary"
              >
                Home
              </Link>
            )}

            <div className="pt-4 border-t border-gray-100 flex flex-col gap-4">
              <Link
                href="/auth/login"
                className="text-base font-semibold font-inter text-primary"
                onClick={() => setOpen(false)}
              >
                Log In
              </Link>
              <Link
                href="/auth/register"
                className="bg-primary text-white py-3 rounded-xl text-center font-semibold font-inter"
                onClick={() => setOpen(false)}
              >
                Get Started Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
