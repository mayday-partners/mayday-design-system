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
