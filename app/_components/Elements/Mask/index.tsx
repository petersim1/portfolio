"use client";

import { NN } from "@/_lib/assets";
import styled from "styled-components";
import { Column, Centered } from "@/_components/Common";

const MaskHolder = styled(Column)`
  ${Centered}
  position: absolute;
  height: 100vh;
  height: 100svh;
  right: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
  top: 0;

  & svg {
    opacity: 0.2;
    fill: currentColor;
    stroke: currentColor;
    min-width: 100vw;
    min-height: 100vh;
    min-height: 100svh;
  }
`;

const Mask = styled.div`
  background: radial-gradient(
    circle at 20% 50%,
    ${({ theme }): string => theme.colors.bg},
    transparent
  );
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  height: 100vh;
  height: 100svh;
  width: 100vw;
`;

export default (): JSX.Element => {
  return (
    <MaskHolder>
      <NN />
      <Mask />
    </MaskHolder>
  );
};
