// "use client";

import styled from "styled-components";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import { CalendarDays, ChevronDown, ChevronRight } from "lucide-react";
import { Filter } from "@/assets/icons";
import { Tabs, TabsContent } from "../ui/tabs";
import { StyledTabsList, StyledTabsTrigger } from "./tabs-components";
import Link from "next/link";
import Pagination from "./custom-pagination";
import { useDriverApplications } from "@/features/drivers/hooks/useDriverApplications";
import { useVerifiedDrivers } from "@/features/drivers/hooks/useVerifiedDrivers";
import { useProcessedPayments } from "@/features/payments/hooks/useProcessedPayment";
import { usePaymentRequests } from "@/features/payments/hooks/usePaymentRequest";

export const StyledTableCell = styled(TableCell)`
  padding: 16px 24px;
  height: 72px;
  line-height: 1;
  letter-spacing: 0;
`;

export const StyledTableHeaderCell = styled(TableCell)`
  padding: 12px 24px;
  height: 44px;
  line-height: 1;
`;

export const StyledTableRow = styled(TableRow)`
  height: 72px;
`;

export const StyledTableHeaderRow = styled(TableRow)`
  height: 44px;
`;

export interface HeadCell {
  id: string;
  label: string;
  numeric?: boolean;
  disablePadding?: boolean;
}

interface TableHeadProps {
  headCells: HeadCell[];
}

interface TableWrapperProps {
  //   order?: "asc" | "desc";
  //   orderBy?: string;
  //   handleRequestSort?: (
  //     event: React.MouseEvent<unknown>,
  //     property: string,
  //   ) => void;
  headCells?: HeadCell[];
  showBorderTop?: boolean;
  dashboardTable?: boolean;
  to?: string;
  tableName: string;
  children: React.ReactNode;
}

export const TableHeadSection = ({ headCells }: TableHeadProps) => {
  return (
    <TableHeader>
      <StyledTableHeaderRow>
        {headCells.map((headCell) => (
          <StyledTableHeaderCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            className="font-medium text-xs text-[#465166]"
          >
            {headCell.label}
          </StyledTableHeaderCell>
        ))}
      </StyledTableHeaderRow>
    </TableHeader>
  );
};

export const TableWrapper = ({
  headCells,
  children,
  showBorderTop = true,
  tableName,
  dashboardTable = false,
  to = "",
}: TableWrapperProps) => {
  return (
    <div>
      <div
        className={`px-6 py-4 flex  items-center justify-between  ${showBorderTop ? "border border-[#e4ecf0] rounded-tl-lg rounded-tr-lg" : ""}`}
      >
        <span className="text-lg font-medium text-[#3c3b3b]">{tableName}</span>
        {dashboardTable ? (
          <Link href={to} className="decoration-none">
            <span className="flex font-normal gap-1 items-center text-base whitespace-nowrap font-sans text-[#861313]">
              See all <ChevronRight size={16} />
            </span>
          </Link>
        ) : (
          <div className="text-[#323131] color-#323131 flex items-center justify-center gap-2">
            <Filter className="mr-1" />
            <CalendarDays size={20} />
            <span className="font-normal text-xs tracking-tight">
              January 2025
            </span>
            <ChevronDown size={20} color="#323131" />
          </div>
        )}
      </div>
      <div
        className={
          "border border-[#E4E7EC] rounded-bl-lg rounded-br-lg overflow-hidden"
        }
      >
        <Table>
          {headCells && <TableHeadSection headCells={headCells} />}
          <TableBody>{children}</TableBody>
        </Table>
      </div>
    </div>
  );
};

interface TabsTableWrapperProps {
  showBorderTop?: boolean;
  dashboardTable?: boolean;
  defaultTab: string;
  tabs: {
    value: string;
    label: string;
    headCells: HeadCell[];
    content: React.ReactNode;
  }[];
}

export const TabsTableWrapper = ({
  showBorderTop = true,
  dashboardTable = false,
  tabs,
  defaultTab = "drivers-management",
}: TabsTableWrapperProps) => {
  const { pagination: applicationPagination } = useDriverApplications();
  const { pagination: verifiedPagination } = useVerifiedDrivers();
  const { pagination: processedPagination } = useProcessedPayments();
  const { pagination: requestedPagination } = usePaymentRequests();
  return (
    <div>
      <Tabs defaultValue={defaultTab}>
        <div
          className={`px-6 py-4 flex  items-center justify-between  ${showBorderTop ? "border border-[#e4ecf0] rounded-tl-lg rounded-tr-lg" : ""} `}
        >
          <StyledTabsList>
            {tabs.map((tab, index) => (
              <StyledTabsTrigger key={index} value={tab.value}>
                {tab.label}
              </StyledTabsTrigger>
            ))}
          </StyledTabsList>

          {dashboardTable ? (
            <span className="flex font-normal gap-1 items-center text-base whitespace-nowrap font-sans text-[#861313]">
              See all <ChevronRight size={16} />
            </span>
          ) : (
            <div className="text-[#323131] color-#323131 flex items-center justify-center gap-2">
              <Filter className="mr-1" />
              <CalendarDays size={20} />
              <span className="font-normal text-xs tracking-tight">
                January 2025
              </span>
              <ChevronDown size={20} color="#323131" />
            </div>
          )}
        </div>

        {tabs.map((tabContent) => (
          <TabsContent
            key={tabContent.value}
            value={tabContent.value}
            forceMount
            className="mt-0 data-[state=inactive]:hidden"
          >
            <div
              className={
                "border border-[#E4E7EC] rounded-bl-lg rounded-br-lg overflow-hidden"
              }
            >
              <Table>
                {tabContent.headCells && (
                  <TableHeadSection headCells={tabContent.headCells} />
                )}
                <TableBody>{tabContent.content}</TableBody>
              </Table>
              {tabContent.value === "drivers-management" && (
                <Pagination
                  currentPage={verifiedPagination?.page || 1}
                  totalPages={verifiedPagination?.totalPages || 1}
                  onPageChange={verifiedPagination?.setPage}
                />
              )}
              {tabContent.value === "applications" && (
                <Pagination
                  currentPage={applicationPagination?.page || 1}
                  totalPages={applicationPagination?.totalPages || 1}
                  onPageChange={applicationPagination?.setPage}
                />
              )}
              {tabContent.value === "processed-payments" && (
                <Pagination
                  currentPage={processedPagination?.page || 1}
                  totalPages={processedPagination?.totalPages || 1}
                  onPageChange={processedPagination?.setPage}
                />
              )}
              {tabContent.value === "payment-requests" && (
                <Pagination
                  currentPage={requestedPagination?.page || 1}
                  totalPages={requestedPagination?.totalPages || 1}
                  onPageChange={requestedPagination?.setPage}
                />
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
