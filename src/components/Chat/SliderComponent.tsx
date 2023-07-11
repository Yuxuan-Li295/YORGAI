import React, { useState } from 'react';
import { css } from '@emotion/css';
import { fill, basis, primary } from 'components/constants/colors';

const SliderComponent = () => {
  const [minutes, setMinutes] = useState(0);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    const validValues = [0, 20, 60, 120];
    const closestValue = validValues.reduce((a, b) =>
      Math.abs(b - value) < Math.abs(a - value) ? b : a
    );
    setMinutes(closestValue);
  };

  return (
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
          min="0"
          max="120"
          value={minutes}
          onChange={handleSliderChange}
          className={css`
            -webkit-appearance: none;
            appearance: none;
            width: 202px;
            height: 8px;
            background: ${basis.alt.bg};
            border-radius: 108px;
            overflow: hidden;

            ::-webkit-slider-thumb {
              -webkit-appearance: none;
              appearance: none;
              width: 24px;
              height: 24px;
              background: var(--modul-slider, linear-gradient(180deg, #FFF 0%, #F1F2F3 100%));
              border-radius: 108px;
              box-shadow: 0px -1px 3px 0px #FFF inset,
                0px 0px 0px 0.75px rgba(188, 189, 194, 0.20),
                0px 4px 4px -4px rgba(79, 81, 89, 0.32),
                0px 4px 12px -2px rgba(79, 81, 89, 0.09),
                -407px 0 0 400px ${primary.bg_emphasis};
            }
          `}
        />
      </div>
      <div
        className={css`
          display: flex;
          width: 54px;
          height: 32px;
          flex-grow: 0;
          align-items: center;
          padding: 0px 4px 0px 12px;
          gap: 8px;
          flex: 1 0 0;
          border-radius: 6px;
          background: ${fill.base.layer_chrome};
          box-shadow: 0px 4px 4px -4px rgba(79, 81, 89, 0.32), 0px 2px 5px -2px rgba(79, 81, 89, 0.03), 0px 0px 0px 1px rgba(188, 189, 194, 0.25), 0px 1px 1px 0px rgba(188, 189, 194, 0.20);
        `}
      >
        <div
          className={css`
            color: ${basis.text_loud};
            font-family: PingFang SC;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px;
            `}
        >
          {minutes}
        </div>
      </div>
    </div>
  );
};

export { SliderComponent };
