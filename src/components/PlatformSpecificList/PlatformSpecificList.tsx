import React from 'react';

import {Platform, View, FlatList} from 'react-native';
import PlatformSpecificListStyles from './PlatformSpecificList.styles';

export type PlatformSpecificListProps<T> = {
  items: T[];
  renderItem: (params: {item: T; index: number}) => React.ReactElement;
  keyExtractor?: ((item: T, index: number) => string) | undefined;
};

const PlatformSpecificList = <T extends {}>({
  items,
  renderItem,
  keyExtractor,
}: PlatformSpecificListProps<T>) => {
  const renderListItem = (params: {item: T; index: number}) => {
    return (
      <View style={PlatformSpecificListStyles.listItemRender}>
        {Platform.OS === 'ios' ? (
          <View style={PlatformSpecificListStyles.listItemIOS}>
            {renderItem(params)}
          </View>
        ) : (
          <View style={PlatformSpecificListStyles.listItemAndroid}>
            {renderItem(params)}
          </View>
        )}
      </View>
    );
  };

  return (
    // <SafeAreaView style={PlatformSpecificListStyles.container}>
    // <View style={PlatformSpecificListStyles.listWrapper}>
    <FlatList
      data={items}
      renderItem={renderListItem}
      keyExtractor={keyExtractor}
    />
    // </View>
    // </SafeAreaView>
  );
};

export default PlatformSpecificList;
