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
          font-size: 19px;
          ::-webkit-input-placeholder {
            position: relative;
            top: 2px;
            left: 20px;
            color: rgb(188, 189, 194);
          }
          outline: none;
        `}
        placeholder="请输入关键词"
      />
      {append && <div>{append}</div>}
    </div>
  );
};

export default Input;
