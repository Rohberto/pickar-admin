"use client";
import { ReactNode } from "react";
import styled from "styled-components";
import AuthGuard from "@/components/auth/auth-guard";
import SideBar from "@/components/sidebar";
import AdminSection from "@/components/sidebar/admin";
import DashboardSection from "@/components/sidebar/dashhboard";
import Navbar from "@/components/navbar";

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

  padding-top: 12px;
  padding-left: 8px;
  padding-right: 8px;

  @media (min-width: 768px) {
    padding-top: 24px;
    padding-left: 12px;
    padding-right: 12px;
    padding-left: 15.8125rem;
  }

  @media (min-width: 1024px) {
    padding-top: 32px;
    padding-right: 16px;
    padding-left: 15.8125rem;
  }
`;

const MainContent = styled.main`
  flex: 1;
  padding-top: 8px;
  padding-bottom: 16px;

  @media (min-width: 768px) {
    padding-top: 16px;
  }

  @media (min-width: 1024px) {
    padding-top: 24px;
  }
`;

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <AuthGuard>
      <Root>
        <SideBar>
          <AdminSection />
          <DashboardSection />
        </SideBar>
        <AppContent>
          <Navbar />
          <MainContent className="max-w-300">{children}</MainContent>
        </AppContent>
      </Root>
    </AuthGuard>
  );
};

export default DashboardLayout;
