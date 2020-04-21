// Dependencies
import React from 'react';

/**
 * @interface Stepper
 * @description The properties passed from stepper using context.
 */
export interface Stepper {
  /**
   * Action to go to the next step.
   */
  goToNext?: () => void;

  /**
   * Action to go to the previous step.
   */
  goToPrevious?: () => void;

  /**
   * Action to go to the any step by using step key.
   */
  goTo?: (stepKey: string) => void;

  /**
   * The current step on the stepper.
   */
  currentStep?: number;
}

/**
 * Stepper context.
 */
export const StepperContext = React.createContext<Stepper>({});

export default StepperContext;
