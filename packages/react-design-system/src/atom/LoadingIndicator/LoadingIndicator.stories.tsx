import type { Meta, StoryObj } from "@storybook/react";
import { LoadingIndicator } from ".";

const meta = {
  title: "Atoms/LoadingIndicator",
  component: LoadingIndicator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LoadingIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fill: "black",
  },
};
