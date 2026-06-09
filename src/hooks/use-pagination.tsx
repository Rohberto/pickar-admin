"use client";

import { useState } from "react";

interface PaginationProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  items_per_page?: number;
  order_control?: string;
}
const usePagination = ({
  data,
  items_per_page = 10,
  order_control,
}: PaginationProps) => {
  const [current_page, setCurrentPage] = useState(1);
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState(order_control);

  const index_of_last_item = current_page * items_per_page;
  const index_of_first_item = index_of_last_item - items_per_page;

  const current_data = Array.isArray(data)
    ? data.slice(index_of_first_item, index_of_last_item)
    : [];

  const total_pages = Math.ceil(
    (Array.isArray(data) ? data.length : 0) / items_per_page,
  );

  const handleRequestSort = (
    _event: React.MouseEvent<unknown>,
    property: string,
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return {
    order,
    orderBy,
    current_data,
    total_pages,
    current_page,
    setCurrentPage,
    handleRequestSort,
  };
};

export default usePagination;
