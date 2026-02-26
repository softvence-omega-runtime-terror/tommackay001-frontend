"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import alphaImage from "@/public/dashboard/provider/opportunity/company-alpha.png";
import Image from "next/image";

type ModalType = "accepted" | "rejected";

interface RequestModalProps {
  type: ModalType;
  isOpen: boolean;
  onClose: () => void;
  autoCloseDelay?: number;
}

export default function RequestStatusModal({
  type,
  isOpen,
  onClose,
  autoCloseDelay = 2000,
}: RequestModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      onClose();
    }, autoCloseDelay);

    return () => clearTimeout(timer);
  }, [isOpen, onClose, autoCloseDelay]);

  if (!isOpen) return null;

  const isAccepted = type === "accepted";

  const bgColor = isAccepted ? "bg-[#D1FADF]" : "bg-[#FEE4E2]";
  const borderColor = isAccepted ? "border-emerald-200" : "border-rose-200";
  const textColor = isAccepted ? "text-emerald-800" : "text-rose-800";
  const titleColor = isAccepted ? "text-emerald-900" : "text-rose-900";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-xl rounded-2xl ${bgColor} ${borderColor} border shadow-xl overflow-hidden`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="px-8 pt-10 pb-9 text-center">
          <div className="mx-auto mb-6 w-20 h-20 rounded-2xl bg-linear-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-md">
            <Image
              src={alphaImage}
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className={`text-2xl font-bold ${titleColor} mb-4`}>
            {isAccepted ? "Request Accepted" : "Request Rejected"}
          </h2>

          <p className={`text-base leading-relaxed ${textColor} opacity-90`}>
            {isAccepted ? (
              <>
                You&apos;ve successfully accepted this provider&apos;s request.
                <br />
                The task is now in progress and the provider has been notified.
              </>
            ) : (
              <>
                The provider has been notified.
                <br />
                You can review other applicants or wait for new requests.
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
