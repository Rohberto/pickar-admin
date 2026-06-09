import React from "react";
import { TabsList, TabsTrigger } from "../ui/tabs";

export const StyledTabsList = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return (
    <TabsList variant="line" className="">
      {children}
    </TabsList>
  );
};

export const StyledTabsTrigger = ({
  children,
  value,
}: {
  children?: React.ReactNode;
  value: string;
}) => {
  return (
    <TabsTrigger
      value={value}
      className="  data-[state=active]:text-[#861313] px-6 text-base font-medium text-[#000000] tracking-tight"
    >
      {children}
    </TabsTrigger>
  );
};
