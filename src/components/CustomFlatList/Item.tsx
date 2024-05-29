import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export type DataItemType = {
  id: string;
  title: string;
  description: string;
  isLast?: boolean;
  [x: string]: any;
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
    fontSize: 14,
  },

  description: {
    fontSize: 12,
    fontWeight: '500',
  },
});

const Item: React.FC<DataItemType> = props => {
  const {colors} = useTheme();
  const {title, description, isLast} = props;
  let itemStyle = styles.listItem;
  if (isLast) {
    itemStyle = styles.listItemLast;
  }
  return (
    <View style={[itemStyle, {borderColor: colors.border}]}>
      <Text style={[styles.name, {color: colors.text}]}>{title}:</Text>
      <Text style={[styles.description, {color: colors.text}]}>
        {description}
      </Text>
    </View>
  );
};

export default Item;
