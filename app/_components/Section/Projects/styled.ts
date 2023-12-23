"use client";

import styled from "styled-components";
import { Column, Centered } from "@/_components/Common";

export const Wrapper = styled(Column)`
  ${Centered};
  width: 100%;
  padding-top: 10vh;
`;

export const Title = styled.div`
  height: 35vh;
  width: 100%;
`;

export const Projects = styled(Column)`
  ${Centered}
  flex-wrap: wrap;
  width: 100%;
  gap: ${({ theme }): string => theme.gaps.rem5};
`;
