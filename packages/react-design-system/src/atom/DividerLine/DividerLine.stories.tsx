import type { Meta, StoryObj } from "@storybook/react";
import { DividerLine } from ".";

const meta = {
  title: "Atoms/DividerLine",
  component: DividerLine,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DividerLine>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    direction: "horizontal",
    className: "w-40",
  },
};
