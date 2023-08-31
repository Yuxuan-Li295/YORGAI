import type { Meta, StoryObj } from "@storybook/react";
import { ConfigReferencePic } from "components/Paint/ConfigReferencePic";

const meta = {
  title: "Paint/ConfigReferencePic",
  component: ConfigReferencePic,
  tags: ["autodocs"],
} satisfies Meta<typeof ConfigReferencePic>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
