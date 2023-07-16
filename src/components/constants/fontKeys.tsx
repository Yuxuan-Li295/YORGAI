const fontWeightKeys = ["regular", "medium", "semiBold", "bold"] as const;

type FontWeightKey = (typeof fontWeightKeys)[number];

const displayTypeScaleKeys = ["d1", "d2", "d3", "d4", "d5"] as const;

type DisplayTypeScaleKey = (typeof displayTypeScaleKeys)[number];

const headingTypeScaleKeys = ["h1", "h2", "h3"] as const;

type HeadingTypeScaleKey = (typeof headingTypeScaleKeys)[number];

const bodyTypeScaleKeys = ["md", "sm", "xs"] as const;

type BodyTypeScaleKey = (typeof bodyTypeScaleKeys)[number];

export type {
  FontWeightKey,
  DisplayTypeScaleKey,
  HeadingTypeScaleKey,
  BodyTypeScaleKey,
};
