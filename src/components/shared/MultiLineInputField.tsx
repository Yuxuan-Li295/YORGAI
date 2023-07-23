import React, { useState } from "react";
import { css } from "@emotion/css";
import { basis, fill } from "../constants/colors";

export const MultiLineInputField = ({
  value,
  placeholder,
  disabled,
  error,
  fontStyles,
  width,
  height,
}: {
  value: string;
  placeholder: string;
  disabled: boolean;
  error: boolean;
  fontStyles: string;
  width: number;
  height: number;
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <div
      className={css`
        width: ${width}px;
        height: ${height}px;
      `}
    >
      <div
        className={css`
          display: flex;
          align-items: center;
          gap: 8px;
          flex: 1 0 0;
          border-radius: 6px;
          background: ${fill.base.layer_chrome};
          border: 1px solid transparent;

          ${!error &&
          !disabled &&
          `&:hover {
                    /* dp/loop/basis/1dp */
                    box-shadow: 
                            0px 4px 4px -4px rgba(79, 81, 89, 0.32),
                            0px 2px 5px -2px rgba(79, 81, 89, 0.03),
                            0px 0px 0px 1px rgba(188, 189, 194, 0.25),
                            0px 1px 1px 0px rgba(188, 189, 194, 0.2);
                }
                            
                &:focus-within {
                    border: 1px solid rgb(253, 204, 13);
                }`}

          ${disabled &&
          `border-radius: 6px;
                background: ${basis.alt.bg};`}
                            
            ${error && `border: 1px solid rgba(248, 113, 113);`}
        `}
      >
        <div
          className={css`
            display: flex;
            padding: 0px 12px;
            align-items: center;
            gap: 8px;
            flex: 1 0 0;
          `}
        >
          <div
            className={css`
              display: flex;
              height: ${height}px;
              align-items: center;
              gap: 8px;
              flex: 1 0 0;
            `}
          >
            <div
              className={css`
                display: flex;
                align-items: center;
                flex: 1 0 0;
              `}
            >
              <textarea
                className={css`
                  resize: none;
                  border: none;
                  outline: none;
                  background: transparent;
                  display: flex;
                  height: ${height - 12}px;
                  flex-direction: column;
                  justify-content: center;
                  flex: 1 0 0;
                  overflow: hidden;
                  color: ${basis.text_loud};
                  text-overflow: ellipsis;
                  whitespace: nowrap;

                  ::placeholder {
                    overflow: hidden;
                    color: ${basis.text_subtle};
                    text-overflow: ellipsis;
                    whitespace: nowrap;

                    ${fontStyles}
                  }

                  ${fontStyles}
                `}
                value={inputValue}
                onChange={handleInputChange}
                disabled={disabled}
                placeholder={placeholder}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
