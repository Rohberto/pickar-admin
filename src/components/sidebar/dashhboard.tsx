"use client";
import styled from "styled-components";
import navItems from "./nav-items";
import NavItem from "./containers";

const NavItemsContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-bottom: 12px;
  width: 100%;
`;

const DashboardSection = () => {
  return (
    <>
      <div className="flex py-1 px-3 w-full">
        <p className={"font-normal text-sm text-[#1c1c1c66]"}>Dashboards</p>
      </div>
      <NavItemsContainer>
        {navItems.map(({ href, title, icon: Icon }, index) => (
          <NavItem key={index} to={href || ""} label={title} icon={Icon} />
        ))}
      </NavItemsContainer>
    </>
  );
};

export default DashboardSection;
