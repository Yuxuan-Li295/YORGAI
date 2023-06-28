import { css } from "@emotion/css";
import React, { useEffect, useRef, useState } from "react";
import { basis, fill } from "./constants/colors";
import { ReactComponent as PaperPlane } from "resources/img/paper-plane.svg";

export const ChatInputBar: React.FC<React.TextareaHTMLAttributes<{}>> = ({
  ...inputProps
}) => {
  const [input, setInput] = useState<string>();
  const [inputHeight, setInputHeight] = useState<number>();
  const ref = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (ref.current !== null) {
      ref.current.style.height = "0";
      ref.current.style.height = ref.current.scrollHeight + "px";
    }
  }, [ref, input]);
  return (
    <div
      className={css`
        display: flex;
        position: relative;
        align-self: stretch;
        flex-direction: row;
        justify-content: stretch;
        padding: 6px 12px;
        border-radius: 8px;
        border: 1px solid;
        background: ${fill.base.layer_chrome};
        box-shadow: 0px 2px 12px 0px rgba(79, 81, 89, 0.06),
          0px 0px 4px 0px rgba(79, 81, 89, 0.03),
          0px 1px 0px 0px rgba(255, 255, 255, 0.06) inset,
          0px 0.5px 0px 0px rgba(255, 255, 255, 0.06) inset;
      `}
      style={{ borderColor: input !== null && input !== "" ? "#67CDBC" : basis.border_subtle }}
    >
      <textarea
        ref={ref}
        value={input}
        onChange={(e) => {
          setInput(e.target.value === "" ? undefined : e.target.value);
        }}
        className={css`
          flex: 100% 0 1;
          background-color: none;
          border: none;
          margin: 8px 0;
          color: ${basis.text};
          font-family: inherit;
          font-size: 14px;
          font-weight: 500;
          line-height: 20px;
          resize: none;
          overflow: hidden;

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
        style={{ height: inputHeight }}
        placeholder="请输入提示词"
        {...inputProps}
      />
      <div
        className={css`
          display: flex;
          flex-direction: column;
          justify-content: end;
          align-items: center;
        `}
      >
        <button
          className={css`
            display: flex;
            padding: 6px;
            flex-grow: 0;
            justify-content: center;
            align-items: center;
            border-radius: 6px;
            border: none;

            &:hover,
            &:focus,
            &:active {
              border: none;
            }
          `}
          style={{ background: input !== null && input !== "" ? "#67CDBC" : basis.border_vibrant }}
        >
          <PaperPlane className={css`width: 14px; height: 14px;`} />
        </button>
      </div>
    </div>
  );
};
