export type ActionPayloadType = string | boolean | number | object | null;

export type ActionType = {
  type: string;
  payload?: ActionPayloadType;
};

export const ActionTypes = {
  SET_READY: 'SET_READY',
  SET_ECID: 'SET_ECID',
  SET_EMAIL: 'SET_EMAIL',
  SET_CRID: 'SET_CRID',
  SET_APP_TRACKING_TRANSPARENCY_STATUS: 'SET_APP_TRACKING_TRANSPARENCY_STATUS',
};

export function setEcid(ecid: string): ActionType {
  console.log('Action: setEcid: ==== :', ecid);
  return {
    type: ActionTypes.SET_ECID,
    payload: ecid,
  };
}

export function setEmail(email: string): ActionType {
  return {
    type: ActionTypes.SET_EMAIL,
    payload: email,
  };
}

export function setCrid(crid: string): ActionType {
  return {
    type: ActionTypes.SET_CRID,
    payload: crid,
  };
}

export function setAppTrackingTransparencyStatus(status: string): ActionType {
  return {
    type: ActionTypes.SET_APP_TRACKING_TRANSPARENCY_STATUS,
    payload: status,
  };
}