import React from "react";
import { Story } from "@storybook/react";

import Icons, { IconsProps } from "../Icons";

export default {
  title: "Common/Icons",
  component: Icons,
};

const Template: Story<IconsProps> = (args) => <Icons {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: "cancel",
  width: 24,
  height: 24,
};
