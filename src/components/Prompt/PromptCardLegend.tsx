import { css } from "@emotion/css";
import {
  basis,
  fill,
  overlays,
  transparent,
} from "components/constants/colors";
import { ReactComponent as ArrowAngleRightMd } from "resources/img/ArrowAngleRightMd.svg";
import { ReactComponent as Confetti } from "resources/img/Confetti.svg";
import { ReactComponent as Play } from "resources/img/Play.svg";

const PromptCardLegend = ({
  darkMode = false,
  likeCount,
  runCount,
}: {
  darkMode?: boolean;
  likeCount: number;
  runCount: number;
}) => {
  return (
    <div
      className={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 32px;
        padding: 10px 12px;
        background: ${darkMode ? fill.base.mask : transparent};
        border-top: 1px solid
          ${darkMode ? overlays.black.bg_vibrant : basis.border_subtle};
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
      `}
    >
      <div
        className={css`
          display: flex;
          align-items: center;
          color: ${darkMode ? basis.text_foreground : basis.text_loud};
          gap: 12px;

          & div {
            display: flex;
            align-items: center;
            gap: 4px;
            font-size: 12px;
            font-weight: 500;
            line-height: 16px;
          }
        `}
      >
        <div>
          <Confetti
            className={css`
              color: ${darkMode
                ? overlays.black.icon_foreground
                : overlays.black.icon};
            `}
          />
          <span>{likeCount}</span>
        </div>
        <div>
          <Play
            className={css`
              color: ${darkMode
                ? overlays.black.icon_foreground
                : overlays.black.icon};
            `}
          />
          <span>{runCount}</span>
        </div>
      </div>
      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          width: 32px;
          height: 32px;
          color: ${darkMode ? basis.icon_foreground : basis.icon};
        `}
      >
        <ArrowAngleRightMd />
      </div>
    </div>
  );
};

export { PromptCardLegend };
