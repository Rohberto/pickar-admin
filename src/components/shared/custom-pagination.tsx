"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

type PageItem = number | "...";

function getPageItems(current: number, total: number): PageItem[] {
  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  if (current <= 2) {
    return [1, 2, "...", total - 1, total];
  }

  if (current >= total - 1) {
    return [1, 2, "...", total - 1, total];
  }

  return [1, "...", current - 1, current, current + 1, "...", total];
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) {
  const pageItems = getPageItems(currentPage ?? 1, totalPages ?? 1);

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div
      className={cn(
        "flex items-center justify-between w-full  px-6 py-4 bg-[#fefafa]",
        className,
      )}
    >
      {/* Prev Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="flex items-center gap-1 text-sm font-normal border-[#6b0f0f] text-[#861313] hover:bg-gray-50 disabled:opacity-40 h-9 px-3"
      >
        <ChevronLeft className="w-4 h-4 mb-0.5" />
        Prev
      </Button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {pageItems.map((item, index) =>
          item === "..." ? (
            <span
              key={`ellipsis-${index}`}
              className="w-9 h-9 flex items-center justify-center text-sm text-[#667085] select-none"
            >
              ...
            </span>
          ) : (
            <button
              key={item}
              onClick={() => onPageChange(item)}
              className={cn(
                "w-9 h-9 rounded-md text-sm font-medium transition-colors",
                currentPage === item
                  ? "bg-[#861313] text-white"
                  : "text-[#667085] hover:bg-gray-100",
              )}
            >
              {item}
            </button>
          ),
        )}
      </div>

      {/* Next Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="flex items-center gap-1 text-sm font-normal border-[#6b0f0f] text-[#861313] hover:bg-gray-50 disabled:opacity-40 h-9 px-3"
      >
        Next
        <ChevronRight className="w-4 h-4 mb-0" />
      </Button>
    </div>
  );
}
