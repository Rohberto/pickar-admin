import { StatsArrow } from "@/assets/icons";
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
  font-weight: 500;
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

interface StatCardProps {
  statId: string;
  statName: string;
  statValue: string;
  statRate: string;
}

const titleMap: { [key: string]: string } = {
  total: "Total Number of Drivers",
  active: "Active Drivers",
  pending: "Pending Applications",
};

const StatCard = ({ statId, statValue, statRate }: StatCardProps) => {
  return (
    <Card>
      <CardName>{titleMap[statId]}</CardName>
      <div className="flex  gap-x-2">
        <div className="flex flex-col gap-y-2 items-center">
          <CardValue>{statValue}</CardValue>
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
