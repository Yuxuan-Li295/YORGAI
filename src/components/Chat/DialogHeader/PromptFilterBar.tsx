import { css } from "@emotion/css";
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
        padding: 12px 4px;
        gap: 10px;
      `}
    >
      {prepend}
      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
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
