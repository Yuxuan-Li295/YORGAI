import { css } from "@emotion/css";
import React, { ReactElement } from "react";
import { fill, basis } from "components/constants/colors";

const SystemChatItem = ({
  prepend,
  append,
  children,
}: {
  prepend?: ReactElement;
  append?: ReactElement;
  children?: string;
}) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(children || "");
  }

  let appendWithCopy;
  if (append) {
    appendWithCopy = React.cloneElement(append, { onClick: handleCopy });
  }

  return (
    <div>
      <div
        className={css`
          border-bottom: 1px solid
            var(--basis-alt-border-subtle, rgba(188, 189, 194, 0.2));
          background: ${fill.base.layer_chrome};
          backdrop-filter: blur(30px);
          padding: 20px 0px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          display: flex;
          gap: 8px;
          overflow: hidden;
          position: relative;
          width: 1136px;
          height: 140px;
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
              gap: 8px;
              display: flex;
              width: 666px;
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
          <div>{appendWithCopy}</div>
        </div>
      </div>
    </div>
  );
};

export { SystemChatItem };
