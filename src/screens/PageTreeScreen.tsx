import React from 'react'
import { View, Text, Button } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{};

export const PageTreeScreen = ({ navigation}: Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text>Pagina3 screen</Text>

            <Button
                title="Regresar"
                onPress={() => navigation.pop()}
            />

            <Button
                title="Ir al Home"
                onPress={() => navigation.popToTop()}
            />
        </View>
    )
}
