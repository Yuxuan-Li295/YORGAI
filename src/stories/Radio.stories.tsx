import type { Meta, StoryFn } from "@storybook/react";
import { Radio } from "components/shared/CheckBoxOrRadio";
import { useState } from "react";

const meta = {
  title: "Components/Radio",
  component: Radio,
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;

const Template: StoryFn<typeof Radio> = (args) => {
  const [checked, setChecked] = useState(args.checked);

  return (
    <Radio {...args} checked={checked} onChange={() => setChecked(!checked)} />
  );
};

export const XXS = Template.bind({});
XXS.args = {
  size: "xxs",
};

export const XS = Template.bind({});
XS.args = {
  size: "xs",
};

export const SM = Template.bind({});
SM.args = {
  size: "sm",
};
