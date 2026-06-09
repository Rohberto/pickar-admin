"use client";

import { ReactNode } from "react";
import styled from "styled-components";

const SidebarContainer = styled.section`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100dvh;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 16px;
  border-right: 1px solid #1c1c1c1a;
  row-gap: 16px;
  width: 14.8125rem;
  flex-shrink: 0;
  background-color: #fff;
  z-index: 1;
`;

const SideBar = ({ children }: { children: ReactNode }) => {
  return <SidebarContainer>{children}</SidebarContainer>;
};

export default SideBar;
