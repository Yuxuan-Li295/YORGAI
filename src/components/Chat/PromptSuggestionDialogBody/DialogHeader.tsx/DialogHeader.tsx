import { PromptFilterBar } from "./PromptFilterBar";
import React, { Fragment } from "react";
import { Button } from "components/shared/Button";
import { ReactComponent as Star } from "resources/img/Star.svg";
import { ReactComponent as Stars } from "resources/img/Stars.svg";
import { ReactComponent as Clock } from "resources/img/Clock.svg";
import { SearchBar } from "./SearchBar";
import { css } from "@emotion/css";

const DialogHeader = () => {
  return (
    <div
      className={css`
        display: flex;
        width: 1088px;
        height: 56px;
        background-color: #fff;
        padding: 0px 16px;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
      `}
    >
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex: 1;
          justify-content: space-between;
        `}
      >
        <PromptFilterBar
          prepend={
            <Fragment>
              <Button variant="tertiary" size="sm" prepend={<Stars />}>
                最受欢迎
              </Button>
              <Button variant="tertiary" size="sm" prepend={<Star />}>
                收藏最多
              </Button>
              <Button variant="tertiary" size="sm" prepend={<Clock />}>
                最近使用
              </Button>
            </Fragment>
          }
          append={<Fragment></Fragment>}
        />
        <div
          className={css`
            display: flex;
            align-items: center;
            margin-right: -65px;
          `}
        >
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export { DialogHeader };
