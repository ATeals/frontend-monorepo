import type { Meta, StoryObj } from "@storybook/react";
import { Ring } from "./Ring";

/**
 *  다형성 Ring 컴포넌트
 */
const meta = {
  title: "Atoms/Ring",
  component: Ring,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Ring>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Ring",
  },
};

export const Variant: Story = {
  args: {
    children: "Ring",
  },
  render({ children }) {
    return (
      <ul>
        <li>
          <h1>Default</h1>
          <Ring>{children}</Ring>
        </li>
        <li>
          <h1>Warning</h1>
          <Ring variant="warning">{children}</Ring>
        </li>
        <li>
          <h1>Primary</h1>
          <Ring variant="primary">{children}</Ring>
        </li>
      </ul>
    );
  },
};

export const Fill: Story = {
  args: {
    children: "Ring",
  },
  render({ children }) {
    return (
      <ul>
        <li>
          <h1>true</h1>
          <Ring>{children}</Ring>
        </li>
        <li>
          <h1>false</h1>
          <Ring fill>{children}</Ring>
        </li>
      </ul>
    );
  },
};
