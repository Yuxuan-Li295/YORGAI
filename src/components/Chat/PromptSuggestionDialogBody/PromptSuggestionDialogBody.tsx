import React, { useState, useCallback, useEffect } from "react";
import { css } from "@emotion/css";
import { PromptSuggestionDialogItem } from "./PromptSuggestionDialogItem";
import { ReactComponent as ArrowAngleRightSm } from "resources/img/ArrowAngleRightSm.svg";
import { ReactComponent as ArrowAngleLeftSm } from "resources/img/ArrowAngleLeftSm.svg";

const PromptSuggestionDialogBody = () => {
  const items = [
    <PromptSuggestionDialogItem key={1} />,
    <PromptSuggestionDialogItem key={2} />,
    <PromptSuggestionDialogItem key={3} />,
    <PromptSuggestionDialogItem key={4} />,
    <PromptSuggestionDialogItem key={5} />,
    <PromptSuggestionDialogItem key={6} />,
    <PromptSuggestionDialogItem key={7} />,
    <PromptSuggestionDialogItem key={8} />,
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
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
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
            `}
          />
        </div>
      </div>
      <div
        className={css`
          display: flex;
          width: 1048px;
          height: 108px;
          align-items: center;
          gap: 10px;
          align-self: stretch;
          box-sizing: border-box;
          background-color: #fff;
          overflow: hidden;
          padding-left: 3px;
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
            `}
          />
        </div>
      </div>
    </div>
  );
};

export { PromptSuggestionDialogBody };
