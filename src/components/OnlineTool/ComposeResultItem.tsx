import { css } from "@emotion/css";
import PromptParamTag from "components/Compose/PromptparamTag";
import { basis, white } from "components/constants/colors";
import { Button } from "components/shared/Button";
import { ReactComponent as ArrowAngleDoubleMd } from "resources/img/ArrowAngleDoubleMd.svg";
import { ReactComponent as Copy } from "resources/img/Copy.svg";
import { ReactComponent as DoCheck } from "resources/img/DoCheck.svg";
import { ReactComponent as Pencil } from "resources/img/Pencil.svg";
import { ReactComponent as Refresh } from "resources/img/Refresh.svg";
import { ReactComponent as Replay } from "resources/img/Replay.svg";
import { ReactComponent as XLarge } from "resources/img/XLarge.svg";

const ComposeResultItem = () => {
  const SampleText =
    "MM智能助理是一款由MiniMax自研的，没有调用其他产品的接口的大型语言模型。\
  MiniMax是一家中国科技公司，一直致力于进行大模型相关的研究。MM智能助理是一款由MiniMax自研的，\
  没有调用其他产品的接口的大型语言模型。MiniMax是一家中国科技公司，\
  一直致力于进行大模型相关的研究。MM智能助理是一款由MiniMax自研的，\
  没有调用其他产品的接口的大型语言模型。MiniMax是一家中国科技公司，\
  一直致力于进行大模型相关的研究。MM智能助理是一款由MiniMax自研的，\
  没有调用其他产品的接口的大型语言模型。MiniMax是一家中国科技公司，\
  一直致力于进行大模型相关的研究。MM智能助理是一款由MiniMax自研的，\
  没有调用其他产品的接口的大型语言模型。MiniMax是一家中国科技公司，\
  一直致力于进行大模型相关的研究。";
  const SampleText2 =
    "As a pet behaviorist, I'm here to help you address the aggression issues with \
  your German Shepherd. Aggression in dogs can have various underlying causes, \
  and it's important to understand the root cause before implementing a behavior \
  modification plan. Here are the steps we can take to help manage your dog's \
  aggression.";

  const PromptText1 = "参数3";
  const PromptText2 = "角色生成扮演器";
  const PromptText3 = "ChatGPT4";
  const PromptText4 = "小鱼厂是AI时代的App Store, 为开发者...";

  return (
    <div
      className={css`
        display: flex;
        padding-bottom: 0px;
        flex-direction: column;
        align-items: flex-start;
        flex: 1 0 0;
        align-self: stretch;
        background: ${basis.bg_subtle};
      `}
    >
      <div
        className={css`
          display: flex;
          padding: 24px 85px;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          align-self: stretch;
          border-bottom: 1px solid ${basis.border_subtle};
          background: ${white};
        `}
      >
        <div
          className={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            align-self: stretch;
          `}
        >
          <PromptParamTag
            text1={PromptText1}
            text2={PromptText2}
            text3={PromptText3}
            text4={PromptText4}
          />
          <div
            className={css`
              display: flex;
              height: 20px;
              justify-content: center;
              align-items: center;
              gap: 12px;
            `}
          >
            <DoCheck />
            <XLarge />
          </div>
        </div>
        <div
          className={css`
            display: flex;
            padding: 16px 20px;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;
            gap: 12px;
            align-self: stretch;
            border-radius: 12px;
            border: 1px solid ${basis.border};
            background: ${basis.bg};
          `}
        >
          <div
            className={css`
              display: flex;
              align-items: flex-end;
              gap: 8px;
              flex: 1 0 0;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 20px;
            `}
          >
            {SampleText}
          </div>
          <div
            className={css`
              display: flex;
              align-items: center;
              gap: 8px;
              align-self: stretch;
            `}
          >
            <Button prepend={<Replay />} variant="tertiary">
              撤销
            </Button>
            <Button prepend={<Refresh />} variant="tertiary">
              重做
            </Button>
            <div
              className={css`
                display: flex;
                height: 16px;
                justify-content: flex-end;
                align-items: center;
                gap: 4px;
                flex: 1 0 0;
              `}
            ></div>
            <Button prepend={<ArrowAngleDoubleMd />} variant="tertiary">
              手动改稿
            </Button>
          </div>
        </div>
        <div
          className={css`
            color: ${basis.text};
            font-size: 12px;
            font-style: normal;
            font-weight: 500;
            line-height: 16px;
          `}
        >
          1分钟前
        </div>
      </div>
      <div
        className={css`
          display: flex;
          padding: 24px 85px;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          align-self: stretch;
          border-bottom: 1px solid ${basis.border_subtle};
        `}
      >
        <div
          className={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            align-self: stretch;
          `}
        >
          <PromptParamTag
            text1={PromptText1}
            text2={PromptText2}
            text3={PromptText3}
            text4={PromptText4}
          />
          <div
            className={css`
              display: flex;
              height: 20px;
              justify-content: center;
              align-items: center;
              gap: 12px;
            `}
          >
            <Pencil />
            <Copy />
          </div>
        </div>
        <div
          className={css`
            display: flex;
            align-items: flex-start;
            gap: 20px;
            align-self: stretch;
          `}
        >
          <div
            className={css`
              width: 845px;
              flex: 1 0 0;
              font-size: 16px;
              font-weight: 400;
              line-height: 20px;
            `}
          >
            {SampleText2}
          </div>
        </div>
        <div
          className={css`
            color: ${basis.text};
            font-size: 12px;
            font-style: normal;
            font-weight: 500;
            line-height: 16px;
          `}
        >
          1分钟前
        </div>
      </div>
    </div>
  );
};

export { ComposeResultItem };
