// Dependencies
import React from 'react';

/**
 * @component StepperContainer
 * @author Daniel Mejia
 * @description Stepper to render a list of components step by step.
 */
export function StepperContainer(props: StepperContainerProps): React.ReactElement {
  const { initialStep, onIndexChange, onSubmit, onCancel, steps, ...stepProps } = props;
  const [currentStep, setStep] = React.useState(initialStep);
  const currentRoute = steps[currentStep];
  const { component: StepComponent } = currentRoute;
  const changeStep = (newIndex: number): void => {
    setStep(newIndex);
    onIndexChange?.(newIndex);
  };

  const goTo = (routeKey: string): void => {
    const indexToGo = steps.findIndex((route) => route.key === routeKey);
    changeStep(indexToGo);
  };

  const goToNext = (): void => {
    const nextIndex = currentStep + 1;
    const isLastStep = nextIndex === steps.length;

    if (isLastStep) {
      return onSubmit?.();
    }

    return changeStep(nextIndex);
  };

  const goToPrevious = (): void => {
    const previousIndex = currentStep - 1;
    const isFirstIndex = currentStep === 0;

    if (isFirstIndex) {
      return onCancel?.();
    }

    return changeStep(previousIndex);
  };

  return (
    <StepComponent
      goToNext={React.useCallback(goToNext, [currentStep])}
      goToPrevious={React.useCallback(goToPrevious, [currentStep])}
      goTo={React.useCallback(goTo, [])}
      {...stepProps}
    />
  );
}

/**
 * @interface StepProps
 * @description The properties definition of each Step.
 */
export interface StepProps {
  /**
   * The component to render the step.
   */
  component: (props: any) => React.ReactElement;

  /**
   * The step identifier.
   */
  key: string;
}

/**
 * @interface StepperContainerProps
 * @description The properties definition of component.
 */
export interface StepperContainerProps {
  /**
   * The initial step.
   * @default 0
   */
  initialStep: number | 0;

 /**
  * Callback to execute when the index change.
  */
  onIndexChange?: (index: number) => void;

 /**
  * The callback to execute on the go to back on first step.
  */
  onCancel?: () => void;

  /**
   * The callback to execute on last step.
   */
  onSubmit?: () => void;

  /**
   * The list of steps to render.
   */
  steps: StepProps[];
}

/**
 * Default props values.
 */
StepperContainer.defaultProps = {
  initialStep: 0,
  onIndexChange: undefined,
  onCancel: undefined,
  onSubmit: undefined,
};

export default StepperContainer;
