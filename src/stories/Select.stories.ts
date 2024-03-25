import type { Meta, StoryObj } from "@storybook/react";

import Select from "../components/Select";

const meta = {
  title: "Example/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Round: Story = {
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
    width: "343px",
    value: "2",
  },
};
export const Angulate: Story = {
  args: {
    selectType: "angulate",
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
    width: "343px",
    disabled: true,
    value: "2",
  },
};
