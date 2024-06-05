import * as React from 'react';
import {View, Text} from 'react-native';
import TargetOffersView from '../TargetOffersView/TargetOffersView';
import PersonalizationScreenStyles from './PersonalizationScreen.styles';
import EdgeOffersView from '../EdgeOffersView/EdgeOffersView';

function PersonalizationScreen() {
  return (
    <View style={PersonalizationScreenStyles.container}>
      <Text>Root PersonalizationScreen</Text>
      <EdgeOffersView />
      <TargetOffersView />
    </View>
  );
}

export default PersonalizationScreen;
