import React, {useEffect} from 'react';
import 'react-native-get-random-values';
import {MobileCore} from '@adobe/react-native-aepcore';
// import {UserProfile} from '@adobe/react-native-aepuserprofile';
import {ApplicationNavigator} from './navigation/containers';
import {StateProvider} from './providers';
import appReducer, {InitialAppState} from './reducers/reducer';
import {Alert, PermissionsAndroid, Platform} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {useDispatch} from './hooks';
import {setDeviceToken} from './reducers/actions';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {useColorScheme} from 'react-native';
import {Assurance} from '@adobe/react-native-aepassurance';

async function requestUserPermission(): Promise<boolean> {
  try {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log(
        `\n Push notification Authorization status: ${authStatus} \n`,
      );
    }
    return Promise.resolve(enabled);
  } catch (e) {
    // console.error('Failed to request push notification permission:', e);
    return Promise.reject(false);
  }
}

async function registerForPushNotifications(): Promise<string> {
  if (Platform.OS === 'ios') {
    try {
      await messaging().registerDeviceForRemoteMessages();
    } catch (e) {
      console.error('Failed to register for remote messages:', e);
      return Promise.reject(e);
    }
  }
  try {
    const token = await messaging().getToken();
    return Promise.resolve(token);
  } catch (e) {
    console.error('Failed to register for push notifications:', e);
    return Promise.reject(e);
  }
}
function App() {
  const dispatch = useDispatch();
  const configurePushNotifications = async () => {
    try {
      await requestUserPermission();
    } catch (e) {
      console.error('Failed to request push notification permission:', e);
      Alert.alert('Failed to request push notification permission');
    }
    const token = await registerForPushNotifications();
    console.log('\n' + 'Push notification token:', token + '\n');
    MobileCore.setPushIdentifier(token);
    dispatch(setDeviceToken(token));
  };
  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
    }

    configurePushNotifications();
    // console.log('AdobeExperienceSDK: Initializing SDK');
    MobileCore.getLogLevel().then(level =>
      console.log('AdobeExperienceSDK: Log Level = ' + level),
    );
  }, []);

  return <ApplicationNavigator />;
}

const AppDeepLinking = {
  prefixes: ['https://www.lumareactnative.com', 'lumareactnative://'],
  config: {
    screens: {
      Home: 'home',
      Products: 'products',
    },
  },
};

function ApplicationWithProviders() {
  const scheme = useColorScheme();
  useEffect(() => {
    Assurance.startSession(
      'lumareactnative://?adb_validation_sessionid=9cde3fc9-23c7-47c8-a9e9-33a86eadc3c3',
    );
  }, []);
  return (
    <StateProvider reducer={appReducer} initialState={InitialAppState}>
      <NavigationContainer
        linking={AppDeepLinking}
        theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <App />
      </NavigationContainer>
    </StateProvider>
  );
}

export default ApplicationWithProviders;
