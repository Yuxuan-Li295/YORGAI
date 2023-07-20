import {
  BasisRegularKey,
  ColorsKey,
  ContainerColorKey,
  FillBaseKey,
  FillContrastKey,
  GrayKey,
  OverlayColorKey,
  PrimaryRegularKey,
  RegularKey,
  SpectrumKey,
  colorsKeys,
} from "./colorKeys";

const white = "#FFFFFF";
const black = "#000000";
const transparent = "transparent";

const grays: Readonly<Record<GrayKey, Record<SpectrumKey, string>>> = {
  zinc: {
    25: "#FBFBFC",
    50: "#F9F9FA",
    100: "#F1F2F3",
    200: "#E9E9EC",
    300: "#D7D7DB",
    400: "#BCBDC2",
    500: "#707480",
    600: "#4F5159",
    700: "#3F3F46",
    800: "#232326",
    900: "#18181B",
    950: "#09090B",
  },
};

const { zinc } = grays;

const colors: Readonly<Record<ColorsKey, Record<SpectrumKey, string>>> = {
  amber: {
    25: "#FEFCF4",
    50: "#FFFBEB",
    100: "#FEF3C7",
    200: "#FDE68A",
    300: "#FCD34D",
    400: "#FBBF24",
    500: "#F59E0B",
    600: "#D97706",
    700: "#B45309",
    800: "#92400E",
    900: "#78350F",
    950: "#451A03",
  },
  yellow: {
    25: "#FEFDF4",
    50: "#FEFBE0",
    100: "#FEF9BE",
    200: "#FEEF81",
    300: "#FFE040",
    400: "#FDCC0D",
    500: "#F7BB00",
    600: "#CC8B04",
    700: "#A36307",
    800: "#854D0E",
    900: "#734012",
    950: "#422006",
  },
  emerald: {
    25: "#F5FFFA",
    50: "#ECFDF4",
    100: "#D1FAE3",
    200: "#A7F3CD",
    300: "#6EE7B3",
    400: "#34D393",
    500: "#10B97B",
    600: "#059663",
    700: "#047853",
    800: "#065F43",
    900: "#064E38",
    950: "#022C22",
  },
  teal: {
    25: "#F7FFFD",
    50: "#F0FDFA",
    100: "#CCFBF0",
    200: "#99F6E2",
    300: "#5EEAD3",
    400: "#2DD4BB",
    500: "#14B8A2",
    600: "#0D9486",
    700: "#0F766C",
    800: "#115E58",
    900: "#134E49",
    950: "#042F2E",
  },
  blue: {
    25: "#F7FBFF",
    50: "#EFF6FF",
    100: "#DBEAFE",
    200: "#BFDBFE",
    300: "#93C5FD",
    400: "#60A5FA",
    500: "#3B83F7",
    600: "#2563EB",
    700: "#1D4ED8",
    800: "#1E40AF",
    900: "#1E3A8A",
    950: "#172554",
  },
};

const { amber, yellow, emerald, teal, blue } = colors;

const pctToHex = (pct: number) =>
  Math.round((pct / 100) * 255)
    .toString(16)
    .padStart(2, "0")
    .toUpperCase();

const primary: Readonly<
  Record<PrimaryRegularKey, string> &
    Record<"alt", Record<ContainerColorKey, string>>
> = {
  bg_subtle: yellow[25],
  bg: yellow[50],
  bg_muted: yellow[100],
  bg_vibrant: yellow[200],
  border_subtle: yellow[200],
  border: yellow[300],
  border_muted: yellow[400],
  border_vibrant: yellow[400],
  bg_emphasis_subtle: yellow[400],
  bg_emphasis: yellow[400],
  bg_emphasis_muted: yellow[500] + pctToHex(89),
  bg_emphasis_vibrant: yellow[400] + pctToHex(89),
  text_subtle: yellow[500] + pctToHex(90),
  text: yellow[600] + pctToHex(90),
  text_muted: yellow[600],
  text_loud: yellow[700],
  text_foreground: yellow[900],
  icon_subtle: yellow[400],
  icon: yellow[500],
  icon_muted: yellow[600],
  icon_loud: yellow[700],
  icon_foreground: yellow[900],
  alt: {
    bg_subtle: yellow[400] + pctToHex(7),
    bg: yellow[400] + pctToHex(11),
    bg_muted: yellow[400] + pctToHex(20),
    bg_vibrant: yellow[400] + pctToHex(36),
    border_subtle: yellow[400] + pctToHex(45),
    border: yellow[400] + pctToHex(40),
    border_muted: yellow[400] + pctToHex(58),
    border_vibrant: yellow[400] + pctToHex(98),
    bg_emphasis_subtle: yellow[400] + pctToHex(86),
    bg_emphasis: yellow[400] + pctToHex(96),
    bg_emphasis_muted: yellow[500] + pctToHex(89),
    bg_emphasis_vibrant: yellow[400] + pctToHex(89),
  },
};

const basis: Readonly<
  Record<BasisRegularKey, string> &
    Record<"alt", Record<ContainerColorKey, string>>
