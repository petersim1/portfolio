"use client";

import styled from "styled-components";

import { CommonPad, Row, HoverDim } from "@/_components/Common";

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
  font-size: 1.5rem;

  & h4 {
    color: transparent;
    text-transform: uppercase;
    background: ${({ theme }): string => theme.colors.primary};
    background-clip: text;
    -webkit-background-clip: text;
    font-weight: 700;
    line-height: 1.6rem;
  }
`;

export const NavItems = styled(Row)`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  gap: ${({ theme }): string => theme.gaps.sm};

  & a {
    display: inline-block;
    padding: 3px 7px;
    border-radius: ${({ theme }): string => theme.borderRadius};
    background: ${({ theme }): string => theme.colors.card};
    transition: opacity ${({ theme }): string => theme.transitions.speedMdEase};
    border: 1px solid ${({ theme }): string => theme.colors.borderColor};
    ${HoverDim}
  }
`;
