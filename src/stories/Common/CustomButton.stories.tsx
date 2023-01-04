import { CustomButton, CustomButtonPropsType } from "./CustomButton";
import { ComponentMeta, Meta, Story } from "@storybook/react";
import palette from "../../styles/palette";

export default {
  title: "Common/Button",
  component: CustomButton,
  argTypes: {
    size: {
      description: "버튼 크기",
      defaultValue: "medium",
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    type: {
      description: "버튼 타입",
      defaultValue: "medium",
      options: ["solid", "primary", "disabled"],
      control: { type: "radio" },
    },
    children: {
      description: "버튼 내부 요소",
      required: true,
    },
    primaryColor: {
      description: "버튼 컬러",
      control: { type: "color" },
    },
  },
} as ComponentMeta<typeof CustomButton>;

const Template: Story<CustomButtonPropsType> = (args) => (
  <CustomButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: "medium",
  type: "primary",
  children: "BUTTON",
  primaryColor: palette.red[600],
};
