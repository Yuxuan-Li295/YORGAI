import { css } from "@emotion/css";
import { Fragment } from "react";
import { Tag } from "./Tag";

const TagList = ({ tags, wrap = true }: { tags: string[]; wrap?: boolean }) => (
  <div
    className={css`
      display: flex;
      gap: 6px;
    `}
  >
    {(tags.length <= 5 || !wrap) &&
      tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
    {tags.length > 5 && wrap && (
      <Fragment>
        {tags.slice(0, 4).map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
        {tags.length > 4 && <Tag isDarker>{`+${tags.length - 4}`}</Tag>}
      </Fragment>
    )}
  </div>
);

export { TagList };
