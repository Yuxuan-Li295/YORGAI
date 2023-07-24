import type { Meta, StoryObj } from "@storybook/react";
import { Star } from "components/shared/Star";

const meta = {
  title: "Components/Star",
  component: Star,
  tags: ["autodocs"],
  argTypes: {
    filled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Star>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    filled: true,
  },
};

export const Empty: Story = {
  args: {
    filled: false,
  },
};
