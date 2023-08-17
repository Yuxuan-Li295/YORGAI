import { css } from "@emotion/css";
import { body } from "components/constants/fonts";
import { basis } from "components/constants/colors";
import { useState } from "react";
import { ReactComponent as DoneGreen } from "resources/img/DoneGreen.svg";
import { ReactComponent as ArrowAngleRightMd } from "resources/img/ArrowAngleRightMd.svg";
import { ReactComponent as ArrowAngleDownMd } from "resources/img/ArrowAngleDownMd.svg";

const AgentTaskDetail = () => {
  const [isDisplayb, setDisplayb] = useState(true);
  const [isDisplaya, setDisplaya] = useState(true);
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1 0 0;
        border-radius: 8px;
        border: 1px solid ${basis.border};
        width: 820px;
        box-sizing: border-box;
      `}
    >
      <div
        className={css`
          display: flex;
          padding: 20px;
          justify-content: space-between;
          align-items: center;
          align-self: stretch;
        `}
      >
        <div
          className={css`
            color: #000;
            ${body.sm.semiBold}
            font-style: normal;
          `}
        >
          1. 生成关于比亚迪的关键词和主题
        </div>
        <div
          className={css`
            display: flex;
            width: 16px;
            height: 16px;
            justify-content: center;
            align-items: center;
          `}
        >
          <DoneGreen />
        </div>
      </div>
      <div
        className={css`
          display: flex;
          padding: 8px 12px;
          align-items: center;
          gap: 10px;
          align-self: stretch;
          background: ${basis.bg_muted};
        `}
      >
        {isDisplaya ? (
          <ArrowAngleRightMd
            style={{ color: "#707480", width: "16px ", height: "16px" }}
            onClick={() => setDisplaya(false)}
          />
        ) : (
          <ArrowAngleDownMd
            style={{ color: "#707480", width: "16px ", height: "16px" }}
            onClick={() => setDisplaya(true)}
          />
        )}
        <div
          className={css`
            color: ${basis.text};
            ${body.xs.medium}
            font-style: normal;
            position: relative;
            top: 0.5px;
          `}
        >
          讨论过程
        </div>
      </div>
      <div
        className={css`
          display: flex;
          padding: 8px 12px;
          align-items: center;
          gap: 10px;
          align-self: stretch;
          background: ${basis.bg_muted};
        `}
      >
        {isDisplayb ? (
          <ArrowAngleRightMd
            style={{ color: "#707480", width: "16px ", height: "16px" }}
            onClick={() => setDisplayb(false)}
          />
        ) : (
          <ArrowAngleDownMd
            style={{ color: "#707480", width: "16px ", height: "16px" }}
            onClick={() => setDisplayb(true)}
          />
        )}

        <div
          className={css`
            color: ${basis.text};
            font-style: normal;
            ${body.xs.medium}
            position: relative;
            top: 0.5px;
          `}
        >
          产出结果
        </div>
      </div>
    </div>
  );
};

export { AgentTaskDetail };
