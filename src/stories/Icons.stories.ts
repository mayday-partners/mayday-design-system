import type { Meta, StoryObj } from "@storybook/react";

import Icons from "../icons/index";

const meta: Meta<typeof Icons> = {
  title: "Example/Icons",
  component: Icons,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Heart: Story = {
  args: {
    icon: "common_heart",
  },
};
