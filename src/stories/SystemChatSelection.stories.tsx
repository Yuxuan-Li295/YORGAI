import type { Meta, StoryObj } from "@storybook/react";
import { SystemChatSelection } from "components/OnlineToolPage/SystemChatSelection/SystemChatSelection";

const meta: Meta = {
  title: "Chats/SystemChatSelection",
  component: SystemChatSelection,
  tags: ["autodocs"],
} satisfies Meta<typeof SystemChatSelection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {};
