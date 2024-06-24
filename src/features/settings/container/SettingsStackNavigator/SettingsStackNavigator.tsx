import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingsScreen from '../../Settings';
import {Platform} from 'react-native';

const SettingsStack = createNativeStackNavigator();

export default function SettingsStackNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings "
        component={SettingsScreen}
        options={{
          headerShown: true,
          headerLargeTitle: true,
          headerTransparent: Platform.OS === 'ios' ? true : false,
        }}
      />
    </SettingsStack.Navigator>
  );
}