> = {
  bg_subtle: zinc[25],
  bg: zinc[50],
  bg_muted: zinc[100],
  bg_vibrant: zinc[200],
  border_subtle: zinc[200],
  border: zinc[300],
  border_muted: zinc[400],
  border_vibrant: zinc[400],
  bg_emphasis_subtle: zinc[400],
  bg_emphasis: zinc[900],
  bg_emphasis_muted: zinc[700],
  bg_emphasis_vibrant: zinc[700],
  text_subtle: zinc[400],
  text: zinc[500],
  text_muted: zinc[600],
  text_loud: zinc[900],
  text_foreground: white,
  caret: black,
  icon_subtle: zinc[400],
  icon: zinc[500],
  icon_muted: zinc[600],
  icon_loud: zinc[900],
  icon_foreground: white,
  alt: {
    bg_subtle: zinc[400] + pctToHex(10),
    bg: zinc[400] + pctToHex(15),
    bg_muted: zinc[400] + pctToHex(20),
    bg_vibrant: zinc[400] + pctToHex(25),
    border_subtle: zinc[400] + pctToHex(20),
    border: zinc[400] + pctToHex(20),
    border_muted: zinc[400] + pctToHex(22),
    border_vibrant: zinc[400] + pctToHex(32),
    bg_emphasis_subtle: zinc[500] + pctToHex(72),
    bg_emphasis: zinc[900] + pctToHex(89),
    bg_emphasis_muted: zinc[700] + pctToHex(72),
    bg_emphasis_vibrant: zinc[700] + pctToHex(72),
  },
};

const overlays: Readonly<Record<"black", Record<OverlayColorKey, string>>> = {
  black: {
    bg_subtle: black + pctToHex(3),
    bg: black + pctToHex(5),
    bg_muted: black + pctToHex(7),
    bg_vibrant: black + pctToHex(9),
    border_subtle: black + pctToHex(10),
    border: black + pctToHex(17),
    border_muted: black + pctToHex(22),
    border_vibrant: black + pctToHex(22),
    bg_emphasis_subtle: black + pctToHex(22),
    bg_emphasis: black + pctToHex(91),
    bg_emphasis_muted: black + pctToHex(67),
    bg_emphasis_vibrant: black + pctToHex(52),
    text_subtle: black + pctToHex(22),
    text: black + pctToHex(56),
    text_muted: black + pctToHex(65),
    text_loud: black + pctToHex(91),
    text_foreground: white,
    caret: black,
    icon_subtle: black + pctToHex(22),
    icon: black + pctToHex(56),
    icon_muted: black + pctToHex(65),
    icon_loud: black + pctToHex(91),
    icon_foreground: white,
  },
};

const fill: Readonly<
  Record<"base", Record<FillBaseKey, string>> &
    Record<"contrast", Record<FillContrastKey, string>>
> = {
  base: {
    layer: white,
    layer_subtle: zinc[25],
    layer_muted: zinc[950] + pctToHex(2),
    layer_on: white,
    layer_chrome: white,
    layer_overlay_subtle: black + pctToHex(2),
    layer_overlay_muted: black + pctToHex(10),
    mask: black + pctToHex(50),
  },
  contrast: {
    layer: zinc[900],
    layer_on: zinc[800],
    layer_chrome: zinc[400] + pctToHex(1),
  },
};

const functional: Readonly<
  Record<"success", Record<ContainerColorKey, string>>
> = {
  success: {
    bg_subtle: emerald[25],
    bg: emerald[50],
    bg_muted: emerald[100],
    bg_vibrant: emerald[200],
    border_subtle: emerald[200],
    border: emerald[300],
    border_muted: emerald[400],
    border_vibrant: emerald[400],
    bg_emphasis_subtle: emerald[400],
    bg_emphasis: emerald[500],
    bg_emphasis_muted: emerald[600] + pctToHex(89),
    bg_emphasis_vibrant: emerald[500] + pctToHex(89),
  },
};

type ColorMap = Record<RegularKey, string> &
  Record<"alt", Record<ContainerColorKey, string>>;

const getRainbowColor = (color: ColorsKey): ColorMap => {
  const spectrum = colors[color];
  return {
    bg_subtle: spectrum[25],
    bg: spectrum[50],
    bg_muted: spectrum[100],
    bg_vibrant: spectrum[200],
    border_subtle: spectrum[200],
    border: spectrum[300],
    border_muted: spectrum[400],
    border_vibrant: spectrum[400],
    bg_emphasis_subtle: spectrum[400],
    bg_emphasis: spectrum[500],
    bg_emphasis_muted: spectrum[600] + pctToHex(89),
    bg_emphasis_vibrant: spectrum[500] + pctToHex(89),
    text_subtle: spectrum[400],
    text: spectrum[500],
    text_muted: spectrum[600],
    text_loud: spectrum[600],
    text_foreground: white,
    icon_subtle: spectrum[400],
    icon: spectrum[500],
    icon_muted: spectrum[600],
    icon_loud: spectrum[600],
    icon_foreground: white,
    alt: {
      bg_subtle: spectrum[400] + pctToHex(7),
      bg: spectrum[400] + pctToHex(11),
      bg_muted: spectrum[400] + pctToHex(20),
      bg_vibrant: spectrum[400] + pctToHex(36),
      border_subtle: spectrum[400] + pctToHex(45),
      border: spectrum[400] + pctToHex(40),
      border_muted: spectrum[400] + pctToHex(58),
      border_vibrant: spectrum[400] + pctToHex(98),
      bg_emphasis_subtle: spectrum[400] + pctToHex(86),
      bg_emphasis: spectrum[400] + pctToHex(98),
      bg_emphasis_muted: spectrum[500] + pctToHex(89),
      bg_emphasis_vibrant: spectrum[400] + pctToHex(89),
    },
  };
};

const rainbow: Readonly<Record<ColorsKey, ColorMap>> = colorsKeys.reduce(
  (record, item) => {
    return { ...record, [item]: getRainbowColor(item) };
  },
  {} as Record<ColorsKey, ColorMap>,
);

export {
  amber,
  basis,
  black,
  blue,
  emerald,
  fill,
  functional,
  overlays,
  primary,
  rainbow,
  teal,
  transparent,
  white,
  yellow,
  zinc,
};
