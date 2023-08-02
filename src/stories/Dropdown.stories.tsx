import { css } from "@emotion/css";
import type { Meta, StoryFn } from "@storybook/react";
import { Button } from "components/shared/Button";
import { Dropdown } from "components/shared/Dropdown";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

export default meta;

const Template: StoryFn<typeof Dropdown> = (args) => {
  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        padding: 200px;
      `}
    >
      <Dropdown
        {...args}
        menuItems={["选项 1", "选项 2", "选项 3"]}
        setValue={(item: string) => {
          console.log(item);
        }}
      >
        <Button variant="tertiary" size="sm">
          触发按钮
        </Button>
      </Dropdown>
    </div>
  );
};

export const RegularClickable = Template.bind({});

export const RegularHoverable = Template.bind({});
RegularHoverable.args = {
  hoverable: true,
};

export const Up = Template.bind({});
Up.args = {
  above: true,
};
