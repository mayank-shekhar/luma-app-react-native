import * as React from 'react';
import {AppState} from 'react-native';
import {ActionType} from '../../reducers/actions';
import {InitialAppState} from '../../reducers/reducer';
import {MobileSDK} from '../../utils/MobileSDK';
import {loadConfiguration} from '../../api/configuration';
import {Configuration} from '../../models/Configuration';

export type AppplicationStateType = {
  isReady: boolean;
  isOptedOut?: boolean;
  isPushEnabled?: boolean;
  appTrackingTransparencyStatus?: string;

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
  const [config, setConfig] = React.useState<Configuration | null>(null);
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const fetchConfiguration = async () => {
    // Fetch configuration
    return await loadConfiguration();
  };

  React.useEffect(() => {
    // Load configuration
    fetchConfiguration().then(configuration => {
      setConfig(configuration);
    });
  }, []);
  const MobileSDKInstance = React.useMemo(() => {
    return new MobileSDK(state, dispatch, config as Configuration);
  }, [state, dispatch, config]);
  return config ? (
    <StateContext.Provider
      value={{
        state,
        dispatch,
        mobileSDK: MobileSDKInstance,
      }}>
      {children}
    </StateContext.Provider>
  ) : null;
}

export default StateProvider;
