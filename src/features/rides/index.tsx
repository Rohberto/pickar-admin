"use client";

import StatCard from "@/components/shared/statCard";
import RidesList from "./list";
import { useGetResource } from "@/hooks/use-query-resource";
import { getAllRides } from "@/service/rides.service";
import { useState } from "react";
import { getRidesStatFromRidesData } from "@/utils/data-selector";
import { DialogLoader } from "@/components/shared/dialog-loader";
import NoRecord from "@/components/shared/table-empty-state";

const Rides = () => {
  const [page, setPage] = useState(1);
  const { data: ridesData, isLoading } = useGetResource({
    fn: () => getAllRides({ query_string: `page=${page}` }),
    key: ["all-rides-data", String(page)],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) as any;

  const statData = getRidesStatFromRidesData(ridesData?.stats);
  const ridesListData = ridesData?.deliveries || [];

  return (
    <>
      {isLoading ? (
        <DialogLoader />
      ) : (
        <div className="flex flex-col gap-y-7">
          <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(16rem,1fr))]">
            {statData.map((stat) => {
              const { id, title, value, rate } = stat;
              return (
                <StatCard
                  key={id}
                  statId={id}
                  statName={title}
                  statRate={String(rate)}
                  statValue={String(value)}
                />
              );
            })}
          </div>
          {ridesListData?.length > 0 ? (
            <RidesList
              rides={ridesListData}
              paginationDetails={ridesData?.pagination}
              setCurrentPage={setPage}
            />
          ) : (
            <NoRecord />
          )}
        </div>
      )}
    </>
  );
};

export default Rides;
