import React, {useEffect} from 'react';
import 'react-native-get-random-values';
import {MobileCore} from '@adobe/react-native-aepcore';

import {AppEntryPoint} from './components';
// import {Assurance} from '@adobe/react-native-aepassurance';

function ApplicationWithProviders() {
  useEffect(() => {
    MobileCore.updateConfiguration({'messaging.useSandbox': true});
    // Assurance.startSession(
    //   'lumareactnative://?adb_validation_sessionid=9cde3fc9-23c7-47c8-a9e9-33a86eadc3c3',
    // );
  }, []);

  return <AppEntryPoint />;
}

export default ApplicationWithProviders;
