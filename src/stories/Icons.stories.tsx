import { Story } from "@storybook/react";
import React from "react";
import Icons from "../icons";

export default {
  title: "Icons",
  component: Icons,
};

const Template: Story<any> = (args) => <Icons {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: "comment_2",
  width: 20,
  height: 20,
  color: "red",
};
