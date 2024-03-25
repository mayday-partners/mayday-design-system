import type { Meta, StoryObj } from "@storybook/react";

import DatePicker from "../components/DatePicker";

const meta = {
  title: "Example/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultDatePicker: Story = {
  args: {},
};
