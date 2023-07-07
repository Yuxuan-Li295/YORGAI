import { css } from "@emotion/css";
import { PrimaryNavBar } from "components/PrimaryNavBar";
import { ImagePromptCardFlow } from "components/Prompt/ImagePromptCardFlow";
import { PromptFilterBar } from "components/Prompt/PromptFilterBar";
import {
  PromptNavBarButtons,
  SecondaryNavBar,
} from "components/SecondaryNavBar";
import { Button } from "components/shared/Button";
import { Dropdown, DropdownMenu } from "components/shared/Dropdown";
import { Footer } from "components/shared/Footer";
import { Fragment } from "react";
import { ReactComponent as ArrowAngleDownMd } from "resources/img/ArrowAngleDownMd.svg";
import { ReactComponent as Calender } from "resources/img/Calender.svg";
import { ReactComponent as Lightbulb } from "resources/img/Lightbulb.svg";
import { ReactComponent as MagicWand } from "resources/img/MagicWand.svg";
import { ReactComponent as Star } from "resources/img/Star.svg";
import { ReactComponent as Stars } from "resources/img/Stars.svg";
import { ReactComponent as TrendingUp } from "resources/img/TrendingUp.svg";

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
            <Button prepend={<Lightbulb />}>AI 工具推荐</Button>
            <Button prepend={<MagicWand />}>AI 提示词学习</Button>
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
        <PromptFilterBar
          prepend={
            <Fragment>
              <Dropdown
                menu={
                  <DropdownMenu
                    menuItems={["111", "111", "222"]}
                    setValue={(item: string) => {
                      console.log(item);
                    }}
                  />
                }
              >
                <Button
                  variant="tertiary"
                  size="sm"
                  append={<ArrowAngleDownMd />}
                >
                  所有类型
                </Button>
              </Dropdown>
              <Button
                variant="tertiary"
                size="sm"
                append={<ArrowAngleDownMd />}
              >
                所有语言
              </Button>
              <Button
                variant="tertiary"
                size="sm"
                append={<ArrowAngleDownMd />}
              >
                适用模型
              </Button>
            </Fragment>
          }
          append={
            <Fragment>
              <Button variant="tertiary" size="sm" prepend={<TrendingUp />}>
                正在流行
              </Button>
              <Button variant="tertiary" size="sm" prepend={<Stars />}>
                最受欢迎
              </Button>
              <Button variant="tertiary" size="sm" prepend={<Star />}>
                收藏最多
              </Button>
              <Button variant="tertiary" size="sm" prepend={<Calender />}>
                最新发布
              </Button>
            </Fragment>
          }
        />
        <ImagePromptCardFlow />
      </div>
      <Footer />
    </div>
  );
};

export { ImagePrompts };
