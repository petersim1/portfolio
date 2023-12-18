"use client";

import { FC, ReactNode, createContext, useState, useEffect, useContext } from "react";
import { usePathname } from "next/navigation";

const INITIAL_SCROLL_CONTEXT = {
  progress: [],
  breakpoints: [],
};

interface ScrollContextI {
  progress: number[];
  breakpoints: number[];
}

export const ScrollContext = createContext<ScrollContextI>(INITIAL_SCROLL_CONTEXT);

export const ScrollProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<number[]>([]);
  const [breakpoints, setBreakpoints] = useState<number[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    // A global identifier of scroll in each section, pass to child _components.
    // empty until component mounts. Will dictate nav item too.
    // As I changed the site quite a bit, this is likely no longer needed.
    const sections = document.querySelectorAll("section");

    const breakVals = (): void => {
      const { scrollY } = window;
      const arrs: number[] = [];
      sections.forEach((section) => {
        const { bottom } = section.getBoundingClientRect();
        arrs.push(scrollY + bottom);
      });
      setBreakpoints(arrs);
    };

    const scrollPos = (): void => {
      const { innerHeight } = window;
      const arrs: number[] = [];
      sections.forEach((section) => {
        const { top, height } = section.getBoundingClientRect();
        const { offsetTop, offsetBottom } = section.dataset;
        const trueOffsetTop = (innerHeight * Number(offsetTop || "0")) / 100;
        const trueOffsetBottom = (innerHeight * Number(offsetBottom || "0")) / 100;
        const val = Math.max(
          0,
          Math.min(
            100,
            (100 * (top - trueOffsetTop)) /
              (innerHeight - height - trueOffsetTop - trueOffsetBottom),
          ),
        );
        arrs.push(val);
      });
      setProgress(arrs);
    };

    scrollPos();
    breakVals();

    window.addEventListener("scroll", scrollPos);
    window.addEventListener("resize", breakVals);

    return () => {
      window.removeEventListener("scroll", scrollPos);
      window.removeEventListener("resize", breakVals);
    };
  }, [pathname]);

  const value = {
    progress,
    breakpoints,
  };

  return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>;
};

export const useScrollContext = (): ScrollContextI => useContext(ScrollContext);
