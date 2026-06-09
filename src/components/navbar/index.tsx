"use client";

import {
  CalendarDays,
  ChevronDown,
  LogOut,
  // RotateCcw,
  Search,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { signOut } from "@/service/auth.service";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const pageName = pathname.split("/").filter(Boolean).at(-1);

  const handleSignOut = () => {
    signOut();
    toast.success("Signed out successfully");
    router.replace("/sign-in");
  };

  return (
    <div className="flex items-center gap-4">
      <p className="font-normal text-2xl tracking-wide capitalize">
        {pageName}
      </p>
      <div className="flex-1 min-w-0">
        <div className="relative w-full">
          <Search
            size={20}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#b5b3b3]"
          />

          <input
            className="w-full min-w-0 rounded-lg border border-[#f5f5f5] bg-[#f9f9f9] py-4 pl-10 pr-4 text-base placeholder:text-[#b5b3b3]"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-[#323131] color-#323131 flex items-center justify-center gap-2 p-4 border rounded-sm border-[#f5f5f5]">
          <CalendarDays size={20} />
          <span className="font-normal text-xs tracking-tight">
            January 2025
          </span>
          <ChevronDown size={20} color="#323131" />
        </div>
        <button
          type="button"
          onClick={handleSignOut}
          className="w-10 h-10 rounded-sm bg-[#861313] items-center justify-center flex"
          aria-label="Sign out"
        >
          <LogOut color="#ffffff" size={16} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
