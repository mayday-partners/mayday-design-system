import { css } from "@emotion/react";
import { Story } from "@storybook/react";
import React from "react";
import SelectBox, { SelectBoxType } from "../SelectBox";

var value = "";

export default {
  title: "Common/SelectBox",
  component: SelectBox,
  argTypes: {},
};

const Template: Story<SelectBoxType> = (args) => <SelectBox {...args} />;

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
};
