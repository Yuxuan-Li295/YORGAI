import { css } from "@emotion/css";
import { Slider } from "components/shared/Slider";
import { MultiLineInputField } from "components/shared/MultiLineInputField";
import { ReactComponent as Help } from "resources/img/Help.svg"; 

interface PromptSettingProps {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
}

const PromptSetting = ({
  min,
  max,
  value,
  onChange,
}: PromptSettingProps) => {
  return (
    <div className={css`
      width: 356px;
      height: auto;
      padding: 16px 24px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      align-self: stretch;
      border-right: 1px solid var(--basis-border, #D7D7DB);
      background: var(--basis-bg, #F9F9FA);
    `}>
      <div className={css`
        display: flex;
        align-items: center;
        gap: 28px; /* 调整间隙 */
      `}>
        <div style={{
          width: 'auto',
          height: '20px',
          color: 'var(--basis-text-loud, #18181B)',
          fontFamily: 'PingFang SC',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '20px',
        }}>提示词权重</div> {/* text-container */}
        <Help width="16px" height="16px" />
      </div>
      <div className={css`
        display: flex;
        align-items: center;
        margin-left: -24px; /* 添加此行以匹配SVG图标的位置 */
      `}>
        <Slider min={min} max={max} value={value} onChange={onChange} />
        <div className={css`
          margin-left: 0px;
        `}>
          <MultiLineInputField
            width={80}
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
