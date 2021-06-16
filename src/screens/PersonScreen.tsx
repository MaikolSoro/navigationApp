import React,{ useEffect } from 'react'
import { View, Text } from 'react-native'
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';


interface Props extends StackScreenProps<RootStackParams,'PersonScreen'>{};


export const PersonScreen = ({ route, navigation}: Props) => {

    const params = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: params.name
        })
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={ styles.title }>

                {
                    JSON.stringify(params, null, 3)
                }
            </Text>
        </View>
    )
}
