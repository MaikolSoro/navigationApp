import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabOneScreen } from '../screens/TabOneScreen';
import { TabTwoScreen } from '../screens/TabTwoScreen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
    sceneContainerStyle={{
      backgroundColor: 'white',
    }}
     tabBarOptions={{
       activeTintColor: colores.primary,
       style:{
         borderTopColor: colores.primary,
         borderTopWidth: 0,
         elevation:0
       }
     }}
    >
      <Tab.Screen name="TabOneScreen" options={{ title: 'Tab1'}} component={TabOneScreen} />
      <Tab.Screen name="TabTwoScreen" options={{ title: 'Tab1'}} component={TabTwoScreen} />
      <Tab.Screen name="StackNavigator"  options={{ title: 'Stack'}} component={ StackNavigator} />
    </Tab.Navigator>
  );
}