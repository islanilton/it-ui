import type { Meta, StoryObj } from '@storybook/react'
import { MultiSteps, MultiStepsProps, Box } from '@it-ui/react'

export default {
  title: 'Form/Multi Step',
  component: MultiSteps,
  args: {
    currentStep: 1,
    size: 4,
  },
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
      >
        {Story()}
      </Box>
    ),
  ],
} as Meta<MultiStepsProps>

export const Primary: StoryObj<MultiStepsProps> = {}

export const Full: StoryObj<MultiStepsProps> = {
  args: {
    currentStep: 4,
  },
}
