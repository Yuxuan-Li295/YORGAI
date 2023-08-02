import { css } from "@emotion/css";
import React, { useState, ReactElement, useEffect } from "react";
import { basis, fill } from "../constants/colors";
import { body } from "../constants/fonts";
import { Button } from "./Button";

type MultiLineInputFieldProps = {
  error?: boolean;
  fontStyles?: string;
  width: number;
  height: number;
  append?: ReactElement[];
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const MultiLineInputField: React.FC<MultiLineInputFieldProps> = ({
  error = false,
  fontStyles = body.sm.regular,
  width,
  height,
  append,
  ...props
}) => {
  const { value, placeholder, disabled, onChange } = props;

  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
    onChange && onChange(event);
  };

  const inputLeftPadding = 12,
    inputRightPadding = 8,
    appendRightPadding = 4,
    appendWidth = 32,
    appendBetweenGap = 2;

  const appendSize = append ? append.length : 0;
  const InputComponentWidth =
    width -
    inputLeftPadding -
    inputRightPadding -
    appendRightPadding -
    appendWidth * appendSize -
    appendBetweenGap * (appendSize - 1);

  return (
    <div
      className={css`
        display: flex;
        align-items: center;
        width: ${width}px;
        height: ${height}px;
      `}
    >
      <div
        className={css`
          display: flex;
          align-items: center;
          flex: 1 0 0;
          border-radius: 6px;
          border: 1px solid ${basis.border_subtle};
          background: ${fill.base.layer_chrome};

          ${!error &&
          !disabled &&
          css`
            &:hover {
              border-radius: 6px;
              border: 1px solid transparent;
              background: ${fill.base.layer_chrome};
              box-shadow: 0px 4px 4px -4px rgba(79, 81, 89, 0.32),
                0px 2px 5px -2px rgba(79, 81, 89, 0.03),
                0px 0px 0px 1px rgba(188, 189, 194, 0.25),
                0px 1px 1px 0px rgba(188, 189, 194, 0.2);
            }

            &:focus-within {
              background: ${fill.base.layer_chrome};
              border: 1px solid transparent;
              box-shadow: 0px 4px 4px -4px rgba(79, 81, 89, 0.32),
                0px 2px 5px -2px rgba(79, 81, 89, 0.03),
                0px 0px 0px 1px rgba(188, 189, 194, 0.25),
                0px 1px 1px 0px rgba(188, 189, 194, 0.2);
            }
          `}

          ${disabled &&
          css`
            background: ${basis.alt.bg};
          `}

          ${error &&
          css`
            border-radius: 6px;
            border: 1px solid transparent;
            background: ${fill.base.layer_chrome};
            box-shadow: 0px 4px 4px -4px rgba(79, 81, 89, 0.32),
              0px 2px 5px -2px rgba(79, 81, 89, 0.03),
              0px 2px 14px -2px rgba(79, 81, 89, 0.12),
              0px 0px 0px 1px rgba(248, 113, 113, 0.58),
              0px 1px 1px 0px rgba(188, 189, 194, 0.2);
          `}
        `}
      >
        {/* Input atom */}
        <div
          className={css`
            display: flex;
            padding: 0px ${appendRightPadding}px 0px ${inputLeftPadding}px;
            align-items: center;
            flex: 1 0 0;
          `}
        >
          {/* Input value */}
          <div
            className={css`
              display: flex;
              height: ${height}px;
              align-items: center;
              flex: 1 0 0;
            `}
          >
            <div
              className={css`
                display: flex;
                align-items: center;
              `}
            >
              <textarea
                className={css`
                  resize: none;

                  width: ${InputComponentWidth}px;
                  border: none;
                  outline: none;
                  background: transparent;
                  height: ${height - 12}px;
                  overflow-y: scroll
                  color: ${basis.text_loud};
                  text-overflow: ellipsis;
                  white-space: normal;
                  color: ${
                    error
                      ? "var(--functional-danger-border-vibrant, #F87171)"
                      : disabled && basis.text_subtle
                  };

                  ::placeholder {
                    overflow-y: scroll;
                    color: ${basis.text_subtle};
                    text-overflow: ellipsis;
                    white-space: normal;
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

          {append && (
            <div
              className={css`
                display: flex;
                height: ${height}px;
                justify-content: flex-end;
                align-items: center;
              `}
            >
              {append.map((element, index) => (
                <Button key={index} {...element.props} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
