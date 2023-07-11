import React from "react";
import { css } from "@emotion/css";
import { basis } from "../constants/colors";
import { ReactComponent as Separator } from "../../resources/img/Separator.svg";

export const ChatHistoryItemTextFrame = ({
  title,
  leftSubtitle,
  rightSubtitle,
}: {
  title: string;
  leftSubtitle: string;
  rightSubtitle: string;
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
      `}
    >
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex: 1 0 0;
        `}
      >
        {/* Top */}
        <div
          className={css`
            display: flex;
            align-items: center;
            align-self: stretch;
          `}
        >
          <span
            className={css`
              width: 138px;
              flex: 1 0 0;
              display: inline-block;
              height: 20px;
              flex-direction: column;
              overflow: hidden;
              color: ${basis.text_loud};
              text-overflow: ellipsis;
              white-space: nowrap;

              /* Pingfang SC/body/sm/500 - medium */
              font-size: 14px;
              font-weight: 500;
              line-height: 20px;
            `}
          >
            {title}
          </span>
        </div>

        {/* Bottom */}
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
              gap: 6px;
              flex: 1 0 0;
              align-self: stretch;
            `}
          >
            <span
              className={css`
                color: ${basis.text};
                text-align: center;

                /* Pingfang SC/body/xs/400 - regular */
                font-size: 12px;
                font-weight: 400;
                line-height: 16px;
              `}
            >
              {leftSubtitle}
            </span>
            <Separator />
            <span
              className={css`
                color: ${basis.text};
                text-align: center;

                /* Pingfang SC/body/xs/400 - regular */
                font-size: 12px;
                font-weight: 400;
                line-height: 16px;
              `}
            >
              {rightSubtitle}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
