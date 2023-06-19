/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Tag = ({ children }: { children: string }) => (
  <div
    css={css`
      display: inline-block;
      background: ${children === "+2" ? "#e9e9eb" : "#f9f9f9"};
      color: #707480;
      font-size: 0.875rem;
      padding: 2px 8px;
      border-radius: 50px;
      margin: 2px;
    `}
  >
    {children}
  </div>
);

export { Tag };
