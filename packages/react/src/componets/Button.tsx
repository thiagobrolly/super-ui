/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
import { Button as ButtonMUI } from '@mui/material';
import { colors } from '@super-ui/tokens';

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
  ${({ variant, size, disabled }) => css`
    && {
      text-transform: none;
      border-radius: 12px;

      ${variant === 'primary' &&
      css`
        background-color: ${colors.super300};
        color: ${colors.super100};
        :hover {
          background-color: ${colors.super800};
        }
      `}

      ${variant === 'secondary' &&
      css`
        background-color: ${colors.super100};
        color: ${colors.super300};
        :hover {
          background-color: ${colors.super100};
          color: ${colors.super800};
        }
      `}

      ${variant === 'text' &&
      css`
        background-color: transparent;
        color: ${colors.super300};
        :hover {
          background-color: #0fae790a;
          color: ${colors.super100};
        }
      `}

      ${variant === 'outlined' &&
      css`
        background-color: transparent;
        color: ${colors.super300};
        border: 1px solid ${colors.super300};

        :hover {
          background-color: #0fae790a;
          border: 1px solid ${colors.super800};
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
        background-color: ${colors.gray50};
        color: ${colors.gray300} !important;
      `}
    }
  `}
`;
