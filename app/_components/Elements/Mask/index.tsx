"use client";

import { useEffect, useState } from "react";

import { NN } from "@/_lib/assets";
import styled, { css, CSSProp } from "styled-components";
import { Column, Centered } from "@/_components/Common";

const MaskHolder = styled(Column)`
  ${Centered}
  position: absolute;
  height: 100vh;
  right: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
  top: 100vh;

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
    conic-gradient(
      from 90deg at -25% 0%,
      transparent 0%,
      ${theme.colors.bg} ${$pos}%
    )
  `};
`;

export default ({
  offsetTop,
  offsetBottom,
}: {
  offsetTop: number;
  offsetBottom: number;
}): JSX.Element => {
  // offsetTop/Bottom is a number in terms of "vh"
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleProgress = (): void => {
      const el = document.getElementById("blurb");
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const { innerHeight } = window;

      const trueOffsetTop = (innerHeight * offsetTop) / 100;
      const trueOffsetBottom = (innerHeight * offsetBottom) / 100;

      const prog = Math.max(
        0,
        Math.min(
          1,
          (innerHeight - top - trueOffsetTop) / (height + trueOffsetBottom - trueOffsetTop),
        ),
      );

      setProgress(100 * prog);
    };
    handleProgress();
    window.addEventListener("scroll", handleProgress);
    return () => {
      window.removeEventListener("scroll", handleProgress);
    };
  }, []);

  return (
    <MaskHolder>
      <NN />
      <Mask $pos={progress / 4} />
    </MaskHolder>
  );
};
