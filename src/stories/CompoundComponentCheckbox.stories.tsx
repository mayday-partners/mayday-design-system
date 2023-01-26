/** @jsxImportSource @emotion/react */
import React from "react";
import { Story } from "@storybook/react";

import CompoundCheckbox, {
  CompoundCheckboxType,
} from "../Compound/CcpCheckbox";

export default {
  title: "Compound/Checkbox",
  component: CompoundCheckbox,
};

const Template: Story<CompoundCheckboxType> = (args) => (
  <CompoundCheckbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  direction: "vert",
  children: (
    <>
      <CompoundCheckbox.Option value={0} label={"0개"} />
      <CompoundCheckbox.Option value={1} label={"1개"} />
      <CompoundCheckbox.Option value={2} label={"2개"} />
      <CompoundCheckbox.Option value={3} label={"3개"} disabled />
    </>
  ),
};
