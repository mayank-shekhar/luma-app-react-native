export type ActionPayloadType = string | boolean | number | object | null;

export type ActionType = {
  type: string;
  payload?: ActionPayloadType;
};

export const ActionTypes = {
  SET_READY: 'SET_READY',
  SET_ECID: 'SET_ECID',
};

export function setEcid(ecid: string): ActionType {
  return {
    type: ActionTypes.SET_ECID,
    payload: ecid,
  };
}
