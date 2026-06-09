import {
  StyledTableCell,
  StyledTableRow,
} from "@/components/shared/table-components";
import { ImageContainer } from "./list";
import StatusChip, { SuspendChip } from "@/components/shared/status-chip";
import { StarIcon } from "@/assets/icons";
import Image from "next/image";
import { EllipsisVertical } from "lucide-react";
import { useVerifiedDrivers } from "./hooks/useVerifiedDrivers";

export const VerifiedDriversTableHeadCells = [
  { id: "name", label: "Name" },
  { id: "email", label: "Email" },
  { id: "phoneNumber", label: "Phone Number" },
  { id: "status", label: "Status" },
  { id: "rating", label: "Rating" },
  { id: "action", label: "Action" },
  { id: "options", label: "" },
];

const VerifiedDrivers = () => {
  const { drivers } = useVerifiedDrivers();
  return (
    <>
      {drivers?.map((driver) => {
        const { id, phone, name, status, email, rating, photo } = driver;
        return (
          <StyledTableRow key={id}>
            <StyledTableCell className="font-medium text-sm text-[#101828] ">
              <div className="flex items-center gap-x-2">
                <ImageContainer>
                  <Image
                    src={photo}
                    alt="user avatar"
                    priority
                    width={36}
                    height={36}
                  />
                </ImageContainer>
                {name}
              </div>
            </StyledTableCell>
            <StyledTableCell className="font-medium text-sm text-[#101828]">
              {email}
            </StyledTableCell>
            <StyledTableCell className="font-normal text-sm text-[#475467]">
              {phone}
            </StyledTableCell>
            <StyledTableCell>
              <StatusChip status={status} />
            </StyledTableCell>
            <StyledTableCell className="font-semibold text-xs text-[#3c3b3b]">
              <p className="flex items-center gap-1">
                <StarIcon /> {rating?.average}
              </p>
            </StyledTableCell>
            <StyledTableCell>
              <SuspendChip />
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

export default VerifiedDrivers;
