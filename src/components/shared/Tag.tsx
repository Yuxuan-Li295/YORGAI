import { css } from "@emotion/css";
import { basis } from "components/constants/colors";

const Tag = ({ children }: { children: string }) => (
  <div
    className={css`
      display: inline-block;
      background: ${basis.alt.bg_subtle};
      color: ${basis.text};
      font-size: 12px;
      font-weight: 500;
      line-height: 16px;
      border-radius: 50px;
      margin: 2px;
      padding: 5px 8px;
      white-space: nowrap;
    `}
  >
    {children}
  </div>
);

export { Tag };
