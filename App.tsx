import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateral } from './src/navigator/LateralMenu';
// import { StackNavigator } from './src/navigator/StackNavigator';

 const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <MenuLateral />
    </NavigationContainer>
  )
}

export default App;
