import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import { PromptCardLegend } from "./PromptCardLegend";
import { Avatar } from "components/shared/Avatar";

const PromptImageCard = ({
  image,
  prompt,
  likeCount,
  runCount,
}: {
  image: string;
  prompt: string;
  likeCount: number;
  runCount: number;
}) => {
  return (
    <div
      className={css`
        position: relative;
        width: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0px;
        border-radius: 8px;
        cursor: pointer;
      `}
    >
      <img
        className={css`
          width: 100%;
          border-radius: 8px;
        `}
        src={image}
        alt=""
      />
      <div
        className={css`
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background-image: linear-gradient(
            to top,
            #00000000,
            #00000000 53px,
            #00000041 53px,
            #00000000 140px
          );
          border-radius: 8px;
        `}
      />
      <div
        className={css`
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          color: ${basis.text_foreground};
          border-radius: 8px;
        `}
      >
        <div
          className={css`
            display: flex;
            padding: 10px;
            height: 50px;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
            box-shadow: 0px 0.5px 1px 0px rgba(0, 0, 0, 0.1);
          `}
        >
          <div
            className={css`
              display: flex;
              font-size: 12px;
              font-weight: 500;
              line-height: 16px;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              overflow: hidden;
            `}
            title={prompt}
          >
            {prompt}
          </div>
          <div
            className={css`
              display: flex;
              align-items: center;
              gap: 8px;
            `}
          >
            <Avatar size={24} />
            <div
              className={css`
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 14px;
                line-height: 20px;
                width: 40px;
              `}
              title="Martin"
            >
              Martin
            </div>
          </div>
        </div>
        <PromptCardLegend likeCount={likeCount} runCount={runCount} darkMode />
      </div>
    </div>
  );
};

export { PromptImageCard };
