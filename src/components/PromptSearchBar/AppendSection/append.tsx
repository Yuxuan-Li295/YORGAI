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
        width: 50px;
        background-color: rgb(103, 205, 188);
        padding: 5px;
        padding-left: 15px;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        text-align: center;
        position: relative;
        /* float: left; */
        cursor: pointer;
      `}
    >
      <img
        className={css`
          position: relative;
          left: -7px;
        `}
        src={addpendIcon}
        alt=""
      />
    </div>
  );
};

export default Append;
