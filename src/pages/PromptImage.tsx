import { css } from "@emotion/css";
import { FirstLevelNavBar } from "components/FirstLevelNavBar";
import { PromptImageCard } from "components/Prompt/PromptImageCard";
import { zincs } from "components/constants/colors";
import { Button } from "components/shared/Button";
import { Footer } from "components/shared/Footer";
import { ReactComponent as Lightbulb } from "resources/img/Lightbulb.svg";
import { ReactComponent as MagicWand } from "resources/img/MagicWand.svg";
import Bird from "resources/img/bird.jpg";
import View from "resources/img/view.jpeg";

const PromptImage = () => {
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
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: center;
          `}
        >
          header2
        </div>
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
            <div>filter</div>
            <div
              className={css`
                width: 100%;
                flex: 1;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
              `}
            >
              <PromptImageCard image={Bird} />
              <PromptImageCard image={View} />
              <PromptImageCard image={Bird} />
              <PromptImageCard image={View} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { PromptImage };
