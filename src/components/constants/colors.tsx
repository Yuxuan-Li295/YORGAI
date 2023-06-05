const colorKeys = [
  25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
] as const;

type ColorKey = (typeof colorKeys)[number];

const zincs: Readonly<Record<ColorKey, string>> = {
  25: "#fbfbfc",
  50: "#f9f9fa",
  100: "#f1f2f3",
  200: "#e9e9ec",
  300: "#d7d7db",
  400: "#bcbdc2",
  500: "#6e7381",
  600: "#4F5159",
  700: "#3f3f46",
  800: "#232326",
  900: "#18181B",
  950: "#000000",
};

export { zincs };
