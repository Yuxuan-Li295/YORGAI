/** @jsxImportSource @emotion/react */
import { Tag } from "./Tag";
import { css } from "@emotion/react";
import NotionAppIcon from "../../resource/img/NotionAppIcon.svg";
import ArrowChevronRight from "../../resources/img/ArrowChevronRight.svg";
import RunIcon from "../../resources/img/RunIcon.svg";

type CardProps = {
  tags: string[];
};

const CardType2 = ({ tags }: CardProps) => {
  return (
    <div
      css={css`
        width: 330px;
        height: 100px;
        padding: 20px;
        margin: 0 auto;
        box-sizing: border-box;
        background-color: #fff;
        border: 2px solid #e9e9ec;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        `}
      >
        <div
          css={css`
            border: 1px solid #e9e9ec;
            margin-right: 8px;
            border-radius: 10px;
          `}
        >
          <img
            src={NotionAppIcon}
            alt="Notion App Icon"
            style={{
              width: "40px",
              height: "40px",
            }}
          />
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 40px;
          `}
        >
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: 100%;
            `}
          >
            <h1>Notion AI</h1>
            <button
              css={css`
                background-color: #34d393;
                height: 20px;
                border: none;
                color: white;
                padding: 5px 10px;
                text-decoration: none;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 14px;
                margin: 2px 2px;
                cursor: pointer;
                border-radius: 8px;
              `}
            >
              <img
                src={RunIcon}
                alt=""
                style={{
                  height: "13px",
                  width: "13px",
                }}
              />
              立即运行
            </button>
          </div>
          <p style={{ fontSize: "11px" }}>
            对接GPT3， 200万人在用的写作助手...
          </p>
        </div>
      </div>

      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
            margin-left: 8px;
          `}
        >
          {tags.slice(0, 4).map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
          {tags.length > 4 && (
            <Tag isDarker={true}>{`+${tags.length - 4}`}</Tag>
          )}{" "}
        </div>

        <img
          src={ArrowChevronRight}
          alt=""
          style={{
            width: "16px",
            height: "16px",
          }}
        />
      </div>
    </div>
  );
};

export { CardType2 };
