/** @jsxImportSource @emotion/react */

import React from "react";
import { Tag } from "./Tag";
import { css } from "@emotion/react";
import { AppName } from "./AppName";
import { AppIntro } from "./AppIntro";
import NotionAppIcon from "../../resource/img/NotionAppIcon.svg";
import ArrowChevronRight from "../../resources/img/ArrowChevronRight.svg";

type CardProps = {
  tags: string[];
};

const Card = ({ tags }: CardProps) => {
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
          <AppName>Notion AI</AppName>
          <AppIntro>对接GPT3， 200万人在用的写作助手...</AppIntro>
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

export { Card };
