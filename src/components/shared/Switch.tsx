import { css } from "@emotion/css";
import { basis, primary, white } from "components/constants/colors";

export const Switch = ({
  variant = "thin",
  enabled,
  onToggle,
}: {
  variant?: "thin" | "fat";
  enabled: boolean;
  onToggle: () => void;
}) => {
  return (
    <label
      className={css`
        position: relative;
        display: inline-block;
        box-shadow: 0px 1px 1px 0px rgba(79, 81, 89, 0.12) inset,
          0px 2px 4px 0px rgba(79, 81, 89, 0.08) inset,
          0px 0px 8px 0.5px rgba(79, 81, 89, 0.04) inset,
          0px 2px 2px -2px rgba(79, 81, 89, 0.16),
          0px 2px 5px -1px rgba(79, 81, 89, 0.03);
        width: 36px;
        min-width: 36px;
        cursor: pointer;
        user-select: none;
        transition: background 0.3s ease;
        background: ${enabled ? primary.bg_emphasis : basis.alt.bg};
      `}
      style={
        variant === "thin"
          ? { height: 16, borderRadius: 8 }
          : { height: 22, borderRadius: 11 }
      }
      aria-roledescription="switch"
      aria-checked={enabled}
    >
      <input
        type="checkbox"
        checked={enabled}
        onChange={onToggle}
        className={css`
          display: none;
        `}
      />
      <div
        className={css`
          position: absolute;
          background: white;
          box-shadow: 0px -1px 3px 0px #fff inset,
            0px 0px 0px 0.8px rgba(188, 189, 194, 0.2),
            0px 4px 4px -4px rgba(79, 81, 89, 0.32),
            0px 4px 12px -2px rgba(79, 81, 89, 0.09);
          transition: left 0.3s ease;
          border-radius: 50%;
        `}
        style={
          variant === "thin"
            ? {
                height: 20,
                width: 20,
                top: -2,
                left: enabled ? 18 : -2,
                background: white,
              }
            : {
                height: 18,
                width: 18,
                top: 2,
                left: enabled ? 16 : 2,
                background: `linear-gradient(180deg, white 0%, ${basis.bg_muted} 100%)`,
              }
        }
      />
    </label>
  );
};
