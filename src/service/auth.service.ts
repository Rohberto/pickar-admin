import { urlConfig } from "../../config";
import { apiPost } from "./_https.service";

const { apiUrl } = urlConfig;
const apiEndpoint = apiUrl + "auth";

const AUTH_TOKEN_KEY = "token";
const AUTH_SESSION_EXPIRES_AT_KEY = "auth_session_expires_at";
const AUTH_ADMIN_KEY = "auth_admin";
const DEFAULT_SESSION_TIMEOUT_MS = 30 * 60 * 1000;

export interface AdminProfile {
  id: string;
  fullName: string;
  email: string;
  role: string;
  isActive: boolean;
  lastLogin: string;
  createdAt: string;
  [key: string]: unknown;
}

export interface SignInResponse {
  success?: boolean;
  data?: {
    token?: string;
    accessToken?: string;
    access_token?: string;
    admin?: AdminProfile;
    expiresAt?: number | string;
    expiresIn?: number;
    expires_in?: number;
    [key: string]: unknown;
  };
  token?: string;
  accessToken?: string;
  access_token?: string;
  admin?: AdminProfile;
  expiresAt?: number | string;
  expiresIn?: number;
  expires_in?: number;
  [key: string]: unknown;
}

const isBrowser = () => typeof window !== "undefined";

const getTokenFromResponse = (response: SignInResponse) => {
  return (
    response.data?.token ??
    response.data?.accessToken ??
    response.data?.access_token ??
    response.token ??
    response.accessToken ??
    response.access_token ??
    null
  );
};

const getAdminFromResponse = (response: SignInResponse) => {
  return response.data?.admin ?? response.admin ?? null;
};

const getExpiryFromResponse = (response: SignInResponse) => {
  return (
    response.data?.expiresAt ??
    response.expiresAt ??
    response.data?.expiresIn ??
    response.data?.expires_in ??
    response.expiresIn ??
    response.expires_in ??
    null
  );
};

const resolveExpiryFromToken = (token: string) => {
  try {
    const payload = JSON.parse(atob(token.split(".")[1] || "")) as {
      exp?: number;
    };

    if (typeof payload.exp === "number") {
      return payload.exp * 1000;
    }
  } catch {
    return null;
  }

  return null;
};

export const getStoredToken = () => {
  if (!isBrowser()) {
    return null;
  }

  return localStorage.getItem(AUTH_TOKEN_KEY);
};

export const getStoredSessionExpiry = () => {
  if (!isBrowser()) {
    return null;
  }

  const value = localStorage.getItem(AUTH_SESSION_EXPIRES_AT_KEY);

  return value ? Number(value) : null;
};

export const storeAuthSession = (
  token: string,
  options: { expiresAt?: number | string; expiresIn?: number } = {},
) => {
  if (!isBrowser()) {
    return;
  }

  const tokenExpiry = resolveExpiryFromToken(token);
  const explicitExpiry =
    typeof options.expiresAt === "string"
      ? Number(options.expiresAt)
      : options.expiresAt;
  const computedExpiry =
    explicitExpiry ??
    (typeof options.expiresIn === "number"
      ? Date.now() + options.expiresIn * 1000
      : null) ??
    tokenExpiry ??
    Date.now() + DEFAULT_SESSION_TIMEOUT_MS;

  localStorage.setItem(AUTH_TOKEN_KEY, token);
  localStorage.setItem(AUTH_SESSION_EXPIRES_AT_KEY, String(computedExpiry));
};

export const clearAuthSession = () => {
  if (!isBrowser()) {
    return;
  }

  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem(AUTH_SESSION_EXPIRES_AT_KEY);
  localStorage.removeItem(AUTH_ADMIN_KEY);
};

export const signOut = () => {
  clearAuthSession();
};

export const signIn = async (data: { email: string; password: string }) => {
  return await apiPost(`${apiEndpoint}/login`, { data });
};

export const persistSignInResponse = (
  response: SignInResponse,
  options: { expiresAt?: number | string; expiresIn?: number } = {},
) => {
  const token = getTokenFromResponse(response);
  const admin = getAdminFromResponse(response);

  if (!token) {
    return null;
  }

  storeAuthSession(token, {
    expiresAt:
      options.expiresAt ?? getExpiryFromResponse(response) ?? undefined,
    expiresIn: options.expiresIn ?? response.expiresIn ?? response.expires_in,
  });

  if (admin && isBrowser()) {
    localStorage.setItem(AUTH_ADMIN_KEY, JSON.stringify(admin));
  }

  return token;
};

export const getStoredAdmin = () => {
  if (!isBrowser()) {
    return null;
  }

  const value = localStorage.getItem(AUTH_ADMIN_KEY);

  if (!value) {
    return null;
  }

  try {
    return JSON.parse(value) as AdminProfile;
  } catch {
    return null;
  }
};

export const getDefaultSessionTimeoutMs = () => DEFAULT_SESSION_TIMEOUT_MS;
