import type { Meta, StoryFn } from "@storybook/react";
import { SearchBar } from "components/shared/SearchBar";

type SearchBarProps = {
  width: string;
  hasButton?: boolean;
  buttonOnClick?: () => void;
  buttonText?: string;
};

const meta: Meta<SearchBarProps> = {
  title: "Components/SearchBar",
  component: SearchBar,
  args: {
    width: "300px",
  },
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn<SearchBarProps> = (args) => <SearchBar {...args} />;

export const Example = Template.bind({});
Example.args = {
  width: "300px",
};
