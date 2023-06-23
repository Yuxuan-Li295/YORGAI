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
        line-height: 48px;
        height: 48px;
        width: 100px;
        /* background-color: rgb(242, 242, 243); */
        padding: 5px;
        padding-left: 15px;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        border: 1px solid rgba(233, 233, 236, 1);
        &:hover {
          background-color: rgb(242, 242, 243);
        }
        /* float: left; */
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
          /* background-color: rgb(249, 249, 249); */
        `}
      >
        {" "}
        <div>所有分类</div>
        <img
          className={css`
            margin-left: 5px;
          `}
          src={preIcon}
          alt=""
        />{" "}
      </div>

      {isPreShow && (
        <div
          ref={subMenuRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={css`
            animation: ${fadeIn} 0.3s ease-in-out;
            box-shadow: 0 8px 12px -6px rgba(79, 81, 89, 0.16);
          `}
        >
          <div
            onClick={onClick}
            className={css`
              line-height: 36px;
              height: 36px;
              width: 100px;
              background-color: #fff;
              padding: 5px;
              padding-left: 15px;
              border-top-left-radius: 8px;
              border-top-right-radius: 8px;
              /* border-bottom-left-radius: 8px; */
              /* float: left; */
              margin-left: -15px;
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
              line-height: 36px;
              height: 36px;
              width: 100px;
              background-color: #fff;
              padding: 5px;
              padding-left: 15px;

              border-bottom-left-radius: 8px;
              margin-left: -15px;
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
