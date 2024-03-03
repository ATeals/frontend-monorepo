import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "./Box";

/**
 * 다형성 Box 컴포넌트
 */
const meta = {
  title: "Atoms/Box",
  component: Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    size: "default",
    variant: "outline",
    children: "Box",
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Box",
    size: "md",
    variant: "default",
  },
};

export const Variant: Story = {
  args: {
    size: "md",
    children: "Box",
  },
  render({ size, children }) {
    return (
      <ul>
        <li>
          <h1>Default</h1>
          <Box size={size}>{children}</Box>
        </li>
        <li>
          <h1>Primary</h1>
          <Box variant="primary" size={size}></Box>
        </li>
        <li>
          <h1>Warning</h1>
          <Box variant="warning" size={size}></Box>
        </li>
        <li>
          <h1>Outline</h1>
          <Box variant="outline" size={size}></Box>
        </li>
      </ul>
    );
  },
};

export const Size: Story = {
  args: {
    children: "Box",
  },
  render({ children }) {
    return (
      <ul>
        <li>
          <h1>sm</h1>
          <Box size="sm">{children}</Box>
        </li>
        <li>
          <h1>md</h1>
          <Box size="md">{children}</Box>
        </li>
        <li>
          <h1>lg</h1>
          <Box size="lg">{children}</Box>
        </li>
        <li>
          <h1>xl</h1>
          <Box size="xl">{children}</Box>
        </li>
        <li>
          <h1>2xl</h1>
          <Box size="2xl">{children}</Box>
        </li>
        <li>
          <h1>default</h1>
          <Box size="default">{children}</Box>
        </li>
      </ul>
    );
  },
};
