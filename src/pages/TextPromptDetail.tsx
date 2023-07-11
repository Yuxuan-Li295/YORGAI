import { css } from "@emotion/css";
import { PrimaryNavBar } from "components/PrimaryNavBar";
import { PromptStatistics } from "components/Prompt/PromptStatistics";
import { PromptTextContainer } from "components/Prompt/PromptTextContainer";
import { TextPromptCard } from "components/Prompt/TextPromptCard";
import {
  PromptNavBarButtons,
  SecondaryNavBar,
} from "components/SecondaryNavBar";
import { basis } from "components/constants/colors";
import { UserAvatar } from "components/shared/UserAvatar";
import { Breadcrumb } from "components/shared/Breadcrumb";
import { Footer } from "components/shared/Footer";

export const TextPromptDetail = () => {
  // FIXME: request data
  const tags = ["写作", "文案", "作文", "办公"];
  const title = "角色扮演生成器";
  const userName = "Dennis";
  const userAvatar = <UserAvatar size={24} />;
  const rate = 3.9;
  const commentCount = 2140;
  const text = `我希望你扮演一位英语口语教师和提高者。\
  我会用英语与你交流，你将用英语回答我，以练习我的口语能力。\
  我希望你的回答整洁，字数限制在100字以内。我希望你严格纠正我的语法错误、打字错误和事实错误。\
  在你的回答中，请问我一个问题。\
  现在我们开始练习，你可以先问我一个问题。\
  记住，我希望你严格纠正我的语法错误、打字错误和事实错误。`;

  const breadcrumbs = [
    { name: "首页", link: "/" },
    { name: "提示词库", link: "/prompt/popular" },
    { name: "提示词大全", link: "/prompt/text" },
    { name: title, link: "/prompt/text/detail" },
  ];

  const cards = Array(3).fill({
    title: "角色扮演生成器",
    intro: `对接GPT3，200万人在用的写作助手。\
      对接GPT3，200万人在用的写作助手。\
      对接GPT3，200万人在用的写作助手。`,
    tags: ["写作", "文案", "作文", "办公"],
  });

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        width: 100vw;
        background: white;
      `}
    >
      <div
        className={css`
          display: flex;
          flex-direction: column;
          margin-bottom: 40px;
        `}
      >
        <PrimaryNavBar />
        <SecondaryNavBar buttons={PromptNavBarButtons} />
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
            max-width: 700px;
            width: 100%;
          `}
        >
          <Breadcrumb items={breadcrumbs} />
          <PromptStatistics
            title={title}
            tags={tags}
            userAvatar={userAvatar}
            userName={userName}
            rate={rate}
            commentCount={commentCount}
          />
        </div>
        <div
          className={css`
            max-width: 700px;
          `}
        >
          <PromptTextContainer>{text}</PromptTextContainer>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            background: ${basis.bg};
            padding: 40px 10px 60px 10px;
            width: 100%;
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
              max-width: 1200px;
            `}
          >
            {cards.map(({ title, intro, tags }, i) => (
              <TextPromptCard
                likeCount={255}
                runCount={16}
                title={title}
                intro={intro}
                tags={tags}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
