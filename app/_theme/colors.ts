/**
 * Opacifies an input Hex color
 * @param {number} amount
 * @param {string} hexColor #RRBBGG
 * @returns {string} hexColor #RRBBGGAA
 */
export const opacify = (amount: number, hexColor: string): string => {
  // converts
  const opacitySuffix = Math.round(amount * 255)
    .toString(16)
    .padStart(2, "0");

  return `${hexColor.slice(0, 7)}${opacitySuffix}`;
};

/**
 * Converts Hex #RRGGBB to RGB() value
 * @param {string} hexColor
 * @returns {{r: number; g: number; b: number}} r g b channel
 */
const hexToRgb = (hexColor: string): { r: number; g: number; b: number } => {
  const hex = hexColor.replace(/^#/, "");

  const bigInt = parseInt(hex, 16);
  const r = (bigInt >> 16) & 255;
  const g = (bigInt >> 8) & 255;
  const b = bigInt & 255;

  return { r, g, b };
};

/**
 * Converts RGB() to Hex #RRGGBB
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @returns {string} Hex value ##RRGGBB
 */
const RgbToHex = (r: number, g: number, b: number): string => {
  const color =
    r.toString(16).padStart(2, "0") +
    g.toString(16).padStart(2, "0") +
    b.toString(16).padStart(2, "0");

  return "#" + color;
};

/**
 * Specifically used for white/black Hex value #RRGGBB, used to lighten/darken
 * Constraints the output to a max of 255 per channel
 * @param {number} amount, >= 0
 * @param {string} hexColor
 * @returns {string} Hex value ##RRGGBB
 */
export const grayscale = (amount: number, hexColor: string): string => {
  const { r, g, b } = hexToRgb(hexColor);

  const rNew = Math.round(Math.min(255, r * amount));
  const gNew = Math.round(Math.min(255, g * amount));
  const bNew = Math.round(Math.min(255, b * amount));

  return RgbToHex(rNew, gNew, bNew);
};

/**
 * Mixes two Hex colors #RRGGBB based off a ratio
 * @param {number} ratio, amount to retain from color1
 * @param {string} color1, base color Hex
 * @param {string} color2, mix color Hex
 * @returns {string} Hex value ##RRGGBB after mixing
 */
export const mix = (ratio: number, color1: string, color2: string): string => {
  const colorRgb1 = hexToRgb(color1);
  const colorRgb2 = hexToRgb(color2);

  const r = Math.round(ratio * colorRgb1.r + (1 - ratio) * colorRgb2.r);
  const g = Math.round(ratio * colorRgb1.g + (1 - ratio) * colorRgb2.g);
  const b = Math.round(ratio * colorRgb1.b + (1 - ratio) * colorRgb2.b);

  return RgbToHex(r, g, b);
};

export const colors = {
  common: {
    sun: "#F28C38",
    borderColor: "rgba(97, 97, 97, 0.5)",
    primary: "#00ccff",
  },
  dark: {
    bg: "#121212",
    font: "#FFFFFF",
    text: opacify(0.87, "#FFFFFF"),
    faint: opacify(0.6, "#FFFFFF"),
    card: grayscale(1.6, "#121212"),
    pill: mix(0.5, "#00ccff", "#FAFAFA"),
    shadow: opacify(0.4, "#FFFFFF"),
    gradientFrom: "rgb(195, 251, 214) 10%",
    gradientTo: "#00ccff 70%",
  },
  light: {
    bg: "#FAFAFA",
    font: "#000000",
    text: "#000000",
    faint: opacify(0.6, "#000000"),
    card: grayscale(0.98, "#FAFAFA"),
    pill: mix(0.4, "#00ccff", "#FAFAFA"),
    shadow: opacify(0.4, "#000000"),
    gradientFrom: "rgb(150, 219, 173) 10%",
    gradientTo: "#00ccff 70%",
  },
};

export const codeColors = {
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
    ...colors.common,
    ...colors.dark,
  },
  code: {
    ...codeColors.common,
    ...codeColors.dark,
  },
};

export const lightTheme = {
  colors: {
    ...colors.common,
    ...colors.light,
  },
  code: {
    ...codeColors.common,
    ...codeColors.light,
  },
};
