import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./Heading";

/**
 * 다형성 Heading 컴포넌트
 */
const meta = {
  title: "Atoms/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Heading",
  },
};

export const Size: Story = {
  args: {
    children: "Heading",
  },
  render({ children }) {
    return (
      <ul>
        <li>
          <h1>sm</h1>
          <Heading size="sm">{children}</Heading>
        </li>
        <li>
          <h1>md</h1>
          <Heading size="md">{children}</Heading>
        </li>

        <li>
          <h1>lg</h1>
          <Heading size="lg">{children}</Heading>
        </li>

        <li>
          <h1>xl</h1>
          <Heading size="xl">{children}</Heading>
        </li>

        <li>
          <h1>2xl</h1>
          <Heading size="2xl">{children}</Heading>
        </li>

        <li>
          <h1>default</h1>
          <Heading>{children}</Heading>
        </li>
      </ul>
    );
  },
};
