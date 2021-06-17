import React, { useEffect} from 'react'
import { View, Text } from 'react-native';

export const TabOneScreen = () => {

    useEffect(() => {
        console.log('Tab1Screen effect');
    }, []);
    
    return (
        <View>
            <Text>TabOneScreen</Text>
        </View>
    )
}
