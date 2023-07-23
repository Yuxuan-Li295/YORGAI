import { css } from "@emotion/css";
import { Button } from "components/shared/Button";
import { basis } from "components/constants/colors";
import { ReactComponent as Replay } from "resources/img/Replay.svg";
import { ReactComponent as Refresh } from "resources/img/Refresh.svg";
import { ReactComponent as ArrowAngleDoubleMd } from "resources/img/ArrowAngleDoubleMd.svg";

const ComposeEditor = () => {
  return (
    <div
      className={css`
        display: flex;
        padding: 16px 20px;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        gap: 12px;
        align-self: stretch;
        width: 890px;
        height: 196px;
        box-sizing: border-box;
        border-radius: 12px;
        border: 1px solid ${basis.border};
        background: ${basis.bg};
      `}
    >
      <div
        className={css`
          display: flex;
          width: 850px;
          height: 120px;
          align-items: flex-start;
          gap: 20px;
          align-self: stretch;
          box-sizing: border-box;
        `}
      >
        <div
          className={css`
            display: flex;
            align-items: flex-end;
            gap: 8px;
            flex: 1 0 0;
          `}
        >
          <div
            className={css`
              flex: 1 0 0;
              color: ${basis.text_loud};
              font-family: PingFang SC;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 20px;
            `}
          >
            MM智能助理是一款由MiniMax自研的，没有调用其他产品的接口的大型语言模型。MiniMax是一家中国科技公司，一直致力于进行大模型相关的研究。MM智能助理是一款由MiniMax自研的，没有调用其他产品的接口的大型语言模型。MiniMax是一家中国科技公司，一直致力于进行大模型相关的研究。MM智能助理是一款由MiniMax自研的，没有调用其他产品的接口的大型语言模型。MiniMax是一家中国科技公司，一直致力于进行大模型相关的研究。MM智能助理是一款由MiniMax自研的，没有调用其他产品的接口的大型语言模型。MiniMax是一家中国科技公司，一直致力于进行大模型相关的研究。MM智能助理是一款由MiniMax自研的，没有调用其他产品的接口的大型语言模型。MiniMax是一家中国科技公司，一直致力于进行大模型相关的研究。
          </div>
        </div>
      </div>
      <div
        className={css`
          display: flex;
          align-items: center;
          gap: 8px;
          align-self: stretch;
          width: 850px;
          height: 32px;
          box-sizing: border-box;
          position: relative;
        `}
      >
        <Button variant="tertiary" size="sm" prepend={<Replay />}>
          撤销
        </Button>
        <Button variant="tertiary" size="sm" prepend={<Refresh />}>
          重做
        </Button>
        <div
          className={css`
            position: absolute;
            right: 0px;
          `}
        >
          <Button
            variant="tertiary"
            size="sm"
            append={<ArrowAngleDoubleMd />}
            style={{ backgroundColor: `${basis.bg_vibrant}` }}
          >
            AI改稿
          </Button>
        </div>
      </div>
    </div>
  );
};
export { ComposeEditor };
