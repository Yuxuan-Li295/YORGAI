import type { Meta, StoryObj } from "@storybook/react";
import { Carousel } from "components/shared/Carousel";
import Bird from "resources/img/bird.jpg";
import View from "resources/img/view.jpeg";

const meta = {
  title: "Components/Carousel",
  component: Carousel,
  tags: ["autodocs"],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    images: [Bird, View],
  },
};
