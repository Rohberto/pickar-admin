"use client";

import {
  QueryOptions,
  useMutation,
  useQuery,
  useQueryClient,
  UseMutationOptions,
} from "@tanstack/react-query";
import { toast } from "sonner";

interface ResourceOptionsProps extends Omit<
  QueryOptions,
  "queryKey" | "queryFn"
> {
  key: string[];
  fn: () => Promise<{ error?: string } | unknown>;
  select?: (data: unknown) => unknown;
  enabled?: boolean;
  onSuccess?: () => void;
  onError?: () => void;
}

interface MutationOptionsProps<T, Variables = unknown> extends Omit<
  UseMutationOptions<T, unknown, Variables, unknown>,
  "mutationKey" | "mutationFn"
> {
  key: string[];
  fn: (variables: Variables) => Promise<T>;
  onSuccess?: (data: unknown) => void;
  onError?: (e: unknown) => void;
}

export const useModifyResource = <T, Variables = unknown>(
  options: MutationOptionsProps<T, Variables>,
) => {
  const { key, fn, onSuccess, onError, ...mutationOptions } = options;
  const queryClient = useQueryClient();

  return useMutation({
    ...mutationOptions,
    mutationFn: fn,
    onSuccess: (data) => {
      onSuccess?.(data);
      queryClient.invalidateQueries({ queryKey: key });
    },
    onError: (e: unknown) => {
      if (onError) {
        onError(e);
        return;
      }

      toast.error((e as { error?: string })?.error || "Something went wrong");
    },
  });
};

export const useDeleteResource = <T, Variables = void>(
  options: MutationOptionsProps<T, Variables>,
) => {
  const { key, fn, onSuccess, onSettled, ...mutationOptions } = options;
  const queryClient = useQueryClient();

  return useMutation<T, unknown, Variables>({
    ...mutationOptions,
    mutationFn: fn,
    onSuccess: (data) => {
      onSuccess?.(data);
      queryClient.invalidateQueries({ queryKey: key });
    },
    onError: (e: unknown) => {
      toast.error((e as { error?: string })?.error || "Something went wrong");
    },
    onSettled: (data, error, variables, context) => {
      if (onSettled) {
        (onSettled as unknown as (...args: unknown[]) => void)(
          data as unknown as T,
          error,
          variables,
          context,
        );
      }
    },
  });
};

export const useGetResource = (options: ResourceOptionsProps) => {
  const { key, fn, select, ...rest } = options;

  return useQuery({
    ...rest,
    queryKey: key || ["defaultKey"],
    queryFn: async () => {
      const response = await fn();

      if ((response as { error?: string })?.error) {
        toast.error("Something went wrong");
        return;
      }

      return response;
    },
    select: select ? (data) => select(data) : undefined,
  });
};
