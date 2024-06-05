import * as React from 'react';
import {Text, View, useColorScheme} from 'react-native';
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
} from '../../../features';

function PersonalisationScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Personalisation!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

type IconType = {
  focused: boolean;
  color: string;
  size: number;
};

export default function ApplicationNavigator() {
  const scheme = useColorScheme();

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
            headerTransparent: true,
            headerTitleStyle: {display: 'none'},
          }}
        />
        <Tab.Screen
          name="Products list"
          component={ProductsStackScreen}
          options={{
            tabBarIcon: (props: IconType) => getTabBarIcon('products', props),
            headerTransparent: true,
            headerTitleStyle: {display: 'none'},
          }}
        />
        <Tab.Screen
          name="Personalisation"
          component={PersonalisationScreen}
          options={{
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
