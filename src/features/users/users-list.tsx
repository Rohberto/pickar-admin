"use client";
import Pagination from "@/components/shared/custom-pagination";
import StatusChip, { SuspendChip } from "@/components/shared/status-chip";
import {
  StyledTableCell,
  StyledTableRow,
  TableWrapper,
} from "@/components/shared/table-components";
import { EllipsisVertical } from "lucide-react";
import Image from "next/image";
import styled from "styled-components";

const headCells = [
  { id: "id", label: "User ID" },
  { id: "name", label: "Name" },
  { id: "email", label: "Email" },
  { id: "phoneNumber", label: "Phone Number" },
  { id: "status", label: "Status" },
  { id: "action", label: "Action" },
  { id: "options", label: "" },
];

export type UserStatus = "Active" | "Inactive";

export interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  status?: UserStatus;
  isApproved: boolean;
  photo: string;
}

interface PaginationDetails {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
interface UsersListProps {
  users: User[];
  paginationDetails: PaginationDetails;
  setCurrentPage: (page: number) => void;
}

const ImageContainer = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 100%;
  overflow: hidden;
  background-color: #e2e8f0;
`;

const UsersList = ({
  users,
  paginationDetails,
  setCurrentPage,
}: UsersListProps) => {
  console.log(paginationDetails);
  return (
    <>
      <TableWrapper
        headCells={headCells}
        showBorderTop={false}
        tableName="User Management"
      >
        {users?.map((user) => {
          const { id, phone, fullName, email, isApproved, photo } = user;
          const status = isApproved ? "Active" : "Inactive";
          return (
            <StyledTableRow key={id}>
              <StyledTableCell>{id}</StyledTableCell>
              <StyledTableCell className="font-medium text-sm text-[#101828] ">
                <div className="flex items-center gap-x-2">
                  <ImageContainer>
                    <Image
                      src={photo}
                      alt="User Photo"
                      priority
                      width={36}
                      height={36}
                    />
                  </ImageContainer>
                  {fullName}
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
              <StyledTableCell>
                <SuspendChip />
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
    </>
  );
};

export default UsersList;
