/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { Story } from "@storybook/react";
import { RadioChangeEvent } from "antd";

import { Radio, RadioType } from "../components/Radio";

export default {
  title: "Common/Radio",
  component: Radio,
};

const Template: Story<RadioType> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
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
