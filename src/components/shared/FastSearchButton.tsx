import { css } from "@emotion/css";
import { basis, basisAlt } from "components/constants/colors";
import Search from "resources/img/Search.svg";

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

        border: 1px solid ${basisAlt["border"]};
        border-radius: 13px;

        &:hover {
          background-color: ${basisAlt["bg-muted"]};
        }
      `}
    >
      <div
        className={css`
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 0px;
        `}
      >
        <img src={Search} alt="Search Icon" />
      </div>

      <div
        className={css`
          font-weight: 500;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          font-smooth: never;
          -webkit-text-stroke: 0.3px;
          font-size: 14px;
          line-height: 20px;
          color: ${basis["text-loud"]};

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
