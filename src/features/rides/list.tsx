"use client";
import Pagination from "@/components/shared/custom-pagination";
import StatusChip from "@/components/shared/status-chip";
import {
  StyledTableCell,
  StyledTableRow,
  TableWrapper,
} from "@/components/shared/table-components";
import { EllipsisVertical } from "lucide-react";
import { formatDate } from "../overview/data-selectors";

export type RideStatus = "Completed" | "Ongoing" | "Cancelled";

export interface Ride {
  id: string;
  driverName: string;
  userName: string;
  status: RideStatus;
  date: string;
}

interface PaginationDetails {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
interface RidesListProps {
  rides: Ride[];
  paginationDetails: PaginationDetails;
  setCurrentPage: (page: number) => void;
}

const headCells = [
  { id: "driver", label: "Driver" },
  { id: "user", label: "User" },
  { id: "status", label: "Status" },
  { id: "date", label: "Date" },
  { id: "options", label: "" },
];

const RidesList = ({
  rides,
  paginationDetails,
  setCurrentPage,
}: RidesListProps) => {
  return (
    <div>
      <TableWrapper headCells={headCells} tableName="Ride History">
        {rides?.map((ride) => {
          const { id, driverName, userName, status, date } = ride;
          return (
            <StyledTableRow key={id}>
              <StyledTableCell className="font-medium text-sm text-[#101828]">
                {driverName}
              </StyledTableCell>
              <StyledTableCell className="font-medium text-sm text-[#101828]">
                {userName}
              </StyledTableCell>
              <StyledTableCell>
                <StatusChip status={status} />
              </StyledTableCell>
              <StyledTableCell className="font-normal text-sm text-[#475467]">
                {formatDate(date)}
              </StyledTableCell>
              <StyledTableCell className="cursor-pointer">
                <EllipsisVertical />
              </StyledTableCell>
            </StyledTableRow>
          );
        })}
      </TableWrapper>
      <Pagination
        currentPage={paginationDetails?.page}
        totalPages={paginationDetails?.totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default RidesList;
