import React from "react";
import { css } from "@emotion/css";
import trailIcon from "../../../resources/img/trailIcon.svg";

const Append = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div
      onClick={onClick}
      className={css`
        line-height: 48px;
        height: 48px;
        width: 52px;
        background-color: rgb(103, 205, 188);
        padding: 8px 16px 8px 16px;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        text-align: center;
        position: relative;
        border: 1px solid #e9e9ec;
        border-left: 0px;
        box-sizing: border-box;
        cursor: pointer;
      `}
    >
      <img
        className={css`
          position: relative;
          left: -4px;
        `}
        src={trailIcon}
        alt=""
      />
    </div>
  );
};

export default Append;
