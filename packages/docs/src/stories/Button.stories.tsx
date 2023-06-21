import { Button, ButtonProps } from '@super-ds/react';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Componentes/Button',
  component: Button,
  args: {
    children: 'Click',
    variant: 'primary',
    size: 'medium',
    fullWidth: false,
    disabled: false,
    m: '',
    mx: '',
    my: '',
    mt: '',
    mb: '',
    mr: '',
    ml: '',
  },

  argTypes: {
    variant: {
      options: ['text', 'primary', 'secondary', 'outlined'],
      control: { type: 'radio' },
      defaultValue: 'primary',
      description: 'Estilo do botão.',
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      defaultValue: 'medium',
      description: 'Tamanho do botão.',
    },
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
  },
};

export const Text: StoryObj<ButtonProps> = {
  args: {
    variant: 'text',
  },
};

export const Outlined: StoryObj<ButtonProps> = {
  args: {
    variant: 'outlined',
  },
};
