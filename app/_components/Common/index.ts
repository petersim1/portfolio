"use client";

import styled, { css } from "styled-components";

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
