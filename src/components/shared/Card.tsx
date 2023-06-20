/** @jsxImportSource @emotion/react */

import React from "react";
import { Tag } from "./Tag";
import { css } from "@emotion/react";
import { AppName } from "./AppName";
import { AppIntro } from "./AppIntro";
import NotionAppIcon from "../../resource/img/NotionAppIcon.svg";

const Card = () => {
  return (
    <div
      css={css`
        width: 300px;
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
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: start;
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
            justify-content: center;
          `}
        >
          <AppName>Notion AI</AppName>
          <AppIntro>对接GPT3， 200万人在用的写作助手...</AppIntro>
        </div>
      </div>

      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
        `}
      >
        {/* tag 只显示4个 */}
        <Tag>写作</Tag>
        <Tag>文案</Tag>
        <Tag>作文</Tag>
        <Tag>办公</Tag>
        <Tag>+2</Tag>
      </div>
    </div>
  );
};

export { Card };
