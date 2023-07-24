import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import React from "react";

export const VerticalBar: React.FC<{ height: number }> = ({ height }) => (
  <div
    className={css`
      flex: 1px 0 0;
      background-color: ${basis.border_subtle};
    `}
    style={{ height }}
  />
);
