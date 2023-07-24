import React, { useState } from "react";
import { css } from "@emotion/css";
import { basis, fill, functional } from "../constants/colors";
import { body } from "../constants/fonts";

interface InputFieldProps {
  value: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  fontStyles?: string;
  width: number;
  height: number;
  tag: "input" | "textarea"; // Specify the input tag to render
}

const InputField = ({
  value,
  placeholder = "",
  disabled = false,
  error = false,
  fontStyles = body.sm.regular,
  width,
  height,
  tag,
}: InputFieldProps) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setInputValue(event.target.value);
  };

  const InputComponent = tag === "textarea" ? "textarea" : "input";

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
          align-self: stretch;
        `}
      >
        <div
          className={css`
            display: flex;
            align-items: center;
            gap: 8px;
            flex: 1 0 0;
            border-radius: 6px;
            border: 1px solid ${basis.border_subtle};
            background: ${fill.base.layer_chrome};

            ${!error &&
            !disabled &&
            `&:hover {
                border-radius: 6px;
                border: 1px solid transparent;
                background: ${fill.base.layer_chrome};
                
                /* dp/loop/basis/1dp */
                box-shadow: 
                0px 4px 4px -4px rgba(79, 81, 89, 0.32), 
                0px 2px 5px -2px rgba(79, 81, 89, 0.03), 
                0px 0px 0px 1px rgba(188, 189, 194, 0.25), 
                0px 1px 1px 0px rgba(188, 189, 194, 0.20);
              }
                            
              &:focus-within {
                background: ${fill.base.layer_chrome};
                border: 1px solid transparent;
                /* dp/loop/basis/1dp */
                box-shadow: 
                0px 4px 4px -4px rgba(79, 81, 89, 0.32), 
                0px 2px 5px -2px rgba(79, 81, 89, 0.03), 
                0px 0px 0px 1px rgba(188, 189, 194, 0.25), 
                0px 1px 1px 0px rgba(188, 189, 194, 0.20);
              }`}

            ${disabled && ` background: ${basis.alt.bg};`}
                            
            ${error &&
            `   border-radius: 6px;
                        border: 1px solid transparent;
                        background: ${fill.base.layer_chrome};

                        /* dp/loop/danger/1dp-muted */
                        box-shadow: 
                        0px 4px 4px -4px rgba(79, 81, 89, 0.32), 
                        0px 2px 5px -2px rgba(79, 81, 89, 0.03), 
                        0px 2px 14px -2px rgba(79, 81, 89, 0.12), 
                        0px 0px 0px 1px rgba(248, 113, 113, 0.58), 
                        0px 1px 1px 0px rgba(188, 189, 194, 0.20);`}
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
                <InputComponent
                  className={css`
                    ${tag === "textarea" && "resize: none;"}
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
                    white-space: nowrap;
                    color: ${error
                      ? "var(--functional-danger-border-vibrant, #F87171)"
                      : disabled && basis.text_subtle};

                    ::placeholder {
                      overflow: hidden;
                      color: ${basis.text_subtle};
                      text-overflow: ellipsis;
                      white-space: nowrap;

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
    </div>
  );
};

export const MultiLineInputField = (props: Omit<InputFieldProps, "tag">) => (
  <InputField {...props} tag="textarea" />
);

export const SingleLineInputField = (props: Omit<InputFieldProps, "tag">) => (
  <InputField {...props} tag="input" />
);
