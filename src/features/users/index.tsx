"use client";

import { useState } from "react";
import UsersList, { User } from "./users-list";
import { useGetResource } from "@/hooks/use-query-resource";
import { getAllUsers } from "@/service/users.service";
import { getUsersStatsFromUsersData } from "@/utils/data-selector";
import StatCard from "./stats";
import { DialogLoader } from "@/components/shared/dialog-loader";

const Users = () => {
  const [page, setPage] = useState(1);
  const { data: userData, isLoading } = useGetResource({
    fn: () => getAllUsers({ query_string: `page=${page}` }),
    key: ["all-users-data", String(page)],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) as any;

  const users = (userData?.users || []) as User[];
  const statData = getUsersStatsFromUsersData(userData?.stats);
  const paginationDetails = userData?.pagination || {};

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
          <UsersList
            users={users}
            paginationDetails={paginationDetails}
            setCurrentPage={setPage}
          />
        </div>
      )}
    </>
  );
};

export default Users;
