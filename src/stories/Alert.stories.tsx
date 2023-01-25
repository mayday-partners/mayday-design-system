import React from "react";
import { Story } from "@storybook/react";
import Alert, { AlertType } from "../Alert";

export default {
  title: "Common/Alert",
  component: Alert,
};

const Template: Story<AlertType> = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "warning",
  message: "Warning",
  description: "Detailed description and advice about successful copywriting.",
  showIcon: true,
  closable: true,
};
