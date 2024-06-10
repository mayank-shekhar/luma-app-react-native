import {AppplicationStateType} from '../providers/StateProvider/StateProvider';
import {ActionTypes} from './actions';

export const InitialAppState: AppplicationStateType = {
  environmentFileId:
    'bf7248f92b53/e1048832e7d6/launch-41a6b2bb04da-development',
  configLocation: '',
  configuration: undefined,
  isReady: false,
  appTrackingTransparencyStatus: 'unavailable',
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
        appTrackingTransparencyStatus: action.payload,
      };
    case ActionTypes.SET_ENVIRONMENT_FILE_ID:
      return {
        ...state,
        environmentFileId: action.payload,
      };
    case ActionTypes.SET_CONFIF_LOCATION:
      return {
        ...state,
        configLocation: action.payload,
      };
    case ActionTypes.SET_DEVICE_TOKEN:
      return {
        ...state,
        deviceToken: action.payload,
      };
    case ActionTypes.SET_CONFIGURATION:
      return {
        ...state,
        configuration: action.payload,
      };
    default:
      return state;
  }
}

export default appReducer;
