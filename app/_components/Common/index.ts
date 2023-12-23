"use client";

import styled, { css, CSSProp } from "styled-components";
import { getBreakpoint } from "@/_theme";

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
