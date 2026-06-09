import styled from "styled-components";
import { ElementType } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const NavItemsContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-bottom: 12px;
  width: 100%;
`;

// export const NavItemContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin-top: 0.25rem;
//   padding: 0;

//   a {
//     padding: 0.15rem 0rem;
//     display: flex;
//     flex-wrap: nowrap;
//     align-items: center;
//     color: inherit;
//     text-decoration: none;
//     transition: background var(--transition-settings-1, 0.2s ease);
//     cursor: pointer;
//     width: 100%;
//   }

//   section {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 0.325rem;
//     cursor: pointer;
//     padding: 0.625rem 0.625rem 0.625rem 0;
//     p {
//       text-align: center;
//     }
//   }

//   a.active {
//     background: #f1f4fe;
//     color: #030c25;
//     justify-content: center;
//     border-top-left-radius: 0.5rem;
//     border-bottom-left-radius: 0.5rem;

//     svg {
//       fill: #030c25;
//     }
//     p {
//       color: #030c25;
//       font-weight: 600;
//     }
//   }
// `;

const NavItemContainer = styled.div<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  padding: 0;
  position: relative;

  a {
    padding: 0.25rem 0rem;
    gap: 0.5rem;
    cursor: pointer;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    color: inherit;
    text-decoration: none;
    border: 1px solid transparent;
    transition: border var(--transition-settings-1, 0.2s ease);
    width: 100%;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.325rem;
    cursor: pointer;
    padding: 0.625rem 0.625rem 0.625rem 0;
    p {
      text-align: center;
    }
  }

  a.active {
    border-color: #6b0f0f;
    border-radius: 0.75rem;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 1rem;
      bottom: 1rem;
      width: 4px;
      background: #6b0f0f;
      border-radius: 2px;
    }

    p {
      color: #6b0f0f;
      font-weight: 400;
    }
  }

  &:hover {
    background: #fefafa;
  }
`;

export const IconContainer = styled("button")`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 20px;
    height: 20px;
    margin-top: 3px;
  }
`;

const LinkTitle = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: #1c1c1c;
  margin-top: 2px;
  text-align: left;
  font-family: "plus-jakarta-sans", sans-serif;
`;

interface NavItemProps {
  to: string;
  label: string;
  icon: ElementType;
}

const NavItem = ({ to, label, icon: Icon }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(to);

  return (
    <NavItemContainer>
      <Link href={to} className={` ${isActive ? "active" : ""}`}>
        <div className="flex justify-end items-center w-8 h-6">
          {!isActive && <ChevronRight size={20} color="#1c1c1c" />}
        </div>
        <section className="">
          <IconContainer>
            <Icon />
          </IconContainer>
          <LinkTitle>{label}</LinkTitle>
        </section>
      </Link>
    </NavItemContainer>
  );
};

export default NavItem;
