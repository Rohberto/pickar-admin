/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetResource } from "@/hooks/use-query-resource";
import { getPaymentData } from "@/service/payments.service";
import { useState } from "react";
import { Payment } from "../list";

export const usePaymentRequests = () => {
  const [page, setPage] = useState(1);
  const { data: paymentData } = useGetResource({
    fn: () => getPaymentData({ query_string: `page=${page}&status=pending` }),
    key: ["all-payment-data", String(page), "payment-request"],
  }) as any;

  const paymentRequest = (paymentData?.payments || []) as Payment[];
  const paginationDetails = paymentData?.pagination;

  const pagination = {
    page,
    totalPages: paginationDetails?.totalPages || 1,
    setPage,
  };

  return { paymentRequest, pagination };
};
