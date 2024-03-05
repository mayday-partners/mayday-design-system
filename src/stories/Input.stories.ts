import type { Meta, StoryObj } from "@storybook/react";

import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Example/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Subtitle1: Story = {
  args: {
    inputType: "round",
    value: "test",
    setValue: (value: string) => {},
    placeholder: "Place Holder",
    isError: false,
    hasValidation: true,
    validationErrorText: "에러 밸리데이션",
    validationOkText: "성공 밸리데이션",
  },
};
