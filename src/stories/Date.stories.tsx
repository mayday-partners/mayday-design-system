import React from "react";
import { Story } from "@storybook/react";

import NormalInput, { InputType } from "../components/Input";

export default {
  title: "Common/Date",
  component: NormalInput,
};

const Template: Story<InputType> = (args) => <NormalInput {...args} />;

export const Date = Template.bind({});
Date.args = {
  type: "date",
  onChange: (value) => console.log(value),
  label: "시작 일자를 선택하세요.",
};
export const Time = Template.bind({});
Time.args = {
  type: "time",
  onChange: (value) => console.log(value),
  label: "시작 시간을 선택하세요.",
  disabledTime: () => {
    return {
      disabledHours: () => [0, 1, 2, 3, 4, 5, 6, 7],
      disabledMinutes: () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
};
export const DateTime = Template.bind({});
DateTime.args = {
  type: "datetime",
  onChange: (value) => console.log(value),
  label: "시작 일자와 시간을 선택하세요.",
  format: "YYYY/MM/DD HH:mm",
  //   showTime: true,
};
