import React from "react";
import { css } from "@emotion/css";
import { basis, fill } from "../constants/colors";

export const ChatHistoryItemInputContainer = ({
  title,
  handleInputChange,
}: {
  title: string;
  handleInputChange: (event: {
    preventDefault: () => void;
    target: { value: React.SetStateAction<string> };
  }) => void;
}) => {
  return (
    <div
      className={css`
        width: 138px;
        height: 36px;
        display: flex;
        align-items: center;
        gap: 8px;
        flex: 1 0 0;
        border-radius: 6px;
        background: ${fill.base.layer_chrome};

        /* dp/loop/primary/3dp */
        box-shadow: 0px 4px 4px -4px rgba(79, 81, 89, 0.32),
          0px 2px 5px -2px rgba(79, 81, 89, 0.03),
          0px 0px 0px 3px rgba(253, 204, 13, 0.45),
          0px 0px 0px 1px rgba(253, 204, 13, 0.98),
          0px 1px 1px 0px rgba(188, 189, 194, 0.2);
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
            height: 32px;
            align-items: center;
            gap: 8px;
            flex: 1 0 0;
          `}
        >
          <input
            className={css`
              width: 114px;
              height: 20px;
              border: none;
              outline: none;
              display: flex;
              align-items: center;
              height: 20px;
              flex-direction: column;
              justify-content: center;
              flex: 1 0 0;
              color: ${basis.text_loud};

              /* Pingfang SC/body/xs/400 - regular */
              font-size: 12px;
              font-weight: 400;
              line-height: 16px;

              &:focus {
                outline: none;
              }
            `}
            type="text"
            defaultValue={title}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};
