import React from "react";
import { Story } from "@storybook/react";

import { Input, InputType } from "../components/Input";

export default {
  title: "Common/Input",
  component: Input,
};

const Template: Story<InputType> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "placeholder",
  type: "default",
  onChange: (value) => console.log(value),
  disabled: false,
  label: "라벨",
  showCount: true,
  maxLength: 20,
};
export const Search = Template.bind({});
Search.args = {
  type: "search",
  onChange: (value) => console.log(value),
  placeholder: "placeholder",
};
export const Option = Template.bind({});
Option.args = {
  type: "option",
  option: "옵션",
  onChange: (value) => console.log(value),
  // label: "option",
};
