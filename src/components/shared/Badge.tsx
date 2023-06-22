import { css } from "@emotion/css";
import { basis, basisAlt } from "components/constants/colors";

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
      background: ${basisAlt["bg-subtle"]};
      color: ${basis["text-loud"]};
      font-size: 0.875rem;
      border-radius: 50px;
      margin: 2px;
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
