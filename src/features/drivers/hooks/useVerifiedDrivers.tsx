/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetResource } from "@/hooks/use-query-resource";
import { Driver } from "../list";
import { getAllDrivers } from "@/service/drivers.service";
import { useState } from "react";

export const useVerifiedDrivers = () => {
  const [page, setPage] = useState(1);
  const { data: driversData } = useGetResource({
    fn: () => getAllDrivers({ query_string: `page=${page}&status=active` }),
    key: ["all-rides-data", String(page), "active-drivers"],
  }) as any;

  const drivers = (driversData?.drivers || []) as Driver[];
  const paginationDetails = driversData?.pagination;

  const pagination = {
    page,
    totalPages: paginationDetails?.totalPages || 1,
    setPage,
  };

  return { drivers, pagination };
};
