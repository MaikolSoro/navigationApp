import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateralBasic } from './src/navigator/LateralMenu';
// import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateral } from './src/navigator/MenuLateral';

 const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <MenuLateralBasic /> */}
      <MenuLateral />
    </NavigationContainer>
  )
}

export default App;
