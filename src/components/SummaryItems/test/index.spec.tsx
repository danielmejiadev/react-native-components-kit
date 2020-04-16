// Dependencies
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Text } from 'react-native';

// Components
import { SummaryItems } from '../index';

/**
 * @file index.spec.jsx
 * @author Daniel Mejia
 * @description Test file for summary items.
 */
describe('SummaryItems', () => {
  let component: ShallowWrapper;
  const item = {
    title: 'Row1',
    value: 10,
  };
  const total = {
    title: 'Total',
    value: 1,
  };
  const props = {
    title: 'Title',
    items: [item],
    total,
  };

  beforeEach(() => {
    component = shallow(<SummaryItems {...props} />);
  });

  it('render correctly', () => {
    const textList = component.find<any>(Text);
    const lastIndex = textList.length - 1;
    const title = textList
      .at(0)
      .props();

    const totalTitle = textList
      .at(lastIndex - 1)
      .props();

    const totalValue = textList
      .at(lastIndex)
      .props();

    expect(title.children).toEqual(props.title);
    expect(totalTitle.children).toEqual(total.title);
    expect(totalValue.children).toEqual(total.value);
    expect(component).toMatchSnapshot();
  });
});
