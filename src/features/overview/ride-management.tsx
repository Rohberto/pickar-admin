import StatusChip from "@/components/shared/status-chip";
import {
  StyledTableCell,
  StyledTableRow,
  TableWrapper,
} from "@/components/shared/table-components";
import { EllipsisVertical } from "lucide-react";
import { formatDate } from "./data-selectors";

const headCells = [
  { id: "driver", label: "Driver" },
  { id: "user", label: "User" },
  { id: "status", label: "Status" },
  { id: "date", label: "Date" },
  { id: "options", label: "" },
];

type RideStatus = "Completed" | "Ongoing";
interface Ride {
  id: string;
  driverName: string;
  userName: string;
  status: RideStatus;
  price: number;
  date: string;
}
interface RideManagementTableProps {
  rides: Ride[];
}

const RideManagementTable = ({ rides }: RideManagementTableProps) => {
  return (
    <TableWrapper
      headCells={headCells}
      tableName="Ride Management"
      dashboardTable={true}
      to="/rides"
    >
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
  );
};

export default RideManagementTable;
