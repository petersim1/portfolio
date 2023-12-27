"use client";

import { useEffect, useState } from "react";
import styled, { css, useTheme } from "styled-components";

import { Sun, Moon, Arrow } from "@/_lib/assets";
import { useThemeContext } from "@/_providers/theme";
import { Column, Centered } from "@/_components/Common";
import { getBreakpoint } from "@/_theme";

const ToggleHolder = styled(Column)<{ $active: boolean }>`
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

const Toggle = styled(Column)`
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

const ToggleNav = styled(Toggle)<{ $active: boolean }>`
  transform: rotate(-90deg);
  opacity: ${({ $active }): number => ($active ? 1 : 0)};
  visibility: ${({ $active }): string => ($active ? "visible" : "hidden")};
`;

export default (): JSX.Element => {
  const [active, setActive] = useState(false);
  const { dark, toggleTheme } = useThemeContext();
  const theme = useTheme();

  const moveToTop = (): void => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleLightShow = (): void => {
      const { scrollY, innerHeight } = window;
      if (scrollY / innerHeight > 0.2) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    handleLightShow();
    window.addEventListener("scroll", handleLightShow);
    return () => {
      window.removeEventListener("scroll", handleLightShow);
    };
  }, []);

  return (
    <ToggleHolder $active={active}>
      <Toggle onClick={toggleTheme}>
        {dark ? <Sun fill={theme.colors.sun} /> : <Moon fill="currentColor" />}
      </Toggle>
      <ToggleNav $active={active} onClick={moveToTop}>
        <Arrow height="70%" width="70%" fill="currentColor" />
      </ToggleNav>
    </ToggleHolder>
  );
};
