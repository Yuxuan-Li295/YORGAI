import { css } from "@emotion/css";
import { basis, fill } from "components/constants/colors";
import { Button } from "components/shared/Button";
import { ReactComponent as Search } from "resources/img/Search.svg";

const SearchBar = () => {
  return (
    <div
      className={css`
        display: flex;
        align-items: center;
        gap: 11px;
        width: 251px;
        height: 32px;
      `}
    >
      <div
        className={css`
          display: flex;
          align-items: center;
          padding: 6px 12px;
          width: 160px;
          background: ${fill.base.layer_overlay_subtle};
          border-radius: 6px;
          box-shadow: 0px -1px 0px 0px ${basis.alt.border} inset;
        `}
      >
        <Search
          className={css`
            margin-right: 6px;
            color: ${basis.text_subtle};
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
            background: transparent;
            border: none;
            outline: none;
            width: 100%;

            &::placeholder {
              color: ${basis.text_subtle};
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

export { SearchBar };
