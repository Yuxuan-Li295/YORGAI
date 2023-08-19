import { css } from "@emotion/css";
import { body, caption } from "components/constants/fonts";
import { basis, fill } from "components/constants/colors";
import { useState } from "react";
import { ReactComponent as DoneGreen } from "resources/img/DoneGreen.svg";
import { ReactComponent as ArrowAngleRightMd } from "resources/img/ArrowAngleRightMd.svg";
import { ReactComponent as ArrowAngleDownMd } from "resources/img/ArrowAngleDownMd.svg";
import { ReactComponent as Avatar } from "resources/img/Avatar.svg";

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
      {isDisplaya ? (
        ""
      ) : (
        <div
          className={css`
            display: flex;
            padding: 24px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px;
            align-self: stretch;
          `}
        >
          <div
            className={css`
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 8px;
              align-self: stretch;
            `}
          >
            <div
              className={css`
                display: flex;
                padding-right: 0px;
                align-items: flex-end;
                gap: 8px;
                flex: 1 0 0;
              `}
            >
              <Avatar />
              <div
                className={css`
                  display: flex;
                  width: 480px;
                  padding: 8px 12px;
                  align-items: flex-end;
                  gap: 8px;
                  border-radius: 16px 16px 16px 0px;
                  background: ${fill.base.layer_on};
                  box-shadow: 0px 2px 12px 0px rgba(79, 81, 89, 0.06),
                    0px 0px 4px 0px rgba(79, 81, 89, 0.03),
                    0px 1px 0px 0px rgba(255, 255, 255, 0.06) inset,
                    0px 0.5px 0px 0px rgba(255, 255, 255, 0.06) inset;
                  box-sizing: border-box;
                `}
              >
                <div
                  className={css`
                    color: ${basis.text_loud};
                    ${body.sm.regular}
                    flex: 1 0 0;
                  `}
                >
                  以下是一些与比亚迪（BYD）有关的关键词和主题：
                  电动汽车、新能源、深圳、王传福（创始人）、锂电池、汽车制造、国际市场、混合动力技术、环保、投资、创新技术、扩展全球市场。
                  这些关键词涵盖了比亚迪的主要业务领域、产品线、市场战略以及企业文化等方面。
                </div>
                <div
                  className={css`
                    color: ${basis.text};
                    ${caption.regular}
                  `}
                >
                  12:27
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
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
      {isDisplayb ? (
        ""
      ) : (
        <div
          className={css`
            display: flex;
            padding: 24px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px;
            align-self: stretch;
          `}
        >
          <div
            className={css`
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 8px;
              align-self: stretch;
            `}
          >
            <div
              className={css`
                display: flex;
                padding-right: 0px;
                align-items: flex-end;
                gap: 8px;
                flex: 1 0 0;
              `}
            >
              <Avatar />
              <div
                className={css`
                  display: flex;
                  width: 480px;
                  padding: 8px 12px;
                  align-items: flex-end;
                  gap: 8px;
                  border-radius: 16px 16px 16px 0px;
                  background: ${fill.base.layer_on};
                  box-shadow: 0px 2px 12px 0px rgba(79, 81, 89, 0.06),
                    0px 0px 4px 0px rgba(79, 81, 89, 0.03),
                    0px 1px 0px 0px rgba(255, 255, 255, 0.06) inset,
                    0px 0.5px 0px 0px rgba(255, 255, 255, 0.06) inset;
                  box-sizing: border-box;
                `}
              >
                <div
                  className={css`
                    color: ${basis.text_loud};
                    ${body.sm.regular}
                    flex: 1 0 0;
                  `}
                >
                  以下是一些与比亚迪（BYD）有关的关键词和主题：
                  电动汽车、新能源、深圳、王传福（创始人）、锂电池、汽车制造、国际市场、混合动力技术、环保、投资、创新技术、扩展全球市场。
                  这些关键词涵盖了比亚迪的主要业务领域、产品线、市场战略以及企业文化等方面。
                </div>
                <div
                  className={css`
                    color: ${basis.text};
                    ${caption.regular}
                  `}
                >
                  12:27
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { AgentTaskDetail };
