import { css } from "@emotion/css";
import type { Meta, StoryFn } from "@storybook/react";
import { ButtonGroup, ButtonGroupCell } from "components/shared/ButtonGroup";
import { useState } from "react";

const meta = {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonGroup>;

export default meta;

const Template: StoryFn<typeof ButtonGroup> = (args) => {
  const [selectedButton, setSelectedButton] = useState<string>();

  return (
    <div
      className={css`
        display: flex;
        justify-content: flex-start;
      `}
    >
      <ButtonGroup {...args}>
        <ButtonGroupCell
          active={selectedButton === "按钮 1"}
          onClick={() => setSelectedButton("按钮 1")}
        >
          按钮 1
        </ButtonGroupCell>
        <ButtonGroupCell
          active={selectedButton === "按钮 2"}
          onClick={() => setSelectedButton("按钮 2")}
        >
          按钮 2
        </ButtonGroupCell>
        <ButtonGroupCell
          active={selectedButton === "按钮 3"}
          onClick={() => setSelectedButton("按钮 3")}
        >
          按钮 3
        </ButtonGroupCell>
      </ButtonGroup>
    </div>
  );
};

export const Example = Template.bind({});
