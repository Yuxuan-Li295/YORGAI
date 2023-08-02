import type { Meta, StoryFn } from "@storybook/react";
import { Switch } from "components/shared/Switch";
import { useState } from "react";

const meta = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    enabled: {
      control: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;

const Template: StoryFn<typeof Switch> = (args) => {
  const [enabled, setEnabled] = useState(args.enabled);

  return (
    <Switch
      {...args}
      enabled={enabled}
      onToggle={() => {
        args.onToggle();
        setEnabled(!enabled);
      }}
    />
  );
};

export const Thin = Template.bind({});
Thin.args = {
  enabled: true,
};

export const Fat = Template.bind({});
Fat.args = {
  enabled: true,
  variant: "fat",
};
