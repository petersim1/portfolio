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
  boldBlue: "#001062",
  darkBlue: "#000626",
  offWhite: "#F4F5F7",
  darkWhite: "#C8D0E7",
  grey: "#565266",
  darkGrey: "#0D111C",
  white: "#FFFFFF",
  black: "#000000",
  darkShadow: "rgba(0, 0, 0, 0.25)",
  blue: "#0092ca",
};

export const codeColors = {
  dark: {
    class: "#2d5e9d",
    identifier: "#354150",
    sign: "#8996a3",
    string: "#00a99a",
    keyword: "#f47067",
    comment: "#a19595",
    jsxliterals: "#6266d1",
    code: "rgba(240, 240, 240, 1)",
  },
  light: {
    class: "#4c97f8",
    identifier: "#fff",
    sign: "#8996a3",
    string: "#0fa295",
    keyword: "#f47067",
    comment: "#a19595",
    jsxliterals: "#6266d1",
    code: "rgba(30, 30, 30, 1)",
  },
};

export const darkTheme = {
  bg: `radial-gradient(111.14% 117.16% at 30% 0%, ${colors.boldBlue} 25%, ${colors.darkBlue} 100%)`,
  cardBg: colors.darkGrey,
  cardBgHover: opacify(0.6, colors.darkGrey),
  greyBorder: colors.grey,
  textGradDark: `linear-gradient(180deg, ${colors.boldBlue} 0%, ${colors.darkBlue} 100%)`,
  textGradLight: `linear-gradient(180deg, ${colors.offWhite} 6.58%, ${colors.darkWhite} 81.58%)`,
  textPrimary: colors.white,
  textDark: colors.black,
  whiteHover: opacify(0.5, colors.white),
  blue: colors.blue,
  code: {
    ...codeColors.dark,
  },
};

export const lightTheme = {
  bg: `radial-gradient(111.14% 117.16% at 30% 0%, ${colors.boldBlue} 25%, ${colors.darkBlue} 100%)`,
  cardBg: colors.darkGrey,
  cardBgHover: opacify(0.6, colors.darkGrey),
  greyBorder: colors.grey,
  textGradDark: `linear-gradient(180deg, ${colors.boldBlue} 0%, ${colors.darkBlue} 100%)`,
  textGradLight: `linear-gradient(180deg, ${colors.offWhite} 6.58%, ${colors.darkWhite} 81.58%)`,
  textPrimary: colors.white,
  textDark: colors.black,
  whiteHover: opacify(0.5, colors.white),
  blue: colors.blue,
  code: {
    ...codeColors.light,
  },
};
