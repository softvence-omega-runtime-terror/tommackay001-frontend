"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./Button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}) => {
  const getPages = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(
          1,
          "...",
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages,
        );
      }
    }
    return pages;
  };

  const pages = getPages();

  return (
    <div className={`flex justify-center mt-6  ${className || ""}`}>
      <div className="flex items-center gap-2 w-full max-w-full bg-white  rounded-lg px-4 py-2 justify-between">
        {/* Previous Button */}
        <Button
          variant="outline"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          className={`p-1.5 px-2 hover:bg-gray-100  border border-[#e9eaeb] flex gap-2 rounded-lg justify-center items-center ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <ChevronLeft className="w-5 h-5 text-[#535862]" />
          Previous
        </Button>

        {/* Page Numbers */}
        <div className="flex gap-1 px-3">
          {pages.map((item, i) =>
            typeof item === "string" ? (
              <span
                key={i}
                className="px-3 py-1.5 text-sm font-medium text-gray-400 cursor-default"
              >
                {item}
              </span>
            ) : (
              <button
                key={i}
                onClick={() => onPageChange(item)}
                className={`px-3 py-1.5 text-sm font-medium rounded ${
                  item === currentPage
                    ? "bg-[#f9f5ff] text-[#331ffd]"
                    : "text-[#414651] hover:bg-gray-50"
                }`}
              >
                {item}
              </button>
            ),
          )}
        </div>

        {/* Next Button */}
        <Button
          variant="outline"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          className={`p-1.5 hover:bg-gray-100  border border-[#e9eaeb] flex gap-2 rounded-lg px-4 justify-center items-center ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Next
          <ChevronRight className="w-5 h-5 text-[#535862]" />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
