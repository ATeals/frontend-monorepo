import type { Meta, StoryObj } from "@storybook/react";
import { Lable } from ".";

const meta = {
  title: "Atoms/Lable",
  component: Lable,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Lable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Lable",
  },
};

export const Required: Story = {
  args: {
    children: "Lable",
    isRequired: true,
  },
};
