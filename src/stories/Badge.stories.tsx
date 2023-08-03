import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "components/shared/Badge";

const meta: Meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "标记",
  },
};
export const Success: Story = {
  args: {
    variant: "success",
    children: "标记",
  },
};
export const Danger: Story = {
  args: {
    variant: "danger",
    children: "标记",
  },
};
export const Alert: Story = {
  args: {
    variant: "alert",
    children: "标记",
  },
};
export const XS: Story = {
  args: {
    size: "xs",
    children: "标记",
  },
};

export const SM: Story = {
  args: {
    size: "sm",
    children: "标记",
  },
};
