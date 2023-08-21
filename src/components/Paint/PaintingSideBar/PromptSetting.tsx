import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import { body } from "components/constants/fonts";
import { MultiLineInputField } from "components/shared/MultiLineInputField";
import { Slider } from "components/shared/Slider";
import { ReactComponent as Help } from "resources/img/Help.svg";

interface PromptSettingProps {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
}

const PromptSetting = ({ min, max, value, onChange }: PromptSettingProps) => {
  return (
    <div
      className={css`
        width: 356px;
        height: auto;
        padding: 16px 24px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        align-self: stretch;
        border-right: ${basis.border};
        background: ${basis.bg};
        border-bottom: 1px solid ${basis.border};
        margin-bottom: 16px;
      `}
    >
      <div
        className={css`
          display: flex;
          align-items: center;
          gap: 28px;
        `}
      >
        <div className={body.sm.regular}>提示词权重</div>{" "}
        <Help width="16px" height="16px" />
      </div>
      <div
        className={css`
          display: flex;
          align-items: center;
          margin-left: -24px;
        `}
      >
        <Slider min={min} max={max} value={value} onChange={onChange} />
        <div
          className={css`
            margin-left: 0px;
          `}
        >
          <MultiLineInputField
            width={75}
            height={32}
            value=""
            placeholder="1"
          />
        </div>
      </div>
    </div>
  );
};

export { PromptSetting };
