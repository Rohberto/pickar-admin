"use client";
import { TabsTableWrapper } from "@/components/shared/table-components";
import styled from "styled-components";
import VerifiedDrivers, {
  VerifiedDriversTableHeadCells,
} from "./verifiedDrivers";
import DriverApplications, {
  DriverApplicationsTableHeadCells,
} from "./driverApplications";

export const ImageContainer = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 100%;
  overflow: hidden;
  background-color: #e2e8f0;
`;

export type DriverStatus = "Active" | "Inactive";

export interface Driver {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: DriverStatus;
  rating: { average: number; count: number };
  photo: string;
}

const tabList = [
  {
    value: "drivers-management",
    label: "Drivers Management",
    content: <VerifiedDrivers />,
    headCells: VerifiedDriversTableHeadCells,
  },
  {
    value: "applications",
    label: "Applications",
    content: <DriverApplications />,
    headCells: DriverApplicationsTableHeadCells,
  },
];

export const DriversList = () => {
  return (
    <TabsTableWrapper
      defaultTab="drivers-management"
      tabs={tabList}
      showBorderTop={false}
    />
  );
};

export default DriversList;
