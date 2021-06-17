import React, { useEffect } from 'react'
import { View, Text } from 'react-native';

export const TabTwoScreen = () => {

    useEffect(() => {
        console.log('Tab1Screen effect');
    }, []);
    return (
        <View>
            <Text>TabTwoScreen</Text>
        </View>
    )
}
