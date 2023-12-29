"use client";

import { useState } from "react";

import styled from "styled-components";
import { Row, Centered } from "@/_components/Common";

export const P = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
`;

export const SubHeader = styled.p`
  font-size: 0.75rem;
  line-height: 1rem;
`;

export const H1 = styled.h1`
  font-size: 3.75rem;
  font-weight: 700;
  letter-spacing: -0.025em;

  @media screen and (max-width: ${({ theme }): string => theme.breakpoints.xl}px) {
    font-size: 3rem;
  }
`;

export const H2 = styled.h2`
  font-size: 2.25rem;
  font-weight: 900;
  letter-spacing: -0.025em;
`;

export const H3 = styled.h3`
  font-size: 1.5rem;
  line-height: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.025em;
`;

export const H4 = styled.h4`
  font-size: 1.5rem;
  line-height: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.025em;
`;

export const Shadow = styled.span`
  text-shadow: 2px 2px 5px ${({ theme }): string => theme.shadow.text};
`;

export const ShowGradient = styled.span`
  color: transparent;
  font-weight: 800;
`;

export const Faint = styled.span`
  color: ${({ theme }): string => theme.colors.faint};
`;

const ClipText = styled.p<{ $lines: number; $open: boolean }>`
  font-size: 0.875rem;
  line-height: 1.2rem;
  font-weight: 400;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${({ $lines, $open }): number => ($open ? 20 : $lines)};
  line-clamp: ${({ $lines, $open }): number => ($open ? 20 : $lines)};
  -webkit-box-orient: vertical;
  max-height: ${({ $lines, $open }): string => `calc(${$open ? 20 : $lines} * 1.2rem)`};
  transition: max-height ${({ theme }): string => theme.transitions.speedMdEase};
  cursor: pointer;
`;

export const ClippedText = ({
  children,
  $lines,
}: {
  children: React.ReactNode;
  $lines: number;
}): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <ClipText $lines={$lines} $open={open} onClick={(): void => setOpen(!open)}>
      {children}
    </ClipText>
  );
};

const GradientBlockText = styled(Row)<{ $posX: number; $posY: number }>`
  background: radial-gradient(
    circle at ${({ $posX, $posY }): string => `${$posX}% ${$posY}%`},
    ${({ theme }): string => theme.colors.gradientFrom},
    ${({ theme }): string => theme.colors.gradientTo}
  );
  background-blend-mode: saturation;
  background-clip: text;
  -webkit-background-clip: text;
  ${Centered}
  width: 100%;
  height: 100%;
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
