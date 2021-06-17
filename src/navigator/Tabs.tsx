import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabOneScreen } from '../screens/TabOneScreen';
import { TabTwoScreen } from '../screens/TabTwoScreen';
import { TabTreeScreen } from '../screens/TabTreeScreen';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TabOneScreen" component={TabOneScreen} />
      <Tab.Screen name="TabTwoScreen" component={TabTwoScreen} />
      <Tab.Screen name="TabTreeScreen" component={TabTreeScreen} />
    </Tab.Navigator>
  );
}