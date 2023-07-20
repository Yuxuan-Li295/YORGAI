import React from "react";
import { KB } from "./types";
import { css } from "@emotion/css";
import { basis, transparent, fill } from "components/constants/colors";
import { ReactComponent as LibrarySvg } from "resources/img/Library.svg";
import { ReactComponent as SquareSSvg } from "resources/img/SquareS.svg";

export const KnowledgeBaseSel: React.FC<{
  kbList: KB[];
  selected: number;
  setKB: (idx: number) => void;
}> = ({ kbList, setKB, selected }) => (
  <div
    className={css`
      display: flex;
      flex: 291px 0 0;
      flex-direction: column;
      align-items: stretch;
      align-self: stretch;
      background: ${basis.bg_subtle};
      border-right: 1px solid ${basis.border_subtle};
    `}
  >
    <div
      className={css`
        display: flex;
        padding: 20px 16px;
        justify-content: space-between;
        align-items: center;
      `}
    >
      <h4
        className={css`
          color: ${basis.text_loud};
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 24px;
        `}
      >
        我的知识库
      </h4>
      <SquareSSvg
        className={css`
          width: 18px;
          height: 18px;
        `}
      />
    </div>
    <div
      className={css`
        flex: 100vh 0 1;
        overflow: scroll;
        display: flex;
        padding: 8px;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
      `}
    >
      {kbList.map((dir, idx) => (
        <div
          key={idx}
          onClick={() => setKB(idx)}
          className={css`
            display: flex;
            height: 20px;
            padding: 6px 8px;
            align-items: center;
            align-self: stretch;
            flex-direction: row;
            border-radius: 6px;
            gap: 8px;
          `}
          style={{
            background: idx === selected ? basis.alt.bg_vibrant : transparent,
            color: idx === selected ? basis.text_loud : basis.text,
          }}
        >
          <LibrarySvg />
          <span
            className={css`
              display: flex;
              flex-grow: 1;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 20px;
            `}
          >
            {dir.name}
          </span>
          {dir.selectedCount > 0 && (
            <div
              className={css`
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 10px;
                background-color: #67cdbc;
                padding: 0 6px;
                height: 20px;
                color: ${fill.base.layer};
                font-size: 12px;
                font-style: normal;
                font-weight: 500;
                line-height: 16px;
              `}
            >
              <span>{dir.selectedCount}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);
