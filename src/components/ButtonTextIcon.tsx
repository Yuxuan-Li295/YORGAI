import React, { ReactNode } from "react";
import { css } from "@emotion/css";
//import ButtonIcon from "resources/img/leadIcon.svg";

const ButtonTextIcon = ({ text, icon }: { text: string; icon?: ReactNode }) => {
  return (
    <button
      className={css`
            box-sizing: border-box;
            left: 0px;
            right: 0px;
            top: 0px;xqxq
            bottom: 0px;
            //opacity: 0.8;

            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 10px;
            isolation: isolate;
            width: 74px;
            height: 28px;
            left: calc(50% - 74px/2 - 934px);
            top: 216px;

            background-color: #67CDBC;
            color: white;
            padding: 6px 12px; 
            border-radius: 6px;
            //box-shadow: 0px 4px 4px -4px #4F515952, 0px 2px 5px -2px #4F515908, 0px 0px 0px 1px #67CDBC, 0px 0px 0px 1px #0000001A;

            //box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px #67CDBC, 0px 2px 5px -2px rgba(79, 81, 89, 0.03), 0px 4px 4px -4px rgba(79, 81, 89, 0.32);
            &: hover {
                background-color: #57C4B1;
              }
        `}
    >
      {icon && (
        <span
          className={css`
            /* Your icon styles */
          `}
        >
          {icon}
        </span>
      )}
      <span
        className={css`
          /* text */
          width: 24px;
          height: 16px;
          /* Pingfang SC/body/xs/500 - medium */
          font-family: "PingFang SC";
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 16px;
          /* identical to box height, or 133% */
          text-align: center;
          /* basis/text-foreground */
          color: #ffffff;
          /* Inside auto layout */
          flex: none;
          order: 2;
          flex-grow: 0;
          z-index: 2;
        `}
      >
        {text}
      </span>
    </button>
  );
};

export { ButtonTextIcon };
