const colorKeys = [
  25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
] as const;

type ColorKey = (typeof colorKeys)[number];

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

const primaryKeys = [...containerColorKeys, ...contentColorKeys] as const;

type PrimaryKey = (typeof primaryKeys)[number];

const basisKeys = ["caret", ...primaryKeys] as const;

type BasisKey = (typeof basisKeys)[number];

type BlackColorKey = (typeof basisKeys)[number];

const fillBaseKey = [
  "layer",
  "layer_subtle",
  "layer_muted",
  "layer_on",
  "layer_chrome",
  "layer_overlay_subtle",
  "layer_overlay_muted",
  "mask",
] as const;

type FillBaseKey = (typeof fillBaseKey)[number];

const fillContrastKey = ["layer", "layer_on", "layer_chrome"] as const;

type FillContrastKey = (typeof fillContrastKey)[number];

const rainbowKeys = ["blue", "amber", "red", "green"] as const;

type RainbowKey = (typeof rainbowKeys)[number];

export type {
  BasisKey,
  BlackColorKey,
  ColorKey,
  ContainerColorKey,
  FillBaseKey,
  FillContrastKey,
  PrimaryKey,
  RainbowKey,
};
