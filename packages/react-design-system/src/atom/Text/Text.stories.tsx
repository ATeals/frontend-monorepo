import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

/**
 * 다형성 Text 컴포넌트
 */
const meta = {
  title: "Atoms/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Text",
  },
};

export const Size: Story = {
  args: {
    children: "Text",
  },
  render({ children }) {
    return (
      <ul>
        <li>
          <h1>sm</h1>
          <Text size="sm">{children}</Text>
        </li>
        <li>
          <h1>md</h1>
          <Text size="md">{children}</Text>
        </li>
        <li>
          <h1>lg</h1>
          <Text size="lg">{children}</Text>
        </li>
        <li>
          <h1>xl</h1>
          <Text size="xl">{children}</Text>
        </li>
        <li>
          <h1>2xl</h1>
          <Text size="2xl">{children}</Text>
        </li>
      </ul>
    );
  },
};
