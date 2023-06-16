import { css } from "@emotion/css";
import { zincs } from "components/constants/colors";
import { SectionTitle } from "components/promptTrending/SectionTitle";

const PromptTrending = () => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        width: 100vw;
        gap: 107px;
        background: ${zincs[25]};
        font-family: "PingFang SC", sans-serif;
      `}
    >
      <div
        className={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: center;
          `}
        >
          header1
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: center;
          `}
        >
          header2
        </div>
      </div>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 20px;
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          `}
        >
          search
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 80px;
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: column;
              width: 1196px;
            `}
          >
            <SectionTitle>热门分类</SectionTitle>
            body
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: column;
              width: 1196px;
            `}
          >
            <SectionTitle subTitle="小鱼厂专家们都在用他们">
              热门文字提示词
            </SectionTitle>
            body
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: column;
              width: 1196px;
            `}
          >
            <SectionTitle>榜单</SectionTitle>
            body
          </div>
        </div>
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
            font-style: normal;
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
    </div>
  );
};

export { PromptTrending };
