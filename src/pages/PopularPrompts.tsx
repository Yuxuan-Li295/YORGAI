import { css } from "@emotion/css";
import { PrimaryNavBar } from "components/PrimaryNavBar";
import { FastSearchButtonSection } from "components/Prompt/FastSearchButtonSection";
import { SectionTitle } from "components/Prompt/SectionTitle";
import { TextPromptCard } from "components/Prompt/TextPromptCard";
import { ToolCategoryCard } from "components/Prompt/ToolCategoryCard";
import { PromptSearchBar } from "components/PromptSearchBar";
import {
  PromptNavBarButtons,
  SecondaryNavBar,
} from "components/SecondaryNavBar";
import { basis } from "components/constants/colors";
import { Button } from "components/shared/Button";
import { ButtonGroup, ButtonGroupCell } from "components/shared/ButtonGroup";
import { Footer } from "components/shared/Footer";
import { useState } from "react";
import { ReactComponent as Chart } from "resources/img/Chart.svg";
import { ReactComponent as MagicWand } from "resources/img/MagicWand.svg";
import { ReactComponent as More } from "resources/img/More.svg";
import { ReactComponent as PencilLine } from "resources/img/PencilLine.svg";
import { ReactComponent as Prompt } from "resources/img/Prompt.svg";
import { ReactComponent as Refresh } from "resources/img/Refresh.svg";
import { ReactComponent as Toolbox } from "resources/img/Toolbox.svg";

const PopularPrompts = () => {
  const cards = (length: number) =>
    Array(length).fill({
      title: "角色扮演生成器",
      intro: `对接GPT3，200万人在用的写作助手。\
      对接GPT3，200万人在用的写作助手。\
      对接GPT3，200万人在用的写作助手。\
      对接GPT3，200万人在用的写作助手。`,
      tags: ["写作", "文案", "作文", "办公"],
    });

  const [selected, setSelected] = useState<string>();

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
          margin-bottom: 97px;
          justify-content: center;
        `}
      >
      </div>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 30px;
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 27px;
          `}
        >
          <div
            className={css`
              font-weight: 500;
              font-size: 48px;
            `}
          >
            <span
              className={css`
                color: #67cdbc;
              `}
            >
              4865
            </span>
            {" 条提示词"}
          </div>
          <div
            className={css`
              font-weight: 500;
              font-size: 20px;
              line-height: 30px;
              color: ${basis.text};
            `}
          >
            小鱼厂收集了大量高质量提示词，并根据功能和内容进行分类
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 14px;
            `}
          >
            <PromptSearchBar />
            <FastSearchButtonSection />
          </div>
          <div>
            <Button icon={<MagicWand />}>AI 提示词优化</Button>
          </div>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            gap: 80px;
            width: 100%;
            max-width: 1200px;
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 26px;
              padding: 0 10px;
              max-width: 1200px;
            `}
          >
            <div
              className={css`
                width: 100%;
                display: flex;
                justify-content: start;
              `}
            >
              <SectionTitle icon={<Toolbox />}>热门工具</SectionTitle>
            </div>
            <div
              className={css`
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                row-gap: 16px;
                column-gap: 16px;
                width: 100%;
              `}
            >
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <ToolCategoryCard key={i} />
                ))}
            </div>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 26px;
              padding: 0 10px;
              max-width: 1200px;
            `}
          >
            <div
              className={css`
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
              `}
            >
              <SectionTitle icon={<Prompt />}>热门提示词</SectionTitle>
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  gap: 21px;
                `}
              >
                <Button icon={<Refresh />}>换一批</Button>
                <Button icon={<More />}>查看更多</Button>
              </div>
            </div>
            <div
              className={css`
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                row-gap: 16px;
                column-gap: 16px;
                width: 100%;
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
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 26px;
              padding: 0 10px;
              max-width: 1200px;
            `}
          >
            <div
              className={css`
                width: 100%;
                display: flex;
                justify-content: start;
              `}
            >
              <SectionTitle icon={<Chart />}>榜单</SectionTitle>
            </div>
            <div
              className={css`
                display: flex;
                gap: 16px;
                width: 100%;
              `}
            >
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <div
                    className={css`
                      display: flex;
                      flex-direction: column;
                      gap: 16px;
                      width: 100%;
                    `}
                    key={i}
                  >
                    <div
                      className={css`
                        display: flex;
                        justify-content: center;
                        height: 56px;
                      `}
                    >
                      <SectionTitle icon={<PencilLine />}>
                        生产力工具
                      </SectionTitle>
                    </div>
                    {cards(3).map(({ title, intro, tags }, j) => (
                      <TextPromptCard
                        likeCount={255}
                        runCount={16}
                        title={title}
                        intro={intro}
                        tags={tags}
                        key={j}
                      />
                    ))}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { PopularPrompts };
