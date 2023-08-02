import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@it-ui/react'

export default {
  title: 'Forms/Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<typeof Button> = {}

export const Big: StoryObj<typeof Button> = {
  args: {
    size: 'big',
  },
}
