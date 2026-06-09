import { Badge } from "../ui/badge";

const StatusChip = ({ status }: { status: string }) => {
  const getStatusChipProps = (
    statusValue: string,
  ): { color: string; label: string } => {
    switch (statusValue?.toLowerCase()) {
      case "completed":
        return {
          color: `bg-[#d6ffdf] text-[#00b227] border-[#00b227]`,
          label: "Completed",
        };
      case "delivered":
        return {
          color: `bg-[#d6ffdf] text-[#00b227] border-[#00b227]`,
          label: "Delivered",
        };
      case "ongoing":
        return {
          color: `bg-[#fff2d6] text-[#b27a00] border-[#b27a00]`,
          label: "Ongoing",
        };
      case "active":
        return {
          color: `bg-[#d6ffdf] text-[#00b227] border-[#00b227]`,
          label: "Active",
        };
      case "inactive":
        return {
          color: `bg-[#fff2d6] text-[#b27a00] border-[#b27a00]`,
          label: "Inactive",
        };
      case "pending":
        return {
          color: `bg-[#fff2d6] text-[#b27a00] border-[#b27a00]`,
          label: "Pending",
        };
      case "cancelled":
        return {
          color: `bg-[#FEFAFA] text-[#861313] border-[#861313]`,
          label: "Cancelled",
        };
      default:
        return {
          color: "default",
          label: statusValue || "Unknown",
        };
    }
  };

  const chipProps = getStatusChipProps(status);

  return (
    <Badge
      variant={"outline"}
      className={`rounded-xs px-3 py-2 border-[0.5px] font-medium text-xs leading-none ${chipProps.color}`}
    >
      {chipProps.label}
    </Badge>
  );
};

export const SuspendChip = () => {
  return (
    <Badge
      variant={"outline"}
      className={`rounded-xs px-3 py-2 border-[0.5px] font-medium text-xs leading-none bg-[#fcfdfd] border-[#3c3b3b] text-[#3c3b3b] cursor-pointer`}
    >
      Suspend
    </Badge>
  );
};

export default StatusChip;
