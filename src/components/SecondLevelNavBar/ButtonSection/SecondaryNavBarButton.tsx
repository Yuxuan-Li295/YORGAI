import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import React from "react";
import { useMatch } from "react-router-dom";

export const SecondaryNavBarButton = ({
  icon,
  label,
  onClick,
  url,
}: {
  icon: React.ReactElement;
  label: string;
  onClick?: () => void;
  url?: string;
}) => {
  const match = useMatch(url || "");
  const isActive = match;
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
        color: ${basis.text};
        font-family: inherit;
        position: relative; 
        color: ${isActive ? "#67cdbc" : basis.text};
        &:hover {
          color: #67cdbc;
        }
        &:after {
          content: ""; 
          position: absolute; 
          bottom: 0; 
          left: 50%;
          transform: translateX(-50%);
          height: 2px;
          width: 94px;
          background-color: ${isActive ? "#67cdbc" : "transparent"};
        }

        &:hover:after {
          background-color: #67cdbc; 
        }
      `}
      onClick={onClick}
    >
      {icon}
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
