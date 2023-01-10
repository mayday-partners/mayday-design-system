import { Story } from "@storybook/react";
import React from "react";
import Upload from "../Upload";
import { UploadType } from "../Upload";

export default {
  title: "Common/Upload",
  component: Upload,
};

const Template: Story<UploadType> = (args) => <Upload {...args} />;

export const ImageCrop = Template.bind({});
ImageCrop.args = {
  name: "ImageCrop",
  type: "image",
  noCrop: true,
  hasDelete: true,
};
export const Image = Template.bind({});
Image.args = {
  name: "Image",
  type: "image",
  noCrop: false,
  hasDelete: true,
};
export const SingleFile = Template.bind({});
SingleFile.args = {
  name: "File",
  type: "single",
  noCrop: true,
  hasDelete: true,
};
export const MultiFile = Template.bind({});
MultiFile.args = {
  name: "File",
  type: "multi",
  noCrop: true,
  hasDelete: true,
};
