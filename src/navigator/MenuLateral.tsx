import * as React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { useWindowDimensions, View, Text, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { SettingsScreen } from '../screens/SettingsScreen';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';

import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const SettingsStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name= "SettingsScreen"
                component={SettingsScreen}
           />
        </Stack.Navigator>
    )
}

export const MenuLateral = () => {

    const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
        drawerType= {width >= 768 ? 'permanent' :'front'}
        drawerContent={(props) => <InternalMenu {...props} />}
    >
      <Drawer.Screen name="Tabs" component={ Tabs } />
      <Drawer.Screen name="SettingsScreen" component={ SettingsStackScreen } />
    </Drawer.Navigator>
  );
}
const InternalMenu = ({navigation}: DrawerContentComponentProps<DrawerContentOptions>) => {
    return (
        <DrawerContentScrollView>
            <View style={styles.avatarContainer}>
                <Image 
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
                    }}
                    style={styles.avatar}
                />
            </View> 
            {/* option the menu */}
            <View style={styles.menuContainer}>
                    <TouchableOpacity 
                        style={{
                            ...styles.menuButton,
                            flexDirection: 'row'
                        }}
                        onPress={()=> navigation.navigate('Tabs')}
                    >
                        <Icon name="compass-outline" size={23} color="black" />
                        <Text style={styles.menuItem}> Navigation</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={{
                            ...styles.menuButton,
                            flexDirection: 'row'
                        }}
                        onPress={()=> navigation.navigate('SettingsScreen')}

                    >
                         <Icon name="settings-outline" size={23} color="black" />
                        <Text style={styles.menuItem}> Settings</Text>
                    </TouchableOpacity>
            </View>    
        </DrawerContentScrollView>
    );
}