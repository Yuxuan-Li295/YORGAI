import { css } from "@emotion/css";
import { fill, basis } from "components/constants/colors";
import { ReactComponent as SeparatorMd } from "resources/img/SeparatorMd.svg";
import { AgentTaskStatusBadge } from "./AgentTaskStatusBadge";

interface AgentTaskItemProps {
  title: string;
  date: string;
  category: string;
  badgeStatus: "done" | "loading" | "error";
  badgeRate: string;
}

const AgentTaskItem: React.FC<AgentTaskItemProps> = (
  { title, date, category, badgeStatus, badgeRate }) => {
  return (
    <div
      className={css`
        display: flex;
        width: 220px;
        height: 38px;
        display: flex;
        padding: 8px 12px;
        align-items: center;
        gap: 8px;
        flex: 1 0 0;
        border-radius: 8px;
        background: ${fill.base.layer_on};
        box-shadow: 0px 4px 4px -4px rgba(79, 81, 89, 0.32), 0px 2px 5px -2px rgba(79, 81, 89, 0.03), 0px 2px 14px -2px rgba(79, 81, 89, 0.12), 0px 0px 0px 1px rgba(188, 189, 194, 0.22), 0px 1px 1px 0px rgba(188, 189, 194, 0.20);
    `}
    >
      <div
        className={css`
          display: flex;
          width: 100%;
        `}
      >
        <div
          className={css`
            flex: 1;
          `}
        >
          <div
            className={css`
              height: 20px;
              flex: 1 0 0;
              overflow: hidden;
              color: ${basis.text_loud};
              text-overflow: ellipsis;
              whitespace: nowrap;
              font-family: PingFang SC;
              font-size: 14px;
              font-style: normal;
              font-weight: 500;
              line-height: 20px; /* 142.857% */
            `}
          >
            {title}
          </div>
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
                color: ${basis.text};
                text-align: center;
                font-family: PingFang SC;
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: 16px; /* 133.333% */
              `}
            >
              {date}
            </div>
            <SeparatorMd />
            <div
              className={css`
                color: ${basis.text};
                text-align: center;
                font-family: PingFang SC;
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: 16px; /* 133.333% */
              `}
            >
              {category}
            </div>
          </div>
        </div>
        <div
          className={css`
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <AgentTaskStatusBadge
            status={badgeStatus}
            rate={badgeRate}
          />
        </div>
      </div>
    </div>
  );
};

export { AgentTaskItem };