"use client";

import styled from "styled-components";
import { Row, Column, Centered } from "@/_components/Common";

export const Wrapper = styled(Column)`
  ${Centered};
  width: 100%;
  padding-top: 10vh;
`;

export const Title = styled.div`
  height: 35vh;
  width: 100%;
  text-align: center;
`;

export const Projects = styled(Row)`
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  gap: ${({ theme }): string => theme.gaps.rem3};
`;
