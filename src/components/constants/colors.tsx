import {
  BasisRegularKey,
  GradientColorKey,
  ColorsKey,
  ContainerColorKey,
  FillBaseKey,
  FillBaseAlphaKey,
  FillContrastKey,
  FillContrastAlphaKey,
  GrayKey,
  OverlayColorKey,
  PrimaryRegularKey,
  RegularKey,
  SpectrumKey,
  colorsKeys,
  ModulKey,
  ModulSideKey,
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
  red: {
    25: "#FEF9F9",
    50: "#FEF2F2",
    100: "#FEE2E2",
    200: "#FECACA",
    300: "#FCA5A5",
    400: "#F87171",
    500: "#EF4444",
    600: "#DC2626",
    700: "#B91C1C",
    800: "#991B1B",
    900: "#7F1D1D",
    950: "#000000",
  },
  orange: {
    25: "#FFFBF5",
    50: "#FFF7ED",
    100: "#FFEDD5",
    200: "#FED7AA",
    300: "#FDBA74",
    400: "#FB923C",
    500: "#F97316",
    600: "#EA580C",
    700: "#C2410C",
    800: "#9A3412",
    900: "#7C2D12",
    950: "#431407",
  },
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
  lime: {
    25: "#FBFEF1",
    50: "#F9FEE7",
    100: "#F0FCCB",
    200: "#E0F99D",
    300: "#CAF264",
    400: "#B1E635",
    500: "#94CF16",
    600: "#71A30D",
    700: "#567C0F",
    800: "#466212",
    900: "#3B5314",
    950: "#1A2E05",
  },
  green: {
    25: "#F7FFF8",
    50: "#F0FDF1",
    100: "#DCFCE0",
    200: "#BBF7C2",
    300: "#86EF94",
    400: "#4ADE5E",
    500: "#23C939",
    600: "#16A329",
    700: "#158023",
    800: "#166522",
    900: "#14531E",
    950: "#052E16",
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
  cyan: {
    25: "#F5FFFF",
    50: "#ECFEFF",
    100: "#CFFAFE",
    200: "#A5F3FC",
    300: "#67E8F9",
    400: "#22D3EE",
    500: "#06B6D4",
    600: "#0891B2",
    700: "#0E7490",
    800: "#155E75",
    900: "#164E63",
    950: "#083344",
  },
  sky: {
    25: "#F7FCFF",
    50: "#F0F9FF",
    100: "#E0F2FE",
    200: "#BAE6FD",
    300: "#7DD3FC",
    400: "#38BDF8",
    500: "#0EA5E9",
    600: "#0284C7",
    700: "#0369A1",
    800: "#075985",
    900: "#0C4A6E",
    950: "#082F49",
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
  indigo: {
    25: "#F5F7FF",
    50: "#EEF2FF",
    100: "#E0E7FF",
    200: "#C7D2FE",
    300: "#A5B4FC",
    400: "#818CF8",
    500: "#6366F1",
    600: "#4F46E5",
    700: "#4338CA",
    800: "#3730A3",
    900: "#312E81",
    950: "#1E1B4B",
  },
  violet: {
    25: "#F8F7FF",
    50: "#F5F3FF",
    100: "#EDE9FE",
    200: "#DDD6FE",
    300: "#C4B5FD",
    400: "#A78BFA",
    500: "#8B5CF6",
    600: "#7C3AED",
    700: "#6D28D9",
    800: "#5B21B6",
    900: "#4C1D95",
    950: "#2E1065",
  },
  fuchsia: {
    25: "#FEFAFF",
    50: "#FDF4FF",
    100: "#FAE8FF",
    200: "#F5D0FE",
    300: "#F0ABFC",
    400: "#E879F9",
    500: "#D946EF",
    600: "#C026D3",
    700: "#A21CAF",
    800: "#86198F",
    900: "#701A75",
    950: "#4A044E",
  },
  pink: {
    25: "#FDF2F8",
    50: "#FDF2F8",
    100: "#FCE7F3",
    200: "#FBCFE8",
    300: "#F9A8D4",
    400: "#F472B6",
    500: "#EC4899",
    600: "#DB2777",
    700: "#BE185D",
    800: "#9D174D",
    900: "#831843",
    950: "#500724",
  },
  rose: {
    25: "#FFFAFA",
    50: "#FFF1F1",
    100: "#FFE4E5",
    200: "#FECDD1",
    300: "#FDA4AB",
    400: "#FB7181",
    500: "#F43F48",
    600: "#E11D41",
    700: "#BE1237",
    800: "#9F1235",
    900: "#881332",
    950: "#4C0519",
  },
};

const {
  red,
  orange,
  amber,
  yellow,
  lime,
  green,
  emerald,
  teal,
  cyan,
  sky,
  blue,
  indigo,
  violet,
  fuchsia,
  pink,
  rose,
} = colors;

const pctToHex = (pct: number) =>
  Math.round((pct / 100) * 255)
    .toString(16)
    .padStart(2, "0")
    .toUpperCase();

const primary: Readonly<
  Record<PrimaryRegularKey, string> &
    Record<"alt", Record<ContainerColorKey, string>> &
    Record<"gradient", Record<GradientColorKey, string>>
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
  gradient: {
    subtle: `linear-gradient(120deg, ${yellow[400] + pctToHex(9)} 0%, ${
      yellow[400] + pctToHex(0)
    } 55%)`,
  },
};

const basis: Readonly<
  Record<BasisRegularKey, string> &
    Record<"alt", Record<ContainerColorKey, string>> &
    Record<"gradient", Record<GradientColorKey, string>>
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
  gradient: {
    subtle: `linear-gradient(120deg, ${zinc[400] + pctToHex(9)} 0%, ${
      zinc[400] + pctToHex(0)
    } 55%)`,
  },
};

