import { css } from "@emotion/css";
import React, { useState } from "react";
import { ReactComponent as ArrowDownFilled } from "resources/img/ArrowDownFilled.svg";

export interface CollapseProps {
  title?: string;
  icon?: React.ReactElement;
  helpIcon?: React.ReactElement;
  children: any;
}

const Collapse = ({ title = "Title", icon, helpIcon, children }: CollapseProps) => {
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
        {icon}
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
            `}
          >
            {title}
          </div>
          {helpIcon}
        </div>
        <ArrowDownFilled onClick={() => setisShow(!isShow)} />
      </div>
      {isShow && <div>{children}</div>}
    </div>
  );
};

export { Collapse };
