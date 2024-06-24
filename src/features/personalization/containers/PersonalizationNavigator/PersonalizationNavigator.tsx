import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EdgePersonalizationView} from '..';
import {PersonalizationDetailsModal} from '../../components';
import {Platform} from 'react-native';

const PersonalizationNavigatorStack = createNativeStackNavigator();

function PersonalizationNavigator() {
  return (
    <PersonalizationNavigatorStack.Navigator>
      <PersonalizationNavigatorStack.Screen
        name="Personalization"
        component={EdgePersonalizationView}
        options={{
          headerShown: true,
          headerLargeTitle: true,
          headerTransparent: Platform.OS === 'ios' ? true : false,
        }}
      />
      <PersonalizationNavigatorStack.Group
        screenOptions={{presentation: 'modal'}}>
        <PersonalizationNavigatorStack.Screen
          name="PersonalizationDetailsModal"
          component={PersonalizationDetailsModal}
        />
      </PersonalizationNavigatorStack.Group>
    </PersonalizationNavigatorStack.Navigator>
  );
}

export default PersonalizationNavigator;
