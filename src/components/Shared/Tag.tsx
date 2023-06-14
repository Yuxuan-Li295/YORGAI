/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// We define our styled component here
const tagStyles = css`
  display: inline-block;
  background: #007bff;
  color: #fff;
  font-size: 0.875rem;
  padding: 2px 8px;
  border-radius: 2px;
  margin: 2px;
`;

interface TagProps {
  text: string;
}

// Our Tag component receives 'text' as a prop and renders it inside the StyledTag
const Tag = ({ text }: TagProps) => <div css={tagStyles}>{text}</div>;

export default Tag;
