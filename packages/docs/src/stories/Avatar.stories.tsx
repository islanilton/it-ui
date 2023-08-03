import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@it-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/islanilton.png',
    alt: 'Ilanilton',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
