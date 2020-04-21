// Dependencies
import React from 'react';

// Context
import StepperContext from '../context';

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

  const goTo = React.useCallback((stepKey: string): void => {
    const indexToGo = steps.findIndex((route) => route.key === stepKey);
    changeStep(indexToGo);
  }, []);

  const goToNext = React.useCallback((): void => {
    const nextIndex = currentStep + 1;
    const isLastStep = nextIndex === steps.length;

    if (isLastStep) {
      return onSubmit?.();
    }

    return changeStep(nextIndex);
  }, [currentStep]);

  const goToPrevious = React.useCallback((): void => {
    const previousIndex = currentStep - 1;
    const isFirstIndex = currentStep === 0;

    if (isFirstIndex) {
      return onCancel?.();
    }

    return changeStep(previousIndex);
  }, [currentStep]);

  return (
    <StepperContext.Provider value={{ goToNext, goToPrevious, goTo, currentStep }}>
      <StepComponent
        goToNext={goToNext}
        goToPrevious={goToPrevious}
        goTo={goTo}
        {...stepProps}
      />
    </StepperContext.Provider>
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
