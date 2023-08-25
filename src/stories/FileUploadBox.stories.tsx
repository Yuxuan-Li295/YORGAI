import type { Meta, StoryObj } from "@storybook/react";
import { FileUploadBox } from "components/shared/FileUploadBox";

const meta = {
  title: "Components/FileUploadBox",
  component: FileUploadBox,
  tags: ["autodocs"],
} satisfies Meta<typeof FileUploadBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
