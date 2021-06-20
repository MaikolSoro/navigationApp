import React, { useEffect} from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import { View, Text } from 'react-native';
import { styles, colores } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export const TabOneScreen = () => {

    const { top } = useSafeAreaInsets();

    useEffect(() => {
        console.log('Tab1Screen effect');
    }, []);
    
    return (
        <View style={{
                ...styles.globalMargin,
                marginTop: top + 10
        }}
        >
            <Text style={styles.title}>Iconos</Text>

            <Text>
                <Icon iconName="airplane-outline"  />
                <Icon iconName="attach-outline" />
                <Icon iconName="bonfire-outline"  />
                <Icon iconName="calculator-outline"  />
                <Icon iconName="chatbubble-ellipses-outline"  />
                <Icon iconName="images-outline"  />
                <Icon iconName="leaf-outline" />

            </Text>

        </View>
    )
}
