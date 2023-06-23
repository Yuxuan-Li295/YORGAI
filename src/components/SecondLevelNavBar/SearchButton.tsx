import { css } from "@emotion/css";
import { basisAlt, white, zincs } from "components/constants/colors";
import { Button } from "components/shared/Button";
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
      <Button
        size="sm"
        onClick={() => {
          console.log("分享体验 button clicked!");
        }}
      >
        分享体验
      </Button>
    </div>
  );
};

export { SearchButton };
