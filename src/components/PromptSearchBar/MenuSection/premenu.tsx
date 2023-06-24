import React, { useState, useRef } from "react";
import { css, keyframes } from "@emotion/css";
import preIcon from "../../../resources/img/precion.svg";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 100;  
  }
  
`;

const Premenu = ({ onClick }: { onClick?: () => void }) => {
  const [isPreShow, changePre] = useState(false);

  const subMenuRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<any>(null);

  const togglePreShow = () => {
    changePre(!isPreShow);
  };

  const handleMouseEnter = () => {
    changePre(true);
    clearTimeout(timerRef.current);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      changePre(false);
    }, 200);
  };

  return (
    <div
      className={css`
        line-height: 32px;
        height: 48px;
        box-sizing: border-box;
        width: 125px;
        font-size: 16px;
        font-weight: 500;
        padding: 8px 16px;
        padding-left: 18px;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        border: 1px solid rgba(233, 233, 236, 1);
        border-right: 0px;
        &:hover {
          background-color: rgb(242, 242, 243);
        }
      `}
    >
      <div
        onClick={togglePreShow}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={css`
          display: flex;
          cursor: pointer;
          color: rgba(112, 116, 128);
          font-size: 16px;
          font-family: "PingFang SC";
        `}
      >
        <div
          className={css`
            display: flex;
            cursor: pointer;
            color: rgba(112, 116, 128);
            font-size: 16px;
            font-family: "PingFang SC";
            font-weight: 500;
          `}
        >
          所有分类
        </div>
        <img
          className={css`
            margin-left: 5px;
          `}
          src={preIcon}
          alt=""
        />
      </div>

      {isPreShow && (
        <div
          ref={subMenuRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={css`
            animation: ${fadeIn} 0.3s ease-in-out;
            box-shadow: 0 8px 12px -6px rgba(79, 81, 89, 0.16);
            margin-left: -17.5px;
          `}
        >
          <div
            onClick={onClick}
            className={css`
              line-height: 34px;
              height: 40px;
              box-sizing: border-box;
              width: 125px;
              background-color: #fff;
              padding: 4px 4px 0px 13px;
              border-top-left-radius: 6px;
              border-top-right-radius: 6px;
              margin-top: 10px;
              border: 1px solid rgba(188, 189, 194, 0.2);
              color: rgba(112, 116, 128, 1);
              cursor: pointer;
            `}
          >
            提示词
          </div>
          <div
            onClick={onClick}
            className={css`
              background-color: #fff;
              line-height: 34px;
              height: 41px;
              box-sizing: border-box;
              width: 125px;
              background-color: #fff;
              padding: 4px 4px 0px 13px;
              border-bottom-left-radius: 6px;
              border-bottom-right-radius: 6px;
              border: 1px solid rgba(188, 189, 194, 0.2);
              border-top: 1px solid rgba(188, 189, 194, 0);
              color: rgba(112, 116, 128, 1);
              font-size: 16px;
              cursor: pointer;
              box-shadow: 0 16px 24px -8px rgba(79, 81, 89, 0.2);
            `}
          >
            AI工具
          </div>
        </div>
      )}
    </div>
  );
};

export default Premenu;
