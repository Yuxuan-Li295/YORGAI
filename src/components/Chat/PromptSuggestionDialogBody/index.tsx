import React, { useState, useCallback, useEffect } from "react";
import { css } from "@emotion/css";
import { PromptSuggestionItem } from "./PromptSuggestionItem";
import { ReactComponent as ArrowAngleRightSm } from "resources/img/ArrowAngleRightSm.svg";
import { ReactComponent as ArrowAngleLeftSm } from "resources/img/ArrowAngleLeftSm.svg";
import { DialogHeader } from "./DialogHeader.tsx/DialogHeader";

const PromptSuggestionDialogBody = ({ autoPlay }: { autoPlay?: boolean }) => {
  const items = [
    <PromptSuggestionItem key={1} />,
    <PromptSuggestionItem key={2} />,
    <PromptSuggestionItem key={3} />,
    <PromptSuggestionItem key={4} />,
    <PromptSuggestionItem key={5} />,
    <PromptSuggestionItem key={6} />,
    <PromptSuggestionItem key={7} />,
    <PromptSuggestionItem key={8} />,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, [items.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length,
    );
  }, [items.length]);

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(handleNext, 3000);
      return () => clearInterval(interval);
    }
  }, [handleNext, autoPlay]);

  return (
    <div>
      <div>
        <DialogHeader />
      </div>
      <div
        className={css`
          display: flex;
        `}
      >
        <div>
          <div onClick={handlePrevious}>
            <ArrowAngleRightSm
              className={css`
                cursor: pointer;
                width: 16px;
                height: 108px;
                background-color: #fff;
                border-bottom-left-radius: 8px;
              `}
            />
          </div>
        </div>
        <div
          className={css`
            display: flex;
            width: 1056px;
            height: 108px;
            align-items: center;
            gap: 10px;
            align-self: stretch;
            box-sizing: border-box;
            background-color: #fff;
            overflow: hidden;
            padding-left: 4px;
          `}
        >
          <div
            className={css`
              display: flex;
              width: ${(items.length + 4.5) * 100}%;
              transform: translateX(
                -${(currentIndex * 100) / (items.length + 4.1)}%
              );
              transition: transform 0.3s ease-in-out;
            `}
          >
            {items.slice(-3).map((item, index) => (
              <div
                key={index}
                className={css`
                  flex: 0 0 ${100 / (items.length + 4.1)}%;
                  min-width: 0;
                `}
              >
                {item}
              </div>
            ))}
            {items.map((item, index) => (
              <div
                key={index}
                className={css`
                  flex: 0 0 ${100 / (items.length + 4.1)}%;
                  min-width: 0;
                `}
              >
                {item}
              </div>
            ))}
            {items.slice(0, 1).map((item, index) => (
              <div
                key={index}
                className={css`
                  flex: 0 0 ${100 / (items.length + 4.1)}%;
                  min-width: 0;
                `}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div onClick={handleNext}>
            <ArrowAngleLeftSm
              className={css`
                cursor: pointer;
                width: 16px;
                height: 108px;
                background-color: #fff;
                border-bottom-right-radius: 8px;
              `}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { PromptSuggestionDialogBody };
