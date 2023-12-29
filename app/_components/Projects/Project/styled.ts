"use client";

import styled, { css } from "styled-components";
import { Row, Column } from "@/_components/Common";
import { getBreakpoint } from "@/_theme";

export const Project = styled(Column)`
  justify-content: center;
  align-items: flex-start;
  flex: 1 0 40%;
  min-width: 320px;
  max-width: 440px;
  gap: ${({ theme }): string => theme.gaps.md};
  border: 1px solid ${({ theme }): string => theme.colors.borderColor};
  border-radius: ${({ theme }): string => theme.borderRadius};
  padding: 15px;
  text-align: left;
  position: relative;
  box-shadow: ${({ theme }): string => theme.shadow.boxActive};
  background-color: ${({ theme }): string => theme.colors.card};
  transition: box-shadow ${({ theme }): string => theme.transitions.speedMdEase};

  &:hover {
    box-shadow: ${({ theme }): string => theme.shadow.boxInactive};
  }

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
  border: 1px solid ${({ theme }): string => theme.colors.borderColor};
  border-radius: ${({ theme }): string => theme.borderRadius};
`;
