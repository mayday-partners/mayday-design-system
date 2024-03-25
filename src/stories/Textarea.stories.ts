import type { Meta, StoryObj } from "@storybook/react";
import Textarea from "../components/Textarea";

const meta = {
  title: "Example/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    textareaType: "round",
    value: "123123",
    setValue: (value) => {},
    isResize: false,
    isError: true,
    placeholder: "Place Holder",
    style: {
      width: 600,
      height: 200,
    },
  },
};
export const Disabled: Story = {
  args: {
    textareaType: "angulate",
    value: "",
    setValue: (value) => {},
    disabled: true,
    placeholder: "Place Holder",
    style: {
      width: 600,
      height: 200,
    },
  },
};
