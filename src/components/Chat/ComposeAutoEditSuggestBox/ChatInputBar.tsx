import { css } from "@emotion/css";
import { basis, fill } from "components/constants/colors";
import React, { useEffect, useRef, useState } from "react";

export const ChatInputBar: React.FC<React.TextareaHTMLAttributes<{}>> = ({
  ...inputProps
}) => {
  const [input, setInput] = useState<string>();
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (ref.current !== null) {
      ref.current.style.height = "0px";
      ref.current.style.height = ref.current.scrollHeight + "px";
    }
  }, [ref, input]);

  return (
    <div
      className={css`
        display: flex;
        align-items: center;
        padding: 10px;
        border-radius: 8px;
        gap: 8px;
        border: 1px solid ${basis.border_subtle};
        background: ${fill.base.layer_chrome};
        box-shadow: 0px 2px 12px 0px rgba(79, 81, 89, 0.06),
          0px 0px 4px 0px rgba(79, 81, 89, 0.03),
          0px 1px 0px 0px rgba(255, 255, 255, 0.06) inset,
          0px 0.5px 0px 0px rgba(255, 255, 255, 0.06) inset;
        &:has(textarea:focus) {
          border: 1px solid #67cdbc;
        }
        width: 850px;
        height: 48px;
        box-sizing: border-box;
      `}
    >
      <textarea
        ref={ref}
        value={input}
        onChange={(e) => {
          setInput(e.target.value === "" ? undefined : e.target.value);
        }}
        className={css`
          flex: 1;
          background-color: none;
          border: none;
          padding: 0;
          margin: 0;
          color: ${basis.text};
          font-family: inherit;
          font-size: 14px;
          font-weight: 500;
          line-height: 20px;
          resize: none;
          overflow: hidden;
          height: 20px;

          &::placeholder {
            color: ${basis.text_subtle};
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
          }

          &:active,
          &:focus {
            border: none;
            outline: none;
          }
        `}
        placeholder="请输入修改建议"
        {...inputProps}
      />
      <div
        className={css`
          display: flex;
          align-items: end;
          height: 100%;
        `}
      ></div>
    </div>
  );
};
