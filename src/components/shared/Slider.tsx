import { css } from "@emotion/css";
import { basis, primary } from "components/constants/colors";
import React from "react";

type SliderProps = {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
};

function Slider({ min, max, value, onChange }: SliderProps) {
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    onChange(newValue);
  };

  const calculateColorPercentage = (value: number) => {
    return ((value - min) / (max - min)) * 100;
  };

  return (
    <div
      className={css`
        display: flex;
        padding: 16px 24px;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        align-self: stretch;
      `}
    >
      <div
        className={css`
          display: flex;
          justify-content: space-between;
          gap: 36px;
        `}
      >
        <div
          className={css`
            display: flex;
            align-items: center;
            flex: 1 0 0;
          `}
        >
          <input
            type="range"
            min={min}
            max={max}
            value={value}
            onChange={handleSliderChange}
            className={css`
              -webkit-appearance: none;
              appearance: none;
              width: 202px;
              height: 8px;
              border-radius: 108px;
              background: linear-gradient(
                to right,
                ${primary.bg_emphasis} 0%,
                ${primary.bg_emphasis} ${calculateColorPercentage(value)}%,
                ${basis.alt.bg} ${calculateColorPercentage(value)}%,
                ${basis.alt.bg} 100%
              );

              ::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 24px;
                height: 24px;
                background: linear-gradient(180deg, #fff 0%, #f1f2f3 100%);
                border-radius: 108px;
                box-shadow: 0px -1px 3px 0px #fff inset,
                  0px 0px 0px 0.75px rgba(188, 189, 194, 0.2),
                  0px 4px 4px -4px rgba(79, 81, 89, 0.32),
                  0px 4px 12px -2px rgba(79, 81, 89, 0.09);
              }
            `}
          />
        </div>
      </div>
    </div>
  );
}

export { Slider };
