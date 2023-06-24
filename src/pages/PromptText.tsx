import { css } from "@emotion/css";
import { FirstLevelNavBar } from "components/FirstLevelNavBar";
import { SecondLevelNavBar } from "components/SecondLevelNavBar";
import { Button } from "components/shared/Button";
import { Footer } from "components/shared/Footer";
import { ReactComponent as AIApplication } from "resources/img/AIApplication.svg";
import { ReactComponent as Lightbulb } from "resources/img/Lightbulb.svg";
import { ReactComponent as MagicWand } from "resources/img/MagicWand.svg";
import { ReactComponent as Star } from "resources/img/Star.svg";
import { ReactComponent as UserDouble } from "resources/img/UserDouble.svg";

const PromptText = () => {
  const buttons = [
    {
      icon: <UserDouble />,

      label: "社区热门",
    },
    {
      icon: <AIApplication />,
      label: "提示词大全",
    },
    {
      icon: <MagicWand />,
      label: "提示词优化器",
    },
    {
      icon: <Star />,
      label: "我的收藏",
    },
  ];

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
          margin-bottom: 97px;
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
            <Button icon={<Lightbulb />}>AI 工具推荐</Button>
            <Button icon={<MagicWand />}>AI 提示词学习</Button>
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
