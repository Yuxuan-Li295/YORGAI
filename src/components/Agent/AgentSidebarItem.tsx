import React, { useState } from "react";
import { css } from "@emotion/css";
import { AgentTaskItem, AgentTaskItemProps } from "./AgentTaskItem";
import { basis } from "components/constants/colors";
import { ReactComponent as ArrowDownFilled } from "resources/img/ArrowDownFilled.svg";
import { ReactComponent as ArrowRightFilled } from "resources/img/ArrowRightFilled.svg";
import { ReactComponent as ArrowAngleRightMd } from "resources/img/ArrowAngleRightMd.svg";
import { body } from "components/constants/fonts";

export const AgentSidebarItem = ({
  groupTitle,
  agentTaskItemProps,
}: {
  groupTitle: string;
  agentTaskItemProps: AgentTaskItemProps[];
}) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div
      className={css`
        width: 244px;
        display: inline-flex;
        padding: 8px 0px ${isShow ? `24px` : `8px`} 0px;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        border-bottom: 1px solid ${basis.border_subtle};
      `}
    >
      <div
        className={css`
          display: flex;
          width: 244px;
          height: 36px;
          align-items: center;
        `}
      >
        <div
          className={css`
            display: flex;
            align-items: center;
            gap: 6px;
            flex: 1 0 0;
            align-self: stretch;
          `}
        >
          <div
            className={css`
              display: flex;
              align-items: center;
              gap: 6px;
              align-self: stretch;
            `}
          >
            {isShow ? (
              <ArrowDownFilled
                className={css`
                  cursor: pointer;
                `}
                onClick={() => {
                  setIsShow(!isShow);
                }}
              />
            ) : (
              <ArrowRightFilled
                className={css`
                  cursor: pointer;
                `}
                onClick={() => {
                  setIsShow(!isShow);
                }}
              />
            )}

            <div
              className={css`
                display: flex;
                align-items: center;
                gap: 8px;
                align-self: stretch;
              `}
            >
              <span
                className={css`
                  ${body.sm.medium};
                  color: ${basis.text_loud};
                `}
              >
                {groupTitle}
              </span>
            </div>
          </div>
        </div>

        <div
          className={css`
            display: flex;
            align-items: center;
            gap: 6px;
          `}
        >
          <span
            className={css`
              color: ${basis.text};
              text-align: center;
              ${body.xs.regular};
            `}
          >
            {agentTaskItemProps.length}
          </span>
          <div
            className={css`
              display: flex;
              height: 20px;
              justify-content: center;
              align-items: center;
              color: ${basis.icon};
            `}
          >
            <ArrowAngleRightMd />
          </div>
        </div>
      </div>

      {isShow && (
        <React.Fragment>
          {agentTaskItemProps.map((task, index) => (
            <div
              className={css`
                display: flex;
                width: 244px;
                height: 54px;
                justify-content: center;
                align-items: flex-start;
                gap: 12px;
              `}
              key={index}
            >
              <AgentTaskItem
                title={task.title}
                date={task.date}
                category={task.category}
                badgeStatus={task.badgeStatus}
                badgeRate={task.badgeRate}
              />
            </div>
          ))}
        </React.Fragment>
      )}
    </div>
  );
};
