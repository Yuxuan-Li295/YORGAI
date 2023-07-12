const fontWeightKeys = ["regular", "medium", "semiBold", "bold"] as const;

type FontWeightKeys = (typeof fontWeightKeys)[number];

const displayTypeScaleKeys = ["d1", "d2", "d3", "d4", "d5"] as const;

type DisplayTypeScaleKeys = (typeof displayTypeScaleKeys)[number];

const headingTypeScaleKeys = ["h1", "h2", "h3"] as const;

type HeadingTypeScaleKeys = (typeof headingTypeScaleKeys)[number];

const bodyTypeScaleKeys = ["md", "sm", "xs"] as const;

type BodyTypeScaleKeys = (typeof bodyTypeScaleKeys)[number];

const captionTypeScaleKeys = ["caption"] as const;

type CaptionTypeScaleKeys = (typeof captionTypeScaleKeys)[number];

export type {
  FontWeightKeys,
  DisplayTypeScaleKeys,
  HeadingTypeScaleKeys,
  BodyTypeScaleKeys,
  CaptionTypeScaleKeys,
};
