import React from "react";
import { Story } from "@storybook/react";

import { TextButton, TextButtonType } from "../components/TextButton";

export default {
  title: "Common/TextButton",
  component: TextButton,
};

const Template: Story<TextButtonType> = (args) => <TextButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "small",
  primaryColor: "gray",
  children: "text button",
  underline: true,
};
