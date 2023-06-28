import { css } from "@emotion/css";
import { PrimaryNavBar } from "components/PrimaryNavBar";
import {
  PromptNavBarButtons,
  SecondaryNavBar,
} from "components/SecondaryNavBar";
import { basis } from "components/constants/colors";
import { Breadcrumb } from "components/shared/Breadcrumb";
import { Button } from "components/shared/Button";
import { Card } from "components/shared/Card";
import { Footer } from "components/shared/Footer";
import NotionAI from "resources/img/NotionAI.png";
import { ReactComponent as Line } from "resources/img/Line.svg";
import { ReactComponent as Globe } from "resources/img/Globe.svg";
import { ReactComponent as EnterAndRun } from "resources/img/EnterAndRun.svg";
import { Star } from "components/shared/Star";

const ToolDetail = () => {
  const breadcrumbItems = [
    { name: "首页", link: "/" },
    { name: "AI工具", link: "/tools" },
    { name: "AI应用大全", link: "/tools/alltools" },
    { name: "NotionAI", link: "" },
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
            width: 707px;
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
              <img src={NotionAI} alt="" />
              <div
                className={css`
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  gap: 10px;
                `}
              >
                <div
                  className={css`
                    font-size: 24px;
                    font-weight: 600;
                    line-height: 32px;
                  `}
                >
                  Notion AI
                </div>
                <Card />
                <div
                  className={css`
                    display: flex;
                    align-items: center;
                    gap: 12px;
                  `}
                >
                  <Star selected={true} />
                  <Star selected={true} />
                  <Star selected={true} />
                  <Star selected={true} />
                  <Star selected={true} />
                  <div
                    className={css`
                      color: ${basis.text};
                      text-align: center;
                      font-size: 12px;
                      font-style: normal;
                      font-weight: 500;
                      line-height: 16px;
                    `}
                  >
                    4.9 (2130评论)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 21px;
            `}
          >
            <Button variant="secondary" icon={<Globe />}>
              官方网站
            </Button>
            <Button icon={<EnterAndRun />}>立即运行</Button>
          </div>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 18px;
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
                /* Pingfang SC/heading/h2/500 - medium */
                font-size: 20px;
                font-family: PingFang SC;
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
              width: 663px;
              flex-direction: column;

              color: ${basis.text};
              /* Pingfang SC/body/xs/400 - regular */
              font-size: 12px;
              font-family: PingFang SC;
              line-height: 16px;
            `}
          >
            <span>
              Notion AI
              是一款基于人工智能的工具，旨在帮助用户更高效地组织和管理信息。它结合了自然语言处理和机器学习技术，
              使得用户能够轻松地创建、编辑和共享各种类型的文档、笔记和项目。
            </span>
            <br />
            <span>
              Notion AI
              提供了一个直观易用的界面，用户可以通过简单的操作方式创建自定义的工作空间和页面布局。它支持丰富
              的内容格式，包括文本、图片、表格、嵌入式多媒体等，使得用户可以以最适合自己的方式展示和整理信息.
            </span>
            <br />
            <span>
              该工具还具备强大的搜索和组织功能，使得用户可以快速找到所需的信息，并将它们归类到特定的文件夹和标签中。此外，
              Notion AI
              还提供了协作和分享功能，用户可以与团队成员实时共享和编辑文档，促进团队协作和信息共享的效率。
            </span>
          </div>
        </div>

        <div
          className={css`
            display: flex;
            padding: 20px 10px;
            justify-content: center;
            align-items: center;
            gap: 20px;
            align-self: stretch;
          `}
        >
          carousel
        </div>
        <div
          className={css`
            display: flex;
            padding: 40px 10px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
            align-self: stretch;
          `}
        >
          <div
            className={css`
              color: ${basis.text_loud};
              text-align: center;
              font-size: 20px;
              font-weight: 500;
            `}
          >
            同类应用
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { ToolDetail };
