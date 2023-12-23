"use client";

import styled, { css, CSSProp } from "styled-components";

export const OGImage = styled.div<{ $url: string; $round?: boolean; $shadow?: boolean }>`
  ${({ $round }): CSSProp =>
    $round &&
    css`
      border-radius: ${({ theme }): string => theme.borderRadius};
    `};
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1.9 / 1;
  background-image: ${({ $url }): string => `url(${$url})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: -3px 3px 5px var(--box-shadow);
  ${({ $round, theme }): CSSProp =>
    $round &&
    css`
      box-shadow: -3px 3px 5px ${theme.colors.shadow};
    `};
`;
