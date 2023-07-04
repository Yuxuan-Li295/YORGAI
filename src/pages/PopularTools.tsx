import { css } from "@emotion/css";
import { PrimaryNavBar } from "components/PrimaryNavBar";
import { FastSearchButtonSection } from "components/Prompt/FastSearchButtonSection";
import { SectionTitle } from "components/Prompt/SectionTitle";
import { ToolCard } from "components/Prompt/ToolCard";
import { ToolCategoryCard } from "components/Prompt/ToolCategoryCard";
import { PromptSearchBar } from "components/Prompt/PromptSearchBar";
import { SecondaryNavBar, ToolNavBarButtons } from "components/SecondaryNavBar";
import { basis } from "components/constants/colors";
import { Button } from "components/shared/Button";
import { Footer } from "components/shared/Footer";
import { ReactComponent as Chart } from "resources/img/Chart.svg";
import { ReactComponent as More } from "resources/img/More.svg";
import { ReactComponent as PencilLine } from "resources/img/PencilLine.svg";
import { ReactComponent as Prompt } from "resources/img/Prompt.svg";
import { ReactComponent as Refresh } from "resources/img/Refresh.svg";
import { ReactComponent as Toolbox } from "resources/img/Toolbox.svg";

const PopularTools = () => {
  const cards = (length: number) =>
    Array(length).fill({
      name: "Notion AI",
      intro: `对接GPT3，200万人在用的写作助手。\
      对接GPT3，200万人在用的写作助手。\
      对接GPT3，200万人在用的写作助手。`,
      tags: ["写作", "文案", "作文", "办公", "办公", "办公", "办公", "办公"],
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
        <SecondaryNavBar buttons={ToolNavBarButtons} />
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
            white-space: break-spaces;
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
              68
            </span>
            {" 个AI应用  "}
            <span
              className={css`
                color: #67cdbc;
              `}
            >
              4865
            </span>
            {" 条用户体验"}
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
              <SectionTitle icon={<Toolbox />}>热门分类</SectionTitle>
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
              <SectionTitle icon={<Prompt />}>热门工具</SectionTitle>
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  gap: 21px;
                `}
              >
                <Button prepend={<Refresh />}>换一批</Button>
                <Button prepend={<More />}>查看更多</Button>
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
              {cards(3).map(({ name, intro, tags }, i) => (
                <ToolCard
                  name={name}
                  intro={intro}
                  tags={tags}
                  showExecute
                  key={i}
                />
              ))}
              {cards(6).map(({ name, intro, tags }, i) => (
                <ToolCard name={name} intro={intro} tags={tags} key={i} />
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

                    {cards(3).map(({ name, intro, tags }, i) => (
                      <ToolCard
                        name={name}
                        intro={intro}
                        tags={tags}
                        ranking={(i + 1) as 1 | 2 | 3}
                        key={i}
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

export { PopularTools };
