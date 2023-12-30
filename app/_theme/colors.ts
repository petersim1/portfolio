/**
 * Converts Hex #RRGGBB to RGB() value
 * @param {string} hexColor
 * @returns {{r: number; g: number; b: number}} r g b channel
 */
export const hexToRgb = (hexColor: string): { r: number; g: number; b: number } => {
  const hex = hexColor.replace(/^#/, "");

  const bigInt = parseInt(hex, 16);
  const r = (bigInt >> 16) & 255;
  const g = (bigInt >> 8) & 255;
  const b = bigInt & 255;

  return { r, g, b };
};

/**
 * Opacifies an input Hex color
 * @param {number} amount
 * @param {string} hexColor #RRBBGG
 * @returns {string} rgba color rgba(r,g,b,a)
 */
export const opacify = (hexColor: string, amount: number): string => {
  const { r, g, b } = hexToRgb(hexColor);

  return `rgba(${r}, ${g}, ${b}, ${amount})`;
};

const commonColors = {
  sun: "#F28C38",
  borderColor: "rgba(97, 97, 97, 0.5)",
  primary: "#00ccff",
  light: "#FAFAFA",
  dark: "#121212",
  black: "#000000",
  white: "#FFFFFF",
  faint: 0.6,
};

const colors = {
  dark: {
    bg: commonColors.dark,
    font: commonColors.white,
    text: opacify(commonColors.white, 0.87),
    faint: opacify(commonColors.white, 0.6),
    card: `color-mix(in oklab, ${commonColors.dark}, ${commonColors.light} 7.5%)`,
    pill: `color-mix(in oklab, ${commonColors.primary}, ${commonColors.light} 50%)`,
    gradientFrom: "rgb(195, 251, 214) 10%",
    gradientTo: `${commonColors.primary} 70%`,
  },
  light: {
    bg: commonColors.light,
    font: commonColors.black,
    text: opacify(commonColors.black, 0.87),
    faint: opacify(commonColors.black, 0.6),
    card: `color-mix(in oklab, ${commonColors.light}, ${commonColors.dark} 3%)`,
    pill: `color-mix(in oklab, ${commonColors.primary}, ${commonColors.light} 40%)`,
    gradientFrom: "rgb(150, 219, 173) 10%",
    gradientTo: `${commonColors.primary} 70%`,
  },
};

const shadows = {
  dark: {
    text: opacify(commonColors.light, 0.4),
    box: "0 0 0 1px rgba(255, 255, 255, 0.145), 0px 1px 2px rgba(0,0,0,.16)",
  },
  light: {
    text: opacify(commonColors.dark, 0.4),
    box: "0 0 0 1px rgba(0,0,0,.08), 0px 2px 2px rgba(0,0,0,.04)",
  },
};

const codeColors = {
  common: {
    sign: "#8996a3",
    keyword: "#f47067",
    comment: "#a19595",
    jsxliterals: "#6266d1",
    blockquote: "#0092ca",
  },
  dark: {
    class: "#4c97f8",
    identifier: "#fff",
    string: "#0fa295",
    code: "rgba(30, 30, 30, 1)",
  },
  light: {
    class: "#2d5e9d",
    identifier: "#354150",
    string: "#00a99a",
    code: "rgba(240, 240, 240, 1)",
  },
};

export const darkTheme = {
  colors: {
    ...commonColors,
    ...colors.dark,
  },
  code: {
    ...codeColors.common,
    ...codeColors.dark,
  },
  shadow: {
    ...shadows.dark,
  },
};

export const lightTheme = {
  colors: {
    ...commonColors,
    ...colors.light,
  },
  code: {
    ...codeColors.common,
    ...codeColors.light,
  },
  shadow: {
    ...shadows.light,
  },
};
