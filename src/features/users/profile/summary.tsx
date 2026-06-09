import {
  CarIcon,
  EmailIcon,
  OpenStarIcon,
  PhoneIcon,
  YosIcon,
} from "@/assets/icons";
import Image from "next/image";
import { ReactNode } from "react";
import styled from "styled-components";

interface UserSummaryProps {
  avatarUrl: string;
  name: string;
  phone: string;
  email: string;
  totalTrips: number;
  averageRating: number;
  yearsOfService: number;
}

const StatsContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col gap-y-2 items-center px-4">{children}</div>
  );
};

const StyledSpan = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #a7a7a7;
`;

const StyledValue = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  color: #3c3b3b;
`;

const UserSummary = ({
  avatarUrl,
  averageRating,
  name,
  phone,
  email,
  totalTrips,
  yearsOfService,
}: UserSummaryProps) => {
  return (
    <div className="flex pb-6 justify-between items-end -mt-16 z-50 relative border-b-2 border-[#f5f5f5]">
      <div className="flex flex-col pl-6 pt-6">
        <div className="w-25 h-25 rounded-full overflow-hidden bg-[#d9d9d9] border-8 border-[#f5f5f5]">
          <Image
            src={avatarUrl}
            alt={`${name}'s avatar`}
            width={100}
            height={100}
            priority
          />
        </div>
        <div>
          <p className=" font-semibold text-lg leading-6 text-[#3c3b3b]">
            {name}
          </p>
          <div className="flex gap-x-1 font-medium text-xs text-[#3c3b3b] py-2">
            <p className="flex items-center gap-x-1 leading-6">
              <PhoneIcon size={12} color={"#3c3b3b"} />
              <span>{phone}</span>
            </p>
            <p className="flex items-center gap-x-1 leading-6">
              <EmailIcon size={12} color={"#3c3b3b"} />
              <span>{email}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-x-2">
        <StatsContainer>
          <CarIcon size={24} />
          <StyledValue>{totalTrips}</StyledValue>
          <StyledSpan>Trips</StyledSpan>
        </StatsContainer>
        <StatsContainer>
          <OpenStarIcon size={24} />
          <StyledValue>{averageRating}</StyledValue>
          <StyledSpan>Average Rating</StyledSpan>
        </StatsContainer>
        <StatsContainer>
          <YosIcon size={24} />
          <StyledValue>{yearsOfService}</StyledValue>
          <StyledSpan>Years of Service</StyledSpan>
        </StatsContainer>
      </div>
    </div>
  );
};

export default UserSummary;
