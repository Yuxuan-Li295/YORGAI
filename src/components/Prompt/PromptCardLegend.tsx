import { css } from "@emotion/css";
import {
  basis,
  blacks,
  fill,
  transparent,
  white,
  zincs,
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
        border-top: 1px solid ${darkMode ? blacks.bg_vibrant : zincs[200]};
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
      `}
    >
      <div
        className={css`
          display: flex;
          align-items: center;
          color: ${darkMode ? white : basis.text_loud};
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
              color: ${darkMode ? white : blacks.icon};
            `}
          />
          <span>{likeCount}</span>
        </div>
        <div>
          <Play
            className={css`
              color: ${darkMode ? white : blacks.icon};
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
          color: ${darkMode ? white : blacks.icon};
        `}
      >
        <ArrowAngleRightMd />
      </div>
    </div>
  );
};

export { PromptCardLegend };
