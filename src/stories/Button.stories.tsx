import React from "react";
import { ComponentMeta, Story } from "@storybook/react";

import { Button, ButtonPropsType } from "../Button";

export default {
  title: "Common/Button",
  component: Button,
  argTypes: {
    size: {
      description: "버튼 크기",
      defaultValue: "medium",
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    children: {
      description: "버튼 내부 요소",
      required: true,
    },
    primaryColor: {
      description: "버튼 컬러",
      control: { type: "color" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: Story<ButtonPropsType> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "medium",
  type: "solid",
  children: "BUTTON",
  disabled: false,
};
