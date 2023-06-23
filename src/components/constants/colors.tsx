const white = "#FFFFFF";
const black = "#000000";
const transparent = "transparent";

const blackColorKeys = [
  "icon_subtle",
  "icon",
  "icon_muted",
  "icon_loud",
  "bg_subtle",
  "bg",
  "bg_muted",
  "bg_vibrant",
] as const;

type BlackColorKey = (typeof blackColorKeys)[number];

const blacks: Readonly<Record<BlackColorKey, string>> = {
  icon_subtle: "#00000038",
  icon: "#0000008F",
  icon_muted: "#000000A6",
  icon_loud: "#000000E8",
  bg_subtle: "#00000008",
  bg: "#0000000D",
  bg_muted: "#00000012",
  bg_vibrant: "#00000017",
};

const colorKeys = [
  25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
] as const;

type ColorKey = (typeof colorKeys)[number];

const zincs: Readonly<Record<ColorKey, string>> = {
  25: "#FBFBFC",
  50: "#F9F9FA",
  100: "#F1F2F3",
  200: "#E9E9EC",
  300: "#D7D7DB",
  400: "#BCBDC2",
  500: "#6E7381",
  600: "#4F5159",
  700: "#3F3F46",
  800: "#232326",
  900: "#18181B",
  950: "#09090B",
};

const basisKeys = ["text_subtle", "text", "text_muted", "text_loud"] as const;

type BasisKey = (typeof basisKeys)[number];

const basis: Readonly<Record<BasisKey, string>> = {
  text_subtle: "#BCBDC2",
  text: "#707480",
  text_muted: "#4F5159",
  text_loud: "#18181B",
};

const basisAltKeys = [
  "bg_subtle",
  "bg",
  "bg_muted",
  "border_subtle",
  "border",
  "border_muted",
] as const;

type BasisAltKey = (typeof basisAltKeys)[number];

const basisAlt: Readonly<Record<BasisAltKey, string>> = {
  bg_subtle: "#BCBDC21A",
  bg: "#BCBDC226",
  bg_muted: "#BCBDC233",
  border_subtle: "#E9E9EC",
  border: "#D7D7DB",
  border_muted: "#BCBDC2",
};

const fillBaseKey = ["mask"] as const;

type FillBaseKey = (typeof fillBaseKey)[number];

const fillContrastKey = ["layer", "layer_on"] as const;

type FillContrastKey = (typeof fillContrastKey)[number];

const fill: Readonly<
  Record<"base", Record<FillBaseKey, string>> &
    Record<"contrast", Record<FillContrastKey, string>>
> = {
  base: {
    mask: "#00000080",
  },
  contrast: {
    layer: zincs[900],
    layer_on: zincs[800],
  },
};

export { basis, basisAlt, black, blacks, fill, white, zincs, transparent };
