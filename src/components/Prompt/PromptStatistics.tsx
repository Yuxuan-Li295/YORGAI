import { css } from "@emotion/css";
import { basis, primary } from "components/constants/colors";
import { Badge } from "components/shared/Badge";
import { Star } from "components/shared/Star";
import { Tag } from "components/shared/Tag";
import { ReactElement } from "react";

const PromptStatistics = ({
  title,
  tags,
  userAvatar,
  userName,
  rate,
  commentCount,
}: {
  title?: string;
  tags: string[];
  userAvatar?: ReactElement;
  userName?: string;
  rate: number;
  commentCount: number;
}) => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 10px;
        flex: none;
        order: 0;
        flex-grow: 0;
      `}
    >
      {title && (
        <h1
          className={css`
            font-family: inherit;
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 32px;
            color: black;
          `}
        >
          {title}
        </h1>
      )}
      <div
        className={css`
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          padding: 0px;
          gap: 10px;
        `}
      >
        {tags.map((tag, i) => (
          <Tag key={i}>{tag}</Tag> // TODO: Tag container
        ))}
      </div>
      {userAvatar && userName ? (
        <Badge avatar={userAvatar}>{userName}</Badge>
      ) : null}

      <div
        className={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0px;
          gap: 12px;
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            padding: 0px;
            gap: 7px;
            color: ${primary.icon};
          `}
        >
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star key={i} selected={i < Math.round(rate)} />
            ))}
        </div>
        <span
          className={css`
            font-family: inherit;
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 16px;
            text-align: center;
            color: ${basis.text};
          `}
        >
          {rate} ({commentCount} 评论)
        </span>
      </div>
    </div>
  );
};

export { PromptStatistics };
