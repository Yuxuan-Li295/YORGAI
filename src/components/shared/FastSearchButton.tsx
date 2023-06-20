import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import Search from "resources/img/Search.svg";

const FastSearchButton = ({ children }: { children: string }) => {
  return (
    <button
      className={css`
        /* badge */
        box-sizing: border-box;

        /* Auto layout */
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        background-color: white;
        padding: 1px 8px;
        gap: 8px;

        border: 1.5px solid #bcbdc240;
        border-radius: 108px;
        margin: 1px;

        /* Inside auto layout */
        flex: none;
        order: 0;
        flex-grow: 0;

        &:hover {
          background-color: #f5f5f5;
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

          /* Inside auto layout */
          flex: none;
          order: 1;
          flex-grow: 0;
        `}
      >
        <img src={Search} alt="Search Icon" />
      </div>

      <div
        className={css`
          // /* Pingfang SC/body/sm/500 - medium */
          // font-family: 'PingFang SC';
          // font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 20px;
          color: ${basis["text-loud"]};

          /* Auto layout */
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 0px 2px;

          /* Inside auto layout */
          flex: none;
          order: 2;
          flex-grow: 0;
        `}
      >
        {children}
      </div>
    </button>
  );
};

export { FastSearchButton };
