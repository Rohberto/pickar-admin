const formatRate = (rate: unknown) => {
  if (typeof rate === "string") {
    return rate.includes("%") ? rate : `${rate}%`;
  }

  if (typeof rate === "number") {
    return `${rate}%`;
  }

  return "0%";
};

// const splitCamelCase = (str: string) =>
//   str
//     .replace(/([A-Z])/g, " $1")
//     .replace(/^./, (s) => s.toUpperCase())
//     .trim();

export const getOverviewStatData = (stats: Record<string, unknown> = {}) => {
  const getRate = (statKey: string) =>
    formatRate(
      stats[`${statKey}Rate`] ??
        stats[`${statKey}Percentage`] ??
        stats[`${statKey}Change`] ??
        0,
    );

  return [
    {
      id: "completedDeliveries",
      title: "Completed Delivery",
      value: String(stats.completedDeliveries ?? 0),
      rate: getRate("completedDeliveries"),
    },
    {
      id: "ongoingDeliveries",
      title: "Ongoing Delivery",
      value: String(stats.ongoingDeliveries ?? 0),
      rate: getRate("ongoingDeliveries"),
    },
    {
      id: "activeDrivers",
      title: "Active Drivers",
      value: String(stats.activeDrivers ?? 0),
      rate: getRate("activeDrivers"),
    },
    {
      id: "totalRevenue",
      title: "Total Revenue",
      value: String(stats.totalRevenue ?? 0),
      rate: getRate("totalRevenue"),
    },
  ];
};

// import { DashboardStats } from "@/types/dashboard";

// const splitCamelCase = (str: string) =>
//   str
//     .replace(/([A-Z])/g, " $1")
//     .replace(/^./, (s) => s.toUpperCase())
//     .trim();

// export const getOverviewStatData = (stats: DashboardStats) => {
//   return [
//     {
//       id: "completedDeliveries",
//       title: splitCamelCase("completedDeliveries"),
//       value: String(stats.completedDeliveries),
//     },
//     {
//       id: "ongoingDeliveries",
//       title: splitCamelCase("ongoingDeliveries"),
//       value: String(stats.ongoingDeliveries),
//     },
//     {
//       id: "activeDrivers",
//       title: splitCamelCase("activeDrivers"),
//       value: String(stats.activeDrivers),
//     },
//     {
//       id: "totalRevenue",
//       title: splitCamelCase("totalRevenue"),
//       value: `₦${stats.totalRevenue.toLocaleString("en-NG")}`,
//     },
//     {
//       id: "totalUsers",
//       title: splitCamelCase("totalUsers"),
//       value: String(stats.totalUsers),
//     },
//     {
//       id: "totalDrivers",
//       title: splitCamelCase("totalDrivers"),
//       value: String(stats.totalDrivers),
//     },
//     {
//       id: "cancelledDeliveries",
//       title: splitCamelCase("cancelledDeliveries"),
//       value: String(stats.cancelledDeliveries),
//     },
//     {
//       id: "totalDeliveries",
//       title: splitCamelCase("totalDeliveries"),
//       value: String(stats.totalDeliveries),
//     },
//   ];
// };

export const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
