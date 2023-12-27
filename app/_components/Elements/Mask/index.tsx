"use client";

import { useMemo } from "react";

import { useScrollContext } from "@/_providers/scroll";
import { NN } from "@/_lib/assets";
import styled, { css, CSSProp } from "styled-components";
import { Column, Centered } from "@/_components/Common";

const MaskHolder = styled(Column)<{ $top: string }>`
  ${Centered}
  position: absolute;
  height: 100vh;
  right: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
  top: ${({ $top }): string => $top};

  & svg {
    // position: absolute;
    opacity: 0.25;
    fill: gray;
    stroke: gray;
    min-width: 100vw;
    min-height: 100vh;
  }
`;

const Mask = styled.div<{ $pos: number }>`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  background: ${({ $pos, theme }): CSSProp => css`
    linear-gradient(
      -60deg,
      ${theme.colors.bg} ${$pos}%,
      transparent
    )
  `};
`;

export default (): JSX.Element => {
  const { breakpoints, progress } = useScrollContext();
  const totHeight = useMemo(() => breakpoints[1] - breakpoints[0], [breakpoints]);
  return (
    <MaskHolder $top={`${(breakpoints[0] + totHeight) / 2}px`}>
      <NN />
      <Mask $pos={100 - progress[1]} />
    </MaskHolder>
  );
};
