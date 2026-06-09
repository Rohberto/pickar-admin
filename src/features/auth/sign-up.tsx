"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const SignUpComponent = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-y-12 tracking-[-0.02em] w-103 self-center">
      <div className="flex flex-col gap-y-2">
        <p className="font-bold text-4xl text-[#650E0E]">Create Account</p>
        <span className="font-normal text-base text-[#A7A7A7]">
          Enter your email and set password to create an account!
        </span>
      </div>
      <div className="flex flex-col gap-y-4">
        <div className="space-y-3.5">
          <label
            htmlFor="email"
            className="block font-medium text-sm text-[#3C3B3B]"
          >
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-6 py-5 border border-[#f5f5f5] rounded-full focus:outline-none focus:ring-2 focus:ring-[#650E0E] focus:border-transparent placeholder:text-[#A7A7A7]"
            placeholder="mail@exapmle.com"
          />
        </div>
        <div className="space-y-3.5">
          <label
            htmlFor="password"
            className="block font-medium text-sm text-[#3C3B3B]"
          >
            Password*
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full px-6 py-5 border border-[#f5f5f5] rounded-full focus:outline-none focus:ring-2 focus:ring-[#650E0E] focus:border-transparent placeholder:text-[#A7A7A7]"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
            >
              {showPassword ? (
                <Eye size={20} color={"#861313"} />
              ) : (
                <EyeOff size={20} color={"#861313"} />
              )}
            </button>
          </div>
        </div>
        <div className="space-y-3.5">
          <label
            htmlFor="confirm-password"
            className="block font-medium text-sm text-[#3C3B3B]"
          >
            Confirm Password*
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="confirm-password"
              name="confirm-password"
              className="w-full px-6 py-5 border border-[#f5f5f5] rounded-full focus:outline-none focus:ring-2 focus:ring-[#650E0E] focus:border-transparent placeholder:text-[#A7A7A7]"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
            >
              {showPassword ? (
                <Eye size={20} color={"#861313"} />
              ) : (
                <EyeOff size={20} color={"#861313"} />
              )}
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              className="accent-[#650E0E] w-4 h-4 rounded-full border"
            />
            <span className="font-normal text-xs text-[#3C3B3B]">
              Keep me logged in
            </span>
          </div>
          <span className="font-medium text-xs text-[#861313]">
            Forget password?
          </span>
        </div>
      </div>
      <div>
        <button className="w-full py-5 bg-[#650E0E] font-semibold text-base text-[#fcfdfd] rounded-full hover:bg-[#861313] transition-colors">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default SignUpComponent;
