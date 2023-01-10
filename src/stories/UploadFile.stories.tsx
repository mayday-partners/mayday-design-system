import React, { useRef } from "react";
import { Story } from "@storybook/react";
import UploadFile from "../UploadFile";

export default {
  title: "Common/UploadFile",
  component: UploadFile,
};

const Template: Story<any> = (args) => <UploadFile {...args} />;

export const SingleFile = Template.bind({});
SingleFile.args = {
  name: "File",
  type: "single-file",
};
export const MultiFile = Template.bind({});
MultiFile.args = {
  name: "File",
  type: "multi-file",
};
