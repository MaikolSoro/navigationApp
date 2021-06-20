import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { MenuLateralBasic } from './src/navigator/LateralMenu';
// import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateral } from './src/navigator/MenuLateral';
import { AuthProvider } from './src/context/AuthContext';
// import { Tabs } from './src/navigator/Tabs';

 const App = () => {
  return (
    <NavigationContainer>
      <AppState>
      {/* <StackNavigator /> */}
      {/* <MenuLateralBasic /> */}
      <MenuLateral />
      {/* <Tabs /> */}
      </AppState>
     
    </NavigationContainer>
  )
}

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
       { children }
    </AuthProvider>
  )
}
export default App;
