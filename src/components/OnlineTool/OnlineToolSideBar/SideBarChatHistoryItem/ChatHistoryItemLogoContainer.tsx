import { css } from "@emotion/css";
import { basis } from "components/constants/colors";

export const ChatHistoryItemLogoContainer = ({
  logoBackground,
  logo,
}: {
  logoBackground: string;
  logo: string;
}) => {
  return (
    <div
      className={css`
        display: flex;
        width: 28px;
        justify-content: center;
        align-items: center;
        align-self: stretch;
      `}
    >
      <div
        className={css`
          width: 28px;
          height: 28px;
          flex-shrink: 0;
        `}
      >
        <div
          className={css`
            width: 28px;
            height: 28px;
            flex-shrink: 0;
            border-radius: 4px;
            border: 0.2px solid
              ${logoBackground === "transparent"
                ? "transparent"
                : basis.border_subtle};
            background: ${logoBackground};
            display: flex;
            align-items: center;
            justify-content: center;
          `}
        >
          <img
            className={css`
              width: 20px;
              height: 20px;
              flex-shrink: 0;
            `}
            src={logo}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
