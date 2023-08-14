import type { Meta, StoryFn } from "@storybook/react";
import { Collapse, CollapseProps } from "components/shared/Collapse";
import { ReactComponent as Help } from "resources/img/Help.svg";
import { ReactComponent as ImageEdit } from "resources/img/ImageEdit.svg";

const meta: Meta<CollapseProps> = {
  title: "Components/Collapse",
  component: Collapse,
  argTypes: {
    icon: {
      control: { type: 'select', options: [null, 'ImageEdit', 'Help'] },
      mapping: { ImageEdit: <ImageEdit />, Help: <Help /> },
      defaultValue: null,
    },
    helpIcon: {
      control: { type: 'select', options: [null, 'ImageEdit', 'Help'] },
      mapping: { ImageEdit: <ImageEdit />, Help: <Help /> },
      defaultValue: null,
    },
    title: {
      control: 'text',
      defaultValue: "Title",
    },
  },
};

export default meta;

const Template: StoryFn<CollapseProps> = (args) => <Collapse {...args}>Collapse Content</Collapse>;

export const Default = Template.bind({});
Default.args = {
  title: "Custom Title",
  children: "This is a collapsible content example.",
};

export const WithMagicWandIcon = Template.bind({});
WithMagicWandIcon.args = {
  title: "参考图",
  icon: <ImageEdit />,
  helpIcon: <Help />,
  children: "This is an example",
};

