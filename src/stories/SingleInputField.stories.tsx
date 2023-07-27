import type { Meta, StoryObj, StoryFn } from "@storybook/react";
import { SingleLineInputField } from "components/shared/SingleLineInputField";
import { Button } from "components/shared/Button";
import { ReactComponent as EyeOpen } from "resources/img/EyeNewShow.svg";
import { ReactComponent as EyeClose } from "resources/img/EyeNewHide.svg";
import { ReactComponent as ArrowAngleUp } from "resources/img/ArrowAngleUpMd.svg";
import { ReactComponent as ArrowAngleDown } from "resources/img/ArrowAngleDownMd.svg";
import { useState } from "react";

const EyeExample = (
  <Button variant={"tertiary"} size={"sm"} children={<EyeOpen />} />
);

const PlusExample = (
  <Button variant={"tertiary"} size={"sm"} children={<ArrowAngleUp />} />
);

const MinusExample = (
  <Button variant={"tertiary"} size={"sm"} children={<ArrowAngleDown />} />
);

const meta = {
  title: "Components/SingleLineInputField",
  component: SingleLineInputField,
  tags: ["autodocs"],
  argTypes: {
    append: {
      options: ["None", "Password", "Spinner"],
      mapping: {
        None: null,
        Password: [EyeExample],
        Spinner: [PlusExample, MinusExample],
      },
    },
  },
} satisfies Meta<typeof SingleLineInputField>;

export default meta;
type Story = StoryObj<typeof SingleLineInputField>;

export const RestInput: Story = {
  args: {
    width: 168,
    height: 32,
    value: "ChatGPT结果",
  },
};

export const DisabledInput: Story = {
  args: {
    width: 168,
    height: 32,
    value: "ChatGPT结果",
    disabled: true,
  },
};

export const ErrorInput: Story = {
  args: {
    width: 168,
    height: 32,
    value: "ChatGPT结果",
    error: true,
  },
};

const Password: StoryFn<typeof SingleLineInputField> = (args) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const LookPassword = (
    <Button
      variant={"tertiary"}
      size={"sm"}
      onClick={handleTogglePassword}
      children={<EyeOpen />}
    />
  );

  const HidePassword = (
    <Button
      variant={"tertiary"}
      size={"sm"}
      onClick={handleTogglePassword}
      children={<EyeClose />}
    />
  );

  return (
    <SingleLineInputField
      width={168}
      height={32}
      type={showPassword ? "text" : "password"}
      append={showPassword ? [HidePassword] : [LookPassword]}
      value={password}
    />
  );
};

export const PasswordInput = Password.bind({});

const Number: StoryFn<typeof SingleLineInputField> = (args) => {
  const [input, setInput] = useState("3");

  const IncreaseByOne = () => {
    setInput((prevInput) => String(parseInt(prevInput) + 1));
  };

  const DecreaseByOne = () => {
    setInput((prevInput) => String(parseInt(prevInput) - 1));
  };

  const Increase = (
    <Button
      variant={"tertiary"}
      size={"sm"}
      onClick={IncreaseByOne}
      children={<ArrowAngleUp />}
    />
  );
  const Decrease = (
    <Button
      variant={"tertiary"}
      size={"sm"}
      onClick={DecreaseByOne}
      children={<ArrowAngleDown />}
    />
  );

  return (
    <SingleLineInputField
      width={168}
      height={32}
      type={"number"}
      value={input}
      append={[Increase, Decrease]}
    />
  );
};

export const NumberInput = Number.bind({});
