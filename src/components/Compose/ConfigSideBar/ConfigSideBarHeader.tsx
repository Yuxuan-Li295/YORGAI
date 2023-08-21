import React, { useState } from "react";
import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import { ReactComponent as Error } from "resources/img/Error.svg";
import { ReactComponent as ArrowAngleRightMd } from "resources/img/ArrowAngleRightMd.svg";
import { ReactComponent as XSquare } from "resources/img/XSquare.svg";

interface ConfigSideBarHeaderProps {
  handleIsClicked: (value: boolean) => void;
}

const ConfigSideBarHeader: React.FC<ConfigSideBarHeaderProps> = ({
  handleIsClicked,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleGroupClick = () => {
    setIsClicked(!isClicked);
    handleIsClicked(!isClicked);
  };

  return (
    <div
      className={css`
        display: flex;
        width: 308px;
        height: 24px;
        padding: 20px 24px;
        align-items: center;
        align-self: stretch;
        border-bottom: 1px solid ${basis.border};
        background: ${basis.bg};
        position: relative;
        z-index: 2;
      `}
    >
      <div
        className={css`
          display: flex;
          width: 308px;
          padding: 4px 8px;
          align-items: center;
        `}
      >
        <Error
          className={css`
            width: 20px;
            height: 20px;
            flex-shrink: 0;
            margin-right: 10px;
          `}
        />
        <div
          className={css`
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 140px;
            color: ${basis.text_muted};

            /* Pingfang SC/body/sm/500 - medium */
            font-family: PingFang SC;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 20px; /* 142.857% */
          `}
        >
          未选择模版
        </div>
        <div
          className={css`
            display: flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
          `}
          onClick={handleGroupClick}
        >
          <div
            className={css`
              color: ${basis.text};
              text-align: right;

              /* Pingfang SC/body/xs/500 - medium */
              font-family: PingFang SC;
              font-size: 12px;
              font-style: normal;
              font-weight: 500;
              line-height: 16px; /* 133.333% */
            `}
          >
            {isClicked ? "取消" : "选择"}
          </div>
          <div
            className={css`
              width: 20px;
              height: 20px;
            `}
          >
            {isClicked ? <XSquare /> : <ArrowAngleRightMd />}
          </div>
        </div>
      </div>
      {isClicked && (
        <div
          className={css`
            position: absolute;
            width: 292px;
            height: 20px;
            padding: 8px;
            border-radius: 8px;
            background: ${basis.bg_vibrant};
            z-index: -1;
          `}
        />
      )}
    </div>
  );
};

export { ConfigSideBarHeader };
