import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

/**
 * 다형성 Button 컴포넌트
 *
 *
 */
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

export const Default: Story = {
  args: {
    size: "md",
    children: "Button",
  },
};

export const Variant: Story = {
  args: {
    size: "md",
    children: "Button",
  },
  render: ({ size, children }) => {
    return (
      <ul>
        <li>
          <h1>Primary</h1>
          <Button variant="primary" size={size}>
            {children}
          </Button>
        </li>
        <li>
          <h1>Warning</h1>
          <Button variant="warning" size={size}>
            {children}
          </Button>
        </li>
        <li>
          <h1>Outline</h1>
          <Button variant="outline" size={size}>
            {children}
          </Button>
        </li>
      </ul>
    );
  },
};

export const Size: Story = {
  args: {
    children: "Button",
  },
  render: ({ children }) => {
    return (
      <ul>
        <li>
          <h1>sm</h1>
          <Button size={"sm"}>{children}</Button>
        </li>
        <li>
          <h1>md</h1>
          <Button size={"md"}>{children}</Button>
        </li>
        <li>
          <h1>lg</h1>
          <Button size={"lg"}>{children}</Button>
        </li>
      </ul>
    );
  },
};
