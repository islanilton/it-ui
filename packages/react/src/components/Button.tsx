import { ComponentProps, ElementType } from 'react'
import { darken } from 'polished'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },

  transition: 'background-color 200ms ease-in',

  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$blue500',
        '&:not(:disabled):hover': {
          backgroundColor: darken(0.1, '#2196F3'),
        },
      },
      'primary-outline': {
        color: '$blue500',
        border: '2px solid $blue500',
        '&:not(:disabled):hover': {
          backgroundColor: '$blue500',
          color: '$white',
        },
      },
      secondary: {
        color: '$white',
        backgroundColor: '$gray400',
        '&:not(:disabled):hover': {
          backgroundColor: darken(0.1, '#7C7C8A'),
        },
      },
      'secondary-outline': {
        color: '$gray400',
        border: '2px solid $gray400',
        '&:not(:disabled):hover': {
          backgroundColor: '$gray400',
          color: '$white',
        },
      },
      success: {
        color: '$white',
        backgroundColor: '$green700',
        '&:not(:disabled):hover': {
          backgroundColor: darken(0.1, '#00875F'),
        },
      },
      'success-outline': {
        color: '$green500',
        border: '2px solid $green700',
        '&:not(:disabled):hover': {
          backgroundColor: '$green700',
          color: '$white',
        },
      },
      danger: {
        color: '$white',
        backgroundColor: '$red500',
        '&:not(:disabled):hover': {
          backgroundColor: darken(0.1, '#EE4266'),
        },
      },
      'danger-outline': {
        color: '$red500',
        border: '2px solid $red500',
        '&:not(:disabled):hover': {
          backgroundColor: '$red500',
          color: '$white',
        },
      },
      warning: {
        color: '$white',
        backgroundColor: '$yellow500',
        '&:not(:disabled):hover': {
          backgroundColor: darken(0.1, '#FFD23F'),
        },
      },
      'warning-outline': {
        color: '$yellow500',
        border: '2px solid $yellow500',
        '&:not(:disabled):hover': {
          backgroundColor: '$yellow500',
          color: '$black',
        },
      },
      info: {
        color: '$white',
        backgroundColor: '$blue100',
        '&:not(:disabled):hover': {
          backgroundColor: darken(0.1, '#BBDEFB'),
        },
      },
      'info-outline': {
        color: '$blue100',
        border: '2px solid $blue100',
        '&:not(:disabled):hover': {
          backgroundColor: '$blue100',
          color: '$black',
        },
      },
      dark: {
        color: '$white',
        backgroundColor: '$gray800',
        '&:not(:disabled):hover': {
          backgroundColor: darken(0.1, '#202024'),
        },
      },
      link: {
        color: '$blue500',
      },
      light: {
        color: '$gray700',
        backgroundColor: '$gray100',
        '&:not(:disabled):hover': {
          backgroundColor: darken(0.1, '#E1E1E6'),
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },
      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