const overlays: Readonly<
  Record<
    "black",
    Record<OverlayColorKey, string> &
      Record<"gradient", Record<GradientColorKey, string>>
  > &
    Record<
      "white",
      Record<OverlayColorKey, string> &
        Record<"gradient", Record<GradientColorKey, string>>
    >
> = {
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
    gradient: {
      subtle: `linear-gradient(120deg, ${black + pctToHex(12)} 0%, ${
        black + pctToHex(0)
      } 55%)`,
    },
  },
  white: {
    bg_subtle: white + pctToHex(2),
    bg: white + pctToHex(3),
    bg_muted: white + pctToHex(6),
    bg_vibrant: white + pctToHex(9),
    border_subtle: white + pctToHex(13),
    border: white + pctToHex(20),
    border_muted: white + pctToHex(25),
    border_vibrant: white + pctToHex(25),
    bg_emphasis_subtle: white + pctToHex(25),
    bg_emphasis: white + pctToHex(90),
    bg_emphasis_muted: white + pctToHex(68),
    bg_emphasis_vibrant: white + pctToHex(57),
    text_subtle: white + pctToHex(25),
    text: white + pctToHex(53),
    text_muted: white + pctToHex(67),
    text_loud: white + pctToHex(92),
    text_foreground: black,
    caret: white,
    icon_subtle: white + pctToHex(25),
    icon: white + pctToHex(53),
    icon_muted: white + pctToHex(67),
    icon_loud: white + pctToHex(92),
    icon_foreground: black,
    gradient: {
      subtle: `linear-gradient(120deg, ${white + pctToHex(12)} 0%, ${
        white + pctToHex(0)
      } 55%)`,
    },
  },
};

const fill: Readonly<
  Record<
    "base",
    Record<FillBaseKey, string> &
      Record<"alpha", Record<FillBaseAlphaKey, string>>
  > &
    Record<
      "contrast",
      Record<FillContrastKey, string> &
        Record<"alpha", Record<FillContrastAlphaKey, string>>
    >
