import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

/**
 * Input 컴포넌트
 *
 * text type 스타일
 */
const meta = {
  title: "Atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Input Text",
  },
};

export const Variant: Story = {
  args: {
    placeholder: "Input Text",
  },
  render({ placeholder }) {
    return (
      <ul>
        <li>
          <h1>Default</h1>
          <Input placeholder={placeholder} />
        </li>
        <li>
          <h1>outline</h1>
          <Input variant="outline" placeholder={placeholder} />
        </li>
        <li>
          <h1>underline</h1>
          <Input variant="underline" placeholder={placeholder} />
        </li>
        <li>
          <h1>warning</h1>
          <Input variant="warning" placeholder={placeholder} />
        </li>
      </ul>
    );
  },
};

export const Size: Story = {
  args: {
    placeholder: "Input Text",
  },
  render({ placeholder }) {
    return (
      <ul>
        <li>
          <h1>sm</h1>
          <Input size="sm" placeholder={placeholder} />
        </li>
        <li>
          <h1>md</h1>
          <Input size="md" placeholder={placeholder} />
        </li>
        <li>
          <h1>lg</h1>
          <Input size="lg" placeholder={placeholder} />
        </li>
      </ul>
    );
  },
};
