import { Tag } from "./Tag";
import { css } from "@emotion/css";
import { ReactComponent as NotionAppIcon } from "resources/img/NotionAppIcon.svg";
import { ReactComponent as ArrowChevronRight } from "resources/img/ArrowChevronRight.svg";
import { ReactComponent as RunIcon } from "resources/img/RunIcon.svg";

type CardProps = {
  tags: string[];
  showExecute?: boolean;
  notificationNumber?: number;
  showRanking?: boolean;
  appName?: string;
  appIntro?: string;
};

const Card = ({
  tags,
  showExecute,
  showRanking,
  notificationNumber,
  appName,
  appIntro,
}: CardProps) => {
  return (
    <div
      className={css`
        width: 316px;
        height: 100px;
        padding: 16px;
        margin: 0 auto;
        box-sizing: border-box;
        background-color: #fff;
        border: 1px solid #e9e9ec;
        border-radius: 8px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        display: flex;
        padding: 16px;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      `}
    >
      {showRanking ? (
        <div
          className={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 40px;
          `}
        >
          <NotionAppIcon
            style={{
              width: "40px",
              height: "40px",
            }}
          />
          <div
            className={css`
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              width: 100%;
            `}
          >
            <div
              className={css`
                display: flex;
                justify-content: space-between;
                align-items: center;
              `}
            >
              <h1>{appName}</h1>
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
                  <RunIcon
                    style={{
                      height: "13px",
                      width: "13px",
                    }}
                  />
                  立即运行
                </button>
              )}
            </div>
            <p style={{ fontSize: "11px" }}>
              {appIntro!.length > 20
                ? `${appIntro!.slice(0, 20)}...`
                : appIntro}
            </p>
          </div>
          <div
            className={css`
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: #fdcc0d;
              color: white;
              height: 34px;
              width: 45px;
              border-radius: 6px;
              border: 1px solid #feef81;
              overflow: hidden;
              font-size: 14px;
              line-height: 20px;
            `}
          >
            {notificationNumber}
          </div>
        </div>
      ) : (
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
            <NotionAppIcon
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
              width: 100%;
            `}
          >
            <div
              className={css`
                display: flex;
                justify-content: space-between;
                align-items: center;
              `}
            >
              <h1>{appName}</h1>
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
                  <RunIcon
                    style={{
                      height: "13px",
                      width: "13px",
                    }}
                  />
                  立即运行
                </button>
              )}
            </div>
            <p style={{ fontSize: "11px" }}>
              {appIntro!.length > 20
                ? `${appIntro!.slice(0, 20)}...`
                : appIntro}
            </p>
          </div>
        </div>
      )}
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
        <ArrowChevronRight
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
