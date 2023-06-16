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

const basisKeys = [
  "text-subtle",
  "text",
  "text-muted",
  "text-load",
  "text-foreground",
] as const;

type BasisKey = (typeof basisKeys)[number];

const basis: Readonly<Record<BasisKey, string>> = {
  "text-subtle": "#BCBDC2",
  text: "#707480",
  "text-muted": "#4F5159",
  "text-load": "#18181B",
  "text-foreground": "#FFFFFF",
};

const basisAltKeys = ["bg-subtle", "bg", "bg-muted"] as const;

type BasisAltKey = (typeof basisAltKeys)[number];

const basisAlt: Readonly<Record<BasisAltKey, string>> = {
  "bg-subtle": "#BCBDC21A",
  bg: "#BCBDC226",
  "bg-muted": "#BCBDC233",
};

export { zincs, basis, basisAlt };
