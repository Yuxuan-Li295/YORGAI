import { css } from "@emotion/css";
import { basis } from "components/constants/colors";

const Badge = ({
  avatar,
  children,
}: {
  children: string;
  avatar: React.ReactElement;
}) => (
  <div
    className={css`
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${basis.alt.bg};
      color: ${basis.text_loud};
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      border-radius: 50px;
      margin: 2px;
      white-space: nowrap;
    `}
  >
    {avatar}
    <span
      className={css`
        padding: 2px 8px 2px 4px;
      `}
    >
      {children}
    </span>
  </div>
);

export { Badge };
