"use client";

import { FC, ReactNode, createContext, useState, useEffect, useContext } from "react";
import { usePathname } from "next/navigation";

const INITIAL_SCROLL_CONTEXT = {
  progress: [],
  options: [],
  active: 0,
  setActive: (): void => {},
};

interface ScrollContextI {
  progress: number[];
  options: string[];
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
}

export const ScrollContext = createContext<ScrollContextI>(INITIAL_SCROLL_CONTEXT);

export const ScrollProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<number[]>([]);
  const [options, setOptions] = useState<string[]>([]);
  const [active, setActive] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    // A global identifier of scroll in each section, pass to child _components.
    // empty until component mounts. Will dictate nav item too.
    const sections = document.querySelectorAll("section");
    setOptions(Array.from(sections).map((section) => section.id));
    const { innerHeight } = window;
    if (!progress.length) {
      setProgress(Array(sections.length).fill(0));
    }

    const scrollPos = (): void => {
      const arrs: number[] = [];
      sections.forEach((section, ind) => {
        const { top, height, bottom } = section.getBoundingClientRect();
        if (top <= 0 && bottom >= 0) {
          setActive(ind);
        }
        // if (["blurb","education"].includes(section.id)) {
        //   arrs.push(Math.max(0, Math.min(100, )))
        // } else {
        //   arrs.push(Math.max(0, Math.min(100, (100 * -top) / (height - innerHeight))));
        // }
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

    window.addEventListener("scroll", scrollPos);

    return () => {
      window.removeEventListener("scroll", scrollPos);
    };
  }, [pathname]);

  const value = {
    progress,
    options,
    active,
    setActive,
  };

  return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>;
};

export const useScrollContext = (): ScrollContextI => useContext(ScrollContext);
