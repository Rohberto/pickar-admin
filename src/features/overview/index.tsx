"use client";

import Image from "next/image";
import StatsSection from "./statistics";
import Users from "./users";
import { graphImage } from "@/assets/images";
import RideManagementTable from "./ride-management";
import { useGetResource } from "@/hooks/use-query-resource";
import { getDashboardData } from "@/service/dashboard.service";
import { getOverviewStatData } from "./data-selectors";
import { DialogLoader } from "@/components/shared/dialog-loader";

const Overview = () => {
  const { data: dashboardData, isLoading } = useGetResource({
    fn: getDashboardData,
    key: ["dashboard-data"],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) as any;

  const statData = getOverviewStatData(dashboardData?.stats);
  const deliveryData = dashboardData?.recentDeliveries || [];
  const recentUsers = dashboardData?.recentUsers || [];

  return (
    <>
      {isLoading ? (
        <DialogLoader />
      ) : (
        <div className="flex flex-col gap-y-7">
          <StatsSection statData={statData} />
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.5fr)_minmax(320px,1fr)] gap-4 items-stretch">
            <div className="relative w-full min-h-70 overflow-hidden rounded-lg">
              <Image
                src={graphImage}
                alt={"Graph Image"}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <Users users={recentUsers} className="min-h-70" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-4">
            <RideManagementTable rides={deliveryData} />
            <Users users={recentUsers} className="min-h-70" />
          </div>
        </div>
      )}
    </>
  );
};

export default Overview;
