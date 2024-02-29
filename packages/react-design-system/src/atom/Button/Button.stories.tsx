import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: "md",
    children: "Button",
  },
};

export const Warning: Story = {
  args: {
    size: "md",
    children: "Button",
    variant: "warning",
  },
};

export const Outline: Story = {
  args: {
    size: "md",
    children: "Button",
    variant: "outline",
  },
};
