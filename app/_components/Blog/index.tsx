"use client";

import Link from "next/link";
import styled from "styled-components";
import { Row, Column, HoverDim, Card } from "@/_components/Common";

export const Holder = styled(Column)`
  justify-content: flex-start;
  align-items: center;
  padding-top: calc(1.6rem + 20px + 20px);
  padding-bottom: 5rem;
  min-height: 100%;

  & > h1 {
    margin-bottom: ${({ theme }): string => theme.gaps.rem2};
  }
`;

export const BlogHolder = styled.div`
  width: 80%;
  max-width: 800px;
`;

export const Previews = styled(Column)`
  width: 100%;
  gap: ${({ theme }): string => theme.gaps.rem2};
`;

export const Preview = styled(Card)`
  align-items: flex-start;
  padding: 24px;
`;

export const Header = styled(Row)`
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: ${({ theme }): string => theme.gaps.sm};

  & * {
    max-width: 100%;
    overflow-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const Footer = styled(Row)`
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Tags = styled(Row)`
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: ${({ theme }): string => theme.gaps.sm};
`;

export const ReadMore = styled(Link)`
  display: inline-block;
  margin-left: auto;
  transition: opacity ${({ theme }): string => theme.transitions.speedMdEase};
  ${HoverDim}
`;
