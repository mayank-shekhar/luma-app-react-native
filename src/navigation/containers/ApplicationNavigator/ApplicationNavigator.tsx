import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {HomeScreen, SettingsScreen, LocationScreen} from '../../../features';

function ProductsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Products!</Text>
    </View>
  );
}

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
  const getHomeHeaderRight = () => {
    return <Button title="User" />;
  };

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
            name={props.focused ? 'person' : 'person-outline'}
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
            name={props.focused ? 'settings' : 'settings-outline'}
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
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerRight: getHomeHeaderRight,
            tabBarIcon: (props: IconType) => getTabBarIcon('home', props),
          }}
        />
        <Tab.Screen
          name="Products"
          component={ProductsScreen}
          options={{
            tabBarIcon: (props: IconType) => getTabBarIcon('products', props),
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
