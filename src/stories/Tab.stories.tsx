import { Story } from "@storybook/react";
import React from "react";
import palette from "../styles/palette";
import Tab, { TabType } from "../Tab";

export default {
  title: "Common/Tab",
  component: Tab,
};

const Template: Story<TabType> = (args) => <Tab {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      key: "1",
      label: <p>메뉴 1</p>,
    },
    {
      key: "2",
      label: <p>메뉴 2</p>,
    },
    {
      key: "3",
      label: <p>메뉴 3</p>,
    },
  ],
  height: "50px",
  activeColor: palette.red.red6,
};
