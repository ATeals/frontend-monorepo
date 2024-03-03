import type { Meta, StoryObj } from "@storybook/react";
import { Label } from ".";

/**
 * Label 컴포넌트
 */
const meta = {
  title: "Atoms/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Label",
  },
};

export const Required: Story = {
  args: {
    children: "Label",
    isRequired: true,
  },
};
