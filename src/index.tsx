import React, {useEffect} from 'react';

import {
  MobileCore,
  LogLevel,
  Identity,
  PrivacyStatus,
} from '@adobe/react-native-aepcore';
import {ApplicationNavigator} from './navigation/containers';
import {StateProvider} from './providers';
import appReducer, {InitialAppState} from './reducers/reducer';
import {useDispatch} from './hooks';
import {ActionTypes} from './reducers/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('AdobeExperienceSDK: Initializing SDK');
    MobileCore.getLogLevel().then(level =>
      console.log('AdobeExperienceSDK: Log Level = ' + level),
    );

    MobileCore.setPrivacyStatus(PrivacyStatus.OPT_IN);

    // MobileCore.getSdkIdentities()
    //   .then(identities =>
    //     console.log('AdobeExperienceSDK: Identities = ' + identities),
    //   )
    //   .catch(error => console.log('AdobeExperienceSDK: Error = ' + error));

    MobileCore.getPrivacyStatus()
      .then(status =>
        console.log('AdobeExperienceSDK: Privacy Status = ' + status),
      )
      .catch(error => console.log('AdobeExperienceSDK: Error = ' + error));

    MobileCore.setLogLevel(LogLevel.VERBOSE);

    // Identites

    Identity.getExperienceCloudId()
      .then(ecid => {
        console.log('AdobeExperienceSDK: ECID = ' + ecid);
        dispatch({type: ActionTypes.SET_ECID, payload: ecid});
      })
      .catch(error =>
        console.log(
          'AdobeExperienceSDK: getExperienceCloudId Error = ' + error,
        ),
      );
  }, []);

  return <ApplicationNavigator />;
}

function ApplicationWithProviders() {
  return (
    <StateProvider reducer={appReducer} initialState={InitialAppState}>
      <App />
    </StateProvider>
  );
}

export default ApplicationWithProviders;
