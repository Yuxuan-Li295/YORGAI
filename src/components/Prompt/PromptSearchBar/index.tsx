import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import { Dropdown, DropdownMenu } from "components/shared/Dropdown";
import { ReactComponent as ArrowAngleDownLg } from "resources/img/ArrowAngleDownLg.svg";
import { Append } from "./Append";
import { Input } from "./Input";

export const PromptSearchBar = () => (
  <Input
    prepend={
      <Dropdown
        menu={<DropdownMenu menuItems={["提示词", "AI 工具"]} />}
        hoverable
      >
        <div
          className={css`
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 4px;
            cursor: pointer;
            color: ${basis.text};
            box-sizing: border-box;
            height: 48px;
            width: 125px;
            padding: 8px 16px 8px 18px;
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
            border: 1px solid ${basis.border_subtle};
            border-right: 0px;
            background-color: ${basis.alt.bg_subtle};
            &:hover {
              background-color: ${basis.bg_muted};
            }
          `}
        >
          <div
            className={css`
              display: flex;
              font-size: 16px;
              font-weight: 500;
              line-height: 32px;
            `}
          >
            所有分类
          </div>
          <ArrowAngleDownLg />
        </div>
      </Dropdown>
    }
    append={<Append />}
  ></Input>
);
