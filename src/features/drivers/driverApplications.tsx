import {
  StyledTableCell,
  StyledTableRow,
} from "@/components/shared/table-components";
import { ImageContainer } from "./list";
import { SuspendChip } from "@/components/shared/status-chip";
import Image from "next/image";
import { EllipsisVertical } from "lucide-react";
import { useDriverApplications } from "./hooks/useDriverApplications";

export const DriverApplicationsTableHeadCells = [
  { id: "name", label: "Name" },
  { id: "email", label: "Email" },
  { id: "phoneNumber", label: "Phone Number" },
  { id: "action", label: "Action" },
  { id: "options", label: "" },
];

const DriverApplications = () => {
  const { drivers } = useDriverApplications();

  return (
    <>
      {drivers?.map((driver) => {
        const { id, phone, name, email, photo } = driver;
        return (
          <StyledTableRow key={id}>
            <StyledTableCell className="font-medium text-sm text-[#101828]">
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
              <div>
                <SuspendChip />
                {/* <StatusChip status={""} /> */}
              </div>
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

export default DriverApplications;