> = {
  base: {
    layer: `linear-gradient(180deg, ${zinc[900] + pctToHex(99)} 0%, ${
      zinc[900] + pctToHex(100)
    } 100%)`,
    layer_subtle: zinc[900] + pctToHex(93),
    layer_muted: black + pctToHex(20),
    layer_on: white,
    layer_chrome: `linear-gradient(180deg, ${zinc[800] + pctToHex(100)} 0%, ${
      zinc[800] + pctToHex(98)
    } 100%)`,
    layer_overlay_subtle: white + pctToHex(2),
    layer_overlay_muted: white + pctToHex(9),
    layer_gradient: `linear-gradient(180deg, ${zinc[900] + pctToHex(89)} 0%, ${
      zinc[800] + pctToHex(78)
    } 100%)`,
    mask: black + pctToHex(50),
    alpha: {
      layer_01: zinc[900] + pctToHex(1),
      layer_10: zinc[900] + pctToHex(10),
      layer_20: zinc[900] + pctToHex(20),
      layer_30: zinc[900] + pctToHex(30),
      layer_40: zinc[900] + pctToHex(40),
      layer_50: zinc[900] + pctToHex(50),
      layer_60: zinc[900] + pctToHex(60),
      layer_70: zinc[900] + pctToHex(70),
      layer_80: zinc[900] + pctToHex(80),
      layer_90: zinc[900] + pctToHex(90),
    },
  },
  contrast: {
    layer: zinc[900],
    layer_on: zinc[800],
    layer_chrome: zinc[400] + pctToHex(1),
    alpha: {
      layer_70: zinc[900] + pctToHex(70),
    },
  },
};

const modul: Readonly<
  Record<ModulKey, string> & Record<"side", Record<ModulSideKey, string>>
> = {
  highlight: `linear-gradient(180deg, ${white + pctToHex(32)} 0%, ${
    white + pctToHex(0)
  } 59.04%)`,
  slider: `linear-gradient(180deg, ${white + pctToHex(100)} 0%, ${
    zinc[100] + pctToHex(100)
  } 100%)`,
  radio: `linear-gradient(180deg, ${white + pctToHex(100)} 0%, ${
    zinc[100] + pctToHex(100)
  } 100%)`,
  shadow: black,
  neon: `linear-gradient(90deg, #FFBF0000 0%, #FFBF00 25%, #D7F562 50%, #89EAFF 75%, #89EAFF00 100%)`,
  side: {
    bg: `linear-gradient(180deg, ${zinc[900] + pctToHex(89)} 0%, ${
      zinc[800] + pctToHex(78)
    } 100%)`,
    border: zinc[400] + pctToHex(11),
    bg_muted: zinc[400] + pctToHex(9),
    bg_vibrant: zinc[400] + pctToHex(13),
    text: zinc[400],
    text_loud: zinc[200],
    icon: zinc[500],
    icon_loud: yellow[500],
    icon_vibrant: yellow[500],
  },
};

type ColorScheme = {
  success: Readonly<
    Record<RegularKey, string> &
      Record<"alt", Record<ContainerColorKey, string>> &
      Record<"gradient", Record<GradientColorKey, string>>
  >;
  warning: Readonly<
    Record<RegularKey, string> &
      Record<"alt", Record<ContainerColorKey, string>> &
      Record<"gradient", Record<GradientColorKey, string>>
  >;
  danger: Readonly<
    Record<RegularKey, string> &
      Record<"alt", Record<ContainerColorKey, string>> &
      Record<"gradient", Record<GradientColorKey, string>>
  >;
};

