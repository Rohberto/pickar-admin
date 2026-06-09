import StatusChip from "@/components/shared/status-chip";
import {
  StyledTableCell,
  StyledTableRow,
} from "@/components/shared/table-components";
import { EllipsisVertical } from "lucide-react";
import { formatNaira } from "./list";
import { usePaymentRequests } from "./hooks/usePaymentRequest";
import { formatDate } from "../overview/data-selectors";

const RequestedPaymentList = () => {
  const { paymentRequest } = usePaymentRequests();

  return (
    <>
      {paymentRequest?.map((payment) => {
        const { id, driverName, userName, status, date, amount } = payment;
        return (
          <StyledTableRow key={id}>
            <StyledTableCell>{formatDate(date)}</StyledTableCell>
            <StyledTableCell className="font-medium text-sm text-[#101828]">
              {driverName}
            </StyledTableCell>
            <StyledTableCell className="font-medium text-sm text-[#101828]">
              {userName}
            </StyledTableCell>
            <StyledTableCell>{formatNaira(amount)}</StyledTableCell>
            <StyledTableCell className="font-normal text-sm text-[#475467]">
              <StatusChip status={status} />
            </StyledTableCell>
            <StyledTableCell className="cursor-pointer">
              <EllipsisVertical />
            </StyledTableCell>
          </StyledTableRow>
        );
      })}
    </>
  );
};

export default RequestedPaymentList;
