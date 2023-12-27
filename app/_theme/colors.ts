export const opacify = (amount: number, hexColor: string): string => {
  if (!hexColor.startsWith("#")) {
    return hexColor;
  }

  if (hexColor.length !== 7) {
    throw new Error(
      `opacify: provided color ${hexColor} was not in hexadecimal format (e.g. #000000)`,
    );
  }

  if (amount < 0 || amount > 1) {
    throw new Error("opacify: provided amount should be between 0 and 100");
  }

  const opacityHex = Math.round(amount * 255).toString(16);
  const opacitySuffix = opacityHex.length < 2 ? `0${opacityHex}` : opacityHex;

  return `${hexColor.slice(0, 7)}${opacitySuffix}`;
};

export const colors = {
  common: {
    sun: "#F28C38",
    blue: "#0092ca",
  },
  dark: {
    bg: "#121212",
    font: "#FFFFFF",
    faint: opacify(0.5, "#FFFFFF"),
    shadow: "rgba(255,255,255,0.3)",
    gradientFrom: "rgb(195, 251, 214) 10%",
    gradientTo: "rgb(0, 204, 255) 70%",
  },
  light: {
    bg: "#FAFAFA",
    font: "#000000",
    faint: opacify(0.5, "#000000"),
    shadow: "rgba(0,0,0,0.2)",
    gradientFrom: "rgb(150, 219, 173) 10%",
    gradientTo: "rgb(0, 204, 255) 70%",
  },
};

export const codeColors = {
  common: {
    sign: "#8996a3",
    keyword: "#f47067",
    comment: "#a19595",
    jsxliterals: "#6266d1",
  },
  dark: {
    class: "#2d5e9d",
    identifier: "#354150",
    string: "#00a99a",
    code: "rgba(240, 240, 240, 1)",
  },
  light: {
    class: "#4c97f8",
    identifier: "#fff",
    string: "#0fa295",
    code: "rgba(30, 30, 30, 1)",
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
