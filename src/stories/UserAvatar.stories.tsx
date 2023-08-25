import type { Meta, StoryObj } from "@storybook/react";
import { UserAvatar } from "components/shared/UserAvatar";

const meta = {
  title: "Components/UserAvatar",
  component: UserAvatar,
  tags: ["autodocs"],
} satisfies Meta<typeof UserAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    size: 32,
  },
};
