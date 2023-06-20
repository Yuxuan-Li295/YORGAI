import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import React from "react";

const ButtonIcon = ({
  Icon,
  label,
  onClick,
}: {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  onClick?: () => void;
}) => {
  return (
    <button
      className={css`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 7px;
        height: 48px;
        background-color: transparent;
        border: none;
        padding: 0;
        cursor: pointer;
        color: ${basis["text"]};

        &:hover {
          color: #67cdbc;
        }
      `}
      onClick={onClick}
    >
      <Icon />
      <div
        className={css`
          font-weight: 500;
          font-size: 14px;
          line-height: 20px;
          white-space: nowrap;
        `}
      >
        {label}
      </div>
    </button>
  );
};

export { ButtonIcon };
