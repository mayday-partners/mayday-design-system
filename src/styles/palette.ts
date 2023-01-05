// NOTE 2.0 컴포넌트 (0102)
type PaletteType = { [key: number]: string };

const red: PaletteType = {
  100: "#FFEEE9",
  200: "#FFDCD2",
  300: "#FFBBA8",
  400: "#FF9173",
  500: "#FF724A",
  600: "#FB5C30", // PRIMARY
  700: "#EE5128",
  800: "#D9451B",
  900: "#BE3A16",
  1000: "#AA2D0C",
};

const orange: PaletteType = {
  100: "#FFF7E1",
  200: "#FFEBBA",
  300: "#FCD77F",
  400: "#FCC953",
  500: "#FBBD39",
  600: "#FAB32E",
  700: "#F9A32B", // PRIMARY
  800: "#F89028",
  900: "#F57C22",
  1000: "#E16A12",
};

const blue: PaletteType = {
  100: "#DDF5FF",
  200: "#AEE8FF",
  300: "#78D6FE",
  400: "#4BC4FB",
  500: "#2DB8FB",
  600: "#1FA9FA",
  700: "#1D9DE9", // PRIMARY
  800: "#168DD3",
  900: "#116EB6",
  1000: "#125497",
};

const gray: PaletteType = {
  100: "#FAFAFA",
  200: "#EAEAEA",
  300: "#C8C8C8",
  400: "#A8A8A8",
  500: "#8C8C8C",
  600: "#707070",
  700: "#545454",
  800: "#383838",
  900: "#1C1C1C",
  1000: "#000000",
};

const coolGray: PaletteType = {
  100: "#F7FAFD",
  200: "#EBF2F6",
  300: "#D4DDE4",
  400: "#C0CBD4",
  500: "#A4B4C2",
  600: "#8497A8",
  700: "#647687",
  800: "#465B6D",
  900: "#314354",
  1000: "#1F2E3C",
};

export default { red, orange, blue, gray, coolGray };