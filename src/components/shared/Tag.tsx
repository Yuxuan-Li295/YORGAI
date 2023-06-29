import { css } from "@emotion/css";
import { basis } from "components/constants/colors";

const Tag = ({
  children,
  isDarker = false,
}: {
  children: string;
  isDarker?: boolean;
}) => (
  <div
    className={css`
      display: inline-flex;
      background: ${isDarker ? basis.alt.bg_vibrant : basis.alt.bg_subtle};
      color: ${basis.text};
      font-size: 12px;
      font-weight: 500;
      line-height: 16px;
      border-radius: 10px;
      padding: 2px 8px;
      white-space: nowrap;
    `}
  >
    {children}
  </div>
);

export { Tag };
