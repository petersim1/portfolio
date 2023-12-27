"use client";

import styled, { css, CSSProp } from "styled-components";
import { Row, Column, Centered } from "@/_components/Common";

export const Project = styled(Column)`
  ${Centered}
  width: clamp(320px, 100%, 800px);
  gap: ${({ theme }): string => theme.gaps.md};
  text-align: center;
`;

export const Links = styled(Row)`
  gap: ${({ theme }): string => theme.gaps.lg};

  & a {
    height: 100%;
    height: 15px;
    display: flex;
    aspect-ratio: 1 / 1;
  }
`;

export const Tags = styled(Row)`
  ${Centered}
  flex-wrap: wrap;
  gap: ${({ theme }): string => theme.gaps.md};
`;

export const ImageHolder = styled.div<{ $round: boolean }>`
  width: 100%;
  max-width: 400px;
  overflow: hidden;
  ${({ $round, theme }): CSSProp =>
    $round &&
    css`
      border-radius: ${theme.borderRadius};
      box-shadow: -3px 3px 5px ${theme.colors.shadow};
    `};
`;
