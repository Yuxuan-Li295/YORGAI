import type { Meta, StoryFn } from "@storybook/react";
import { Slider } from "components/shared/Slider";
import { useState } from "react";

const meta = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
} satisfies Meta<typeof Slider>;

export default meta;

const Template: StoryFn<typeof Slider> = (args) => {
  const [value, setValue] = useState(args.value);

  return (
    <Slider {...args} value={value} onChange={(value) => setValue(value)} />
  );
};

export const Example = Template.bind({});
Example.args = {
  min: 0,
  max: 100,
  value: 0,
};
