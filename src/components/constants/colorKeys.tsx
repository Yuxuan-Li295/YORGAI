const grayKeys = ["zinc"] as const;

type GrayKey = (typeof grayKeys)[number];

const colorsKeys = [
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "fuchsia",
  "pink",
  "rose",
] as const;

type ColorsKey = (typeof colorsKeys)[number];

const spectrumKeys = [
  25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
] as const;

type SpectrumKey = (typeof spectrumKeys)[number];

const percentageKeys = [
  1, 2, 7, 10, 11, 20, 36, 40, 45, 50, 58, 86, 89, 98,
] as const;

type PercentageKey = (typeof percentageKeys)[number];

const containerColorKeys = [
  "bg_subtle",
  "bg",
  "bg_muted",
  "bg_vibrant",
  "border_subtle",
  "border",
  "border_muted",
  "border_vibrant",
  "bg_emphasis_subtle",
  "bg_emphasis",
  "bg_emphasis_muted",
  "bg_emphasis_vibrant",
] as const;

type ContainerColorKey = (typeof containerColorKeys)[number];

const gradientColorKeys = ["subtle"];

type GradientColorKey = (typeof gradientColorKeys)[number];

const contentColorKeys = [
  "text_subtle",
  "text",
  "text_muted",
  "text_loud",
  "text_foreground",
  "icon_subtle",
  "icon",
  "icon_muted",
  "icon_loud",
  "icon_foreground",
] as const;

const regularKeys = [...containerColorKeys, ...contentColorKeys] as const;

type RegularKey = (typeof regularKeys)[number];

const primaryRegularKeys = [
  ...regularKeys.filter(
    (key) => key !== "text_subtle" && key !== "icon_subtle",
  ),
] as const;

type PrimaryRegularKey = (typeof primaryRegularKeys)[number];

const basisRegularKeys = ["caret", ...regularKeys] as const;

type BasisRegularKey = (typeof basisRegularKeys)[number];

type OverlayColorKey = (typeof basisRegularKeys)[number];

const fillBaseKey = [
  "layer",
  "layer_subtle",
  "layer_muted",
  "layer_on",
  "layer_chrome",
  "layer_overlay_subtle",
  "layer_overlay_muted",
  "layer_gradient",
  "mask",
] as const;

type FillBaseKey = (typeof fillBaseKey)[number];

const fillBaseAlphaKey = [
  "layer_01",
  "layer_10",
  "layer_20",
  "layer_30",
  "layer_40",
  "layer_50",
  "layer_60",
  "layer_70",
  "layer_80",
  "layer_90",
] as const;

type FillBaseAlphaKey = (typeof fillBaseAlphaKey)[number];

const fillContrastKey = ["layer", "layer_on", "layer_chrome"] as const;

type FillContrastKey = (typeof fillContrastKey)[number];

const fillContrastAlphaKey = ["layer_70"] as const;

type FillContrastAlphaKey = (typeof fillContrastAlphaKey)[number];

const modulKey = ["highlight", "slider", "radio", "shadow", "neon"] as const;

type ModulKey = (typeof modulKey)[number];

const modulSideKey = [
  "bg",
  "border",
  "bg_muted",
  "bg_vibrant",
  "text",
  "text_loud",
  "icon",
  "icon_loud",
  "icon_vibrant",
];

type ModulSideKey = (typeof modulSideKey)[number];

export type {
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
  PercentageKey,
  PrimaryRegularKey,
  RegularKey,
  SpectrumKey,
  ModulKey,
  ModulSideKey,
};

export { colorsKeys };
