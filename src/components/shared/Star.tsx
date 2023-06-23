import React from "react";
import { ReactComponent as StarSvg } from "resources/img/Star.svg";
import { ReactComponent as FilledStarSvg } from "resources/img/FilledStar.svg";

export const Star: React.FC<{ selected: Boolean }> = ({ selected }) =>
  selected ? <FilledStarSvg /> : <StarSvg />;
