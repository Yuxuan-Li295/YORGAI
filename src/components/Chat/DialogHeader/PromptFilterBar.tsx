import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import { ReactElement } from "react";

const PromptFilterBar = ({
  prepend,
  append,
}: {
  prepend: ReactElement;
  append: ReactElement;
}) => {
  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid ${basis.border_subtle};
        padding: 12px 4px;
        gap: 10px;
      `}
    >
      {prepend}
      {prepend && append && (
        <div
          className={css`
            width: 1px;
            height: 16px;
            /* background-color: ${basis.border_subtle}; */
          `}
        />
      )}
      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          border-bottom: 1px solid ${basis.border_subtle};
          padding: 12px 4px;
          gap: 5px;
          margin-left: 85px;
        `}
      >
        {append}
      </div>
    </div>
  );
};

export { PromptFilterBar };
