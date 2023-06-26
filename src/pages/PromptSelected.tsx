import { css } from "@emotion/css";
import { FirstLevelNavBar } from "components/FirstLevelNavBar";
import { SectionTitle } from "components/Prompt/SectionTitle";
import { SecondLevelNavBar } from "components/SecondLevelNavBar";
import { basis, zincs } from "components/constants/colors";
import { Button } from "components/shared/Button";
import { Card } from "components/shared/Card";
import { FastSearchButton } from "components/shared/FastSearchButton";
import { Footer } from "components/shared/Footer";
import { ToolCategoryCard } from "components/ToolCategoryCard";
import { ReactComponent as AIApplication } from "resources/img/AIApplication.svg";
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
      icon: <Star />,
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
        font-family: inherit;
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
          position: relative;
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
            <div>
              <ToolCategoryCard />
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
            <Card />
            <div>cards</div>
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
            <div>cards</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { PromptSelected };
