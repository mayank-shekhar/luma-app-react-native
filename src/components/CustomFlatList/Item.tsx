import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export type DataItemType = {
  id: string;
  title: string;
  description: string;
  isLast: boolean;
  [x: string]: any;
};

const Item: React.FC<DataItemType> = props => {
  const {title, description, isLast} = props;
  let itemStyle = styles.listItem;
  if (isLast) {
    itemStyle = styles.listItemLast;
  }
  return (
    <View style={itemStyle}>
      <Text style={styles.identityName}>{title}:</Text>
      <Text style={styles.identityDescription}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    marginLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },

  listItemLast: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    marginHorizontal: 20,
    borderBottomWidth: 0,
  },
  name: {
    fontSize: 16,
  },

  description: {
    fontSize: 12,
    fontWeight: '500',
  },
});

export default Item;
