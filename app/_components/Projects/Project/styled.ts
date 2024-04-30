"use client";

import styled, { keyframes } from "styled-components";
import { Row, Card } from "@/_components/Common";

const appear = keyframes`
  0% {
    opacity: 0;
    translate: 0 40px;
  }
  100% {
    opacity: 1;
    translate: 0 0;
  }
`;

export const Project = styled(Card)<{ $delay?: number }>`
  justify-content: space-between;
  align-items: flex-start;
  width: 500px;
  max-width: 100%;
  padding: 15px;
  text-align: left;
  position: relative;
  opacity: 0;
  animation: ${appear} 1s forwards;
  animation-delay: ${({ $delay }): number => $delay ?? 0}s;
`;

export const Links = styled(Row)`
  gap: ${({ theme }): string => theme.gaps.md};
  align-self: flex-start;
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
