import * as React from 'react';
import {View, Text} from 'react-native';
import ApplicationHero from './components/ApplicationHero/ApplicationHero';

function HomeScreen() {
  return (
    <View style={{flex: 1}}>
      <ApplicationHero />
    </View>
  );
}

export default HomeScreen;
