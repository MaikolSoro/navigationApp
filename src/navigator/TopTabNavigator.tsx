import React from 'react'
import { Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';


const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const { top:paddingTop } = useSafeAreaInsets();
  return (
    <Tab.Navigator
        style={{ paddingTop}}
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        tabBarOptions= {{
            pressColor: colores.primary,
            showIcon: true,
            indicatorStyle: {
                backgroundColor: colores.primary
            },
            style:{
                borderTopColor: colores.primary,
                shadowColor:'transparent',
                elevation: 0,
            },
        }}
        screenOptions={({ route }) => ({
            tabBarIcon:({ color, focused }) => {
     
             let iconName: string;
     
             switch(route.name) {
               case 'Chat':
                 iconName = 'Ch'
                 break;
               case 'Contacts':
                   iconName = 'Co'
                   break;  
     
               case 'Albums':
                   iconName = 'Al'
                 break;      
             }
              return <Text style={{color}}>{ iconName }</Text>
            }
        })}
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}
