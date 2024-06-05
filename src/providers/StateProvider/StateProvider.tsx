import * as React from 'react';
import {AppState} from 'react-native';
import {ActionType} from '../../reducers/actions';
import {InitialAppState} from '../../reducers/reducer';
import {MobileSDK} from '../../utils/MobileSDK';

export type AppplicationStateType = {
  isReady: boolean;
  isOptedOut?: boolean;
  isPushEnabled?: boolean;

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
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const MobileSDKInstance = new MobileSDK(state, dispatch);
  return (
    <StateContext.Provider
      value={{
        state,
        dispatch,
        mobileSDK: MobileSDKInstance,
      }}>
      {children}
    </StateContext.Provider>
  );
}

export default StateProvider;
