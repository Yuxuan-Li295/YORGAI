import { css } from "@emotion/css";
import { zincs } from "components/constants/colors";

const Footer = () => (
  <div
    className={css`
      display: flex;
      flex-direction: row;
      justify-content: center;
      & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 140px;
        height: 100px;
        font-weight: 500;
        font-size: 11px;
        line-height: 12px;
      }
      & a {
        color: ${zincs[400]};
        text-decoration: inherit;
      }
    `}
  >
    <div>
      <a href="/about">关于小鱼厂</a>
    </div>
    <div>
      <a href="/terms">小鱼厂协议</a>
    </div>
    <div>
      <a href="/privacy">隐私保护指引</a>
    </div>
  </div>
);

export { Footer };
