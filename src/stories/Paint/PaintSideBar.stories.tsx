import type { Meta, StoryObj } from "@storybook/react";
import { PaintSideBar } from "components/Paint/PaintSideBar";

const meta = {
  title: "Paint/PaintSideBar",
  component: PaintSideBar,
  tags: ["autodocs"],
} satisfies Meta<typeof PaintSideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
