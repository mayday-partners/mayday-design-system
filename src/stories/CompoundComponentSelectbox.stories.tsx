/** @jsxImportSource @emotion/react */
import React from "react";
import { Story } from "@storybook/react";

import CompoundSelectbox from "../Compound/CcpSelectbox";
import { css } from "@emotion/react";

export default {
  title: "Compound/Select",
  component: CompoundSelectbox,
};

const Template: Story<any> = (args) => <CompoundSelectbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "test",
  children: (
    <>
      <CompoundSelectbox.Option value={0}>0</CompoundSelectbox.Option>
      <CompoundSelectbox.Option value={1}>1</CompoundSelectbox.Option>
      <CompoundSelectbox.Option value={2}>2</CompoundSelectbox.Option>
      <CompoundSelectbox.Option value={3}>3</CompoundSelectbox.Option>
      <CompoundSelectbox.Option value={4}>4</CompoundSelectbox.Option>
    </>
  ),
  css: css`
    /* background-color: red !important; */
  `,
};
