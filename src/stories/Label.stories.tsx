import React from "react";
import { Story } from "@storybook/react";
import { Tooltip as AntTooltip } from "antd";

import Label, { LabelType } from "../components/Label";
import Icons from "../icons";

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
  color: "red",
};
export const Required = Template.bind({});
Required.args = {
  children: "label",
  type: "title1",
  bold: "regular",
  isRequired: true,
};
export const TooltipUse = Template.bind({});
TooltipUse.args = {
  children: (
    <div style={{ display: "flex", gap: "4px" }}>
      <p style={{ margin: "0" }}>Tooltip</p>
      <AntTooltip title={"test info"}>
        <Icons icon="info" />
      </AntTooltip>
    </div>
  ),
  type: "title1",
  bold: "regular",
  color: "#C8C8C8",
};
