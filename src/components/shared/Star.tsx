import React from "react";
import { ReactComponent as StarOutline } from "resources/img/Star.svg";
import { ReactComponent as StarFilled } from "resources/img/StarFilled.svg";
import { css } from "@emotion/css";

export const Star: React.FC<{ selected: Boolean }> = ({ selected }) =>
  selected ? (
    <StarFilled
      className={css`
        width: 15px;
        height: 15px;
      `}
    />
  ) : (
    <StarOutline
      className={css`
        width: 15px;
        height: 15px;
      `}
    />
  );
