import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import { TagList } from "components/Prompt/TagList";
import { ReactComponent as ArrowAngleRightMd } from "resources/img/ArrowAngleRightMd.svg";
import Notion42 from "resources/img/Notion42.png";
import { ExecuteButton } from "./ExecuteButton";
import { Ranking } from "./Ranking";
import { useNavigate } from "react-router-dom";

const ToolCard = ({
  tags,
  showExecute = false,
  ranking,
  name,
  intro,
}: {
  tags: string[];
  showExecute?: boolean;
  ranking?: 1 | 2 | 3;
  name?: string;
  intro?: string;
}) => {
  const navigate = useNavigate();
  return (
    <div
      className={css`
        height: 106px;
        padding: 16px;
        box-sizing: border-box;
        background-color: white;
        border: 1px solid ${basis.border_subtle};
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        cursor: pointer;
      `}
      onClick={() => navigate("/tool/detail")}
    >
      <div
        className={css`
          display: flex;
          align-items: flex-start;
          gap: 11px;
        `}
      >
        <img
          src={Notion42}
          alt="Notion icon"
          className={css`
            width: 42px;
            height: 42px;
          `}
        />
        <div
          className={css`
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 42px;
          `}
        >
          <div
            className={css`
              display: flex;
              align-items: center;
              gap: 20px;
              font-size: 14px;
              font-weight: 500;
              line-height: 20px;
              color: ${basis.text_loud};
              white-space: nowrap;
            `}
          >
            <span>{name}</span>
            {showExecute && <ExecuteButton />}
          </div>
          <div
            className={css`
              display: -webkit-box;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
              overflow: hidden;
              font-size: 12px;
              font-weight: 400;
              line-height: 16px;
              color: ${basis.text};
            `}
          >
            {intro}
          </div>
        </div>
        {ranking && <Ranking ranking={ranking} />}
      </div>
      <div
        className={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: ${basis.icon};
        `}
      >
        <TagList tags={tags} />
        <ArrowAngleRightMd />
      </div>
    </div>
  );
};

export { ToolCard };
