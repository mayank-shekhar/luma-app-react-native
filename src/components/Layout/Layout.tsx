import {View} from 'react-native';
import React from 'react';
import styles from './styles';

const layout = ({children}: {children: React.ReactElement}) => {
  return <View style={styles.wrapper}>{children}</View>;
};

export default layout;
