import { Story } from "@storybook/react";
import Icons from "./icons";
import { TextButton, TextButtonType } from "./TextButton";

export default {
  title: "Common/TextButton",
  component: TextButton,
};

const Template: Story<TextButtonType> = (args) => <TextButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "small",
  primaryColor: "gray",
  children: "text button",
  underline: true,
  //   icon: <Icons icon="chevron_left" />,
};
