import { ComponentMeta, Story } from "@storybook/react";
import { MenuProps } from "antd";
import { Input, InputType } from "./Input";

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
};
export const Date = Template.bind({});
Date.args = {
  type: "date",
  onChange: (value) => console.log(value),
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
export const Dropdown = Template.bind({});
Dropdown.args = {
  type: "dropbox",
  onChange: (value) => console.log(value),
  placeholder: "placeholder",
  dropdownItems: {
    items: [
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            1st menu item
          </a>
        ),
      },
      {
        key: "2",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu item (disabled)
          </a>
        ),
        disabled: true,
      },
      {
        key: "3",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            3rd menu item (disabled)
          </a>
        ),
        disabled: true,
      },
      {
        key: "4",
        danger: true,
        label: "a danger item",
      },
    ],
  } as MenuProps,
};
