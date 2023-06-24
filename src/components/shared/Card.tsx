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
            align-items: flex-start; // original code is center
            gap: 11px; // added code
            align-self: stretch; //added code
            width: 100%;
            height: 40px;
            margin-bottom: 10px;
          `}
        >
          <div // this div is added; originally there is no such div, only NotionAppIcon
            className={css`
              width: 42px;
              height: 42px;
              flex-shrink: 0;
              border-radius: 10px;
              border: 1px solid #e9e9ec;
              background: #fff;
            `}
          >
            <NotionAppIcon
              style={{
                width: "41px",
                height: "41px",
                flexShrink: "0", // added code
              }}
            />
          </div>

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
              <h1
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "20px",
                  marginBottom: "6px",
                }}
              >
                {appName}
              </h1>
              {/* {showExecute && (
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
              )} */}
            </div>
            <p
              style={{
                fontSize: "12px",
                lineHeight: "16px",
                color: "#707480",
              }}
            >
              {appIntro!.length > 17
                ? `${appIntro!.slice(0, 17)}...`
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
              height: 40px;
              width: 56px;
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
            align-items: flex-start;
            margin-bottom: 10px;
            gap: 11px;
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
                width: "42px",
                height: "42px",
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
                align-items: flex-start;
                gap: 20px;
              `}
            >
              <h1
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "20px",
                }}
              >
                {appName}
              </h1>
              {showExecute && (
                <button
                  className={css`
                    background-color: #34d393;
                    height: 20px;
                    border: 1px solid #6ee7b3;
                    color: white;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 14px;
                    margin: 2px 2px;
                    cursor: pointer;
                    border-radius: 4px;
                    padding: 0px 6px;
                  `}
                >
                  <RunIcon
                    style={{
                      height: "16px",
                      width: "16px",
                      fontSize: "12px",
                      fontWeight: "500",
                      lineHeight: "16px",
                    }}
                  />
                  立即运行
                </button>
              )}
            </div>
            <p
              style={{
                fontSize: "12px",
                lineHeight: "16px",
                color: "#707480",
                textOverflow: "ellipsis",
              }}
            >
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
          align-items: flex-start;
          width: 100%;
          gap: 6px;
          flex: 1 0 0;
        `}
      >
        <div
          className={css`
            display: flex;
            flex-wrap: wrap;
            padding: 0px 6px;
            justify-content: center;
            align-items: center;
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
