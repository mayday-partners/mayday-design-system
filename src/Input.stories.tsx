import { ComponentMeta, Story } from "@storybook/react";
import { Input, InputType } from "./Input";

export default {
  title: "Common/Input",
  component: Input,
};

const Template: Story<InputType> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "placeholder",
  type: "search",
  onChange: (value) => console.log(value),
  disabled: false,
};
export const Date = Template.bind({});
Date.args = {
  type: "date",
  onChange: (value) => console.log(value),
};
