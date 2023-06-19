/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
import { Button as ButtonMUI } from '@mui/material';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    text: true;
    primary: true;
    secondary: true;
    outlined: true;
    contained: false;
  }
}

export const Button = styled(ButtonMUI)`
  ${({ theme, variant, size, disabled }) => css`
    && {
      text-transform: none;
      border-radius: 12px;

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
          background-color: #0fae790a;
          color: ${theme.colors.super100};
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
      `}
      ${size === 'medium' &&
      css`
        padding: 12px 24px;
        font-size: 16px;
      `}
      ${size === 'large' &&
      css`
        padding: 16px 24px;
        font-size: 16px;
      `}

      ${disabled &&
      css`
        background-color: ${theme.colors.gray50};
        color: ${theme.colors.gray200} !important;
      `}
    }
  `}
`;
