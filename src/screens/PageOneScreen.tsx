import React, { useEffect } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { styles, colores } from '../theme/appTheme';

import Icon from 'react-native-vector-icons/Ionicons';

// interface Props extends StackScreenProps<any, any> {};

interface Props extends DrawerScreenProps<any, any> {};


export const PageOneScreen = ({ navigation }: Props) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
               <TouchableOpacity
                style={{
                    marginLeft: 10
                }}
                onPress={() => navigation.toggleDrawer()}
               >
                <Icon name="menu-outline" size={35} color={ colores.primary} />
               </TouchableOpacity>
            )
        });
        
    }, []);
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina1 screen</Text>

            <Button 
                title="Go to page 2"
                onPress={() => navigation.navigate('PageTwoScreen') }
            />

           <Text style={{
               marginVertical: 20,
               fontSize: 20,
           }}>
               Navigate with arguments
            </Text>

            <View style={{ flexDirection: 'row'}}>
                <TouchableOpacity
                    style={{
                        ...styles.buttonBig,
                        backgroundColor: '#5856D6'
                    }}
                    onPress={() => navigation.navigate('PersonScreen', {
                        id: 1,
                        name: 'Maikol'
                    })}
                >
                    <Icon name="body-outline" size={35} color="white" />
                    <Text  style={styles.buttonText}>Maikol</Text>
                </TouchableOpacity>

                <TouchableOpacity
                     style={{
                        ...styles.buttonBig,
                    }}
                    onPress={() => navigation.navigate('PersonScreen', {
                        id: 2,
                        name: 'Andrea'
                    })}
                >
                    <Icon name="woman-outline" size={35} color="white" />
                    <Text style={styles.buttonText}>Carlos</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
