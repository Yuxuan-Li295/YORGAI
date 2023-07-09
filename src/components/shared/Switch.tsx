import { css } from "@emotion/css";
import { basis, primary, white } from "components/constants/colors";
import React, { useState } from "react";

export const Switch: React.FC<{
  variant?: "thin" | "fat";
  callback?: (_: boolean) => void;
}> = ({ variant = "thin", callback }) => {
  const [isOn, setIsOn] = useState(false);
  const handleClick = () => {
    callback && callback(!isOn);
    setIsOn(!isOn);
  };
  return (
    <div
      className={css`
        display: flex;
        border-radius: 100px;
        box-shadow: 0px 1px 1px 0px rgba(79, 81, 89, 0.12) inset,
          0px 2px 4px 0px rgba(79, 81, 89, 0.08) inset,
          0px 0px 8px 0.5px rgba(79, 81, 89, 0.04) inset,
          0px 2px 2px -2px rgba(79, 81, 89, 0.16),
          0px 2px 5px -1px rgba(79, 81, 89, 0.03);
        width: 36px;
        flex-direction: row;
        align-items: center;
        flex: 36px 0 0;
      `}
      style={{
        ...(isOn
          ? { background: primary.bg_emphasis, justifyContent: "end" }
          : { background: basis.alt.bg, justifyContent: "start" }),
        ...(variant === "thin"
          ? { height: 16, padding: "0 0" }
          : { height: 22, padding: "0 2px" }),
      }}
      onClick={handleClick}
      aria-roledescription="switch"
      aria-checked={isOn}
    >
      <div
        className={css`
          border-radius: 108px;
          background: ${white};
          box-shadow: 0px -1px 3px 0px #fff inset,
            0px 0px 0px 0.75px rgba(188, 189, 194, 0.2),
            0px 4px 4px -4px rgba(79, 81, 89, 0.32),
            0px 4px 12px -2px rgba(79, 81, 89, 0.09);
        `}
        style={
          variant === "thin"
            ? { height: 20, width: 20 }
            : { height: 18, width: 18 }
        }
      />
    </div>
  );
};
