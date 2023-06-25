import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import { ReactComponent as Search } from "resources/img/Search.svg";

const FastSearchButton = ({ children }: { children: string }) => {
  return (
    <button
      className={css`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        padding: 0 8px 0 4px;
        gap: 3px;
        font-family: inherit;
        border: 1px solid ${basis.alt.border};
        border-radius: 13px;
        cursor: pointer;

        &:hover {
          background-color: ${basis.alt.bg_muted};
        }
      `}
    >
      <Search />
      <div
        className={css`
          font-weight: 500;
          font-size: 14px;
          line-height: 20px;
          color: ${basis.text_loud};
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 2px;
        `}
      >
        {children}
      </div>
    </button>
  );
};

export { FastSearchButton };
