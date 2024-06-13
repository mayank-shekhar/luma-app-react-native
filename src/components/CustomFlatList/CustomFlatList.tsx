import * as React from 'react';

import {FlatList, SafeAreaView, ListRenderItemInfo} from 'react-native';
import Item, {DataItemType} from './Item';
import styles from './CustomFlatList.styles';
import {useTheme} from '@react-navigation/native';

type CustomFlatListProps = {
  data: DataItemType[];
  renderItem?: (renderItemProps: ListRenderItemInfo<DataItemType>) => any;
  keyExtractor?: (item: DataItemType) => string;
};

function CustomFlatList(props: CustomFlatListProps) {
  const colors = useTheme().colors;
  const {data, renderItem, keyExtractor} = props;

  const renderListItem = (params: ListRenderItemInfo<DataItemType>) => {
    if (renderItem) {
      return renderItem(params);
    }
    return <Item {...params.item} isLast={params.index === data.length - 1} />;
  };

  const getKeyExtractor = keyExtractor || (item => item.id);
  return (
    <SafeAreaView
      style={[styles.listContainer, {backgroundColor: colors.card}]}>
      <FlatList
        data={data}
        renderItem={renderListItem}
        keyExtractor={getKeyExtractor}
      />
    </SafeAreaView>
  );
}

export default CustomFlatList;
