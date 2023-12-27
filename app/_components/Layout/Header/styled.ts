"use client";

import styled from "styled-components";

import { CommonPad } from "@/_components/Common";

export const Nav = styled.nav`
  position: absolute;
  width: 100%;
  top: 0;
  margin: auto;
  z-index: 999;
  transform: translateY(0);
  transition: transform ${({ theme }): string => theme.transitions.speedMdEase};
  ${CommonPad}
`;

export const NavDiv = styled.div`
  position: relative;
  width: 100%;
`;

export const NavHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px 0;

  & h4 {
    color: transparent;
    text-transform: uppercase;
    background: linear-gradient(
      90deg,
      ${({ theme }): string => theme.colors.gradientFrom},
      ${({ theme }): string => theme.colors.gradientTo}
    );
    background-clip: text;
    -webkit-background-clip: text;
    font-weight: 700;
    line-height: 1.6rem;
  }
`;

export const NavItems = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
`;
