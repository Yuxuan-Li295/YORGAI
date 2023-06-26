import { css } from "@emotion/css";
import { PrimaryNavBar } from "components/PrimaryNavBar";
import { TextPromptCard } from "components/Prompt/TextPromptCard";
import {
  PromptNavBarButtons,
  SecondaryNavBar,
} from "components/SecondaryNavBar";
import { Button } from "components/shared/Button";
import { Footer } from "components/shared/Footer";
import { ReactComponent as Lightbulb } from "resources/img/Lightbulb.svg";
import { ReactComponent as MagicWand } from "resources/img/MagicWand.svg";

const TextPrompts = () => {
  const cards = (length: number) =>
    Array(length).fill({
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
        min-width: 1200px;
        background: white;
      `}
    >
      <div
        className={css`
          display: flex;
          flex-direction: column;
          margin-bottom: 97px;
        `}
      >
        <PrimaryNavBar />
        <SecondaryNavBar buttons={PromptNavBarButtons} />
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
            gap: 36px;
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              font-weight: 500;
              font-size: 48px;
              line-height: 60px;
            `}
          >
            <span>快速开启创作之旅</span>
            <span>我们为您的创意需求提供了各种灵感提示</span>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 21px;
            `}
          >
            <Button icon={<Lightbulb />}>AI 工具推荐</Button>
            <Button icon={<MagicWand />}>AI 提示词学习</Button>
          </div>
        </div>
      </div>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 13px;
          padding: 0 10px;
          margin-top: 85px;
        `}
      >
        <div>filter</div>
        <div
          className={css`
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            row-gap: 26px;
            column-gap: 16px;
          `}
        >
          {cards(9).map(({ title, intro, tags }, i) => (
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
      <Footer />
    </div>
  );
};

export { TextPrompts };
