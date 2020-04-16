// Dependencies
import { StyleSheet } from 'react-native';

/**
 * @file styles.js
 * @author Daniel Mejia
 * @description Styles definition for component.
 */

/**
 * Component styles definition object.
 * @type { object }
 */
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
    color: '#2B313F',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    paddingVertical: 10,
    borderTopColor: '#E4E4E4',
    borderTopWidth: 1,
  },
  itemTitle: {
    fontWeight: '400',
    fontSize: 14,
    color: '#2B313F',
  },
  itemValue: {
    color: '#2B313F',
    fontWeight: '500',
    fontSize: 13,
  },
  total: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
