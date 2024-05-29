import {AppplicationStateType} from '../providers/StateProvider/StateProvider';
import {ActionTypes} from './actions';

export const InitialAppState: AppplicationStateType = {
  isReady: false,
  home: {
    identities: {
      ecid: '',
      email: 'testuser@gmail.com',
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
    default:
      return state;
  }
}

export default appReducer;
