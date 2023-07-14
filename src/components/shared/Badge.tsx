import { RainbowKey } from "components/constants/colorKeys";

import { css } from "@emotion/css";
import { basis, rainbow } from "components/constants/colors";


const badgeSizes = {
  xs: {
    fontSize: '12px',
    lineHeight: '16px',
    borderRadius: '40px',
  },
  sm: {
    fontSize: '14px',
    lineHeight: '20px',
    borderRadius: '50px',
  },
}

const Badge = ({
  avatar,
  children,
  size = 'xs',
  theme,
}: {
  children: string;
  avatar: React.ReactElement;
  size?: keyof typeof badgeSizes;
  theme?: RainbowKey;
}) => {
  const themeColor = theme ? rainbow[theme] : basis;

  return (
    <div
      className={css`
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${themeColor.alt.bg}; 
      color: ${themeColor.text_loud}; 
      font-size: ${badgeSizes[size].fontSize};
      font-weight: 500;
      line-height: ${badgeSizes[size].lineHeight};
      border-radius: ${badgeSizes[size].borderRadius};
      margin: 2px;
      white-space: nowrap;
    `}
    >
      {avatar ? avatar : null}
      <span
        className={css`
        padding: 2px 8px 2px 4px;
      `}
      >
        {children}
      </span>
    </div>
  );
};

export { Badge };
