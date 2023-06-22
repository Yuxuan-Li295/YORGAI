import { css } from "@emotion/css";
import { basis, basisAlt } from "components/constants/colors";

const Tag = ({
  avatar,
  children,
}: {
  children: string;
  avatar?: React.ReactElement;
}) => (
  <div
    className={css`
      display: inline-block;
      background: ${basisAlt["bg-subtle"]};
      color: ${basis["text"]};
      font-size: 0.875rem;
      border-radius: 50px;
      margin: 2px;
    `}
  >
    {avatar}
    <span
      style={{ padding: avatar === undefined ? "2px 8px" : "2px 8px 2px 4px" }}
    >
      {children}
    </span>
  </div>
);

export { Tag };
