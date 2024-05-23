import * as React from 'react';
import {View} from 'react-native';
import ApplicationHero from './components/ApplicationHero/ApplicationHero';
import IdentitiesList from './components/Identities/Identities';

function HomeScreen() {
  return (
    <View style={{flex: 1, flexDirection: 'column', marginTop: 30}}>
      <ApplicationHero />
      <IdentitiesList />
    </View>
  );
}

export default HomeScreen;
