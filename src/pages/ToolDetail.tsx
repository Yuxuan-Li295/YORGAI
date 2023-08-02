import { css } from "@emotion/css";
import { PrimaryNavBar } from "components/PrimaryNavBar";
import { PromptStatistics } from "components/Prompt/PromptStatistics";
import { ToolCard } from "components/Prompt/ToolCard";
import { SecondaryNavBar, ToolNavBarButtons } from "components/SecondaryNavBar";
import { basis } from "components/constants/colors";
import { Breadcrumb } from "components/shared/Breadcrumb";
import { Button } from "components/shared/Button";
import { Carousel } from "components/shared/Carousel";
import { Footer } from "components/shared/Footer";
import { ReactComponent as Execute } from "resources/img/Execute.svg";
import { ReactComponent as Globe } from "resources/img/Globe.svg";
import { ReactComponent as Line } from "resources/img/Line.svg";
import Notion160 from "resources/img/Notion160.png";
import Bird from "resources/img/bird.jpg";
import View from "resources/img/view.jpeg";

const ToolDetail = () => {
  const tags = ["写作", "文案", "作文", "办公"];
  const text = `Notion AI 是一款基于人工智能的工具，旨在帮助用户更高效地组织和管理信息。它结合了自然语言处理和机器学习技术，使得用户能够轻松地创建、编辑和共享各种类型的文档、笔记和项目。

  Notion AI 提供了一个直观易用的界面，用户可以通过简单的操作方式创建自定义的工作空间和页面布局。它支持丰富的内容格式，包括文本、图片、表格、嵌入式多媒体等，使得用户可以以最适合自己的方式展示和整理信息。
  
  该工具还具备强大的搜索和组织功能，使得用户可以快速找到所需的信息，并将它们归类到特定的文件夹和标签中。此外，Notion AI 还提供了协作和分享功能，用户可以与团队成员实时共享和编辑文档，促进团队协作和信息共享的效率。`;
  const title = "NotionAI";
  const rate = 4.9;
  const commentCount = 2140;

  const breadcrumbItems = [
    { name: "首页", link: "/" },
    { name: "AI工具", link: "/tool/popular" },
    { name: "AI应用大全", link: "/tool" },
    { name: "NotionAI", link: "/tool/detail" },
  ];

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
          margin-bottom: 40px;
        `}
      >
        <PrimaryNavBar />
        <SecondaryNavBar buttons={ToolNavBarButtons} />
      </div>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 50px;
        `}
      >
        <div
          className={css`
            display: flex;
            max-width: 700px;
            width: 100%;
            justify-content: space-between;
            align-items: flex-end;
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              gap: 30px;
            `}
          >
            <Breadcrumb items={breadcrumbItems} />
            <div
              className={css`
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 20px;
              `}
            >
              <img
                className={css`
                  width: 80px;
                  height: 80px;
                `}
                src={Notion160}
                alt="Notion icon"
              />
              <PromptStatistics
                title={title}
                tags={tags}
                rate={rate}
                commentCount={commentCount}
              />
            </div>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 32px;
            `}
          >
            <Button variant="secondary" prepend={<Globe />}>
              官方网站
            </Button>
            <Button prepend={<Execute />}>立即运行</Button>
          </div>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 18px;
            width: 700px;
          `}
        >
          <div
            className={css`
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 16px;
            `}
          >
            <Line />
            <div
              className={css`
                color: ${basis.text_loud};
                text-align: center;
                font-size: 20px;
                font-weight: 500;
                line-height: 30px;
              `}
            >
              简介
            </div>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: column;
              color: ${basis.text};
              font-size: 12px;
              font-weight: 400;
              line-height: 16px;
              white-space: pre-line;
            `}
          >
            <div>{text}</div>
          </div>
        </div>
        <Carousel images={[Bird, View]} />
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
            同类应用
          </div>
          <div
            className={css`
              display: flex;
              justify-content: center;
              gap: 16px;
              max-width: 1200px;
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { ToolDetail };
