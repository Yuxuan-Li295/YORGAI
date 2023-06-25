import { css } from "@emotion/css";
import { FirstLevelNavBar } from "components/FirstLevelNavBar";
import { PromptCard } from "components/Prompt/PromptCard";
import { SecondLevelNavBar } from "components/SecondLevelNavBar";
import { basis, primary } from "components/constants/colors";
import { Avatar } from "components/shared/Avatar";
import { Badge } from "components/shared/Badge";
import { Breadcrumb } from "components/shared/Breadcrumb";
import { Button } from "components/shared/Button";
import { Footer } from "components/shared/Footer";
import { Star } from "components/shared/Star";
import { Tag } from "components/shared/Tag";
import { ReactComponent as AIApplication } from "resources/img/AIApplication.svg";
import { ReactComponent as Copy } from "resources/img/Copy.svg";
import { ReactComponent as Execute } from "resources/img/Execute.svg";
import { ReactComponent as MagicWand } from "resources/img/MagicWand.svg";
import { ReactComponent as StarSvg } from "resources/img/Star.svg";
import { ReactComponent as UserDouble } from "resources/img/UserDouble.svg";

export const PromptDetails = () => {
  // FIXME: request data
  const tags = ["写作", "文案", "作文", "办公"];
  const title = "角色扮演生成器";
  const userName = "Dennis";
  const userIcon = <Avatar size={24} />;
  const rate = 4.9;
  const commentCount = 2140;
  const text = `我希望你扮演一位英语口语教师和提高者。\
  我会用英语与你交流，你将用英语回答我，以练习我的口语能力。\
  我希望你的回答整洁，字数限制在100字以内。我希望你严格纠正我的语法错误、打字错误和事实错误。\
  在你的回答中，请问我一个问题。\
  现在我们开始练习，你可以先问我一个问题。\
  记住，我希望你严格纠正我的语法错误、打字错误和事实错误。`;

  const buttonClickHandler = (buttonName: string) => {
    console.log(`${buttonName} button clicked!`);
  };

  const buttons = [
    {
      icon: <UserDouble />,
      label: "社区热门",
      onClick: () => buttonClickHandler("社区热门"),
    },
    {
      icon: <AIApplication />,
      label: "提示词大全",
      onClick: () => buttonClickHandler("提示词大全"),
    },
    {
      icon: <MagicWand />,
      label: "提示词优化器",
      onClick: () => buttonClickHandler("提示词优化器"),
    },
    {
      icon: <StarSvg />,
      label: "我的收藏",
      onClick: () => buttonClickHandler("我的收藏"),
    },
  ];

  const breadcrumbs = [
    { name: "首页", link: "/" },
    { name: "提示词库", link: "/prompt" },
    { name: "提示词大全", link: "/prompt/complete" },
    { name: title, link: "/prompt/complete/details" },
  ];

  const cards = [
    {
      title: "角色扮演生成器",
      intro: `对接GPT3，200万人在用的写作助手。\
        对接GPT3，200万人在用的写作助手。\
        对接GPT3，200万人在用的写作助手。`,
      tags: ["写作", "文案", "作文", "办公"],
    },
    {
      title: "角色扮演生成器",
      intro: `对接GPT3，200万人在用的写作助手。\
      对接GPT3，200万人在用的写作助手。\
      对接GPT3，200万人在用的写作助手。`,
      tags: ["写作", "文案", "作文", "办公"],
    },
    {
      title: "角色扮演生成器",
      intro: `对接GPT3，200万人在用的写作助手。\
      对接GPT3，200万人在用的写作助手。\
      对接GPT3，200万人在用的写作助手。`,
      tags: ["写作", "文案", "作文", "办公"],
    },
  ];

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        width: 100vw;
        min-width: 1200px;
        background: white;
      `}
    >
      <div
        className={css`
          display: flex;
          flex-direction: column;
          margin-bottom: 42px;
        `}
      >
        <FirstLevelNavBar />
        <SecondLevelNavBar buttons={buttons} />
      </div>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 48px;
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 30px;
            max-width: 707px;
            width: 100%;
          `}
        >
          <Breadcrumb items={breadcrumbs} />
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
                font-family: inherit;
                font-style: normal;
                font-weight: 600;
                font-size: 24px;
                line-height: 32px;
                color: black;
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
            <Badge avatar={userIcon}>{userName}</Badge>
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
                  color: ${primary.icon};
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
                  font-family: inherit;
                  font-style: normal;
                  font-weight: 500;
                  font-size: 12px;
                  line-height: 16px;
                  text-align: center;
                  color: ${basis.text};
                `}
              >
                {rate} ({commentCount} 评论)
              </span>
            </div>
          </div>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 18px 18px 14px;
            gap: 18px;
            background: ${basis.bg};
            border: 1px solid ${basis.border};
            border-radius: 8px;
            max-width: 663px;
            width: 100%;
          `}
        >
          <p
            className={css`
              font-family: inherit;
              font-style: normal;
              font-weight: 400;
              font-size: 12px;
              line-height: 16px;
              color: ${basis.text_loud};
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
            <Button variant="secondary" icon={<Copy />}>
              复制到剪贴板
            </Button>
            <Button icon={<Execute />}>立即运行</Button>
          </div>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            gap: 20px;
            background: ${basis.bg};
            padding: 40px 0 60px 0;
          `}
        >
          <div
            className={css`
              display: flex;
              justify-content: center;
              font-size: 20px;
              font-weight: 500;
              line-height: 30px;
              color: ${basis.text_loud};
            `}
          >
            同类提示词
          </div>
          <div
            className={css`
              display: flex;
              justify-content: center;
              gap: 16px;
            `}
          >
            {cards.map(({ title, intro, tags }) => (
              <PromptCard likeCount={255} runCount={16}>
                <h3
                  className={css`
                    color: ${basis.text_loud};
                    font-size: 14px;
                    font-family: inherit;
                    font-weight: 500;
                    line-height: 20px;
                  `}
                >
                  {title}
                </h3>
                <p
                  className={css`
                    flex-grow: 1;
                    color: ${basis.text};
                    font-size: 12px;
                    font-family: inherit;
                    line-height: 16px;
                    display: flex;
                    flex-direction: column;
                    align-content: start;
                  `}
                >
                  {intro}
                </p>
                <div>
                  {tags.map((tag) => (
                    <Tag>{tag}</Tag>
                  ))}
                </div>
              </PromptCard>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
