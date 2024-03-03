import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from ".";
import { Box } from "../Box";

/**
 * 다형성 Flex 컴포넌트
 */
const meta = {
  title: "Atoms/Flex",
  component: Flex,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    style: { direction: "row", justify: "center", align: "center" },
    children: (
      <>
        <Box variant="primary" size="md" />
        <Box variant="default" size="md" />
        <Box variant="warning" size="md" />
      </>
    ),
  },
};

export const Column: Story = {
  args: {
    style: { direction: "column", justify: "center", align: "center" },
    children: (
      <>
        <Box variant="primary" size="md" />
        <Box variant="default" size="md" />
        <Box variant="warning" size="md" />
      </>
    ),
  },
};
