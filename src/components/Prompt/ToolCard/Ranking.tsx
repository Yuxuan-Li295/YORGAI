import { css } from "@emotion/css";
import { basis, primary } from "components/constants/colors";

const Ranking = ({ ranking }: { ranking: 1 | 2 | 3 }) => {
  let borderColor = "";
  let color = "";
  let background = "";

  switch (ranking) {
    case 1:
      borderColor = primary.border_subtle;
      color = basis.text_foreground;
      background = primary.bg_emphasis;
      break;
    case 2:
      borderColor = basis.border_subtle;
      color = basis.text;
      background = basis.alt.bg_muted;
      break;
    case 3:
      borderColor = primary.text_muted;
      color = basis.text_foreground;
      background = "#d97706e2";
      break;
    default:
      break;
  }

  return (
    <div
      className={css`
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        min-width: 20px;
        min-height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        border-radius: 6px;
        border: 1px solid ${borderColor};
        color: ${color};
        background: ${background};
        box-shadow: 0px 2px 12px 0px rgba(79, 81, 89, 0.06),
          0px 0px 4px 0px rgba(79, 81, 89, 0.03),
          0px 1px 0px 0px rgba(255, 255, 255, 0.06) inset,
          0px 0.5px 0px 0px rgba(255, 255, 255, 0.06) inset;
      `}
    >
      {ranking}
    </div>
  );
};

export { Ranking };
