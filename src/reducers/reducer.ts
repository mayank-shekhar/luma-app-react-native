import {AppplicationStateType} from '../providers/StateProvider/StateProvider';
import {ActionTypes} from './actions';

export const InitialAppState: AppplicationStateType = {
  // configLocation: '',
  // configuration: undefined,
  isReady: false,
  home: {
    userProfile: {
      isPaidUser: false,
    },
    identities: {
      ecid: '',
      email: '',
      crmId: '112ca06ed53d3db37e4cea49cc45b71e',
    },
  },
  config: {
    environmentFileId:
      'bf7248f92b53/9c21d9ace637/launch-606018f3d351-development',
    configurationLocation: '',
    appConfig: undefined,
    appTrackingTransparencyStatus: 'unavailable',
    deviceToken: '',
    deviceId: '',
    isConfigurationModeEnabled: false,
    isTestProfileEnabled: false,
  },
};

function appReducer(
  state: AppplicationStateType,
  action: any,
): AppplicationStateType {
  switch (action.type) {
    case ActionTypes.SET_ECID:
      return {
        ...state,
        home: {
          ...state.home,
          identities: {
            ...state.home.identities,
            ecid: action.payload,
          },
        },
      };
    case ActionTypes.SET_EMAIL:
      return {
        ...state,
        home: {
          ...state.home,
          identities: {
            ...state.home.identities,
            email: action.payload,
          },
        },
      };
    case ActionTypes.SET_CRID:
      return {
        ...state,
        home: {
          ...state.home,
          identities: {
            ...state.home.identities,
            crmId: action.payload,
          },
        },
      };
    case ActionTypes.SET_APP_TRACKING_TRANSPARENCY_STATUS:
      return {
        ...state,
        config: {
          ...state.config,
          appTrackingTransparencyStatus: action.payload,
        },
      };
    case ActionTypes.SET_ENVIRONMENT_FILE_ID:
      return {
        ...state,
        config: {
          ...state.config,
          environmentFileId: action.payload,
        },
      };
    case ActionTypes.SET_CONFIF_LOCATION:
      return {
        ...state,
        config: {
          ...state.config,
          configurationLocation: action.payload,
        },
      };
    case ActionTypes.SET_DEVICE_TOKEN:
      return {
        ...state,
        config: {
          ...state.config,
          deviceToken: action.payload,
        },
      };
    case ActionTypes.SET_CONFIGURATION:
      return {
        ...state,
        config: {
          ...state.config,
          appConfig: action.payload,
        },
      };
    case ActionTypes.SET_TEST_PROFILE_ENABLED:
      return {
        ...state,
        config: {
          ...state.config,
          isTestProfileEnabled: action.payload,
        },
      };
    case ActionTypes.SET_CONFIGURATION_MODE:
      return {
        ...state,
        config: {
          ...state.config,
          isConfigurationModeEnabled: action.payload,
        },
      };
    default:
      return state;
  }
}

export default appReducer;
