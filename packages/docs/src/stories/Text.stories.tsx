import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@it-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, aliquam reprehenderit iure numquam non cupiditate debitis blanditiis placeat unde totam ipsam a velit magnam ab officia consectetur esse, hic libero.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
