import axios, { AxiosRequestConfig, ResponseType } from "axios";

export interface ApiRequestOptions {
  data?: unknown;
  query_string?: string;
  headers?: Record<string, string>;
  responseType?: ResponseType;
}

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "",
  timeout: 30000,
});

api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const requestUrl = String(config.url || "");
    const isPublicAuthRequest =
      requestUrl.includes("/auth/signin") || requestUrl.includes("/auth/login");

    if (isPublicAuthRequest) {
      return config;
    }

    const token = localStorage.getItem("token");
    if (token) {
      config.headers.set("Authorization", `Bearer ${token}`);
    }
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response?.status === 401 &&
      typeof window !== "undefined" &&
      window.location.pathname !== "/sign-in"
    ) {
      localStorage.removeItem("token");
      window.location.href = "/sign-in";
    }
    return Promise.reject(error);
  },
);

const apiRequest = async (
  method: "get" | "post" | "put" | "patch" | "delete",
  url: string,
  options: ApiRequestOptions = {},
) => {
  try {
    const { data, query_string, headers, responseType } = options;

    const requestUrl =
      method === "get" && query_string ? `${url}?${query_string}` : url;

    const config: AxiosRequestConfig = {
      method,
      url: requestUrl,
      headers: headers || {},
      responseType: responseType || "json",
      data: method !== "get" ? data || {} : undefined,
    };

    const response = await api.request(config);
    return response.data.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      const message = error.response.data || "Something went wrong";
      throw message;
    }

    throw "Something went wrong";
  }
};

export const apiGet = async (url: string, options: ApiRequestOptions = {}) =>
  await apiRequest("get", url, options);

export const apiPost = async (url: string, options: ApiRequestOptions = {}) =>
  await apiRequest("post", url, options);

export const apiPut = async (url: string, options: ApiRequestOptions = {}) =>
  await apiRequest("put", url, options);

export const apiDelete = async (url: string, options: ApiRequestOptions = {}) =>
  await apiRequest("delete", url, options);

export const apiPatch = async (url: string, options: ApiRequestOptions = {}) =>
  await apiRequest("patch", url, options);
