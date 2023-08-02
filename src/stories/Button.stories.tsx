import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "components/shared/Button";
import { ReactComponent as MagicWand } from "resources/img/MagicWand.svg";
import { ReactComponent as More } from "resources/img/More.svg";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    prepend: {
      options: ["None", "MagicWand", "More"],
      mapping: { None: null, MagicWand: <MagicWand />, More: <More /> },
    },
    append: {
      options: ["None", "MagicWand", "More"],
      mapping: { None: null, MagicWand: <MagicWand />, More: <More /> },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "按钮",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "按钮",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    children: "按钮",
  },
};

export const XS: Story = {
  args: {
    size: "xs",
    children: "按钮",
  },
};

export const SM: Story = {
  args: {
    size: "sm",
    children: "按钮",
  },
};
