import { Meta, StoryObj } from "@storybook/react";
import Radio from "./Radio";

const meta: Meta<typeof Radio> = {
  title: "Example/Radio",
  component: Radio,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Checked: Story = {
  args: {
    options: [
      {
        value: "1",
        label: "1번",
      },
      {
        value: "2",
        label: "2번",
      },
    ],
    item: "1",
  },
};
