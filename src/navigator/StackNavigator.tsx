import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { PageOneScreen } from '../screens/PageOneScreen';
import { PageTwoScreen } from '../screens/PageTwoScreen';
import { PageTreeScreen } from '../screens/PageTreeScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PageOneScreen" component={PageOneScreen} />
      <Stack.Screen name="PageTwoScreen" component={PageTwoScreen} />
      <Stack.Screen name="PageTreeScreen" component={PageTreeScreen} />
    </Stack.Navigator>
  );
}