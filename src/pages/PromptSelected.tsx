import { css } from "@emotion/css";
import { FirstLevelNavBar } from "components/FirstLevelNavBar";
import { basis, zincs } from "components/constants/colors";
import { SectionTitle } from "components/promptTrending/SectionTitle";
import { Button } from "components/shared/Button";
import { Card } from "components/shared/Card";
import { Footer } from "components/shared/Footer";
import { FastSearchButton } from "components/shared/FastSearchButton";
import MagicWand from "resources/img/MagicWand.svg";
import More from "resources/img/More.svg";
import Refresh from "resources/img/Refresh.svg";

const PromptSelected = () => {
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
              color: ${basis["text"]};
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
            <Button icon={<img src={MagicWand} alt="Magic wand icon" />}>
              AI 提示词优化
            </Button>
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
            <SectionTitle>热门分类</SectionTitle>
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
            <div
              className={css`
                display: flex;
                flex-direction: row;
                justify-content: space-between;
              `}
            >
              <SectionTitle subTitle="小鱼厂专家们都在用他们">
                热门文字提示词
              </SectionTitle>
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  gap: 21px;
                `}
              >
                <Button icon={<img src={Refresh} alt="Refresh icon" />}>
                  换一批
                </Button>
                <Button icon={<img src={More} alt="More icon" />}>
                  查看更多
                </Button>
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
            <SectionTitle>榜单</SectionTitle>
            <div>cards</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { PromptSelected };
