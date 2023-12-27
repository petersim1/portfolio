"use client";

import styled, { css, CSSProp } from "styled-components";
import { getBreakpoint } from "@/_theme";
import { inconsolata } from "@/_lib/fonts";

export const CommonPad = css`
  padding: ${({ theme }): string => theme.mainPad};
`;

export const HoverDim = css`
  &:hover {
    opacity: ${({ theme }): number => theme.opacity.hover};
  }
`;

export const Centered = css`
  justify-content: center;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1 0 0;
`;

export const CenteredFill = styled(Row)`
  ${Centered}
  height: 100%;
  width: 100%;
  text-align: center;
`;

export const Section = styled.section<{ $minHeight?: string }>`
  ${CommonPad}
  width: 100%;
  position: relative;
  z-index: 1;
  ${({ $minHeight }): CSSProp =>
    $minHeight &&
    css`
      min-height: ${$minHeight};
    `}
`;

export const Br = styled.br<{ $mobileOnly?: boolean }>`
  ${({ $mobileOnly }): CSSProp =>
    $mobileOnly &&
    css`
      display: none;
      ${getBreakpoint(
        "md",
        css`
          display: block;
        `,
      )}
    `}
`;

const PillOuter = styled.div`
  font-size: 0.6rem;
  padding: 1px;
  border-radius: ${({ theme }): string => theme.borderRadius};
  background: linear-gradient(
    90deg,
    ${({ theme }): string => theme.colors.gradientFrom},
    ${({ theme }): string => theme.colors.gradientTo}
  );
  position: relative;
  text-transform: lowercase;
`;

const PillInner = styled.div`
  padding: 2px 7px;
  border-radius: 10px;
  background-color: ${({ theme }): string => theme.colors.bg};
`;

export const Pill = ({ text }: { text: string }): JSX.Element => {
  return (
    <PillOuter className={inconsolata.className}>
      <PillInner>{text}</PillInner>
    </PillOuter>
  );
};
