import {
  ActiveDrivers,
  CompletedDel,
  EarningRev,
  OngoingDel,
  StatsArrow,
} from "@/assets/icons";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  border-radius: 16px;
  border: 1px solid #f5f5f5;
  width: 100%;
  max-width: 281px;
  height: 135px;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 25px;
`;

const CardName = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: #000000;
  letter-spacing: 0.07em;
  font-family: "DM Sans", sans-serif;
`;

const CardValue = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #000000;
  letter-spacing: 0.07em;
  font-family: "DM Sans", sans-serif;
`;

const RateValue = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #00b857;
  letter-spacing: 0.07em;
  font-family: "Inter", sans-serif;
`;

const IconContainer = styled.div`
  flex
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 38px;
  border-radius: 8px;
  padding: 10px;
`;

interface StatCardProps {
  statId: string;
  statName: string;
  statValue: string;
  statRate: string;
}

const colorMap: { [key: string]: string } = {
  completedDeliveries: "#29B97308",
  completed: "#29B97308",
  ongoingDeliveries: "#B27A0008",
  ongoing: "#B27A0008",
  activeDrivers: "#86131308",
  cancelled: "#86131308",
  totalRevenue: "#F9F9F9",
  total: "#F9F9F9",
};

const iconContainerColorMap: { [key: string]: string } = {
  completedDeliveries: "#E7F5EE",
  completed: "#E7F5EE",
  ongoingDeliveries: "#B27A000A",
  ongoing: "#B27A000A",
  activeDrivers: "#FEFAFA",
  cancelled: "#FEFAFA",
  totalRevenue: "#FCFDFD",
  total: "#FCFDFD",
};

const iconMap: { [key: string]: string } = {
  completedDeliveries: CompletedDel,
  completed: CompletedDel,
  ongoingDeliveries: OngoingDel,
  ongoing: OngoingDel,
  activeDrivers: ActiveDrivers,
  cancelled: ActiveDrivers,
  totalRevenue: EarningRev,
  total: EarningRev,
};

const StatCard = ({ statId, statName, statValue, statRate }: StatCardProps) => {
  const Icon = iconMap[statId] || "";

  return (
    <Card style={{ backgroundColor: colorMap[statId] }}>
      <IconContainer style={{ backgroundColor: iconContainerColorMap[statId] }}>
        {Icon ? <Icon /> : null}
      </IconContainer>
      <div className="flex flex-col gap-y-2">
        <CardName> {statName}</CardName>
        <div className="flex gap-x-2 items-center">
          <CardValue> {statValue}</CardValue>
          <p className="flex gap-x-1 items-center">
            <StatsArrow size={16} />
            <RateValue>{statRate}</RateValue>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default StatCard;
