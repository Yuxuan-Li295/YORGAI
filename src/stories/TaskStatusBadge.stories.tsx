import type { Meta, StoryObj } from "@storybook/react";
import { AgentTaskStatusBadge } from "components/Agent/AgentTaskStatusBadge";

const meta: Meta = {
  title: "Components/TaskStatusBadge",
  component: AgentTaskStatusBadge,
  tags: ["autodocs"],
} satisfies Meta<typeof AgentTaskStatusBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Done: Story = {
  args: {
    status: "done",
    rate: "8/8",
  },
};
export const Loading: Story = {
  args: {
    status: "loading",
    rate: "3/7",
  },
};
export const Error: Story = {
  args: {
    status: "error",
    rate: "5/10",
  },
};
