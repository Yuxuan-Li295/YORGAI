import { css } from "@emotion/css";
import { PrimaryNavBar } from "components/PrimaryNavBar";
import { ImagePromptCardFlow } from "components/Prompt/ImagePromptCardFlow";
import {
  PromptNavBarButtons,
  SecondaryNavBar,
} from "components/SecondaryNavBar";
import { Button } from "components/shared/Button";
import { Footer } from "components/shared/Footer";
import { ReactComponent as Lightbulb } from "resources/img/Lightbulb.svg";
import { ReactComponent as MagicWand } from "resources/img/MagicWand.svg";

const ImagePrompts = () => {
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
        <ImagePromptCardFlow />
      </div>
      <Footer />
    </div>
  );
};

export { ImagePrompts };
