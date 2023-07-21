import { css } from "@emotion/css";
import React from "react";
import { ReactComponent as StarOutline } from "resources/img/Star.svg";
import { ReactComponent as StarFilled } from "resources/img/StarFilled.svg";

export const Star: React.FC<{ filled: Boolean }> = ({ filled }) =>
  filled ? (
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
