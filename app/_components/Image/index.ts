"use client";

import styled from "styled-components";

export const OGImage = styled.div<{ $url: string }>`
  aspect-ratio: 1.9 / 1;
  background-image: ${({ $url }): string => `url(${$url})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
