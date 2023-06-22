import { css } from "@emotion/css";
import { FirstLevelNavBar } from "components/FirstLevelNavBar";
import { zincs } from "components/constants/colors";
import { Avatar } from "components/shared/Avatar";
import { Tag } from "components/shared/Tag";
import { Button } from "components/shared/Button";
import { Star } from "components/shared/Star";
import { ReactComponent as CopySvg } from "resources/img/copy.svg";
import { ReactComponent as ExecSvg } from "resources/img/arrow-circle-broken-up-right.svg";

export const PromptDetails = () => {
  // FIXME: request data
  const tags = ["写作", "文案", "作文", "办公"];
  const title = "角色扮演生成器";
  const userName = "Dennis";
  const userIcon = <Avatar />;
  const rate = 4.9;
  const commentCount = 2140;
  const text =
    "我希望你扮演一位英语口语教师和提高者。\
  我会用英语与你交流，你将用英语回答我，以练习我的口语能力。\
  我希望你的回答整洁，字数限制在100字以内。我希望你严格纠正我的语法错误、打字错误和事实错误。\
  在你的回答中，请问我一个问题。\
  现在我们开始练习，你可以先问我一个问题。\
  记住，我希望你严格纠正我的语法错误、打字错误和事实错误。";

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        gap: 42px;
        background: ${zincs[25]};
        font-family: "PingFang SC", sans-serif;
        font-style: normal;
      `}
    >
      <div
        className={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <FirstLevelNavBar />
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
          align-items: start;
          margin: 0 370.5px;
          gap: 32px;
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: center;
          `}
        >
          breadcrumbs
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0px;
            gap: 10px;
            flex: none;
            order: 0;
            flex-grow: 0;
          `}
        >
          <h1
            className={css`
              font-family: "PingFang SC";
              font-style: normal;
              font-weight: 600;
              font-size: 24px;
              line-height: 32px;
              color: #000000;
            `}
          >
            {title}
          </h1>
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              padding: 0px;
              gap: 10px;
            `}
          >
            {tags.map((tag) => (
              <Tag>{tag}</Tag>
            ))}
          </div>
          <Tag avatar={userIcon}>{userName}</Tag>
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              padding: 0px;
              gap: 12px;
            `}
          >
            <div
              className={css`
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                padding: 0px;
                gap: 7px;
              `}
            >
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} selected={i < Math.round(rate)} />
                ))}
            </div>
            <span
              className={css`
                font-family: "PingFang SC";
                font-style: normal;
                font-weight: 500;
                font-size: 12px;
                line-height: 16px;
                text-align: center;
                color: #707480;
              `}
            >
              {rate} ({commentCount} 评论)
            </span>
          </div>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 18px 18px 14px;
            gap: 18px;
            background: #f9f9fa;
            border: 1px solid #d7d7db;
            border-radius: 8px;
            flex: none;
            order: 1;
            flex-grow: 0;
          `}
        >
          <p
            className={css`
              font-family: "PingFang SC";
              font-style: normal;
              font-weight: 400;
              font-size: 12px;
              line-height: 16px;
              color: #18181b;
            `}
          >
            {text}
          </p>
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              padding: 0px;
              gap: 32px;
            `}
          >
            <Button variant="secondary" Icon={CopySvg}>
              复制到剪贴板
            </Button>
            <Button Icon={ExecSvg}>立即运行</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
