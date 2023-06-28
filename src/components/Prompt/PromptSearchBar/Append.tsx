import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import { ReactComponent as Search } from "resources/img/SearchMid.svg";

const Append = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div
      onClick={onClick}
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 48px;
        width: 52px;
        background-color: #67cdbc;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        border: 1px solid ${basis.border_subtle};
        box-sizing: border-box;
        border-left: 0px;
        cursor: pointer;
        color: ${basis.icon_foreground};
      `}
    >
      <Search
        className={css`
          width: 26px;
          height: 26px;
        `}
      />
    </div>
  );
};

export { Append };
