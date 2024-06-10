import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  HomeScreen,
  SettingsScreen,
  LocationScreen,
  ProductsStackScreen,
  PersonalizationPage,
} from '../../../features';

import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import messaging from '@react-native-firebase/messaging';
import {useDispatch} from '../../../hooks';
import {setAppTrackingTransparencyStatus} from '../../../reducers/actions';
import {Alert, SafeAreaView, Platform} from 'react-native';
import {DisclaimerView} from '../../../components';
import {useFocusEffect} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

type IconType = {
  focused: boolean;
  color: string;
  size: number;
};

export default function ApplicationNavigator() {
  const dispatch = useDispatch();
  const [showDisclaimer, setShowDisclaimer] = React.useState(
    Platform.OS === 'ios',
  );
  const [appTrackingTransparencyStatus, setAppTTStatus] = React.useState('');

  const requestAppTrackingPermission = async () => {
    check(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY).then(result => {
      console.log('oon checking ATT status:', result);
      setAppTTStatus(result);
      dispatch(setAppTrackingTransparencyStatus(result));
      if (result === RESULTS.GRANTED) {
        setShowDisclaimer(false);
      }
    });
  };

  const askForAppTrackingPermission = async () => {
    request(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY).then(result => {
      console.log('on requesting ATT status:', result);
      dispatch(setAppTrackingTransparencyStatus(result));
      if (result === RESULTS.GRANTED) {
        setShowDisclaimer(false);
      }
    });
  };

  useFocusEffect(
    React.useCallback(() => {
      if (Platform.OS === 'ios') {
        requestAppTrackingPermission();
      }
    }, []),
  );

  React.useEffect(() => {
    askForAppTrackingPermission();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  const getTabBarIcon = (
    tabName: string,
    props: IconType,
  ): React.ReactElement => {
    switch (tabName) {
      case 'home':
        return (
          <Icon
            name={props.focused ? 'home' : 'home-outline'}
            color={props.color}
            size={props.size}
          />
        );
      case 'products':
        return (
          <Icon
            name={props.focused ? 'cart' : 'cart-outline'}
            color={props.color}
            size={props.size}
          />
        );
      case 'personalisation':
        return (
          <Icon
            name={props.focused ? 'disc' : 'disc-outline'}
            color={props.color}
            size={props.size}
          />
        );
      case 'location':
        return (
          <Icon
            name={props.focused ? 'location' : 'location-outline'}
            color={props.color}
            size={props.size}
          />
        );
      case 'settings':
        return (
          <Icon
            name={props.focused ? 'cog' : 'cog-outline'}
            color={props.color}
            size={props.size}
          />
        );
    }
    return (
      <Icon
        name={props.focused ? 'home' : 'home-outline'}
        color={props.color}
        size={props.size}
      />
    );
  };

  return (
    <>
      {showDisclaimer ? (
        <SafeAreaView>
          <DisclaimerView
            appTrackingTransparencyStatus={appTrackingTransparencyStatus}
            onContinueClick={askForAppTrackingPermission}
          />
        </SafeAreaView>
      ) : (
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: (props: IconType) => getTabBarIcon('home', props),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Products"
            component={ProductsStackScreen}
            options={{
              tabBarIcon: (props: IconType) => getTabBarIcon('products', props),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Personalisation"
            component={PersonalizationPage}
            options={{
              headerShown: false,
              tabBarIcon: (props: IconType) =>
                getTabBarIcon('personalisation', props),
            }}
          />
          <Tab.Screen
            name="Location"
            component={LocationScreen}
            options={{
              tabBarIcon: (props: IconType) => getTabBarIcon('location', props),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarIcon: (props: IconType) => getTabBarIcon('settings', props),
            }}
          />
        </Tab.Navigator>
      )}
    </>
  );
}
