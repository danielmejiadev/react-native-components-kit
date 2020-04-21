// Dependencies
import React from 'react';

// Context
import StepperContext from '../context';

// Hooks under testing
import * as StepperHooks from '../hooks';

/**
 * @file hooks.spec.js
 * @author Daniel Mejia
 * @description Test file for stepper hooks.
 */
describe('StepperHooks', () => {
  describe('should use stepper', () => {
    it('get the stepper actions', () => {
      const stepper = { goToNext: jest.fn() };
      jest.spyOn(React, 'useContext').mockReturnValue(stepper);

      const response = StepperHooks.useStepper();
      expect(response).toEqual(stepper);
      expect(React.useContext).toHaveBeenCalledWith(StepperContext);
    });

    it('get error because no stepper context', () => {
      jest.spyOn(React, 'useContext').mockReturnValue({});
      expect(StepperHooks.useStepper).toThrow(Error);
      expect(React.useContext).toHaveBeenCalledWith(StepperContext);
    });
  });
});
