import { Story } from "@storybook/react";
import React from "react";
import Upload from "../UploadImage";
import { UploadType } from "../UploadImage";

export default {
  title: "Common/UploadImage",
  component: Upload,
};

const Template: Story<UploadType> = (args) => <Upload {...args} />;

export const ImageCrop = Template.bind({});
ImageCrop.args = {
  name: "ImageCrop",
  type: "image-crop",
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
