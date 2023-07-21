import { css } from "@emotion/css";
import { ContainerColorKey, RegularKey } from "components/constants/colorKeys";
import { basis, fill } from "components/constants/colors";
import { SizeKey, SizeValue, sizes } from "components/constants/sizes";
import { ReactComponent as Check } from "resources/img/Check.svg";
import { ReactComponent as DisabledCheck } from "resources/img/DisabledCheck.svg";
import { ReactComponent as DisabledRadioPoint } from "resources/img/DisabledRadioPoint.svg";
import { ReactComponent as RadioPoint } from "resources/img/RadioPoint.svg";

type Props = {
  size?: SizeKey;
  colorPattern?: Record<RegularKey, string> &
    Record<"alt", Record<ContainerColorKey, string>>;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  id?: string;
  onChange?: () => void;
};

const CheckBoxOrRadio = ({
  type,
  size = "xs",
  colorPattern = basis,
  value,
  checked = false,
  disabled = false,
  name,
  id,
  onChange,
}: Props & {
  type: "checkbox" | "radio";
}) => {
  const { width, height }: SizeValue = sizes[size];

  return (
    <label
      className={css`
        display: inline-flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        user-select: none;
        position: relative;
      `}
    >
      <input
        type={type}
        className={css`
          visibility: hidden;
          position: absolute;
        `}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        value={value}
        name={name}
        id={id}
      />
      <span
        className={css`
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
            box-shadow: 0px 4px 4px -4px rgba(79, 81, 89, 0.32),
              0px 2px 5px -2px rgba(79, 81, 89, 0.03),
              0px 2px 14px -2px rgba(79, 81, 89, 0.12),
              0px 0px 0px 1px ${colorPattern.alt.border_muted},
              0px 1px 1px 0px rgba(188, 189, 194, 0.2);
          }

          input:checked + &:hover {
            background: ${colorPattern.alt.bg_emphasis_muted};
            box-shadow: 0px 4px 4px -4px rgba(79, 81, 89, 0.32),
              0px 2px 5px -2px rgba(79, 81, 89, 0.03),
              0px 0px 0px 1px ${colorPattern.alt.border},
              0px 1px 1px 0px rgba(188, 189, 194, 0.2);
          }

          input:focus + & {
            background: ${fill.base.layer_on};
            box-shadow: 0px 4px 4px -4px rgba(79, 81, 89, 0.32),
              0px 2px 5px -2px rgba(79, 81, 89, 0.03),
              0px 0px 0px 3px ${colorPattern.alt.border_subtle},
              0px 0px 0px 1px ${colorPattern.alt.border_vibrant},
              0px 1px 1px 0px rgba(188, 189, 194, 0.2);
          }

          input:checked:focus + & {
            background: ${colorPattern.alt.bg_emphasis_muted};
            box-shadow: 0px 4px 4px -4px rgba(79, 81, 89, 0.32),
              0px 2px 5px -2px rgba(79, 81, 89, 0.03),
              0px 0px 0px 3px ${colorPattern.alt.border_subtle},
              0px 0px 0px 1px ${colorPattern.alt.bg_emphasis_vibrant},
              0px 0px 0px 1px rgba(0, 0, 0, 0.1);
          }

          input:disabled + &,
          input:checked:disabled + & {
            cursor: not-allowed;
            opacity: 0.75;
            background: ${fill.base.layer_subtle};
            box-shadow: 0px 4px 4px -4px rgba(79, 81, 89, 0.32),
              0px 2px 5px -2px rgba(79, 81, 89, 0.03),
              0px 0px 0px 1px rgba(188, 189, 194, 0.25),
              0px 1px 1px 0px rgba(188, 189, 194, 0.2);
          }

          input:checked + & {
            background: ${colorPattern.alt.bg_emphasis};
            box-shadow: 0px 4px 4px -4px rgba(79, 81, 89, 0.32),
              0px 2px 5px -2px rgba(79, 81, 89, 0.03),
              0px 0px 0px 1px ${colorPattern.alt.border},
              0px 1px 1px 0px rgba(188, 189, 194, 0.2);
          }
        `}
      >
        {checked && !disabled && type === "checkbox" && (
          <Check
            className={css`
              width: ${width};
              height: ${height};
            `}
          />
        )}
        {checked && disabled && type === "checkbox" && (
          <DisabledCheck
            className={css`
              width: ${width};
              height: ${height};
            `}
          />
        )}
        {checked && !disabled && type === "radio" && (
          <RadioPoint
            className={css`
              width: ${width};
              height: ${height};
            `}
          />
        )}
        {checked && disabled && type === "radio" && (
          <DisabledRadioPoint
            className={css`
              width: ${width};
              height: ${height};
            `}
          />
        )}
      </span>
    </label>
  );
};

export const CheckBox = (props: Props) =>
  CheckBoxOrRadio({ ...props, type: "checkbox" });

export const Radio = (props: Props) =>
  CheckBoxOrRadio({ ...props, type: "radio" });
