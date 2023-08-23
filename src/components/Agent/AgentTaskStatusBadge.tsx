import React from "react";
import { css } from "@emotion/css";
import { rainbow } from "components/constants/colors";
import { ReactComponent as DoneFilled } from "resources/img/DoneFilled.svg";
import { ReactComponent as Loading } from "resources/img/Loading.svg";
import { ReactComponent as ErrorFilled } from "resources/img/ErrorFilled.svg";
import { body } from "components/constants/fonts";

export const AgentTaskStatusBadge = ({
  status,
  rate,
}: {
  status: "done" | "loading" | "error";
  rate: String;
}) => {
  return (
    <div
      className={css`
        display: flex;
        width: 57px;
        justify-content: center;
        align-items: center;
        border-radius: 108px;
        background: ${status === "done" && rainbow.emerald.alt.bg}
          ${status === "loading" && rainbow.sky.alt.bg}
          ${status === "error" && rainbow.pink.alt.bg};
      `}
    >
      {/* Lead container */}
      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
        `}
      >
        {status === "done" && <DoneFilled />}
        {status === "loading" && <Loading />}
        {status === "error" && <ErrorFilled />}
      </div>

      {/* Text container */}
      <div
        className={css`
          display: flex;
          width: 28px;
          height: 20px;
          padding: 0px 2px;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
        `}
      >
        <span
          className={css`
            color: ${status === "done" && rainbow.emerald.text_loud}
              ${status === "loading" && rainbow.sky.text_loud}
              ${status === "error" && rainbow.pink.text_loud};
            text-align: center;
            ${body.xs.medium};
          `}
        >
          {rate}
        </span>
      </div>
    </div>
  );
};
