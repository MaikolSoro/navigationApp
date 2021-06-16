import * as React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions, View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
        drawerType= {width >= 768 ? 'permanent' :'front'}
        drawerContent={(props) => <InternalMenu {...props} />}
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
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
                        style={styles.menuButton}
                        onPress={()=> navigation.navigate('StackNavigator')}
                    >
                        <Text style={styles.menuItem}>
                            Navigation
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.menuButton}
                        onPress={()=> navigation.navigate('SettingsScreen')}

                    >
                        <Text style={styles.menuItem}>
                            Settings
                        </Text>
                    </TouchableOpacity>
            </View>    
        </DrawerContentScrollView>
    );
}