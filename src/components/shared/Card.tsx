import React from "react";
import { Tag } from "./Tag";
import { css } from "@emotion/css";
import NotionAppIcon from "../../resource/img/NotionAppIcon.svg";
import ArrowChevronRight from "../../resources/img/ArrowChevronRight.svg";
import RunIcon from "../../resources/img/RunIcon.svg";

type CardProps = {
  tags: string[];
  showExecute?: boolean;
  notificationNumber?: number;
  showRanking?: boolean;
};

const Card = ({
  tags,
  showExecute,
  showRanking,
  notificationNumber,
}: CardProps) => {
  return (
    <div
      className={css`
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
        className={css`
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        `}
      >
        <div
          className={css`
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
          className={css`
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 40px;
          `}
        >
          <div
            className={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: 100%;
            `}
          >
            <h1>Notion AI</h1>
            {showExecute && (
              <button
                className={css`
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
            )}
            {showRanking && (
              <div
                className={css`
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background-color: #fbcc0d;
                  color: white;
                  height: 40px;
                  width: 40px;
                  border-radius: 8px;
                `}
              >
                {notificationNumber}
              </div>
            )}
          </div>
          <p style={{ fontSize: "11px" }}>
            对接GPT3， 200万人在用的写作助手...
          </p>
        </div>
      </div>

      <div
        className={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        `}
      >
        <div
          className={css`
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
