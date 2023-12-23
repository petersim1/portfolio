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
  sm: "14px",
  md: "15px",
  lg: "16px",
  xl: "18px",
};

const OPACITIES = {
  hover: 0.75,
  disable: 0.5,
  click: 0.4,
  enabled: 1,
};

const GAPS = {
  xs: "4px",
  sm: "8px",
  md: "12px",
  lg: "24px",
  xl: "32px",
  rem05: "0.5rem",
  rem1: "1rem",
  rem2: "2rem",
  rem3: "3rem",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getTheme = (dark: boolean): any => {
  const theme = {
    mainPad: "0 max(20px, calc((100vw - 1440px + 2*55px)/2))",
    gaps: GAPS,
    fontsize: FONTSIZE,
    opacity: OPACITIES,
    transitions: TRANSITIONS,
    breakpoints: BREAKPOINTS,
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
    font-size: ${({ theme }): string => theme.fontsize.xl};
    color: ${({ theme }): string => theme.colors.font};
    background: ${({ theme }): string => theme.colors.bg};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  main {
    flex: 1 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  button {
    font-family: inherit !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    line-height: normal;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  article {
    overflow: hidden;
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
  
  table {
    border-collapse: collapse;
    margin: auto;
    overflow: scroll;
  }
  
  table td,
  table th {
    padding: 2px 4px;
    border: 1px solid ${({ theme }): string => theme.textPrimary};
  }
  
  table caption {
    margin-bottom: 5px;
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
    background-color: ${({ theme }): string => theme.colors.blue};
  }

  @media (prefers-reduced-motion:no-preference){
    :root{
        scroll-behavior:smooth
    }
  }

  ${getBreakpoint(
    "xxl",
    css`
      html {
        font-size: ${({ theme }): string => theme.fontsize.lg};
      }
    `,
  )}

  ${getBreakpoint(
    "xl",
    css`
      html {
        font-size: ${({ theme }): string => theme.fontsize.md};
      }
    `,
  )}

  ${getBreakpoint(
    "xs",
    css`
      html {
        font-size: ${({ theme }): string => theme.fontsize.sm};
      }
    `,
  )}
`;
