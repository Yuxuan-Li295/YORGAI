import { css } from "@emotion/css";
import type { Meta, StoryFn } from "@storybook/react";
import { VerticalBar } from "components/shared/VerticalBar";

const meta = {
  title: "Components/VerticalBar",
  component: VerticalBar,
  tags: ["autodocs"],
} satisfies Meta<typeof VerticalBar>;

export default meta;

const Template: StoryFn<typeof VerticalBar> = (args) => {
  return (
    <div
      className={css`
        display: flex;
      `}
    >
      <VerticalBar {...args} />
    </div>
  );
};

export const XXS = Template.bind({});
XXS.args = {
  height: 32,
};
