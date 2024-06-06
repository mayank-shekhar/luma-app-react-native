import * as React from 'react';
import {useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
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
import {useDispatch} from '../../../hooks';
import {setAppTrackingTransparencyStatus} from '../../../reducers/actions';

const Tab = createBottomTabNavigator();

type IconType = {
  focused: boolean;
  color: string;
  size: number;
};

export default function ApplicationNavigator() {
  const scheme = useColorScheme();
  const dispatch = useDispatch();

  const requestAppTrackingPermission = async () => {
    check(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY).then(result => {
      if (result !== RESULTS.GRANTED) {
        request(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY).then(status => {
          console.log('ATT:', status);
          dispatch(setAppTrackingTransparencyStatus(status));
        });
      }
    });
  };

  React.useEffect(() => {
    requestAppTrackingPermission();
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
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
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
    </NavigationContainer>
  );
}
