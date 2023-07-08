import { css } from "@emotion/css";
import React, { ReactElement } from "react";
import { fill, basis } from "components/constants/colors";
import { ReactComponent as SystemCopy } from "resources/img/SystemCopy.svg";

const SystemChatItem = ({
  prepend,
  children,
}: {
  prepend?: ReactElement;
  children?: string;
}) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(children || "");
  };

  return (
    <div
      className={css`
        border-bottom: 1px solid ${basis.alt.border_subtle};
        background: ${fill.base.layer_chrome};
        backdrop-filter: blur(30px);
        padding: 20px 0px;
        justify-content: center;
        align-items: center;
        gap: 8px;
        display: flex;
        overflow: hidden;
        position: relative;
        box-sizing: border-box;
      `}
    >
      <div
        className={css`
          display: flex;
          padding: 0px 205px;
          align-items: flex-start;
          gap: 20px;
          flex: 1;
        `}
      >
        <div>{prepend}</div>
        <div
          className={css`
            display: flex;
            width: 666px;
            align-items: flex-end;
            display: flex;
            flex-direction: column;
            flex-shrink: 0;
            color: ${basis.text_loud};
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
          `}
        >
          {children}
        </div>
        <SystemCopy onClick={handleCopy} />
      </div>
    </div>
  );
};

export { SystemChatItem };
