import * as React from 'react';
import {StateContext} from '../providers/StateProvider/StateProvider';

export function useDispatch() {
  const {dispatch} = React.useContext(StateContext);
  if (dispatch === null) {
    throw new Error('useDispatch must be used within a StateProvider');
  }
  return dispatch;
}

export function useAppStore() {
  const {state, dispatch} = React.useContext(StateContext);
  if (state === null || dispatch === null) {
    throw new Error('useAppStore must be used within a StateProvider');
  }
  return [state, dispatch];
}

export function useAppState() {
  const {state} = React.useContext(StateContext);
  if (state === null) {
    throw new Error('useAppState must be used within a StateProvider');
  }
  return state;
}
