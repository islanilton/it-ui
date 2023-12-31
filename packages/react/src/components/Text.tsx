import { ComponentProps } from '@stitches/react'
import { ElementType } from 'react'
import { styled } from '../styles'
import { fontSizes } from '@it-ui/tokens'

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,
  color: '$gray100',
  variants: {
    size: Object.keys(fontSizes).reduce<Record<string, { fontSize: string }>>(
      (acc, cur) => {
        acc[cur] = {
          fontSize: `$${cur}`,
        }
        return acc
      },
      {},
    ),
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType
}

Text.displayName = 'Text'
