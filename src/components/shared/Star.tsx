import React from "react";
import { ReactComponent as StarSvg } from "resources/img/Star.svg";

export const Star: React.FC<{ selected: Boolean }> = ({ selected }) => (
  <span style={{ color: selected ? "#F7BB00" : "transparent" }}>
    <StarSvg />
  </span>
);
