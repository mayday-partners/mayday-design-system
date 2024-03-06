import type { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";

const meta = {
  title: "Example/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultSelect: Story = {
  args: {
    selectType: "round",
    options: [
      {
        value: "1",
        label: "1번",
      },
      {
        value: "2",
        label: "2번",
      },
      {
        value: "3",
        label: "3번",
      },
    ],
  },
};