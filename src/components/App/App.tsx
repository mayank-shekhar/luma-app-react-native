import React, {useEffect} from 'react';
import {MobileCore} from '@adobe/react-native-aepcore';
import {ApplicationNavigator} from '../../navigation/containers';
import {Alert, PermissionsAndroid, Platform, StatusBar} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {useDispatch} from '../../hooks';
import {setDeviceToken} from '../../reducers/actions';
import {useTheme} from '@react-navigation/native';
import {useColorScheme} from 'react-native';

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
    return Promise.reject(false);
  }
}

async function registerForPushNotifications(): Promise<string> {
  if (Platform.OS === 'ios') {
    try {
      await messaging().registerDeviceForRemoteMessages();
    } catch (e) {
      return Promise.reject(e);
    }
  }
  try {
    let token = '';
    if (Platform.OS === 'ios') {
      token = (await messaging().getAPNSToken()) as string;
    } else {
      token = await messaging().getToken();
    }
    return Promise.resolve(token);
  } catch (e) {
    return Promise.reject(e);
  }
}

function App() {
  const dispatch = useDispatch();

  const configurePushNotifications = async () => {
    try {
      await requestUserPermission();
    } catch (e) {
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
  }, []);

  const {colors} = useTheme();
  const scheme = useColorScheme();

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={colors.background}
        barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'}
        showHideTransition={'fade'}
        hidden={false}
      />
      <ApplicationNavigator />
    </>
  );
}

export default App;
