import React, {useEffect, useCallback} from 'react';
import {getAppConfiguration} from '../../api/configuration';
import {
  getUserDefinedConfigurationPath,
  saveAppConfig,
} from '../../reducers/storage';
import {Configuration} from '../../models/Configuration';
import {SafeAreaView, Text, useColorScheme} from 'react-native';
import {StateProvider} from '../../providers';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import appReducer, {InitialAppState} from '../../reducers/reducer';
import App from '../App/App';
import defaultConfig from '../../models/data/configuration.json';

const AppDeepLinking = {
  prefixes: ['https://www.lumareactnative.com', 'lumareactnative://'],
  config: {
    screens: {
      Home: 'home',
      Products: 'products',
    },
  },
};

/**
 * This component acts as a universal provider for the application
 */
export default function EntryPoint() {
  const scheme = useColorScheme();
  const [config, setConfig] = React.useState<Configuration | undefined>(
    undefined,
  );
  const [configPath, setConfigPath] = React.useState<string | null>(null);
  const [isReady, setIsReady] = React.useState<boolean>(false);

  useEffect(() => {
    if (config && configPath !== null) {
      setIsReady(true);
    }
  }, [config, configPath]);

  useEffect(() => {
    getAppConfiguration()
      .then(configuration => {
        saveAppConfig(configuration);
        setConfig(configuration);
      })
      .catch(_ => {
        saveAppConfig(defaultConfig);
        setConfig(defaultConfig);
      });

    // set config path in reducer
    getUserDefinedConfigurationPath()
      .then(path => {
        console.log('configuration path:', path);
        setConfigPath(path);
      })
      .catch(_ => {
        setConfigPath('');
      });
  }, []);

  const getAppComponent = useCallback(() => {
    return (
      <StateProvider
        reducer={appReducer}
        initialState={{
          ...InitialAppState,
          appConfig: config,

          config: {
            ...InitialAppState.config,
            configurationLocation: configPath || '',
          },
        }}>
        <NavigationContainer
          linking={AppDeepLinking}
          theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
          <App />
        </NavigationContainer>
      </StateProvider>
    );
  }, [config]);

  return isReady ? (
    getAppComponent()
  ) : (
    <SafeAreaView>
      <Text>Config not provided</Text>
    </SafeAreaView>
  );
}
