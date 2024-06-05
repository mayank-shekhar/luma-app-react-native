import React, {useEffect} from 'react';
import 'react-native-get-random-values';
import {MobileCore} from '@adobe/react-native-aepcore';
// import {UserProfile} from '@adobe/react-native-aepuserprofile';
import {ApplicationNavigator} from './navigation/containers';
import {StateProvider} from './providers';
import appReducer, {InitialAppState} from './reducers/reducer';
// import {useDispatch} from './hooks';
// import {ActionTypes} from './reducers/actions';

function App() {
  // const dispatch = useDispatch();
  useEffect(() => {
    console.log('AdobeExperienceSDK: Initializing SDK');
    MobileCore.getLogLevel().then(level =>
      console.log('AdobeExperienceSDK: Log Level = ' + level),
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
