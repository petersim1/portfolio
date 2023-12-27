"use client";

import Link from "next/link";
import styled from "styled-components";
import { Row, Column, HoverDim } from "@/_components/Common";

export const Holder = styled(Column)`
  justify-content: flex-start;
  align-items: center;
  padding-top: calc(1.6rem + 40px + 40px);
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

export const Preview = styled(Column)`
  gap: ${({ theme }): string => theme.gaps.md};
  align-items: flex-start;
  background-color: ${({ theme }): string => theme.colors.bg};
  padding: 24px;
  border-radius: ${({ theme }): string => theme.borderRadius};
  border: 1px solid ${({ theme }): string => theme.colors.borderColor};
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
