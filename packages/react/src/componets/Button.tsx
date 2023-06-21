import styled, { css } from 'styled-components';
import {
  Button as ButtonMUI,
  ButtonProps as ButtonPropsUI,
} from '@mui/material';

declare module '@mui/material/Button' {
  // eslint-disable-next-line no-unused-vars
  interface ButtonPropsVariantOverrides {
    text: true;
    primary: true;
    secondary: true;
    outlined: true;
    contained: false;
  }
}

// type ButtonVariant = 'primary' | 'secondary' | 'text' | 'outlined';

export interface ButtonProps extends ButtonPropsUI {
  // variant?: ButtonVariant;
  m?: string;
  mx?: string;
  my?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  mt?: string;
}

export const Button = styled(ButtonMUI)<ButtonProps>`
  ${({
    theme,
    variant = 'primary',
    size = 'medium',
    disabled,
    m,
    mx,
    my,
    mt,
    ml,
    mb,
    mr,
  }) => css`
    && {
      text-transform: none;
      border-radius: 12px;
      font-family: ${theme.fonts.default};
      margin: ${m};
      margin-top: ${mt || my};
      margin-right: ${mr};
      margin-bottom: ${mb || my};
      margin-left: ${ml};
      margin-inline-start: ${mx};
      margin-inline-end: ${mx};

      ${variant === 'primary' &&
      css`
        background-color: ${theme.colors.super300};
        color: ${theme.colors.super100};
        :hover {
          background-color: ${theme.colors.super800};
        }
      `}

      ${variant === 'secondary' &&
      css`
        background-color: ${theme.colors.super100};
        color: ${theme.colors.super300};
        :hover {
          background-color: ${theme.colors.super100};
          color: ${theme.colors.super800};
        }
      `}

      ${variant === 'text' &&
      css`
        background-color: transparent;
        color: ${theme.colors.super300};
        :hover {
          background-color: ${theme.colors.gray50};
        }
      `}

      ${variant === 'outlined' &&
      css`
        background-color: transparent;
        color: ${theme.colors.super300};
        border: 1px solid ${theme.colors.super300};

        :hover {
          background-color: #0fae790a;
          border: 1px solid ${theme.colors.super800};
        }
      `}

      ${size === 'small' &&
      css`
        padding: 8px 16px;
        font-size: 12px;
        border-radius: 8px;
        height: 32px;
      `}
      ${size === 'medium' &&
      css`
        padding: 12px 24px;
        font-size: 16px;
        height: 48px;
      `}
      ${size === 'large' &&
      css`
        padding: 16px 24px;
        font-size: 16px;
        height: 56px;
      `}

      ${disabled &&
      css`
        background-color: ${theme.colors.gray50};
        color: ${theme.colors.gray200} !important;
      `}
    }
  `}
`;

Button.displayName = 'Button';
