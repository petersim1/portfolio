"use client";

import styled, { css } from "styled-components";
import { Row, Card } from "@/_components/Common";
import { getBreakpoint } from "@/_theme";

export const Project = styled(Card)`
  justify-content: center;
  align-items: flex-start;
  flex: 1 0 40%;
  min-width: 320px;
  max-width: 440px;
  padding: 15px;
  text-align: left;
  position: relative;

  ${getBreakpoint(
    "xs",
    css`
      min-width: 100%;
    `,
  )}
`;

export const Links = styled(Row)`
  gap: ${({ theme }): string => theme.gaps.md};
  align-self: flex-end;
  font-size: 15px;

  & a {
    height: 100%;
    display: flex;
    aspect-ratio: 1 / 1;
  }
`;

export const Tags = styled(Row)`
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: ${({ theme }): string => theme.gaps.md};
`;

export const ImageHolder = styled.div`
  width: 100%;
  overflow: hidden;
  box-shadow: ${({ theme }): string => theme.shadow.box};
  border-radius: ${({ theme }): string => theme.borderRadius};
`;
