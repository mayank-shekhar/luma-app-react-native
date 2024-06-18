import * as React from 'react';
import {AppState, SafeAreaView, Text} from 'react-native';
import {
  ActionType,
  setConfiguration,
  setDeviceToken,
} from '../../reducers/actions';
import {InitialAppState} from '../../reducers/reducer';
import {MobileSDK} from '../../utils/MobileSDK';
import {loadConfiguration} from '../../api/configuration';
import {Configuration} from '../../models/Configuration';
import DeviceInfo from 'react-native-device-info';
import {PermissionStatus} from 'react-native-permissions';
import configurationData from '../../models/data/configuration.json';
import {saveAppConfig} from '../../reducers/storage';

export type AppplicationStateType = {
  isReady: boolean;
  appConfig: Configuration | null;

  // home screen state
  home: {
    userProfile: {
      isPaidUser: boolean;
    };
    identities: {
      ecid: string;
      email: string;
      crmId: string;
    };
  };

  config: {
    isTestProfileEnabled?: boolean;
    isConfigurationModeEnabled?: boolean;
    configurationLocation?: string;
    isOptedOut?: boolean;
    isPushEnabled?: boolean;
    appTrackingTransparencyStatus?: PermissionStatus;
    appConfig?: Configuration;
    environmentFileId: string;
    deviceToken: string;
    deviceId: string;
  };

  // app state
  appState?: AppState;
};

export type StateContextType = {
  state: AppplicationStateType;
  dispatch: React.Dispatch<ActionType>;
  mobileSDK: MobileSDK;
};

export const StateContext = React.createContext<StateContextType>({
  state: InitialAppState,
  dispatch: null as any,
  mobileSDK: null as any,
});

export type StateProviderProps = {
  reducer: (
    state: AppplicationStateType,
    action: ActionType,
  ) => AppplicationStateType;
  initialState: AppplicationStateType;
  children: any;
};

function StateProvider({reducer, initialState, children}: StateProviderProps) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [config, setConfig] = React.useState<Configuration | null>(null);

  React.useEffect(() => {
    // Load configuration
    loadConfiguration()
      .then(configuration => {
        saveAppConfig(configurationData);
        setConfig(configuration);
      })
      .catch(_ => {
        console.log(
          'Error loading configuration in StateProvider',
          configurationData,
        );
        saveAppConfig(configurationData);
        setConfig(configurationData);
      });

    DeviceInfo.getDeviceToken()
      .then(deviceToken => {
        // iOS: "a2Jqsd0kanz..."
        if (deviceToken) {
          console.info('Device token:', deviceToken);
          dispatch(setDeviceToken(deviceToken));
        }
      })
      .catch(err => {
        console.error('Error getting device token:', err);
        // dispatch(setDeviceToken('Not physical device'));
      });
  }, []);

  // React.useEffect(() => {
  //   if (config) {
  //     dispatch(setConfiguration(config));
  //   }
  // }, [config]);

  const MobileSDKInstance = new MobileSDK(
    state,
    dispatch,
    config as Configuration,
  );

  return config ? (
    <StateContext.Provider
      value={{
        state,
        dispatch,
        mobileSDK: MobileSDKInstance,
      }}>
      {children}
    </StateContext.Provider>
  ) : (
    <SafeAreaView>
      <Text>Config not provided</Text>
    </SafeAreaView>
  );
}

export default StateProvider;
