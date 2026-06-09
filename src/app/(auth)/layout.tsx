"use client";

import Image from "next/image";
import styled from "styled-components";
import { pickarImage } from "@/assets/images";

const Root = styled.div`
  height: 100dvh;
`;

const Grid = styled.div`
  --columns: 1fr;

  @media (min-width: 768px) {
    --columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    --columns: 1fr 0.8fr;
  }

  display: grid;
  height: 100%;
  grid-template-columns: var(--columns);

  @media (max-width: 767px) {
    & > :nth-child(2) {
      display: none;
    }
  }
`;

const GridChild = styled.div`
  padding: 20px;

  @media (min-width: 768px) {
    padding: 30px;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;

  &:nth-child(2) {
    padding: 0;
    align-items: center;
    position: relative;
    isolation: isolate;
  }
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  overflow: hidden;
  inset: 0;
  z-index: -1;
  user-select: none;
  pointer-events: none;
  background-color: #ffff;
`;

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <Root>
      <Grid>
        <GridChild>{children}</GridChild>
        <GridChild>
          <BackgroundImage>
            <Image
              src={pickarImage}
              alt="office"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </BackgroundImage>
        </GridChild>
      </Grid>
    </Root>
  );
}

export default AuthLayout;
