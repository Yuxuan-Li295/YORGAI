import React from "react";
import { css } from "@emotion/css";

export const ChatHistoryItemTrailContainer = ({
  LeftIcon,
  LeftIconOnClickHandler,
  RightIcon,
  RightIconOnClickHandler,
}: {
  LeftIcon: React.ComponentType;
  LeftIconOnClickHandler: () => void;
  RightIcon: React.ComponentType;
  RightIconOnClickHandler: () => void;
}) => {
  return (
    <div
      className={css`
        display: flex;
        height: 20px;
        justify-content: center;
        align-items: center;
        gap: 2px;
      `}
    >
      <button
        className={css`
          border: none;
          background: none;
          outline: none;
          cursor: pointer;
          display: flex;
          padding: 4px 6px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-radius: 6px;
        `}
        onClick={LeftIconOnClickHandler}
      >
        <LeftIcon />
      </button>

      <button
        className={css`
          border: none;
          background: none;
          outline: none;
          cursor: pointer;
          display: flex;
          padding: 4px 6px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-radius: 6px;
        `}
        onClick={RightIconOnClickHandler}
      >
        <RightIcon />
      </button>
    </div>
  );
};
