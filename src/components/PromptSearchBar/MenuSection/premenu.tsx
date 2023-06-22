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
  const [isPreShow, changePre] = useState(true);

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
        background-color: rgb(242, 242, 243);
        padding: 5px;
        padding-left: 15px;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
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
              border-bottom: 1px solid rgb(242, 242, 243);
              border: 1px solid rgb(242, 242, 243);
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
              border: 1px solid rgb(242, 242, 243);
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
