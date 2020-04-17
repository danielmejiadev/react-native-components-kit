// Dependencies
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

// Components
import { StepperContainer } from '../index';

/**
 * @file index.spec.jsx
 * @author Daniel Mejia
 * @description Test file for stepper container.
 */
describe('StepperContainer', () => {
  let component: ShallowWrapper;
  const StepComponent = (): React.ReactElement => <></>;
  const step = {
    key: 'step1',
    component: StepComponent,
  };
  const step2 = {
    key: 'step2',
    component: StepComponent,
  };
  const stepProps = {
    value: 1,
  };
  const initialStep = 0;
  const setStep = jest.fn();
  const props = {
    onIndexChange: jest.fn(),
    onCancel: jest.fn(),
    onSubmit: jest.fn(),
    steps: [step, step2],
    initialStep,
    ...stepProps,
  };

  beforeEach(() => {
    jest.spyOn<any, any>(React, 'useState').mockImplementation((value) => [value, setStep]);
    component = shallow(<StepperContainer {...props} />);
  });

  afterEach(() => jest.clearAllMocks());

  it('render correctly', () => {
    const stepComponentProps = component
      .find(StepComponent)
      .props();

    expect(stepComponentProps).toMatchObject(stepProps);
    expect(component).toMatchSnapshot();
  });

  it('should go to', () => {
    component
      .find<any>(StepComponent)
      .props()
      .goTo('step1');

    expect(setStep).toHaveBeenCalledWith(0);
    expect(props.onIndexChange).toHaveBeenCalledWith(0);
  });

  describe('should go to next', () => {
    it('is not the last step', () => {
      component
        .find<any>(StepComponent)
        .props()
        .goToNext();

      expect(setStep).toHaveBeenCalledWith(1);
      expect(props.onIndexChange).toHaveBeenCalledWith(1);
    });

    it('is the last step', () => {
      component.setProps({ initialStep: 1 });
      component
        .find<any>(StepComponent)
        .props()
        .goToNext();

      expect(props.onSubmit).toHaveBeenCalled();
    });
  });

  describe('should go to previous', () => {
    it('is not the first step', () => {
      component.setProps({ initialStep: 1 });
      component
        .find<any>(StepComponent)
        .props()
        .goToPrevious();

      expect(setStep).toHaveBeenCalledWith(0);
      expect(props.onIndexChange).toHaveBeenCalledWith(0);
    });

    it('is the first step', () => {
      component
        .find<any>(StepComponent)
        .props()
        .goToPrevious();

      expect(props.onCancel).toHaveBeenCalled();
    });
  });
});
