import { css } from "@emotion/css";
import { basis, primary, white } from "components/constants/colors";
import React, { useState } from "react";

const ButtonGroup = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div
      className={css`
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: stretch;
      border-radius: 6px;
      width: 208px;
      height: 28px;
      border-color: ${basis.border};
      overflow: hidden;
      background: ${isClicked ? basis.bg_subtle : white};
      box-shadow: 0px 4px 4px -4px rgba(79, 81, 89, 0.32),
        0px 2px 5px -2px rgba(79, 81, 89, 0.03),
        0px 0px 0px 1px rgba(188, 189, 194, 0.25),
        0px 1px 1px 0px rgba(188, 189, 194, 0.20);
    `}
    >
      <button
        className={css`
        box-sizing: border-box;
        display: flex;
        padding: 6px 12px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        flex: 1 0 0;
        border: none;
        border-color: ${basis.border};
        background: ${isClicked ? white : basis.bg_subtle};
        color: ${isClicked ? basis.text : primary.text};
        text-align: center;
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: 500;
        line-height: 16px;
      `}
        onClick={handleClick}
      >
        常用应用
      </button>
      <div
        className={css`
          width: 1px;
          height: 28px;
          position: relative;
          left: -1px;
          background-color: ${basis.border};
          margin: 0;
        `}
      ></div>
      <button
        className={css`
        box-sizing: border-box;
        display: flex;
        padding: 6px 12px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        flex: 1 0 0;
        border: none;
        border-color: ${basis.border};
        background: ${isClicked ? basis.bg_subtle : white};
        color: ${isClicked ? primary.text : basis.text};
        text-align: center;
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: 500;
        line-height: 16px;
      `}
        onClick={handleClick}
      >
        使用记录
      </button>
    </div>
  );
};

export default ButtonGroup;