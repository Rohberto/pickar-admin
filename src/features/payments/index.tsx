"use client";
import { useGetResource } from "@/hooks/use-query-resource";
import PaymentsList from "./list";
import { getPaymentData } from "@/service/payments.service";
import { getUsersStatsFromUsersData } from "@/utils/data-selector";
import StatCard from "./stats";
import { DialogLoader } from "@/components/shared/dialog-loader";

const Payments = () => {
  const { data: paymentsData, isLoading } = useGetResource({
    fn: () => getPaymentData({ query_string: `page=${1}` }),
    key: ["all-payment-data", String(1)],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) as any;

  const statData = getUsersStatsFromUsersData(paymentsData?.stats);

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
          <PaymentsList />
        </div>
      )}
    </>
  );
};

export default Payments;
