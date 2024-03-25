import type { Meta, StoryObj } from "@storybook/react";

import Typography from "../components/Typography";

const meta: Meta<typeof Typography> = {
  title: "Example/Typography",
  component: Typography,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Subtitle1: Story = {
  args: {
    type: "subtitle1",
    children: "서브타이틀 1",
    textType: "error",
    mode: "dark",
  },
};
export const Subtitle2: Story = {
  args: {
    type: "subtitle2",
    children: "서브타이틀 2",
  },
};
export const Subtitle3: Story = {
  args: {
    type: "subtitle3",
    children: "서브타이틀 3",
  },
};
export const Subtitle4: Story = {
  args: {
    type: "subtitle4",
    children: "서브타이틀 4",
  },
};

export const Body1: Story = {
  args: {
    type: "body1",
    children: "바디 1",
  },
};
export const Body2: Story = {
  args: {
    type: "body2",
    children: "바디 2",
  },
};

export const Caption1: Story = {
  args: {
    type: "caption1",
    children: "캡션 1",
  },
};
export const Caption2: Story = {
  args: {
    type: "caption2",
    children: "캡션 2",
  },
};
