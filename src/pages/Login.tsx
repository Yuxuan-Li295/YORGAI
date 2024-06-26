import { css } from "@emotion/css";
import { basis, zinc } from "components/constants/colors";

const Login = () => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: row;
        height: 100vh;
        min-width: 1200px;
      `}
    >
      <div
        className={css`
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          gap: 205px;
          width: 720px;
          background: ${basis.bg_muted};
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            height: 100px;
          `}
        >
          <div
            className={css`
              display: flex;
              justify-content: center;
              align-items: center;
              font-weight: 600;
              font-size: 16px;
              line-height: 24px;
              color: ${basis.text};
            `}
          >
            AI + 人才 = 无限可能
          </div>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          `}
        >
          b
        </div>
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
              color: ${basis.text_subtle};
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
      </div>
      <div
        className={css`
          display: flex;
          background: ${zinc[500]};
          flex: 1;
        `}
      >
        d
      </div>
    </div>
  );
};

export { Login };
