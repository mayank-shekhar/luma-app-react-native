import {AppplicationStateType} from '../providers/StateProvider/StateProvider';
import {ActionTypes} from './actions';

export const InitialAppState: AppplicationStateType = {
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
    default:
      return state;
  }
}

export default appReducer;
