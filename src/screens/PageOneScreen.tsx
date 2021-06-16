import React from 'react'
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {};


export const PageOneScreen = ({ navigation }: Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina1 screen</Text>

            <Button 
                title="Ir página 2"
                onPress={() => navigation.navigate('PageTwoScreen') }
            />
        </View>
    )
}
