import React, { useEffect } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { styles } from '../theme/appTheme';

// interface Props extends StackScreenProps<any, any> {};

interface Props extends DrawerScreenProps<any, any> {};


export const PageOneScreen = ({ navigation }: Props) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Button 
                    title="Menu"
                    onPress={() => navigation.toggleDrawer()}
                />
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
                    <Text  style={styles.buttonText}>Maikol</Text>
                </TouchableOpacity>

                <TouchableOpacity
                     style={{
                        ...styles.buttonBig,
                    }}
                    onPress={() => navigation.navigate('PersonScreen', {
                        id: 2,
                        name: 'Carlos'
                    })}
                >
                    <Text style={styles.buttonText}>Carlos</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
