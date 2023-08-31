import { css } from "@emotion/css";
import { useState } from "react";
import { ReactComponent as ArrowDownFilled } from "resources/img/ArrowDownFilled.svg";
import { ReactComponent as EditSquare } from "resources/img/EditSquare.svg";

const ConfigSideBarSetting = ({ children }: { children: any }) => {
  const [isShow, setisShow] = useState(true);

  return (
    <div>
      <div
        className={css`
          display: flex;
          width: 308px;
          height: 20px;
          box-sizing: border-box;
          padding-bottom: 0px;
          align-items: flex-start;
          gap: 20px;
          align-self: stretch;
          margin-bottom: 15px;
        `}
      >
        <EditSquare />
        <div
          className={css`
            display: flex;
            width: 228px;
            height: 20px;
            box-sizing: border-box;
            align-items: center;
            gap: 8px;
            flex: 1 0 0;
          `}
        >
          <div
            className={css`
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 14px;
              font-weight: 500;
              line-height: 20px;
            `}
          >
            高级设置 （可选）
          </div>
        </div>
        <ArrowDownFilled onClick={() => setisShow(!isShow)} />
      </div>
      {isShow && <div>{children}</div>}
    </div>
  );
};

export { ConfigSideBarSetting };
