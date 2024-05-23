import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import styles from './FullScreenLoader.styles';

export default function FullScreenLoader() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
}
