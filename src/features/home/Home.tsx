import * as React from 'react';
import {View, Text} from 'react-native';
import ApplicationHero from './components/ApplicationHero/ApplicationHero';
import IdentitiesList from './components/Identities/Identities';

function HomeScreen() {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <ApplicationHero />
      <IdentitiesList />
    </View>
  );
}

export default HomeScreen;
