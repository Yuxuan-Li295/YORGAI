const sizes = {
  xxs: {
    width: "14px",
    height: "14px",
  },
  xs: {
    width: "16px",
    height: "16px",
  },
  sm: {
    width: "18px",
    height: "18px",
  },
} as const;

export type SizeKey = keyof typeof sizes;
export type SizeValue = (typeof sizes)[SizeKey];
export { sizes };
