import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EdgePersonalizationView} from '..';
import {PersonalizationDetailsModal} from '../../components';

const PersonalizationNavigatorStack = createNativeStackNavigator();

function PersonalizationNavigator() {
  return (
    <PersonalizationNavigatorStack.Navigator>
      <PersonalizationNavigatorStack.Screen
        name="Personalization"
        component={EdgePersonalizationView}
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
