import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import { TagList } from "components/Prompt/TagList";
import { useNavigate } from "react-router-dom";
import { PromptCardLegend } from "./PromptCardLegend";

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
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: stretch;
        align-items: stretch;
        padding: 0px;
        border-radius: 8px;
        cursor: pointer;
        background-color: white;
        border: 1px solid ${basis.border_subtle};
      `}
      onClick={() => navigate("/prompt/text/detail")}
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
            align-self: stretch;
            overflow: hidden;
            color: ${basis.text};
            font-size: 12px;
            font-family: inherit;
            line-height: 16px;
            display: -webkit-box;
            -webkit-line-clamp: 2; /* Show up to 2 lines of text */
            -webkit-box-orient: vertical;
          `}
        >
          {intro}
        </p>
        <TagList tags={tags} />
      </div>
      <PromptCardLegend likeCount={likeCount} runCount={runCount} />
    </div>
  );
};

export { TextPromptCard };
