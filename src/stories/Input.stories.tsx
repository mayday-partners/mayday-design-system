import { Story } from "@storybook/react";
import React from "react";

import { Input, InputType } from "../Input";

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
export const Date = Template.bind({});
Date.args = {
  type: "date",
  onChange: (value) => console.log(value),
  label: "시작 일자를 선택하세요.",
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
  onChange: (value) => console.log(value),
  label: "option",
};
