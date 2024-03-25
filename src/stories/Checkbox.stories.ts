import { Meta, StoryObj } from "@storybook/react";

import Checkbox from "./Checkbox";
import { css } from "@emotion/react";

const meta: Meta<typeof Checkbox> = {
  title: "Example/Checkbox",
  component: Checkbox,
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
    items: ["1"],
    setItems: () => {},
    horizontal: true,
    wrapperCss: css`
      gap: 16px !important;
    `,
  },
};
