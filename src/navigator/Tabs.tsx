import * as React from 'react';

import { Platform, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { TabOneScreen } from '../screens/TabOneScreen';

import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { TopTabNavigator } from './TopTabNavigator';


export const Tabs = () => {

  return Platform.OS === 'ios'
    ? <TabsIOS />
    : <TabsAndroid />
}

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  
  return (
    <BottomTabAndroid.Navigator
    sceneAnimationEnabled={true}
    barStyle={{
      backgroundColor: colores.primary
    }}
    screenOptions={({ route }) => ({
      tabBarIcon:({ color, focused }) => {

       let iconName: string;

       switch(route.name) {
         case 'TabOneScreen':
           iconName = 'bandage-outline'
           break;
         case 'TabTwoScreen':
             iconName = 'basketball-outline'
             break;  

         case 'StackNavigator':
             iconName = 'bookmarks-outline'
           break;      
       }
        return <Icon name={iconName} size={20} color={ color} />
      }
    })}
    >
      <BottomTabAndroid.Screen name="TabOneScreen" options={{ title: 'Tab1'}} component={TabOneScreen} />
      <BottomTabAndroid.Screen name="TabTwoScreen" options={{ title: 'Tab2'}} component={TopTabNavigator} />
      <BottomTabAndroid .Screen name="StackNavigator"  options={{ title: 'Stack'}} component={ StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();

 const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
    sceneContainerStyle={{
      backgroundColor: 'white',
    }}
     tabBarOptions={{
       activeTintColor: colores.primary,
       style:{
         borderTopColor: colores.primary,
         borderTopWidth: 0,
         elevation:0
       },
       labelStyle: {
         fontSize: 15
       }
     }}
     screenOptions={({ route }) => ({
       tabBarIcon:({ color, focused, size}) => {

        let iconName: string;

        switch(route.name) {
          case 'TabOneScreen':
            iconName = 'bandage-outline'
            break;
          case 'TabTwoScreen':
              iconName = 'basketball-outline'
              break;  
 
          case 'StackNavigator':
              iconName = 'bookmarks-outline'
            break;      
        }
        return <Icon name={iconName} size={20} color={ color} />
       }
     })}
    >
      {/* <Tab.Screen name="TabOneScreen" options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text>}} component={TabOneScreen} /> */}
      <BottomTabIOS.Screen name="TabOneScreen" options={{ title: 'Tab1'}} component={TabOneScreen} />
      <BottomTabIOS.Screen name="TabTwoScreen" options={{ title: 'Tab2'}} component={TopTabNavigator} />
      <BottomTabIOS .Screen name="StackNavigator"  options={{ title: 'Stack'}} component={ StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}