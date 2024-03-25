export type PaletteType = { [key: string]: string };
export type GrayType = {
  gray050: "#FAFAFA";
  gray100: "#f4f4f4";
  gray200: "#eeeeee";
  gray300: "#e0e0e0";
  gray400: "#bbbbbb";
  gray500: "#999999";
  gray600: "#777777";
  gray700: "#555555";
  gray800: "#333333";
  gray900: "#1C1C1C"; // primary
};
type ColorModeType<T> = {
  light: T;
  dark: T;
};

const gray: GrayType = {
  gray050: "#FAFAFA",
  gray100: "#f4f4f4",
  gray200: "#eeeeee",
  gray300: "#e0e0e0",
  gray400: "#bbbbbb",
  gray500: "#999999",
  gray600: "#777777",
  gray700: "#555555",
  gray800: "#333333",
  gray900: "#1C1C1C", // primary
};

const textColor: ColorModeType<PaletteType> = {
  light: {
    primary: "#1c1c1c",
    secondary: "#555555",
    disabled: "#bbbbbb",
    link: "#0057ff",
    error: "#ff0010",
    success: "#00bf6a",
    info: "#ffcb00",
  },
  dark: {
    primary: "#ffffff",
    secondary: "#f4f4f4",
    disabled: "#555555",
    link: "#1e6aff",
    error: "#ff1569",
    success: "#00ff47",
    info: "#ffc700",
  },
};

const bgColor: ColorModeType<PaletteType> = {
  light: {
    default: "#fff",
    highlight: "#f4f4f4",
    highlight2: "#eee",
  },
  dark: {
    default: "#1c1c1c",
    highlight: "#262626",
    highlight2: "#353535",
  },
};

const lineColor: ColorModeType<PaletteType> = {
  light: {
    line001: "#eee",
    line002: "#e0e0e0",
    line003: "#1c1c1c",
  },
  dark: {
    line001: "#2a2a2a",
    line002: "#555",
    line003: "#999",
  },
};

const palette = { gray, textColor, bgColor, lineColor };

export default palette;
