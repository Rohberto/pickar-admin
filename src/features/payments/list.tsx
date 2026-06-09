import { TabsTableWrapper } from "@/components/shared/table-components";
import ProcessedPaymentList from "./processed-payment";
import RequestedPaymentList from "./requested-payment";

export type PaymentStatus = "Completed" | "Pending";

export interface Payment {
  id: string;
  date: string;
  driverName: string;
  userName: string;
  amount: number;
  status: PaymentStatus;
}

const headCells = [
  { id: "date", label: "Date" },
  { id: "driver", label: "Driver" },
  { id: "user", label: "User" },
  { id: "amount", label: "Amount" },
  { id: "status", label: "Status" },
  { id: "options", label: "" },
];

export const formatNaira = (amount: number) =>
  `₦${amount.toLocaleString("en-NG")}`;

const tabList = [
  {
    value: "processed-payments",
    label: "Processed Payments",
    content: <ProcessedPaymentList />,
    headCells: headCells,
  },
  {
    value: "payment-requests",
    label: "Payment Requests",
    content: <RequestedPaymentList />,
    headCells: headCells,
  },
];

const PaymentsList = () => {
  return (
    <TabsTableWrapper
      defaultTab="processed-payments"
      tabs={tabList}
      showBorderTop={false}
    />
  );
};

export default PaymentsList;
