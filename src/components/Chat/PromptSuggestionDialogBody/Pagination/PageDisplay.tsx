import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import { DropButton } from "./DropButton";

type PageSelectProps = {
  totalNumber?: number;
};

const textStyles = css`
  color: ${basis.text_loud};
  text-align: right;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
`;

const PageDisplay = ({ totalNumber = 2077 }: PageSelectProps) => {
  return (
    <div
      className={css`
        width: 190px;
        height: 28px;
        display: flex;
        align-items: center;
        gap: 8px;
        white-space: nowrap;
      `}
    >
      <span className={textStyles} style={{ width: "60px", height: "16px" }}>
        每页显示：
      </span>

      <DropButton />

      <span
        className={textStyles}
        style={{ width: "24px", height: "16px", color: basis.text }}
      >
        总共
      </span>

      <div
        className={css`
          width: 28px;
          height: 16px;
          color: ${basis.text};
        `}
      >
        {totalNumber}
      </div>
    </div>
  );
};

export { PageDisplay };