const functional: Readonly<ColorScheme> = {
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
    text_subtle: emerald[700],
    text: emerald[600],
    text_muted: emerald[500],
    text_loud: emerald[500],
    text_foreground: white,
    icon_subtle: emerald[700],
    icon: emerald[600],
    icon_muted: emerald[600],
    icon_loud: emerald[500],
    icon_foreground: white,
    alt: {
      bg_subtle: emerald[400] + pctToHex(7),
      bg: emerald[400] + pctToHex(11),
      bg_muted: emerald[400] + pctToHex(20),
      bg_vibrant: emerald[400] + pctToHex(36),
      border_subtle: emerald[400] + pctToHex(20),
      border: emerald[400] + pctToHex(40),
      border_muted: emerald[400] + pctToHex(58),
      border_vibrant: emerald[600] + pctToHex(96),
      bg_emphasis_subtle: emerald[400] + pctToHex(86),
      bg_emphasis: emerald[500] + pctToHex(98),
      bg_emphasis_muted: emerald[600] + pctToHex(96),
      bg_emphasis_vibrant: emerald[500] + pctToHex(96),
    },
    gradient: {
      subtle: `linear-gradient(120deg, ${emerald[400] + pctToHex(9)} 0%, ${
        emerald[400]
      } 55%)`,
    },
  },
  warning: {
    bg_subtle: orange[25],
    bg: orange[50],
    bg_muted: orange[100],
    bg_vibrant: orange[200],
    border_subtle: orange[200],
    border: orange[300],
    border_muted: orange[400],
    border_vibrant: orange[400],
    bg_emphasis_subtle: orange[400],
    bg_emphasis: orange[500],
    bg_emphasis_muted: orange[600] + pctToHex(89),
    bg_emphasis_vibrant: orange[500] + pctToHex(89),
    text_subtle: orange[700],
    text: orange[600],
    text_muted: orange[500],
    text_loud: orange[500],
    text_foreground: white,
    icon_subtle: orange[700],
    icon: orange[600],
    icon_muted: orange[600],
    icon_loud: orange[500],
    icon_foreground: white,
    alt: {
      bg_subtle: orange[400] + pctToHex(7),
      bg: orange[400] + pctToHex(11),
      bg_muted: orange[400] + pctToHex(20),
      bg_vibrant: orange[400] + pctToHex(36),
      border_subtle: orange[400] + pctToHex(20),
      border: orange[400] + pctToHex(40),
      border_muted: orange[400] + pctToHex(58),
      border_vibrant: orange[600] + pctToHex(96),
      bg_emphasis_subtle: orange[400] + pctToHex(86),
      bg_emphasis: orange[500] + pctToHex(98),
      bg_emphasis_muted: orange[600] + pctToHex(96),
      bg_emphasis_vibrant: orange[500] + pctToHex(96),
    },
    gradient: {
      subtle: `linear-gradient(120deg, ${orange[400] + pctToHex(9)} 0%, ${
        orange[400]
      } 55%)`,
    },
  },
  danger: {
    bg_subtle: red[25],
    bg: red[50],
    bg_muted: red[100],
    bg_vibrant: red[200],
    border_subtle: red[200],
    border: red[300],
    border_muted: red[400],
    border_vibrant: red[400],
    bg_emphasis_subtle: red[400],
    bg_emphasis: red[500],
    bg_emphasis_muted: red[600] + pctToHex(89),
    bg_emphasis_vibrant: red[500] + pctToHex(89),
    text_subtle: red[700],
    text: red[600],
    text_muted: red[500],
    text_loud: red[500],
    text_foreground: white,
    icon_subtle: red[700],
    icon: red[600],
    icon_muted: red[600],
    icon_loud: red[500],
    icon_foreground: white,
    alt: {
      bg_subtle: red[400] + pctToHex(20),
      bg: red[400] + pctToHex(11),
      bg_muted: red[400] + pctToHex(20),
      bg_vibrant: red[400] + pctToHex(36),
      border_subtle: red[400] + pctToHex(20),
      border: red[400] + pctToHex(40),
      border_muted: red[400] + pctToHex(58),
      border_vibrant: red[600] + pctToHex(96),
      bg_emphasis_subtle: red[400] + pctToHex(86),
      bg_emphasis: red[500] + pctToHex(98),
      bg_emphasis_muted: red[600] + pctToHex(96),
      bg_emphasis_vibrant: red[500] + pctToHex(96),
    },
    gradient: {
      subtle: `linear-gradient(120deg, ${red[400] + pctToHex(9)} 0%, ${
        red[400]
      } 55%)`,
    },
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
  orange,
  amber,
  basis,
  black,
  blue,
  emerald,
  fill,
  modul,
  functional,
  green,
  overlays,
  primary,
  rainbow,
  red,
  teal,
  transparent,
  white,
  yellow,
  zinc,
  lime,
  cyan,
  sky,
  indigo,
  violet,
  fuchsia,
  pink,
  rose,
};
