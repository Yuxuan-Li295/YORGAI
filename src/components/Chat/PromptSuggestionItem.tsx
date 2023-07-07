import { css } from "@emotion/css";
import { basis, rainbow } from "components/constants/colors";

const PromptSuggestionItem = () => (
  <div
    className={css`
      display: flex;
      padding: 20px;
      align-items: center;
      gap: 16px;
      flex: 1 0 0;
      align-self: stretch;
      width: 222px;
      height: 68px;
    `}
  >
    <div
      className={css`
        flex-direction: column;
      `}
    >
      <div
        className={css`
          display: flex;
          align-items: center;
        `}
      >
        <p
          className={css`
            display: flex;
            flex-direction: column;
            flex: 1 0 0;
            color: ${basis.text_loud};
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
            margin-right: 36px;
            margin-bottom: 16px;
          `}
        >
          品牌策划文案
        </p>
        <div
          className={css`
            display: flex;
            padding: 0px 6px;
            justify-content: center;
            align-items: center;
            gap: 8px;
            border-radius: 108px;
            border: 1px solid ${rainbow.blue.alt.border};
            background: ${rainbow.blue.alt.bg_muted};
            width: 52px;
            height: 20px;
          `}
        >
          <div
            className={css`
              color: ${rainbow.blue.text_loud};
              text-align: center;
              font-size: 12px;
              font-weight: 500;
              line-height: 16px;
            `}
          >
            创作模式
          </div>
        </div>
      </div>
      <p
        className={css`
          display: flex;
          flex-direction: column;
          align-self: stretch;
          color: ${basis.text};
          font-size: 12px;
          font-weight: 400;
          line-height: 16px;
          margin-top: 0px;
        `}
      >
        快速生成文案。快速生成文案快速生成文案。快速生成文案。快速生成...
      </p>
    </div>
  </div>
);

export { PromptSuggestionItem };
