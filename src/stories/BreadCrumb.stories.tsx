import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "components/shared/Breadcrumb";

const meta = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    items: [{ name: "首页" }, { name: "第一章" }, { name: "第一节" }],
  },
};
