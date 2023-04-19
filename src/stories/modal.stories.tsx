import { ComponentMeta, Story } from "@storybook/react";
import { Button } from "antd";
import React from "react";
import Modal, { ModalType } from "../Modal";

export default {
  title: "Common/Modal",
  component: Modal,
  argTypes: {
    colorPrimary: {
      description: "테마 컬러",
      control: { type: "color" },
    },
  },
};

const Template: Story<ModalType> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "mobile",
  buttonType: "two",
  open: true,
  padding: [32, 16, 16, 16],
  centered: true,
  onOk: () => alert("ok"),
  onCancel: () => alert("cancel"),
};
