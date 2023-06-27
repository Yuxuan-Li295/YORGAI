import { css } from "@emotion/css";
import React, { ChangeEvent, FC, ReactElement } from "react";

export interface InputProps {
  icon?: React.SVGProps<SVGSVGElement>;
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
          outline: none;
          padding: 0 16px;

          ::-webkit-input-placeholder {
            position: relative;
            font-family: "PingFang SC";
            font-weight: 400;
            font-size: 18px;
            height: 26.67px;
            line-height: 26.67px;
            color: rgb(188, 189, 194);
          }
        `}
        placeholder="请输入关键词"
      />
      {append && <div>{append}</div>}
    </div>
  );
};

export { Input };
