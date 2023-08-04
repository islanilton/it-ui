import { Button, ButtonProps } from '@it-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Primary',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}
export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
}
export const Success: StoryObj<ButtonProps> = {
  args: {
    variant: 'success',
    children: 'Success',
  },
}
export const Warning: StoryObj<ButtonProps> = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
}
export const Danger: StoryObj<ButtonProps> = {
  args: {
    variant: 'danger',
    children: 'Danger',
  },
}
export const Info: StoryObj<ButtonProps> = {
  args: {
    variant: 'info',
    children: 'Info',
  },
}
export const Dark: StoryObj<ButtonProps> = {
  args: {
    variant: 'dark',
    children: 'Dark',
  },
}
export const Link: StoryObj<ButtonProps> = {
  args: {
    variant: 'link',
    children: 'Link',
  },
}
export const Light: StoryObj<ButtonProps> = {
  args: {
    variant: 'light',
    children: 'Light',
  },
}
export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
    children: 'Small',
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next Step
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const PrimaryOutline: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary-outline',
  },
}

export const SecondaryOutline: StoryObj<ButtonProps> = {
  args: {
    children: 'Secondary',
    variant: 'secondary-outline',
  },
}

export const SuccessOutline: StoryObj<ButtonProps> = {
  args: {
    children: 'Success',
    variant: 'success-outline',
  },
}

export const WarningOutline: StoryObj<ButtonProps> = {
  args: {
    children: 'Warning',
    variant: 'warning-outline',
  },
}

export const DangerOutline: StoryObj<ButtonProps> = {
  args: {
    children: 'Danger',
    variant: 'danger-outline',
  },
}

export const InfoOutline: StoryObj<ButtonProps> = {
  args: {
    children: 'Info',
    variant: 'info-outline',
  },
}
