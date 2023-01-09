import { Story } from "@storybook/react";
import React from "react";
import Label, { LabelType } from "../Label";

export default {
  title: "Common/Label",
  component: Label,
};

const Template: Story<LabelType> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "label",
  type: "title1",
  bold: "regular",
  isRequired: false,
  color: "black",
};
export const Required = Template.bind({});
Required.args = {
  children: "label",
  type: "title1",
  bold: "regular",
  isRequired: true,
};
