import type { Meta, StoryObj } from "@storybook/react";
import { DividerLine } from ".";

/**
 * DividerLine 컴포넌트
 *
 * 공간을 나눠 줌
 */
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

export const Direction: Story = {
  args: {},
  render() {
    return (
      <div className="w-40 h-40">
        <h1>Horizontal</h1>
        <DividerLine direction="horizontal" className="w-full" />
        <h1>Vertical</h1>
        <DividerLine direction="vertical" className="h-full" />
      </div>
    );
  },
};
