// Dependencies
import React from 'react';

// Context
import StepperContext, { Stepper } from './context';

/**
 * Use the stepper properties from context.
 * @returns { Stepper } The stepper actions available.
 */
export function useStepper(): Stepper {
  const stepperActions = React.useContext<Stepper>(StepperContext);
  const isEmpty = Object.keys(stepperActions).length === 0;

  if (isEmpty) {
    throw new Error('You must be inside a <StepperContainer /> to use this hook');
  }

  return stepperActions;
}

export default useStepper;
