import { css } from "@emotion/react";
import { Story } from "@storybook/react";
import { RadioChangeEvent } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import React from "react";
import { Checkbox, CheckboxType } from "../Checkbox";

export default {
  title: "Common/Checkbox",
  component: Checkbox,
};

const Template: Story<CheckboxType> = (args) => <Checkbox {...args} />;

export const Radio = Template.bind({});
Radio.args = {
  type: "radio",
  itemList: [
    { key: "1", label: "number 1", isDisable: false },
    { key: "2", label: "number 2", isDisable: false },
    { key: "3", label: "number 3", isDisable: false },
    { key: "4", label: "number 4", isDisable: true },
  ],
  onChange: (event: RadioChangeEvent) => console.log(event.target.value),
  direction: "horiz",
  css: css`
    .ant-radio-group {
      gap: 24px;
    }
  `,
};
export const Check = Template.bind({});
Check.args = {
  type: "checkbox",
  itemList: [
    { key: "1", label: "number 1", isDisable: false },
    { key: "2", label: "number 2", isDisable: false },
    { key: "3", label: "number 3", isDisable: false },
    { key: "4", label: "number 4", isDisable: true },
  ],
  defaultValue: ["1"],
  onChange: (event: CheckboxValueType[]) => console.log(event),
  direction: "vert",
  css: css`
    border: 1px solid red;
  `,
};
