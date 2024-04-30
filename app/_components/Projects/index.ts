"use client";

import styled from "styled-components";
import { Row, Column, Centered } from "@/_components/Common";

export const Wrapper = styled(Column)`
  ${Centered};
  width: 100%;
  padding-top: calc(1.6rem + 20px + 20px);
  padding-bottom: 5rem;
  gap: ${({ theme }): string => theme.gaps.rem3};
`;

export const Projects = styled(Row)`
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  width: 100%;
  gap: ${({ theme }): string => theme.gaps.rem3};
`;
