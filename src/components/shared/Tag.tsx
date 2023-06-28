import { css } from "@emotion/css";
import { basis } from "components/constants/colors";

type TagProps = {
  children: string;
  isDarker?: boolean;
};

const Tag = ({ children, isDarker = false }: TagProps) => (
  <div
    className={css`
      display: inline-block;
      background: ${isDarker ? basis.alt.bg_vibrant : basis.alt.bg_subtle};
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
