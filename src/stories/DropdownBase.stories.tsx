import { css } from "@emotion/css";
import type { Meta, StoryFn } from "@storybook/react";
import { DropdownBase } from "components/shared/Dropdown";

const meta = {
  title: "Components/DropdownBase",
  component: DropdownBase,
  tags: ["autodocs"],
} satisfies Meta<typeof DropdownBase>;

export default meta;

const Template: StoryFn<typeof DropdownBase> = (args) => {
  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        padding: 200px;
      `}
    >
      <DropdownBase
        {...args}
        dropdownMenu={
          <div
            className={css`
              border: 1px dashed black;
              padding: 8px;
              white-space: nowrap;
            `}
          >
            菜单
          </div>
        }
        dropdownToggle={
          <div
            className={css`
              border: 1px dashed black;
              padding: 8px;
            `}
          >
            触发按钮
          </div>
        }
      ></DropdownBase>
    </div>
  );
};

export const DownLeft = Template.bind({});

export const DownCenter = Template.bind({});
DownCenter.args = {
  align: "center",
};

export const DownRight = Template.bind({});
DownRight.args = {
  align: "right",
};

export const Up = Template.bind({});
Up.args = {
  above: true,
};

export const Hoverable = Template.bind({});
Hoverable.args = {
  hoverable: true,
};
