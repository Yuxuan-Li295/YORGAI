import { css } from "@emotion/css";
import { useState } from "react";
import { ReactComponent as ArrayAngleDownMd } from "../../../../resources/img/ArrowAngleDownMd.svg";
import { basis } from "../../../constants/colors";

const DropButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(9);
  const availableValues = [9, 10, 20, 50, 100, 200];

  return (
    <div
      className={css`
        position: relative;
        width: 58px;
        height: 28px;
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        padding-left: 12px;
      `}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span
        className={css`
          width: auto;
          height: 16px;
          color: ${basis.text};
        `}
      >
        {selectedValue}
      </span>
      <ArrayAngleDownMd />

      {isOpen && (
        <div
          className={css`
            position: absolute;
            top: 100%;
            transform: translateY(-125%);
            left: 0;
            width: 100%;
            max-width: 60px;
            max-height: 100px;
            overflow-y: scroll;
            background-color: white;
            border-radius: 5px;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
            // Scrollbar styling for Chrome, Edge, and Safari
            &::-webkit-scrollbar {
              width: 4px;
            }
            &::-webkit-scrollbar-thumb {
              background-color: rgba(0, 0, 0, 0.5);
              border-radius: 2px;
            }
            // Scrollbar styling for Firefox
            scrollbar-width: thin;
            scrollbar-color: rgba(0, 0, 0, 0.5) transparent;
            margin-top: -5px;
          `}
        >
          {availableValues.map((value) => (
            <div
              key={value}
              onClick={() => setSelectedValue(value)}
              className={css`
                padding: 5px;
                cursor: pointer;
                &:hover {
                  background-color: #f7f7f7;
                }
              `}
            >
              {value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { DropButton };
