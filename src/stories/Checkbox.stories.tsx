/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { Story } from "@storybook/react";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { Checkbox, CheckboxType } from "../components/Checkbox";

export default {
  title: "Common/Checkbox",
  component: Checkbox,
};

const Template: Story<CheckboxType> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  // type: "checkbox",
  itemList: [
    { key: "1", label: "number 1", isDisable: false },
    { key: "2", label: "number 2", isDisable: false },
    { key: "3", label: "number 3", isDisable: false },
    { key: "4", label: "number 4", isDisable: true },
  ],
  defaultValue: ["1"],
  onChange: (event: CheckboxValueType[]) => console.log(event),
  css: css`
    background-color: red;
  `,
};
