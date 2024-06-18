import React, {useEffect} from 'react';
import {MobileCore} from '@adobe/react-native-aepcore';
import {ApplicationNavigator} from '../../navigation/containers';
import {Alert, PermissionsAndroid, Platform, StatusBar} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {useDispatch} from '../../hooks';
import {setDeviceToken} from '../../reducers/actions';
import {useTheme} from '@react-navigation/native';
import {useColorScheme} from 'react-native';
import {getUserDefinedConfigurationPath} from '../../reducers/storage';
import {loadConfiguration} from '../../api/configuration';

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

  // const setConfiguration = async () => {
  //   const defaultConfig = await loadConfiguration();
  //   try {
  //     const userConfigPath = await getUserDefinedConfigurationPath();
  //     let appConfig = defaultConfig;
  //     if (userConfigPath) {
  //       console.log('User Config Path is Provided:', userConfigPath);
  //       appConfig = await loadConfiguration(userConfigPath);
  //     } else {
  //       console.log('User Config Path is not provided\n Using Default Config');
  //     }
  //     return Promise.resolve(appConfig || defaultConfig);
  //   } catch (e) {
  //     console.error('Failed to set configuration:', e);
  //     Alert.alert(
  //       'Failed to set custom configuration',
  //       'Using default configuration',
  //     );
  //     return Promise.resolve(defaultConfig);
  //   }
  // };

  useEffect(() => {
    // configuration related changes

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
