"use client";

import styled, { css } from "styled-components";
import { Column, Centered } from "@/_components/Common";
import { getBreakpoint } from "@/_theme";

export const ToggleHolder = styled(Column)<{ $active: boolean }>`
  position: fixed;
  bottom: 40px;
  right: ${({ theme }): string => theme.lightPad};
  z-index: 999;
  gap: ${({ theme }): string => theme.gaps.md};
  transform: translateY(${({ $active }): string => ($active ? "0px" : "60px")});
  transition: all ${({ theme }): string => theme.transitions.speedMdEase};

  ${getBreakpoint(
    "xs",
    css`
      right: 10px;
    `,
  )}
`;

export const Toggle = styled(Column)`
  ${Centered}
  background-color: ${({ theme }): string => theme.colors.bg};
  width: 40px;
  height: 40px;
  border-radius: 100px;
  border: 1px solid currentColor;
  padding: 5px;
  cursor: pointer;

  & svg {
    height: 100%;
  }

  ${getBreakpoint(
    "xs",
    css`
      width: 35px;
      height: 35px;
    `,
  )}
`;

export const ToggleNav = styled(Toggle)<{ $active: boolean }>`
  transform: rotate(-90deg);
  opacity: ${({ $active }): number => ($active ? 1 : 0)};
  visibility: ${({ $active }): string => ($active ? "visible" : "hidden")};
`;
