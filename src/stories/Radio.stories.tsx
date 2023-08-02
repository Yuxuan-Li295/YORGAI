import type { Meta, StoryFn } from "@storybook/react";
import { Radio } from "components/shared/CheckBoxOrRadio";
import { useState } from "react";
import { basis, primary } from "components/constants/colors";

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
    colorPattern: {
      options: ["basis", "primary"],
      mapping: { basis: basis, primary: primary },
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
