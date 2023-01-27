import React from "react";
import { css } from "@emotion/react";
import { Story } from "@storybook/react";

import NormalSelectBox, { SelectBoxType } from "../components/SelectBox";

var value = "";

export default {
  title: "Common/SelectBox",
  component: NormalSelectBox,
  argTypes: {},
};

const Template: Story<SelectBoxType> = (args) => <NormalSelectBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  //   onChange: (value) => console.log(value),
  placeholder: "placeholder",
  items: [
    {
      value: "1",
      label: "1st menu item",
    },
    {
      value: "2",
      label: "2st menu item",
    },
    {
      value: "3",
      label: "3st menu item",
    },
    {
      value: "4",
      label: "4st menu item",
    },
  ],
  onChange: (v) => {
    value = v;
    console.log(value);
  },
  label: "",
  css: css`
    width: 400px;
  `,
};
export const Additional = Template.bind({});
Additional.args = {
  placeholder: "0",
  items: [
    {
      value: "1",
      label: "1st menu item",
    },
    {
      value: "2",
      label: "2st menu item",
    },
    {
      value: "3",
      label: "3st menu item",
    },
    {
      value: "4",
      label: "4st menu item",
    },
  ],
  onChange: (v) => {
    console.log(v);
  },
  additionalUnit: "개",
  css: css`
    width: 200px;
  `,
};
