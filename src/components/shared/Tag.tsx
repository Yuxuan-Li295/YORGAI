import { css } from "@emotion/css";
import { basis, basisAlt } from "components/constants/colors";

const Tag = ({ children }: { children: string }) => (
  <div
    className={css`
      display: inline-block;
      background: ${children === "+2" ? "#e9e9eb" : basisAlt["bg-subtle"]};
      color: ${basis["text"]};
      font-size: 0.875rem;
      padding: 2px 8px;
      border-radius: 50px;
      margin: 2px;
    `}
  >
    {children}
  </div>
);

export { Tag };
