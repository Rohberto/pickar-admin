"use client";
import Image from "next/image";
import styled from "styled-components";

const ImageContainer = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 100%;
  overflow: hidden;
  background-color: #e2e8f0;
`;

const LinksContainer = styled.div`
  display: flex;
  padding: 4px 8px;
  column-gap: 2px;
  width: 100%;
  align-items: center;
`;

const adminLinks = ["overview", "projects"];

const AdminSection = () => {
  return (
    <div className="flex flex-col gap-y-4 w-full">
      <div className="flex gap-x-2 p-1 items-center">
        <ImageContainer>
          <Image
            src="https://picsum.photos/200"
            alt="Admin Avatar"
            priority
            width={36}
            height={36}
          />
        </ImageContainer>
        <span className="font-semibold text-lg text-[#3C3B3B]">Admin Name</span>
      </div>
      <div className="flex flex-col gap-y-1 pb-3 items-center justify-center">
        {adminLinks.map((link) => (
          <LinksContainer key={link}>
            <span className="text-[#1C1C1C1A] text-4xl">•</span>
            <span className="font-normal text-base text-[#1c1c1c] capitalize leading-5">
              {link}
            </span>
          </LinksContainer>
        ))}
      </div>
    </div>
  );
};

export default AdminSection;
