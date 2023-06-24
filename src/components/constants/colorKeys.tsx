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
  "text",
  "text_muted",
  "text_loud",
  "text_foreground",
  "icon",
  "icon_muted",
  "icon_loud",
  "icon_foreground",
] as const;

const primaryKeys = [...containerColorKeys, ...contentColorKeys] as const;

type PrimaryKey = (typeof primaryKeys)[number];

const basisKeys = [
  "text_subtle",
  "caret",
  "icon_subtle",
  ...primaryKeys,
] as const;

type BasisKey = (typeof basisKeys)[number];

type BlackColorKey = (typeof basisKeys)[number];

const fillBaseKey = ["mask"] as const;

type FillBaseKey = (typeof fillBaseKey)[number];

const fillContrastKey = ["layer", "layer_on"] as const;

type FillContrastKey = (typeof fillContrastKey)[number];

export type {
  BasisKey,
  BlackColorKey,
  ColorKey,
  ContainerColorKey,
  FillBaseKey,
  FillContrastKey,
  PrimaryKey,
};
