import type { Meta, StoryFn } from "@storybook/react";
import { primary } from "components/constants/colors";
import { CheckBox } from "components/shared/CheckBoxOrRadio";
import { useState } from "react";

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
  },
} satisfies Meta<typeof CheckBox>;

export default meta;

const Template: StoryFn<typeof CheckBox> = (args) => {
  const [checked, setChecked] = useState(args.checked);

  return (
    <CheckBox
      {...args}
      colorPattern={primary}
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
