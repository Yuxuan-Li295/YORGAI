import type { Meta, StoryObj } from "@storybook/react";
import { AgentTaskDetail } from "components/Agent/AgentTaskDetail";

const meta = {
  title: "Agent/AgentTaskDetail",
  component: AgentTaskDetail,
  tags: ["autodocs"],
} satisfies Meta<typeof AgentTaskDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
