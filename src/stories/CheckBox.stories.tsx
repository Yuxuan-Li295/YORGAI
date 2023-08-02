import type { Meta, StoryFn } from "@storybook/react";
import { CheckBox } from "components/shared/CheckBoxOrRadio";
import { useState } from "react";
import { basis, primary } from "components/constants/colors";

const meta = {
  title: "Components/CheckBox",
  component: CheckBox,
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
} satisfies Meta<typeof CheckBox>;

export default meta;

const Template: StoryFn<typeof CheckBox> = (args) => {
  const [checked, setChecked] = useState(args.checked);

  return (
    <CheckBox
      {...args}
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
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
