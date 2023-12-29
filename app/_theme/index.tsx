import { CSSProp, createGlobalStyle, css } from "styled-components";
import { darkTheme, lightTheme } from "./colors";

const BREAKPOINTS = {
  xs: 450,
  sm: 497,
  md: 730,
  lg: 767,
  xl: 850,
  xxl: 1074,
};

const TRANSITIONS = {
  speed: {
    md: "250ms",
  },
  ease: "ease-in-out",
  speedMdEase: "250ms ease-in-out",
};

const FONTSIZE = {
  sm: "16px",
  md: "18px",
  lg: "20px",
};

const OPACITIES = {
  hover: 0.75,
  disabled: 0.5,
  click: 0.4,
  enabled: 1,
};

const GAPS = {
  xs: "4px",
  sm: "8px",
  md: "12px",
  lg: "24px",
  xl: "32px",
  xxl: "40px",
  rem05: "0.5rem",
  rem1: "1rem",
  rem2: "2rem",
  rem3: "3rem",
  rem5: "5rem",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getTheme = (dark: boolean): any => {
  const theme = {
    mainPad: "0 max(20px, calc((100vw - 1440px + 2 * 55px) / 2))",
    lightPad: "max(20px, calc((100vw - 1440px + 2 * 15px) / 2))",
    gaps: GAPS,
    fontsize: FONTSIZE,
    opacity: OPACITIES,
    transitions: TRANSITIONS,
    breakpoints: BREAKPOINTS,
    borderRadius: "10px",
  };
  if (dark) {
    return {
      ...theme,
      ...darkTheme,
    };
  }
  return {
    ...theme,
    ...lightTheme,
  };
};

export const getBreakpoint = (size: string, innerCSS: CSSProp): CSSProp => {
  return css`
    @media screen and (max-width: ${BREAKPOINTS[size as keyof typeof BREAKPOINTS]}px) {
      ${innerCSS}
    }
  `;
};

// ${getBreakpoint(
//   "xxl",
//   css`
//     html {
//       font-size: ${({ theme }): string => theme.fontsize.lg};
//     }
//   `,
// )}

// ${getBreakpoint(
//   "xl",
//   css`
//     html {
//       font-size: ${({ theme }): string => theme.fontsize.md};
//     }
//   `,
// )}

// ${getBreakpoint(
//   "sm",
//   css`
//     html {
//       font-size: ${({ theme }): string => theme.fontsize.sm};
//     }
//   `,
// )}

export const ThemedGlobalStyle = createGlobalStyle`
  :root {
    --sh-class: ${({ theme }): string => theme.code.class};
    --sh-identifier: ${({ theme }): string => theme.code.identifier};
    --sh-sign: ${({ theme }): string => theme.code.sign};
    --sh-string: ${({ theme }): string => theme.code.string};
    --sh-keyword: ${({ theme }): string => theme.code.keyword};
    --sh-comment: ${({ theme }): string => theme.code.comment};
    --sh-jsxliterals: ${({ theme }): string => theme.code.jsxliterals};
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-size: calc(15px + 0.390625vw);
    color: ${({ theme }): string => theme.colors.font};
    background: ${({ theme }): string => theme.colors.bg};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    font-family: inherit !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    line-height: normal;
    color: ${({ theme }): string => theme.colors.font};
  }

  p {
    margin: 0;
    line-height: normal;
    color: ${({ theme }): string => theme.colors.text};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  article {
    overflow: hidden;
  }

  article h1 {
    font-size: 2rem;
    letter-spacing: -0.016em;
  }
  article h2 {
    font-size: 1.75rem;
    letter-spacing: -0.016em;
  }
  article h3 {
    font-size: 1.5rem;
    letter-spacing: -0.016em;
  }
  article h4 {
    font-size: 1.25rem;
    letter-spacing: -0.016em;
  }
  article p {
    line-height: 1.5rem;
  }
  
  article > * {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  
  pre:has(code) {
    background-color: ${({ theme }): string => theme.code.code};
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 1rem;
    border-radius: 10px;
    font-size: 0.8em;
    overflow-x: scroll;
  }
  
  span.katex-display {
    overflow: scroll;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  
  mark {
    padding: 2px 5px;
    border-radius: 10px;
    font-size: 0.8em;
    color: var(--font);
    background-color: ${({ theme }): string => theme.code.code};
    font-family: Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono;
  }
  
  blockquote {
    margin-left: 0;
    padding-left: 1em;
    position: relative;
  }
  blockquote::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    border-radius: 10px;
    background-color: ${({ theme }): string => theme.code.blockquote};
  }

  @media (prefers-reduced-motion:no-preference){
    :root{
        scroll-behavior:smooth
    }
  }
`;
