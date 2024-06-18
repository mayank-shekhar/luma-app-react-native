import React, {useEffect} from 'react';
import 'react-native-get-random-values';
import {MobileCore} from '@adobe/react-native-aepcore';
import {StateProvider} from './providers';
import appReducer, {InitialAppState} from './reducers/reducer';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {useColorScheme} from 'react-native';
import {App} from './components';
// import {Assurance} from '@adobe/react-native-aepassurance';

const AppDeepLinking = {
  prefixes: ['https://www.lumareactnative.com', 'lumareactnative://'],
  config: {
    screens: {
      Home: 'home',
      Products: 'products',
    },
  },
};

function ApplicationWithProviders() {
  const scheme = useColorScheme();
  useEffect(() => {
    MobileCore.updateConfiguration({'messaging.useSandbox': true});
    // Assurance.startSession(
    //   'lumareactnative://?adb_validation_sessionid=9cde3fc9-23c7-47c8-a9e9-33a86eadc3c3',
    // );
  }, []);

  return (
    <StateProvider reducer={appReducer} initialState={InitialAppState}>
      <NavigationContainer
        linking={AppDeepLinking}
        theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <App />
      </NavigationContainer>
    </StateProvider>
  );
}

export default ApplicationWithProviders;
