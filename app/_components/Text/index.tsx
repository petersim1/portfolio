"use client";

import { useState } from "react";

import styled from "styled-components";
import { Row, Centered } from "@/_components/Common";

export const P = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
`;

export const H1 = styled.h1`
  font-size: 3.75rem;
  font-weight: 700;

  @media screen and (max-width: ${({ theme }): string => theme.breakpoints.xl}px) {
    font-size: 3rem;
  }
`;

export const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 900;
`;

export const H3 = styled.h3`
  font-size: 1.125rem;
  line-height: 1.15rem;
  font-weight: 800;
`;

export const Shadow = styled.span`
  text-shadow: 5px 5px 10px ${({ theme }): string => theme.colors.shadow};
`;

export const ShowGradient = styled.span`
  color: transparent;
  font-weight: 800;
`;

const GradientBlockText = styled(Row)<{ $posX: number; $posY: number }>`
  background: radial-gradient(
    circle at ${({ $posX, $posY }): string => `${$posX}% ${$posY}%`},
    ${({ theme }): string => theme.colors.gradientFrom},
    ${({ theme }): string => theme.colors.gradientTo}
  );
  background-blend-mode: saturation;
  background-clip: text;
  -webkit-background-clip: text;
  padding: 3rem;
  ${Centered}
  height: 60%;
  width: 100%;
`;

export const GradientBlock = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [posX, setPosX] = useState(50);
  const [posY, setPosY] = useState(0);
  const handleHover = (event: React.MouseEvent<HTMLDivElement>): void => {
    const el = event.currentTarget;
    const { x, y, height, width } = el.getBoundingClientRect();
    const { clientX, clientY } = event;

    const percentX = (100 * (clientX - x)) / width;
    const percentY = (100 * (clientY - y)) / height;

    // solution without needing ref's and states
    setPosX(percentX);
    setPosY(percentY);
  };

  return (
    <GradientBlockText onMouseMove={handleHover} $posX={posX} $posY={posY}>
      {children}
    </GradientBlockText>
  );
};
