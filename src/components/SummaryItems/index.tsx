// Dependencies
import React from 'react';
import { View, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';

// Styles
import styles from './styles';

/**
 * @component SummaryItems
 * @author Daniel Mejia
 * @description Componet to render the summary of a items.
 */
export function SummaryItems(props: SummaryItemsProps): React.ReactElement {
  const { title, items, total } = props;
  const {
    containerStyle,
    titleStyle,
    itemContainerStyle,
    itemTitleStyle,
    itemValueStyle,
    totalContainerStyle,
    totalTitleStyle,
    totalValueStyle,
  } = props;

  return (
    <View style={[containerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      {
        items.map((item, index) => (
          <View
            key={`${item.title}-${item.value}-${index.toString()}`}
            style={[styles.itemContainer, itemContainerStyle, item.containerStyle]}
          >
            <Text style={[styles.itemTitle, itemTitleStyle, item.titleStyle]}>{item.title}</Text>
            <Text style={[styles.itemValue, itemValueStyle, item.valueStyle]}>{item.value}</Text>
          </View>
        ))
      }
      <View style={[styles.itemContainer, totalContainerStyle]}>
        <Text style={[styles.itemTitle, styles.total, totalTitleStyle]}>{total.title}</Text>
        <Text style={[styles.total, totalValueStyle]}>{total.value}</Text>
      </View>
    </View>
  );
}

/**
 * @interface ItemProps
 * @description The properties definition of each item.
 */
export interface ItemProps {
  /**
   * The properties applied to the container.
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * The properties applied to the title text.
   */
  titleStyle?: StyleProp<TextStyle>;


  /**
   * The properties applied to the title text.
   */
  valueStyle?: StyleProp<TextStyle>;

  /**
   * The title of the item.
   */
  title?: string;

  /**
   * The value of the item.
   */
  value?: any;
}

/**
 * @interface SummaryItemsProps
 * @description The properties definition of component.
 */
export interface SummaryItemsProps {
  /**
   * The properties applied to the container.
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * The properties applied to the title text.
   */
  titleStyle?: StyleProp<TextStyle>;

  /**
   * The properties applied to the container of each item.
   */
  itemContainerStyle?: StyleProp<ViewStyle>;

  /**
   * The properties applied to the title text of each item.
   */
  itemTitleStyle?: StyleProp<TextStyle>;

  /**
   * The properties applied to the value text of each item.
   */
  itemValueStyle?: StyleProp<TextStyle>;

  /**
   * The properties applied to the container of total item.
   */
  totalContainerStyle?: StyleProp<ViewStyle>;

  /**
   * The properties applied to the container of title total item.
   */
  totalTitleStyle?: StyleProp<TextStyle>;

  /**
   * The properties applied to the container of value total item.
   */
  totalValueStyle?: StyleProp<TextStyle>;

  /**
   * The title of the summary.
   */
  title?: string;

  /**
   * The list of items to render.
   */
  items: ItemProps[];

  /**
   * The item total.
   */
  total: ItemProps;
}

/**
 * Component default props
 */
SummaryItems.defaultProps = {
  containerStyle: {},
  titleStyle: {},
  itemContainerStyle: {},
  itemTitleStyle: {},
  itemValueStyle: {},
  totalContainerStyle: {},
  totalTitleStyle: {},
  totalValueStyle: {},
  title: undefined,
  items: [],
  total: {},
};

export default React.memo(SummaryItems);
