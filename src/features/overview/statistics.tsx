"use client";
import StatCard from "@/components/shared/statCard";

interface StatData {
  id: string;
  title: string;
  value: string;
  rate: string;
}

interface StatsSectionProps {
  statData: StatData[];
}

const StatsSection = ({ statData }: StatsSectionProps) => {
  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(16rem,1fr))]">
      {statData?.map((stat) => {
        const { id, title, value, rate } = stat;
        return (
          <StatCard
            key={id}
            statId={id}
            statName={title}
            statRate={rate}
            statValue={value}
          />
        );
      })}
    </div>
  );
};

export default StatsSection;
