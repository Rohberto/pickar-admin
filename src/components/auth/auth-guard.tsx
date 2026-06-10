"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { apiGet } from "@/service/_https.service";
import { toast } from "sonner";
import {
  clearAuthSession,
  getDefaultSessionTimeoutMs,
  getStoredSessionExpiry,
  getStoredToken,
  storeAuthSession,
} from "@/service/auth.service";
import { urlConfig } from "../../../config";
import { Spinner } from "../ui/spinner";

const { apiUrl } = urlConfig;
const apiEndpoint = apiUrl + "auth";

type AuthState = "loading" | "authenticated" | "unauthenticated";

const AuthGuard = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [authState, setAuthState] = useState<AuthState>("loading");

  useEffect(() => {
    let sessionTimer: number | undefined;
    let isActive = true;

    const verifyToken = async () => {
      const token = getStoredToken();

      if (!token) {
        if (isActive) {
          setAuthState("unauthenticated");
        }
        return;
      }

      const storedExpiry = getStoredSessionExpiry();
      const sessionExpiry =
        storedExpiry ?? Date.now() + getDefaultSessionTimeoutMs();

      if (!storedExpiry) {
        storeAuthSession(token, { expiresAt: sessionExpiry });
      }

      const remainingTime = sessionExpiry - Date.now();

      if (remainingTime <= 0) {
        clearAuthSession();
        if (isActive) {
          setAuthState("unauthenticated");
        }
        return;
      }

      sessionTimer = window.setTimeout(() => {
        clearAuthSession();
        setAuthState("unauthenticated");
        toast.error("Your session has expired. Please sign in again.");
      }, remainingTime);

      try {
        await apiGet(`${apiEndpoint}/me`);
        if (isActive) {
          setAuthState("authenticated");
        }
      } catch {
        clearAuthSession();
        if (isActive) {
          setAuthState("unauthenticated");
        }
      }
    };

    void verifyToken();

    return () => {
      isActive = false;

      if (sessionTimer) {
        window.clearTimeout(sessionTimer);
      }
    };
  }, []);

  useEffect(() => {
    if (authState === "unauthenticated") {
      router.replace("/sign-in");
      toast.error("Please sign in to continue");
    }
  }, [authState, router]);

  if (authState === "loading") {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Spinner className="size-8 text-[#861313]" />
      </div>
    );
  }

  if (authState === "unauthenticated") return null;

  return <>{children}</>;
};

export default AuthGuard;
