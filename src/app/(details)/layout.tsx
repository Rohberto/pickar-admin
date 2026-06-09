"use client";

import { profilfeBackground } from "@/assets/images";
import AuthGuard from "@/components/auth/auth-guard";
import Image from "next/image";
import { ReactNode } from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  min-height: 100dvh;
  overflow: hidden;
`;

const AppContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
  max-width: 100%;

  padding: 12px;

  @media (min-width: 768px) {
    padding: 24px;
  }

  @media (min-width: 1024px) {
    padding: 38px 36px;
  }
`;

const DetailsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <AuthGuard>
      <Root>
        <AppContent>
          <div className="relative min-h-0 h-36 rounded-4xl">
            <Image
              src={profilfeBackground}
              alt={"Graph Image"}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          {children}
        </AppContent>
      </Root>
    </AuthGuard>
  );
};

export default DetailsLayout;
