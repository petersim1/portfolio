"use client";

import styled from "styled-components";
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
