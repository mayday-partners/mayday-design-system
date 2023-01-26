/** @jsxImportSource @emotion/react */
import React from "react";
import { Story } from "@storybook/react";

import CompoundInput from "../Compound/CcpInput";
import { css } from "@emotion/react";

export default {
  title: "Compound/Input",
  component: CompoundInput,
};

const Template: Story<any> = (args) => <CompoundInput {...args} />;

export const Date = Template.bind({});
Date.args = {
  label: "test",
  children: <CompoundInput.Date onChange={(value) => console.log(value)} />,
  css: css`
    /* background-color: red !important; */
  `,
};

export const DateTime = Template.bind({});
DateTime.args = {
  children: <CompoundInput.DateTime onChange={(value) => console.log(value)} />,
};

export const Time = Template.bind({});
Time.args = {
  children: <CompoundInput.Time onChange={(value) => console.log(value)} />,
};

export const Text = Template.bind({});
Text.args = {
  children: (
    <CompoundInput.Text
      onChange={(value) => console.log(value)}
      placeholder="placeholder"
    />
  ),
};
