import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import { MultiLineInputField } from "components/shared/MultiLineInputField";
import { Slider } from "components/shared/Slider";
import React from "react";

interface ConfigSideBarImageProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
}

const ConfigSideBarImage = ({
  Icon,
  min,
  max,
  value,
  onChange,
}: ConfigSideBarImageProps) => {
  return (
    <div
      className={css`
        width: 356px;
        height: auto;
        padding: 16px 24px 16px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        align-self: stretch;
        border-bottom: 1px solid ${basis.border};
        margin-bottom: 24px;
      `}
    >
      <div
        className={css`
          display: flex;
          align-items: center;
          gap: 20px;
        `}
      >
        <Icon width="20px" height="20px" />
        <div
          className={css`
            width: 84px;
            height: 20px;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 20px;
          `}
        >
          生成图片数量
        </div>
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
            margin-left: 10px;
          `}
        >
          <MultiLineInputField
            width={67}
            height={32}
            value=""
            placeholder="1"
          />
        </div>
      </div>
    </div>
  );
};

export { ConfigSideBarImage };
