import {
  BasisKey,
  BlackColorKey,
  ColorKey,
  ContainerColorKey,
  FillBaseKey,
  FillContrastKey,
  PrimaryKey,
  RainbowKey,
} from "./colorKeys";

const white = "#FFFFFF";
const black = "#000000";
const transparent = "transparent";

const zinc: Readonly<Record<ColorKey, string>> = {
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
};

const yellow: Readonly<Record<ColorKey, string>> = {
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
};

const amber: Readonly<Record<ColorKey, string>> = {
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
};

const emerald: Readonly<Record<ColorKey, string>> = {
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
};

const blue: Readonly<Record<ColorKey, string>> = {
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
};

const primary: Readonly<
  Record<PrimaryKey, string> & Record<"alt", Record<ContainerColorKey, string>>
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
  bg_emphasis_muted: "#F7BB00E3",
  bg_emphasis_vibrant: "#FDCC0DE3",
  text_subtle: "#F7BB00E5",
  text: "#CC8B04E5",
  text_muted: yellow[600],
  text_loud: yellow[700],
  text_foreground: yellow[900],
  icon_subtle: yellow[400],
  icon: yellow[500],
  icon_muted: yellow[600],
  icon_loud: yellow[700],
  icon_foreground: yellow[900],
  alt: {
    bg_subtle: "#FDCC0D12",
    bg: "#FDCC0D1C",
    bg_muted: "#FDCC0D33",
    bg_vibrant: "#FDCC0D5C",
    border_subtle: "#FDCC0D73",
    border: "#FDCC0D66",
    border_muted: "#FDCC0D94",
    border_vibrant: "#FDCC0DFA",
    bg_emphasis_subtle: "#FDCC0DDB",
    bg_emphasis: "#FDCC0DF5",
    bg_emphasis_muted: "#F7BB00E3",
    bg_emphasis_vibrant: "#FDCC0DE3",
  },
};

const basis: Readonly<
  Record<BasisKey, string> & Record<"alt", Record<ContainerColorKey, string>>
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
  bg_emphasis_muted: "#3F4046",
  bg_emphasis_vibrant: "#3F4046",
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
    bg_subtle: "#BCBDC21A",
    bg: "#BCBDC226",
    bg_muted: "#BCBDC233",
    bg_vibrant: "#BCBDC240",
    border_subtle: "#BCBDC233",
    border: "#BCBDC233",
    border_muted: "#BCBDC238",
    border_vibrant: "#BCBDC252",
    bg_emphasis_subtle: "#BCBDC270",
    bg_emphasis: "#18181BE3",
    bg_emphasis_muted: "#3F4046B8",
    bg_emphasis_vibrant: "#3F4046B8",
  },
};

const overlays: Readonly<Record<"black", Record<BlackColorKey, string>>> = {
  black: {
    bg_subtle: "#00000008",
    bg: "#0000000D",
    bg_muted: "#00000012",
    bg_vibrant: "#00000017",
    border_subtle: "#0000001A",
    border: "#0000002B",
    border_muted: "#00000038",
    border_vibrant: "#00000038",
    bg_emphasis_subtle: "#00000038",
    bg_emphasis: "#000000E8",
    bg_emphasis_muted: "#000000AB",
    bg_emphasis_vibrant: "#00000085",
    text_subtle: "#00000038",
    text: "#0000008F",
    text_muted: "#000000A6",
    text_loud: "#000000E8",
    text_foreground: white,
    caret: black,
    icon_subtle: "#00000038",
    icon: "#0000008F",
    icon_muted: "#000000A6",
    icon_loud: "#000000E8",
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
    layer_muted: "#09090B05",
    layer_on: white,
    layer_chrome: white,
    layer_overlay_subtle: "#0000000D",
    layer_overlay_muted: "#0000001A",
    mask: "#00000080",
  },
  contrast: {
    layer: zinc[900],
    layer_on: zinc[800],
    layer_chrome: "#BCBDC203",
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
    bg_emphasis_muted: "#059663E3",
    bg_emphasis_vibrant: "#10B97BE3",
  },
};

const rainbow: Readonly<
  Record<
    RainbowKey,
    Record<PrimaryKey, string> &
      Record<"alt", Record<ContainerColorKey, string>>
  >
> = {
  amber: {
    bg_subtle: amber[25],
    bg: amber[50],
    bg_muted: amber[100],
    bg_vibrant: amber[200],
    border_subtle: amber[200],
    border: amber[300],
    border_muted: amber[400],
    border_vibrant: amber[400],
    bg_emphasis_subtle: amber[400],
    bg_emphasis: amber[500],
    bg_emphasis_muted: "#D97706E3",
    bg_emphasis_vibrant: "#F59E0BE3",
    text_subtle: amber[400],
    text: amber[500],
    text_muted: amber[600],
    text_loud: amber[600],
    text_foreground: white,
    icon_subtle: amber[400],
    icon: amber[500],
    icon_muted: amber[600],
    icon_loud: amber[600],
    icon_foreground: white,
    alt: {
      bg_subtle: "#FBBF2412",
      bg: "#FBBF241C",
      bg_muted: "#FBBF2433",
      bg_vibrant: "#FBBF245C",
      border_subtle: "#FBBF2473",
      border: "#FBBF2466",
      border_muted: "#FBBF2494",
      border_vibrant: "#FBBF24FA",
      bg_emphasis_subtle: "#FBBF24DB",
      bg_emphasis: "#F59E0BFA",
      bg_emphasis_muted: "#D97706E3",
      bg_emphasis_vibrant: "#F59E0BE3",
    },
  },
  blue: {
    bg_subtle: blue[25],
    bg: blue[50],
    bg_muted: blue[100],
    bg_vibrant: blue[200],
    border_subtle: blue[200],
    border: blue[300],
    border_muted: blue[400],
    border_vibrant: blue[400],
    bg_emphasis_subtle: zinc[400],
    bg_emphasis: blue[500],
    bg_emphasis_muted: "#2563EBE3",
    bg_emphasis_vibrant: "#3B83F7E3",
    text_subtle: blue[400],
    text: blue[500],
    text_muted: blue[600],
    text_loud: blue[600],
    text_foreground: white,
    icon_subtle: blue[400],
    icon: blue[500],
    icon_muted: blue[600],
    icon_loud: blue[600],
    icon_foreground: white,
    alt: {
      bg_subtle: "#60A5FA12",
      bg: "#60A5FA1C",
      bg_muted: "#60A5FA33",
      bg_vibrant: "#60A5FA5C",
      border_subtle: "#60A5FA73",
      border: "#60A5FA66",
      border_muted: "#60A5FA94",
      border_vibrant: "#60A5FAFA",
      bg_emphasis_subtle: "#60A5FADB",
      bg_emphasis: "#3B83F7FA",
      bg_emphasis_muted: "#2563EBE3",
      bg_emphasis_vibrant: "#3B83F7E3",
    },
  },
};

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
  transparent,
  white,
  yellow,
  zinc,
};
