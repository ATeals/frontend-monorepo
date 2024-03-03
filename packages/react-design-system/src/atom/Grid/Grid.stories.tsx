import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from ".";
import { Box } from "../Box";

/**
 * 다형성 Grid 컴포넌트
 */
const meta = {
  title: "Atoms/Grid",
  component: Grid.Container,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Grid.Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    style: { column: 2, row: 2, gap: 5 },
    children: (
      <>
        <Grid.Item as={Box} size="md" />
        <Grid.Item as={Box} size="md" />
        <Grid.Item as={Box} size="md" />
        <Grid.Item as={Box} size="md" />
      </>
    ),
  },
};

export const ItemSpanRow: Story = {
  args: {
    style: { column: 2, row: 2, gap: 5 },
    children: (
      <>
        <Grid.Item style={{ row: 2 }} as={Box} />
        <Grid.Item as={Box} size="md" />
        <Grid.Item as={Box} size="md" />
      </>
    ),
  },
};

export const ItemSpanColumn: Story = {
  args: {
    style: { column: 2, row: 2, gap: 5 },
    children: (
      <>
        <Grid.Item style={{ column: 2 }} as={Box} />
        <Grid.Item as={Box} size="md" />
        <Grid.Item as={Box} size="md" />
      </>
    ),
  },
};
