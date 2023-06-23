import { css } from "@emotion/css";
import { basisAlt, white, zincs } from "components/constants/colors";
import { ReactComponent as Magnifier } from "resources/img/Magnifier.svg";

const SearchButton = () => {
  return (
    <div
      className={css`
        position: absolute;
        right: 0;
        display: flex;
        align-items: center;
        gap: 11px;
        width: 251px;
        height: 32px;
        margin: 10px;
      `}
    >
      <div
        className={css`
          display: flex;
          align-items: center;
          padding: 6px 12px;
          width: 160px;
          background: ${basisAlt.bg_muted};
          border-radius: 6px;
          box-shadow: 0px -1px 0px 0px rgba(188, 189, 194, 0.2) inset;
        `}
      >
        <Magnifier
          className={css`
            margin-right: 6px;
          `}
        />
        <input
          type="text"
          placeholder="搜索"
          className={css`
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 14px;
            font-family: "PingFang SC";
            background: transparent;
            border: none;
            outline: none;
            width: 100%;

            &::placeholder {
              color: ${zincs[400]};
            }
          `}
        />
      </div>
      <button
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 6px 12px;
          background-color: #67cdbc;
          border-image-source: linear-gradient(
            180deg,
            #ffffff 0%,
            rgba(255, 255, 255, 0) 59.04%
          );
          border-image-outset: 6px;
          border-radius: 6px;
          box-shadow: 0px 4px 4px -4px rgba(79, 81, 89, 0.32),
            0px 2px 5px -2px rgba(79, 81, 89, 0.03), 0px 0px 0px 1px #67cdbc,
            0px 0px 0px 1px rgba(0, 0, 0, 0.1);
          color: ${white};
          font-family: "PingFang SC";
          font-weight: 500;
          font-size: 14px;
          line-height: 20px;
          text-align: center;
          width: 80px;
          height: 32px;
          white-space: nowrap;

          &:hover {
            background-color: #5ab3a8;
          }
        `}
        onClick={() => {
          console.log("分享体验 button clicked!");
        }}
      >
        分享体验
      </button>
    </div>
  );
};

export { SearchButton };
