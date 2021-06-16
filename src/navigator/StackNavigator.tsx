import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { PageOneScreen } from '../screens/PageOneScreen';
import { PageTwoScreen } from '../screens/PageTwoScreen';
import { PageTreeScreen } from '../screens/PageTreeScreen';
import { PersonScreen } from '../screens/PersonScreen';


export type RootStackParams = {

  PageOneScreen: undefined,
  PageTwoScreen: undefined,
  PageTreeScreen: undefined,
  PersonScreen: {id: number, name: string},
}
const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
       headerStyle: {
         elevation: 0,
         shadowColor: 'transparent'
       },
        cardStyle:{
          backgroundColor:  'white'
        }
      }}
    >
      <Stack.Screen name="PageOneScreen"  options={{ title: "Pagina 1"}} component={PageOneScreen} />
      <Stack.Screen name="PageTwoScreen"  options={{ title: "Pagina 2"}} component={PageTwoScreen} />
      <Stack.Screen name="PageTreeScreen" options={{ title: "Pagina 3"}} component={PageTreeScreen} />
      <Stack.Screen name="PersonScreen" component={PersonScreen} />
    </Stack.Navigator>
  );
}