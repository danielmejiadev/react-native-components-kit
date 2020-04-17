# react-native-components-kit
[NPM Package](https://www.npmjs.com/package/react-native-components-kit)

A set of easy and highly customizable React Native components

## Getting started

- `yarn add react-native-components-kit`
- `npm install react-native-components-kit`

### Usage

# Components

## SummaryItems

It allows you to create a highly customizable and dynamic summary of items.

<img width="300" src="images/summary-items.png" alt="Example of usage"></img>

### Usage

`import { SummaryItems } from 'react-native-components-kit';`

```tsx
<SummaryItems
  containerStyle={{ marginHorizontal: 25 }}
  titleStyle={{ fontSize: 20 }}
  itemContainerStyle={{}}
  itemTitleStyle={{ fontSize: 16 }}
  itemValueStyle={{ fontWeight: 'bold' }}
  totalContainerStyle={{}}
  totalTitleStyle={{ fontSize: 18, fontWeight: 'bold' }}
  totalValueStyle={{ fontSize: 16, fontWeight: 'bold' }}
  title="Bill summary"
  items={[
    {
      title: 'Meat',
      value: '$10.00',
    },
    {
      title: 'Eggs',
      value: '$20.00',
    },
    {
      title: 'Fruits',
      value: '$12.00',
    },
  ]}
  total={{
    title: 'Total',
    value: '42.00',
  }}
/>
```

## StepperContainer

It allows you to create a container wrapper for a stepper with the whole logic.

### Usage

`import { StepperContainer } from 'react-native-components-kit';`

```tsx
const steps = [
  {
    key: 'firstStep',
    component: ({ goToNext, goToPrevious, goTo, ...stepProps }) => MyComponent,
  },
  {
    key: 'secondStep',
    component: ({ goToNext, goToPrevious, goTo, ...stepProps }) => MyComponent,
  }
];

return (
  <StepperContainer
    initialStep={1}
    onCancel={() => console.log('go to back pressed on the first step')}
    onSubmit={() => console.log('go to next pressed on the last step')}
    steps={steps}
    {...stepProps}
  />
);
```

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
