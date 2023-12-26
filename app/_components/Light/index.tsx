"use client";

import { useEffect, useState } from "react";
import { Sun, Moon, Arrow } from "@/_lib/assets";
import { useThemeContext } from "@/_providers/theme";
import { useTheme } from "styled-components";
import { ToggleHolder, Toggle, ToggleNav } from "./styled";

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
