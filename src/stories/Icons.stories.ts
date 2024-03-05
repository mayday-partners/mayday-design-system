import type { Meta, StoryObj } from "@storybook/react";

import Icons from "../icons/index";
import * as svg from "../icons/svg";

const meta: Meta<typeof Icons> = {
  title: "Example/Icons",
  component: Icons,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Heart: Story = {
  argTypes: {
    icon: {
      options: Object.keys(svg),
      control: {
        type: "select",
        labels: {
          ...Object.keys(svg),
        },
      },
    },
  },
  args: {
    icon: "common_heart_fill",
    color: "red",
    width: 40,
    height: 40,
  },
};
