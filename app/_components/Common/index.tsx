"use client";

import styled, { css, CSSProp } from "styled-components";
import { getBreakpoint } from "@/_theme";
import { inconsolata } from "@/_theme/fonts";

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

export const CenteredFill = styled(Column)`
  ${Centered}
  width: 100%;
  text-align: center;
`;

export const Section = styled.section<{ $fillHeight?: boolean }>`
  ${CommonPad}
  width: 100%;
  display: flex;
  z-index: 1;
  position: relative;
  ${({ $fillHeight }): CSSProp =>
    $fillHeight &&
    css`
      min-height: 100vh;
      min-height: 100svh;
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

export const Pill = styled.div`
  ${inconsolata.style};
  color: black;
  background-color: ${({ theme }): string => theme.colors.pill};
  font-size: clamp(12px, 0.6rem, 0.6rem);
  border-radius: ${({ theme }): string => theme.borderRadius};
  padding: 2px 7px;
`;
