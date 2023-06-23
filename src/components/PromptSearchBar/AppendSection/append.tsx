import React from "react";
import { css } from "@emotion/css";
import addpendIcon from "../../../resources/img/appendIcon.svg";

const Append = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div
      onClick={onClick}
      className={css`
        line-height: 48px;
        height: 48px;
        width: 45px;
        background-color: rgb(103, 205, 188);
        padding: 5px;
        padding-left: 15px;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        text-align: center;
        position: relative;
        border: 1.33px solid #e9e9ec;
        /* float: left; */
        cursor: pointer;
      `}
    >
      <img
        className={css`
          position: relative;
          left: -9px;
        `}
        src={addpendIcon}
        alt=""
      />
    </div>
  );
};

export default Append;
