import React, { useState } from "react";
import { css } from "@emotion/css";

interface SwitchProps {
  defaultValue?: boolean;
  onChange?: (value: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ defaultValue = true, onChange }) => {
  const [checked, setChecked] = useState(defaultValue);

  const handleChange = () => {
    const newValue = !checked;
    setChecked(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <label
      className={css`
        position: relative;
        display: inline-block;
        width: 36px;
        height: 20px;
        background-color: ${checked ? "#FDCC0D" : "#ccc"};
        border-radius: 12px;
        cursor: pointer;
      `}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className={css`
          display: none;
        `}
      />
      <span
        className={css`
          position: absolute;
          top: 2px;
          left: ${checked ? "18px" : "2px"};
          width: 16px;
          height: 16px;
          background-color: #fff;
          border-radius: 50%;
          transition: left 0.3s ease-in-out;
        `}
      />
    </label>
  );
};

export default Switch;
