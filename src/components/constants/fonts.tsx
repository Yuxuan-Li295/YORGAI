import {
  BodyTypeScaleKeys,
  CaptionTypeScaleKeys,
  DisplayTypeScaleKeys,
  FontWeightKeys,
  HeadingTypeScaleKeys,
} from "./fontKeys";
import { css } from "@emotion/css";

const baseFontStyle = (
  fontFamily: string,
  size: number,
  weight: number,
  lineHeight: number,
  letterSpacing: number,
) => css`
  font-family: ${fontFamily};
  font-size: ${size}px;
  font-style: normal;
  font-weight: ${weight};
  line-height: ${lineHeight}px;
  letter-spacing: ${letterSpacing}px;
`;

const fontWeights: Readonly<Record<FontWeightKeys, number>> = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
};

const createFontStyles = (
  fontFamily: string,
  size: number,
  lineHeight: number,
  letterSpacing: number,
) => ({
  regular: baseFontStyle(
    fontFamily,
    size,
    fontWeights.regular,
    lineHeight,
    letterSpacing,
  ),
  medium: baseFontStyle(
    fontFamily,
    size,
    fontWeights.medium,
    lineHeight,
    letterSpacing,
  ),
  semiBold: baseFontStyle(
    fontFamily,
    size,
    fontWeights.semiBold,
    lineHeight,
    letterSpacing,
  ),
  bold: baseFontStyle(
    fontFamily,
    size,
    fontWeights.bold,
    lineHeight,
    letterSpacing,
  ),
});

const display: Readonly<
  Record<DisplayTypeScaleKeys, Record<FontWeightKeys, string>>
> = {
  d1: createFontStyles("Inter", 72, 90, -1.44),
  d2: createFontStyles("Inter", 60, 72, -1.2),
  d3: createFontStyles("Inter", 48, 60, -0.96),
  d4: createFontStyles("Inter", 36, 44, -0.72),
  d5: createFontStyles("Inter", 30, 38, 0),
};

const heading: Readonly<
  Record<HeadingTypeScaleKeys, Record<FontWeightKeys, string>>
> = {
  h1: createFontStyles("Pingfang SC", 24, 32, 0),
  h2: createFontStyles("Pingfang SC", 20, 30, 0),
  h3: createFontStyles("Pingfang SC", 18, 28, 0),
};

const body: Readonly<
  Record<BodyTypeScaleKeys, Record<FontWeightKeys, string>>
> = {
  md: createFontStyles("Pingfang SC", 16, 24, 0),
  sm: createFontStyles("Pingfang SC", 14, 20, 0),
  xs: createFontStyles("Pingfang SC", 12, 16, 0),
};

const caption: Readonly<
  Record<CaptionTypeScaleKeys, Record<FontWeightKeys, string>>
> = {
  caption: createFontStyles("Pingfang SC", 10, 12, 0),
};

export { display, heading, body, caption };
