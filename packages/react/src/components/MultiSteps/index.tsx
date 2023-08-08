import { Label, MultiStepsContainer, Step, Steps } from './styles'

export interface MultiStepsProps {
  size: number
  currentStep?: number
}

export function MultiSteps({ size, currentStep = 1 }: MultiStepsProps) {
  return (
    <MultiStepsContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>
      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }).map((_, index) => (
          <Step key={index} active={index < currentStep} />
        ))}
      </Steps>
    </MultiStepsContainer>
  )
}

MultiSteps.displayName = 'MultiSteps'
