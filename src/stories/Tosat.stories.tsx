import React from "react";
import { Story } from "@storybook/react";

import Icons from "../icons";
import Toast, { MessagePropsType } from "../components/Toast";

export default {
  title: "Common/Toast",
  component: Toast,
};

const Template: Story<MessagePropsType> = (args) => <Toast {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: "안녕하세요.",
  type: "success",
  top: 96,
  icon: <Icons icon="checkbox" />,
};
