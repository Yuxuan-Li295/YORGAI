import React from "react";
import { css } from "@emotion/css";
import CheckBoxPoint from "resources/img/SMCheckBoxPoint.svg";
import { sizes, SizeKey, SizeValue } from "../constants/sizes";

// state, size, style, type

// state: rest, hover, focus, disabled
// size: xxs, xs, sm
// style: unchecked, checked, indeterminate
// type: checkbox, radio
// color pattern

// parameters: size, type, color

export const Radio = ({
  size,
  type,
  colorPattern,
}: {
  size: SizeKey;
  type: string;
  colorPattern: string;
}) => {
  return (
    <label
      className={css`
        display: inline-flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        user-select: none;
      `}
    >
      <input
        type={"radio"}
        className={css`
          display: none;
        `}
      />
      <span
        className={css`
          display: flex;
          width: 16px;
          height: 16px;
          padding: 5px;
          justify-content: center;
          align-items: center;
          position: relative;
          border-radius: 108px;
          background: var(--fill-base-layer-on, #fff);

          /* dp/loop/basis/1dp */
          box-shadow: 0px 4px 4px -4px rgba(79, 81, 89, 0.32),
            0px 2px 5px -2px rgba(79, 81, 89, 0.03),
            0px 0px 0px 1px rgba(188, 189, 194, 0.25),
            0px 1px 1px 0px rgba(188, 189, 194, 0.2);

          &:hover {
          }

          input:checked + & {
            border-radius: 108px;
            background: var(
              --primary-bg-emphasis-muted,
              rgba(247, 187, 0, 0.89)
            );

            /* dp/loop/primary/3dp-ex */
            box-shadow: 0px 4px 4px -4px rgba(79, 81, 89, 0.32),
              0px 2px 5px -2px rgba(79, 81, 89, 0.03),
              0px 0px 0px 3px rgba(253, 204, 13, 0.45),
              0px 0px 0px 1px rgba(253, 204, 13, 0.89),
              0px 0px 0px 1px rgba(0, 0, 0, 0.1);

            &::after {
              content: "";
              position: absolute;
              width: 100%;
              height: 100%;
              background-image: url(${CheckBoxPoint});
              background-repeat: no-repeat;
              background-size: cover;
            }
          }
        `}
      ></span>
    </label>
  );
};
