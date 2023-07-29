import type { Meta, StoryObj } from "@storybook/react";
import { MultipleSelect } from "components/shared/MultipleSelect";

const meta: Meta = {
  title: "Components/MultipleSelect",
  component: MultipleSelect,
  tags: ["autodocs"],
} satisfies Meta<typeof MultipleSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    options: [
      {
        label: "知识库",
        value: "知识库",
      },
      {
        label: "火星电台3.0",
        value: "火星电台3.0",
      },
      { label: "Option 3", value: "option3" },
      { label: "Option 4", value: "option4" },
      { label: "Option 5", value: "option5" },
    ],
  },
};
