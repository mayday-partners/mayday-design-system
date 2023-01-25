import React from "react";
import { Story } from "@storybook/react";

import CompoundInput from "../InputTotal";
import { css } from "@emotion/react";

export default {
  title: "Compound/Input",
  component: CompoundInput,
};

const Template: Story<any> = (args) => <CompoundInput {...args} />;

export const CompoundDate = Template.bind({});
CompoundDate.args = {
  children: <CompoundInput.Date onChange={(value) => console.log(value)} />,
  css: css``,
};
