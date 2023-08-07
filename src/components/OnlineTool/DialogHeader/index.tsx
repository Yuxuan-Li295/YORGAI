import { css } from "@emotion/css";
import { Button } from "components/shared/Button";
import { Dropdown } from "components/shared/Dropdown";
import { Fragment } from "react";
import { ReactComponent as ArrowAngleDownMd } from "resources/img/ArrowAngleDownMd.svg";
import { ReactComponent as Clock } from "resources/img/Clock.svg";
import { ReactComponent as Star } from "resources/img/Star.svg";
import { ReactComponent as Stars } from "resources/img/Stars.svg";
import { PromptFilterBar } from "./PromptFilterBar";
import { SearchBar } from "components/shared/SearchBar";
import { basis } from "components/constants/colors";

const DialogHeader = () => {
  return (
    <div>
      <div
        className={css`
          display: flex;
          height: 56px;
          background-color: #fff;
          padding: 0px 16px;
          justify-content: space-between;
          align-items: center;
          box-sizing: border-box;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          border-bottom: 1px solid ${basis.border_subtle};
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
                <Dropdown
                  menuItems={["process", "record"]}
                  setValue={(item: string) => {
                    console.log(item);
                  }}
                >
                  <Button
                    variant="tertiary"
                    size="sm"
                    append={<ArrowAngleDownMd />}
                  >
                    所有类型
                  </Button>
                </Dropdown>
                <Dropdown
                  menuItems={["ddddd", "record"]}
                  setValue={(item: string) => {
                    console.log(item);
                  }}
                >
                  <Button
                    variant="tertiary"
                    size="sm"
                    append={<ArrowAngleDownMd />}
                  >
                    所有提供商
                  </Button>
                </Dropdown>
              </Fragment>
            }
            append={
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
          />
          <div
            className={css`
              display: flex;
              align-items: center;
            `}
          >
            <SearchBar width="160px" />
          </div>
          <SearchBar width="160px" />
        </div>
      </div>
      <div
        className={css`
          border-top: 1px solid ${basis.border_subtle};
        `}
      ></div>
    </div>
  );
};

export { DialogHeader };
