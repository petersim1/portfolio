"use client";

import styled from "styled-components";

import { CommonPad, Row, HoverDim } from "@/_components/Common";

export const Nav = styled.nav`
  ${CommonPad}
  z-index: 999;
`;

export const NavHolder = styled(Row)`
  justify-content: space-between;
  padding: 20px 0;
`;

export const NavItems = styled(Row)`
  gap: ${({ theme }): string => theme.gaps.sm};
  font-size: 0.75rem;

  & a {
    display: inline-block;
    padding: 3px 7px;
    box-shadow: ${({ theme }): string => theme.shadow.box};
    border-radius: ${({ theme }): string => theme.borderRadius};
    transition: all ${({ theme }): string => theme.transitions.speedMdEase};
    ${HoverDim}

    &:hover {
      background-color: ${({ theme }): string => theme.colors.card};
    }
  }
`;
