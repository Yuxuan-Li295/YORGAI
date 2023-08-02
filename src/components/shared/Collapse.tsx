import { css } from "@emotion/css";
import React, { useState } from "react";
import { ReactComponent as ImageEdit } from "resources/img/ImageEdit.svg";
import { ReactComponent as Help } from "resources/img/Help.svg";
import { ReactComponent as ArrowDownFilled } from "resources/img/ArrowDownFilled.svg";

const Collapse = ({ children }: { children: any }) => {
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
        <ImageEdit />
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
            参考图
          </div>
          <Help />
        </div>
        <ArrowDownFilled onClick={() => setisShow(!isShow)} />
      </div>
      {isShow && <div>{children}</div>}
    </div>
  );
};

export { Collapse };