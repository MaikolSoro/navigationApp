import React, { useEffect } from 'react'
import { View, Text } from 'react-native';

export const TabTreeScreen = () => {
    
    useEffect(() => {
        console.log('Tab1Screen effect');
    }, []);

    return (
        <View>
            <Text>TabTreeScreen</Text>
        </View>
    )
}
