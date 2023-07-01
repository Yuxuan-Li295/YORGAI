import { css } from "@emotion/css";
import { functional } from "components/constants/colors";
import { ReactComponent as Play } from "resources/img/Play.svg";

const ExecuteButton = () => {
  return (
    <button
      className={css`
        background-color: ${functional.success.bg_emphasis_subtle};
        border: 1px solid ${functional.success.border};
        color: white;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 4px;
        padding: 2px 8px;
        gap: 2px;
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
      `}
    >
      <Play />
      <span>立即运行</span>
    </button>
  );
};

export { ExecuteButton };
