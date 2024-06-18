import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  HomeScreen,
  SettingsScreen,
  ProductsStackScreen,
  PersonalizationPage,
} from '../../../features';

import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import messaging from '@react-native-firebase/messaging';
import {useAppState, useDispatch} from '../../../hooks';
import {
  setAppTrackingTransparencyStatus,
  setConfigurationMode,
} from '../../../reducers/actions';
import {Alert, SafeAreaView, Platform, View, Pressable} from 'react-native';
import {DisclaimerView} from '../../../components';
import {useFocusEffect, useTheme} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

type IconType = {
  focused: boolean;
  color: string;
  size: number;
};

export default function ApplicationNavigator() {
  const dispatch = useDispatch();
  const {colors} = useTheme();
  const [showDisclaimer, setShowDisclaimer] = React.useState(false);
  const [appTrackingTransparencyStatus, setAppTTStatus] = React.useState('');
  const {
    config: {isConfigurationModeEnabled},
  } = useAppState();

  const requestAppTrackingPermission = async () => {
    check(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY).then(result => {
      setAppTTStatus(result);
      dispatch(setAppTrackingTransparencyStatus(result));
      if (result === RESULTS.GRANTED) {
        setShowDisclaimer(false);
      }
    });
  };

  const askForAppTrackingPermission = async () => {
    request(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY).then(result => {
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

  React.useEffect(() => {
    if (Platform.OS === 'ios' && appTrackingTransparencyStatus === '') {
      setShowDisclaimer(true);
    }
  }, [Platform, appTrackingTransparencyStatus]);

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

  const onSettingsTap = () => {
    dispatch(setConfigurationMode(!isConfigurationModeEnabled));
  };

  const settingsRightIcon = () => {
    return (
      <View style={{paddingHorizontal: 15}}>
        <Pressable onPress={onSettingsTap}>
          <Icon name="extension-puzzle" color={colors.border} size={24} />
        </Pressable>
      </View>
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
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarIcon: (props: IconType) => getTabBarIcon('settings', props),
              headerRight: settingsRightIcon,
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      )}
    </>
  );
}
