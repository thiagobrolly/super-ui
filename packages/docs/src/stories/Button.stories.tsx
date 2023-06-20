import { Button, ButtonProps } from '@super-ds/react';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Componentes/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Click',
    variant: 'text',
    size: 'medium',
    fullWidth: false,
    disabled: false,
  },

  argTypes: {
    variant: {
      options: ['text', 'primary', 'secondary', 'outlined'],
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};
