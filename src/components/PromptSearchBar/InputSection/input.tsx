import React, { ChangeEvent, ReactElement, FC } from "react";
import { css } from "@emotion/css";

export interface InputProps {
  icon?: React.SVGProps<SVGSVGElement>;
  //添加前缀
  prepend?: string | ReactElement;
  append?: string | ReactElement;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = (props) => {
  const { prepend, append } = props;

  return (
    <div
      className={css`
        display: flex;
        /* width: 100px; */
      `}
    >
      {prepend && <div>{prepend}</div>}
      <input
        className={css`
          width: 650px;
          border: 1px solid #ecebeb;
          background-color: #fff;
          font-size: 18px;
          height: 48px;
          box-sizing: border-box;
          ::-webkit-input-placeholder {
            position: relative;
            top: 2px;
            font-family: "PingFang SC";
            font-weight: 400;
            font-size: 18px;
            height: 26.67px;
            line-height: 26.67px;
            color: rgb(188, 189, 194);
          }

          outline: none;
          text-indent: 25px;
        `}
        placeholder="请输入关键词"
      />
      {append && <div>{append}</div>}
    </div>
  );
};

export default Input;
