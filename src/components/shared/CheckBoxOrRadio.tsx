import React from "react";
import { css } from "@emotion/css";
import Check from "resources/img/Check.svg";
import { SizeKey, sizes, SizeValue } from "../constants/sizes";
import DisabledCheck from "resources/img/DisabledCheck.svg";
import { ContainerColorKey } from "../constants/colorKeys";
import RadioPoint from "resources/img/RadioPoint.svg";
import DisabledRadioPoint from "resources/img/DisabledRadioPoint.svg";
import { fill } from "../constants/colors";

export const CheckBoxOrRadio = ({
  type,
  size,
  colorPattern,
  value,
  checked,
  disabled,
  name,
  id,
  onChange,
}: {
  type: "checkbox" | "radio";
  size: SizeKey;
  colorPattern: Record<ContainerColorKey, string>;
  value: string;
  checked: boolean;
  disabled: boolean;
  name: string;
  id: string;
  onChange: (checked: boolean) => void;
}) => {
  const bgEmphasis = colorPattern.bg_emphasis.replace("#", "");

  const r = parseInt(bgEmphasis.substring(0, 2), 16);
  const g = parseInt(bgEmphasis.substring(2, 4), 16);
  const b = parseInt(bgEmphasis.substring(4, 6), 16);

  const { width, height }: SizeValue = sizes[size];

  const handleCheck = () => {
    const newChecked = !checked; // Toggle the checked state
    onChange(newChecked); // Call the callback function to update the checked state
  };

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
        type={"checkbox"}
        className={css`
          position: absolute;
          opacity: 0;
          width: ${width};
          height: ${height};
        `}
        disabled={disabled}
        checked={checked}
        onChange={handleCheck}
        value={value}
        name={name}
        id={id}
      />
      <span
        className={css`
          position: relative;
          display: flex;
          width: ${width};
          height: ${height};
          justify-content: center;
          align-items: center;
          border-radius: ${type === "checkbox" ? "4px" : "108px"};
          background: ${fill.base.layer_on};
          box-shadow: 0px 4px 4px -4px rgba(79, 81, 89, 0.32),
            0px 2px 5px -2px rgba(79, 81, 89, 0.03),
            0px 0px 0px 1px rgba(188, 189, 194, 0.25),
            0px 1px 1px 0px rgba(188, 189, 194, 0.2);

          &:hover {
            background: ${fill.base.layer_on};
            /* dp/loop/primary/1dp-muted */
            box-shadow: 0px 4px 4px -4px rgba(79, 81, 89, 0.32),
              0px 2px 5px -2px rgba(79, 81, 89, 0.03),
              0px 2px 14px -2px rgba(79, 81, 89, 0.12),
              0px 0px 0px 1px rgba(${r}, ${g}, ${b}, 0.58),
              0px 1px 1px 0px rgba(188, 189, 194, 0.2);
          }

          input:checked + &:hover {
            background: ${colorPattern.bg_emphasis_muted};
            box-shadow: 0px 4px 4px -4px rgba(79, 81, 89, 0.32),
              0px 2px 5px -2px rgba(79, 81, 89, 0.03),
              0px 0px 0px 1px rgba(${r}, ${g}, ${b}, 0.4),
              0px 1px 1px 0px rgba(188, 189, 194, 0.2);
          }

          input:focus + & {
            background: ${fill.base.layer_on};

            /* dp/loop/primary/3dp */
            box-shadow: 0px 4px 4px -4px rgba(79, 81, 89, 0.32),
              0px 2px 5px -2px rgba(79, 81, 89, 0.03),
              0px 0px 0px 3px rgba(${r}, ${g}, ${b}, 0.45),
              0px 0px 0px 1px rgba(${r}, ${g}, ${b}, 0.98),
              0px 1px 1px 0px rgba(188, 189, 194, 0.2);
          }

          input:checked:focus + & {
            background: ${colorPattern.bg_emphasis_muted};
            box-shadow: 0px 4px 4px -4px rgba(79, 81, 89, 0.32),
              0px 2px 5px -2px rgba(79, 81, 89, 0.03),
              0px 0px 0px 3px rgba(${r}, ${g}, ${b}, 0.45),
              0px 0px 0px 1px rgba(${r}, ${g}, ${b}, 0.89),
              0px 0px 0px 1px rgba(0, 0, 0, 0.1);
          }

          input:disabled + &,
          input:checked:disabled + & {
            opacity: 0.75;
            background: ${fill.base.layer_subtle};
            box-shadow: 0px 4px 4px -4px rgba(79, 81, 89, 0.32),
              0px 2px 5px -2px rgba(79, 81, 89, 0.03),
              0px 0px 0px 1px rgba(188, 189, 194, 0.25),
              0px 1px 1px 0px rgba(188, 189, 194, 0.2);
          }

          input:checked + & {
            background: ${colorPattern.bg_emphasis};
            box-shadow: 0px 4px 4px -4px rgba(79, 81, 89, 0.32),
              0px 2px 5px -2px rgba(79, 81, 89, 0.03),
              0px 0px 0px 1px rgba(${r}, ${g}, ${b}, 0.4),
              0px 1px 1px 0px rgba(188, 189, 194, 0.2);

            &::after {
              content: "";
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: ${width};
              height: ${height};
              background-image: url(${type === "checkbox"
                ? Check
                : RadioPoint});
              background-repeat: no-repeat;
              background-size: cover;
            }
          }

          input:checked:disabled + &::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: ${width};
            height: ${height};
            background-image: url(${type === "checkbox"
              ? DisabledCheck
              : DisabledRadioPoint});
            background-repeat: no-repeat;
            background-size: cover;
          }
        `}
      ></span>
    </label>
  );
};
