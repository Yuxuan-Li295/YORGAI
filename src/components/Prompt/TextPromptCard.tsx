import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import { PromptCardLegend } from "./PromptCardLegend";
import { Tag } from "components/shared/Tag";
import { useNavigate } from "react-router-dom";

const TextPromptCard = ({
  title,
  intro,
  tags,
  likeCount,
  runCount,
}: {
  title: string;
  intro: string;
  tags: string[];
  likeCount: number;
  runCount: number;
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={css`
        overflow: hidden;
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: stretch;
        align-items: stretch;
        padding: 0px;
        border-radius: 8px;
        cursor: pointer;
        height: 206px;
        background-color: white;
        border: 1px solid ${basis.border_subtle};
      `}
      onClick={() => navigate("/prompt/detail")}
    >
      <div
        className={css`
          display: flex;
          padding: 16px;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          flex: 1 0 0;
          align-self: stretch;
          gap: 11px;
        `}
      >
        <h3
          className={css`
            color: ${basis.text_loud};
            font-size: 14px;
            font-family: inherit;
            font-weight: 500;
            line-height: 20px;
          `}
        >
          {title}
        </h3>
        <p
          className={css`
            flex-grow: 1;
            color: ${basis.text};
            font-size: 12px;
            font-family: inherit;
            line-height: 16px;
            display: flex;
            flex-direction: column;
            align-content: start;
          `}
        >
          {intro}
        </p>
        <div>
          {tags.map((tag, i) => (
            <Tag key={i}>{tag}</Tag>
          ))}
        </div>
      </div>
      <PromptCardLegend likeCount={likeCount} runCount={runCount} />
    </div>
  );
};

export { TextPromptCard };
