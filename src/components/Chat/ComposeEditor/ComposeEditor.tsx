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
        border: 1px solid var(--basis-border, #d7d7db);
        background: var(--basis-bg, #f9f9fa);
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
            /* el/modul/card */
            /* box-shadow: 0px 2px 12px 0px rgba(79, 81, 89, 0.06),
              0px 0px 4px 0px rgba(79, 81, 89, 0.03),
              0px 1px 0px 0px rgba(255, 255, 255, 0.06) inset,
              0px 0.5px 0px 0px rgba(255, 255, 255, 0.06) inset; */
          `}
        >
          <div
            className={css`
              flex: 1 0 0;
              color: var(--basis-text-loud, #18181b);
              /* Pingfang SC/body/sm/400 - regular */
              font-family: PingFang SC;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 20px; /* 142.857% */
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
