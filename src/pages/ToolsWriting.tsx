import { css } from "@emotion/css";
import { PrimaryNavBar } from "components/PrimaryNavBar";
import { basis } from "components/constants/colors";
import PromptParamTag from "components/Writing/PromptparamTag";
import { ConfigSideBar } from "components/Writing/ConfigSideBar";

const ToolsWriting = () => {

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        min-width: 1200px;
        background: white;
      `}
    >
      <div
        className={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <PrimaryNavBar />
      </div>
      <div
        className={css`
          display: flex;
          flex-direction: row;
          flex: 100vh 0 1;
          background-color: ${basis.bg_muted};
        `}
      >
        <div
          className={css`
            flex: 100vw 0 1;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            overflow: hidden;
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: column;
              border-bottom: 1px solid ${basis.alt.border};
              background-color: ${basis.bg_subtle};
              padding: 14px 24px;
              align-items: center;
            `}
          >
            <span
              className={css`
                flex: 100vw 0 1;
                text-align: center;
                line-height: 20px;
                font-family: inherit;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 20px;
                color: ${basis.text_loud};
              `}
            >
              新的对话
            </span>
          </div>
          <div
            className={css`
              display: flex;
              height: 912px;
              padding: 12px;
              align-items: flex-start;
              align-self: stretch;
              border: 1px solid ${basis.border};
            `}
          >
            <ConfigSideBar />
            <div
              className={css`
                display: flex;
                width: 1060px;
                padding-bottom: 0px;
                flex-direction: column;
                align-items: flex-start;
                flex: 1 0 0;
                align-self: stretch;
                background: var(--basis-bg-subtle, #FBFBFC);
              `}
            >
              <div
                className={css`
                  display: flex;
                  padding: 24px 85px 12px 85px;
                  flex-direction: column;
                  align-items: flex-start;
                  gap: 16px;
                  align-self: stretch;
                  border-bottom: 1px solid var(--basis-border-subtle, #E9E9EC);
                  background: #FFF;
                  text-align: center;
                  line-height: 20px;
                  font-family: inherit;
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 20px;
                  color: ${basis.text_loud};
                `}
              >
                <PromptParamTag text1="参数3" text2="角色扮演生成器" text3="ChatGPT4" text4="小鱼厂是AI时代的App store，为开发者..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ToolsWriting };
