import { css } from "@emotion/css";
import { FirstLevelNavBar } from "components/FirstLevelNavBar";
import { SectionTitle } from "components/Prompt/SectionTitle";
import { SecondLevelNavBar } from "components/SecondLevelNavBar";
import { basis, zincs } from "components/constants/colors";
import { Button } from "components/shared/Button";
import { Card } from "components/shared/Card";
import { FastSearchButton } from "components/shared/FastSearchButton";
import { Footer } from "components/shared/Footer";
import { ReactComponent as AIApplication } from "resources/img/AIApplication.svg";
import { ReactComponent as ApplicationIcon } from "resources/img/ApplicationIcon.svg";
import { ReactComponent as Bulb } from "resources/img/Bulb.svg";
import { ReactComponent as Chart } from "resources/img/Chart.svg";
import { ReactComponent as MagicWand } from "resources/img/MagicWand.svg";
import { ReactComponent as More } from "resources/img/More.svg";
import { ReactComponent as Prompt } from "resources/img/Prompt.svg";
import { ReactComponent as Refresh } from "resources/img/Refresh.svg";
import { ReactComponent as Star } from "resources/img/Star.svg";
import { ReactComponent as Toolbox } from "resources/img/Toolbox.svg";
import { ReactComponent as UserDouble } from "resources/img/UserDouble.svg";

const PromptSelected = () => {
  const buttonClickHandler = (buttonName: string) => {
    console.log(`${buttonName} button clicked!`);
  };

  const buttons = [
    {
      Icon: UserDouble,
      label: "社区热门",
      onClick: () => buttonClickHandler("社区热门"),
    },
    {
      Icon: ApplicationIcon,
      label: "在线应用",
      onClick: () => buttonClickHandler("在线应用"),
    },
    {
      Icon: AIApplication,
      label: "AI应用大全",
      onClick: () => buttonClickHandler("AI应用大全"),
    },
    {
      Icon: Bulb,
      label: "为你选应用",
      onClick: () => buttonClickHandler("为你选应用"),
    },
    {
      Icon: Star,
      label: "我的收藏",
      onClick: () => buttonClickHandler("我的收藏"),
    },
  ];

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        width: 100vw;
        gap: 107px;
        background: ${zincs[25]};
        font-family: "PingFang SC", sans-serif;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-smooth: never;
      `}
    >
      <div
        className={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <FirstLevelNavBar />
        <SecondLevelNavBar buttons={buttons} />
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
            gap: 27px;
          `}
        >
          <div
            className={css`
              font-weight: 500;
              font-size: 48px;
              line-height: 38px;
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
              font-weight: 400;
              font-size: 20px;
              line-height: 30px;
              color: ${basis.text};
            `}
          >
            小鱼厂收集了大量高质量提示词，并根据功能和内容进行分类
          </div>
          <div>search bar</div>
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 21px;
            `}
          >
            <FastSearchButton>ChatGPT</FastSearchButton>
            <FastSearchButton>MidJourney</FastSearchButton>
            <FastSearchButton>GPT4</FastSearchButton>
            <FastSearchButton>DALL-E</FastSearchButton>
            <FastSearchButton>Stable Diffusion</FastSearchButton>
          </div>

          <div>
            <Button Icon={MagicWand}>AI 提示词优化</Button>
          </div>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 80px;
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: column;
              gap: 26px;
              width: 1196px;
            `}
          >
            <SectionTitle Icon={Toolbox}>热门工具</SectionTitle>
            <Card
              tags={["写作", "文案", "作文", "办公", "效率"]}
              showExecute={false}
              showRanking={false}
              notificationNumber={2}
              appName="NotionAI"
              appIntro="Notion是一款集成了笔记、知识库、数据表格、看板、日历等多种能力于一体的应用程序，它支持个人用户单独使用，也可以与他人进行跨平台协作"
            ></Card>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: column;
              gap: 26px;
              width: 1196px;
            `}
          >
            <div
              className={css`
                display: flex;
                flex-direction: row;
                justify-content: space-between;
              `}
            >
              <SectionTitle Icon={Prompt}>热门提示词</SectionTitle>
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  gap: 21px;
                `}
              >
                <Button Icon={Refresh}>换一批</Button>
                <Button Icon={More}>查看更多</Button>
              </div>
            </div>
            <div
              className={css`
                display: flex;
                justify-content: space-between; // adds space between the two cards
                width: 100%;
              `}
            >
              <Card
                tags={["写作", "文案", "作文", "办公", "效率"]}
                showExecute={true}
                showRanking={false}
                notificationNumber={1}
                appName="NotionAI"
                appIntro="Notion是一款集成了笔记、知识库、数据表格、看板、日历等多种能力于一体的应用程序，它支持个人用户单独使用，也可以与他人进行跨平台协作"
              />
            </div>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: column;
              gap: 26px;
              width: 1196px;
            `}
          >
            <SectionTitle Icon={Chart}>榜单</SectionTitle>
            <div
              className={css`
                display: flex;
                justify-content: space-between; // adds space between the cards
                width: 100%;
              `}
            >
              {/* added new card with required properties */}
              <Card
                tags={["写作", "文案", "作文", "办公", "效率"]}
                showExecute={false}
                showRanking={true}
                notificationNumber={1}
                appName="NotionAI"
                appIntro="Notion是一款集成了笔记、知识库、数据表格、看板、日历等多种能力于一体的应用程序，它支持个人用户单独使用，也可以与他人进行跨平台协作"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { PromptSelected };
