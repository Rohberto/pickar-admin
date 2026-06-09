/* eslint-disable @typescript-eslint/no-explicit-any */

interface StatData {
  id: string;
  title: string;
  value: number;
  rate: number;
}

const splitCamelCase = (str: string) =>
  str
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (s) => s.toUpperCase())
    .trim();

export const getRidesStatFromRidesData = (ridesData: any) => {
  const result = Object.entries(ridesData ?? {}).map(([key, value]) => {
    return {
      id: key,
      title: `${splitCamelCase(key)} Delivery`,
      value: value,
      rate: value,
    } as StatData;
  });

  return result;
};

export const getUsersStatsFromUsersData = (userData: any) => {
  const result = Object.entries(userData ?? {}).map(([key, value]) => {
    return {
      id: key,
      title: splitCamelCase(key),
      value: value,
      rate: value,
    } as StatData;
  });

  return result;
};
