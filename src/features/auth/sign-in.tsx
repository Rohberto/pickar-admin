"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  getDefaultSessionTimeoutMs,
  persistSignInResponse,
  signIn,
  type SignInResponse,
} from "@/service/auth.service";

const REMEMBER_ME_TIMEOUT_SECONDS = 7 * 24 * 60 * 60;

const SignInComponent = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const response = (await signIn({ email, password })) as SignInResponse;
      return response;
    },
    onSuccess: (response) => {
      const token = persistSignInResponse(response, {
        expiresIn: rememberMe
          ? REMEMBER_ME_TIMEOUT_SECONDS
          : getDefaultSessionTimeoutMs() / 1000,
      });

      if (!token) {
        toast.error("Sign in failed. No token was returned.");
        return;
      }

      toast.success("Signed in successfully");
      router.replace("/overview");
    },
    onError: (error: unknown) => {
      const message =
        typeof error === "string"
          ? error
          : (error as { error?: string; message?: string })?.error ||
            (error as { error?: string; message?: string })?.message ||
            "Something went wrong";

      toast.error(message);
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-y-12 tracking-[-0.02em] w-103 self-center"
    >
      <div className="flex flex-col gap-y-2">
        <p className="font-bold text-4xl text-[#650E0E]">Sign In</p>
        <span className="font-normal text-base text-[#A7A7A7]">
          Enter your email and password to sign in!
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
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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
              value={password}
              onChange={(event) => setPassword(event.target.value)}
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
              checked={rememberMe}
              onChange={(event) => setRememberMe(event.target.checked)}
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
        <button
          type="submit"
          className="w-full py-5 bg-[#650E0E] font-semibold text-base text-[#fcfdfd] rounded-full hover:bg-[#861313] transition-colors disabled:opacity-40"
          disabled={isPending}
        >
          {isPending ? "Signing In..." : "Sign In"}
        </button>
      </div>
    </form>
  );
};

export default SignInComponent;
