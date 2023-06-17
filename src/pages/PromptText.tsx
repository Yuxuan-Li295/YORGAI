import { css } from "@emotion/css";
import { zincs } from "components/constants/colors";
import { Button } from "components/shared/Button";
import { Footer } from "components/shared/Footer";
import Lightbulb from "resources/img/Lightbulb.svg";
import MagicWand from "resources/img/MagicWand.svg";

const PromptText = () => {
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
      `}
    >
      <div
        className={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: center;
          `}
        >
          header1
        </div>
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
            <Button icon={<img src={Lightbulb} alt="Lightbulb icon" />}>
              AI 工具推荐
            </Button>
            <Button icon={<img src={MagicWand} alt="Magic wand icon" />}>
              AI 提示词学习
            </Button>
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
