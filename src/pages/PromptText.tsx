import { css } from "@emotion/css";
import { FirstLevelNavBar } from "components/FirstLevelNavBar";
import { zincs } from "components/constants/colors";
import { Button } from "components/shared/Button";
import { Footer } from "components/shared/Footer";
import { SecondLevelNavBar } from "components/SecondLevelNavBar";
import { ReactComponent as Lightbulb } from "resources/img/Lightbulb.svg";
import { ReactComponent as MagicWand } from "resources/img/MagicWand.svg";
import { ReactComponent as AIApplication } from "resources/img/AIApplication.svg";
import { ReactComponent as ApplicationIcon } from "resources/img/AIApplication.svg";
import { ReactComponent as Bulb } from "resources/img/Bulb.svg";
import { ReactComponent as Star } from "resources/img/Star.svg";
import { ReactComponent as UserDouble } from "resources/img/UserDouble.svg";

const PromptText = () => {
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
      icon: <ApplicationIcon />,
      label: "在线应用",
      onClick: () => buttonClickHandler("在线应用"),
    },
    {
      icon: <AIApplication />,
      label: "AI应用大全",
      onClick: () => buttonClickHandler("AI应用大全"),
    },
    {
      icon: <Bulb />,
      label: "为你选应用",
      onClick: () => buttonClickHandler("为你选应用"),
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
            <Button Icon={Lightbulb}>AI 工具推荐</Button>
            <Button Icon={MagicWand}>AI 提示词学习</Button>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 13px;
              width: 1196px;
            `}
          >
            filter & body
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { PromptText };
